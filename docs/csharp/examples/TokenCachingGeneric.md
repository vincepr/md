# Token Caching ideas
### TokenCachingGeneric - multiple key-token-pairs to cache
- some ideas about token caching since IMemoryCache sucks

```csharp
using System.Collections.Concurrent;
using System.Net;
using Microsoft.Extensions.DependencyInjection;

namespace TestProject1;

public class MyToken : IToken
{
    public string AccessToken { get; init; }
    public DateTimeOffset ExpiresAt { get; init; }
    public bool IsExpired() => DateTimeOffset.UtcNow >= ExpiresAt.AddSeconds(10);
}

public class MyTokenClient : ITokenClient<MyToken, string>
{
    public Task<MyToken> GetTokenAsync(string key, CancellationToken cancellationToken = default) => Task.FromResult(new MyToken
    {
        AccessToken = "hello",
        ExpiresAt = DateTimeOffset.UtcNow.AddHours(2),
    });
}

public static class Exteionsion
{
    public static void AddTokenStore(IServiceCollection services)
    {
        services.AddSingleton<ITokenClient<MyToken, string>, MyTokenClient>();
        services.AddSingleton<ITokenStore<MyToken, string>, TokenCache<MyToken, string>>();
    }
}

public class MyDelegatingHandler : DelegatingHandler
{
    private readonly ITokenStore<MyToken, string> _tokenStore;
    
    public MyDelegatingHandler(ITokenStore<MyToken, string> tokenStore)
    {
        _tokenStore = tokenStore;
    }
    
    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        request.Headers.TryGetValues("SellerId", out var headers);
        var sellerId = headers!.Single();
        request.Headers.Add("Bearer", (await _tokenStore.GetTokenAsync(sellerId, cancellationToken)).AccessToken);
        
        var response =  await base.SendAsync(request, cancellationToken);
        if (response.StatusCode == HttpStatusCode.Unauthorized || response.StatusCode == HttpStatusCode.Forbidden)
        {
            // here we can do retry handling / if token gets bad before ExpiresAt then we MUST invalidate here aswell:
            await _tokenStore.ForceTokenRefreshAsync(sellerId, cancellationToken);
        }

        return response;
    }
}

// interfaces
public interface ITokenStore<TToken, TKey>
{
    Task<TToken> GetTokenAsync(TKey key, CancellationToken cancellationToken = default);
    Task<TToken> ForceTokenRefreshAsync(TKey key, CancellationToken cancellationToken = default);
    Task<TToken[]> GetCredentialsAsync(IEnumerable<TKey> ids, CancellationToken token = default);
}

public interface IToken
{
    public bool IsExpired();
}

public interface ITokenClient<TToken, TKey>
{
    public Task<TToken> GetTokenAsync(TKey key, CancellationToken cancellationToken = default);
}

// generic does the heavy lifting
// we are able to ensure we only fetch every 'token' once. For each id, Ex different accounts.
//
public class TokenCache<TToken, TKey> : ITokenStore<TToken, TKey> where TKey : notnull where TToken : class, IToken
{
    private record CacheEntry
    {
        public required SemaphoreSlim Lock { get; init; }
        public required TToken? Entry { get; set; }
    }
    private readonly ConcurrentDictionary<TKey, CacheEntry> _cache = new();
    // to avoid any race condition when creating new cache-entries we lock for it. We could also seed our ConcurrentDictionary instead.
    private readonly SemaphoreSlim _cacheCreationLock = new (1,1);
    private readonly ITokenClient<TToken, TKey> _tokenClient;

    public TokenCache(ITokenClient<TToken, TKey> tokenClient)
    {
        _tokenClient = tokenClient;
    }

    public async Task<TToken> GetTokenAsync(TKey key, CancellationToken cancellationToken = default)
    {
        if (!_cache.TryGetValue(key, out var cachedElement))
        {
            await _cacheCreationLock.WaitAsync(cancellationToken);
            try
            {
                cachedElement = _cache.GetOrAdd(key, new CacheEntry
                {
                    Lock = new SemaphoreSlim(1, 1),
                    Entry = null
                });
            }
            finally
            {
                _cacheCreationLock.Release();
            }
        }
        
        if (cachedElement.Entry is not null && !cachedElement.Entry.IsExpired())
        {
            return cachedElement.Entry;
        }

        await cachedElement.Lock.WaitAsync(cancellationToken);
        try
        {
            // check if while we were locked someone else initialized the token:
            if (cachedElement.Entry is not null && !cachedElement.Entry.IsExpired())
            {
                return cachedElement.Entry;
            }
            
            // initialize token for the first time:
            cachedElement.Entry = await _tokenClient.GetTokenAsync(key, cancellationToken);
            return cachedElement.Entry;
        }
        finally
        {
            cachedElement.Lock.Release();
        }
    }
    public async Task<TToken> ForceTokenRefreshAsync(TKey key, CancellationToken cancellationToken)
    {
        var cachedElement = await CachedElement(key, cancellationToken);
        
        await cachedElement.Lock.WaitAsync(cancellationToken);
        try
        {
            cachedElement.Entry = await _tokenClient.GetTokenAsync(key, cancellationToken);
            return cachedElement.Entry;
        }
        finally
        {
            cachedElement.Lock.Release();
        }
    }

    // we create empty Dictionary entry if if Cached-Element does not already exist: 
    private async Task<CacheEntry> CachedElement(TKey key, CancellationToken cancellationToken)
    {
        if (_cache.TryGetValue(key, out var cachedElement))
        {
            return cachedElement;
        }
        
        await _cacheCreationLock.WaitAsync(cancellationToken);
        try
        {
            cachedElement = _cache.GetOrAdd(key, new CacheEntry
            {
                Lock = new SemaphoreSlim(1, 1),
                Entry = default
            });
            return cachedElement;
        }
        finally
        {
            _cacheCreationLock.Release();
        }
    }

    public async Task<TToken[]> GetCredentialsAsync(IEnumerable<TKey> ids, CancellationToken token = default)
    {
        var tasks = ids.Select(id => GetTokenAsync(id, token));
        return await Task.WhenAll(tasks);
    }
}
```

### Token Caching with refresh Token
```csharp
// interfaces
public interface ITokenCache
{
    Task<MyToken> GetTokenAsync(string key, CancellationToken cancellationToken = default);
    Task<MyToken> ForceTokenRefreshAsync(string key, CancellationToken cancellationToken = default);
    Task<MyToken[]> GetMultTokensAsync(IEnumerable<string> ids, CancellationToken token = default);
}

public interface IToken
{
    public bool IsExpired();
}

public class MyToken : IToken
{
    public required string AccessToken { get; init; }
    public required DateTimeOffset ExpiresAt { get; init; }
    public bool IsExpired() => DateTimeOffset.UtcNow >= ExpiresAt.AddSeconds(10);
}


public interface IRefreshTokenProvider
{
    public Task<RefreshToken> GetTokenAsync(string key, CancellationToken cancellationToken = default);
}

public record RefreshToken : IToken
{
    public required string TokenString { get; init; }
    public required DateTimeOffset ExpiresAt { get; init; }
    public bool IsExpired() => DateTimeOffset.UtcNow >= ExpiresAt.AddSeconds(10);
}

public interface ITokenClient<TToken, TKey>
{
    public Task<TToken> GetTokenAsync(TKey key, CancellationToken cancellationToken = default);
}

public class TokenCache : ITokenCache
{
    // to avoid any race condition when creating new cache-entries we lock for it. We could also seed our ConcurrentDictionary instead.
    private readonly SemaphoreSlim _cacheCreationLock = new (1,1);
    private readonly ConcurrentDictionary<string, (SemaphoreSlim IndividualLock, MyToken? Token)> _cache = new(); 
    private readonly IRefreshTokenProvider _refreshProvider;
    private readonly ITokenClient<MyToken, RefreshToken> _tokenClient;

    public TokenCache(ITokenClient<MyToken, RefreshToken> tokenClient, IRefreshTokenProvider refreshProvider)
    {
        _tokenClient = tokenClient;
        _refreshProvider = refreshProvider;
        // // alt way of seeding the _cache. Then whole _cacheCreatingLock and FindAccountOrCreate() can be removed with _cache[key].
        // _cache = new(
        //     [
        //         new("normal", (new SemaphoreSlim(1, 1), null)),
        //         new("deluxe", (new SemaphoreSlim(1, 1), null)),
        //     ]);
    }

    /// <summary>
    /// Gets token from cache if exists. Gets new from AuthApi if not found or IsExpired.
    /// </summary>
    public async Task<MyToken> GetTokenAsync(string key, CancellationToken cancellationToken = default)
    {
        var cachedAccount = await FindAccountOrCreate(key, cancellationToken);
        
        if (cachedAccount.Token is not null && !cachedAccount.Token.IsExpired())
        {
            return cachedAccount.Token;
        }

        await cachedAccount.IndividualLock.WaitAsync(cancellationToken);
        try
        {
            // some other process might have already refreshed while we were stuck in lock:
            if (cachedAccount.Token is not null && !cachedAccount.Token.IsExpired())
            {
                return cachedAccount.Token;
            }
            
            // initialize token for the first time or take care of refreshing because it was expired:
            cachedAccount.Token = await FetchAccessToken(key, cancellationToken);
            return cachedAccount.Token;
        }
        finally
        {
            cachedAccount.IndividualLock.Release();
        }
    }

    /// <summary>
    /// Always gets new Token from AuthApi. Writes it to cache and returns Token.
    /// </summary>
    public async Task<MyToken> ForceTokenRefreshAsync(string key, CancellationToken cancellationToken)
    {
        var cachedAccount = await FindAccountOrCreate(key, cancellationToken);
        
        await cachedAccount.IndividualLock.WaitAsync(cancellationToken);
        try
        {
            cachedAccount.Token = await FetchAccessToken(key, cancellationToken);
            return cachedAccount.Token;
        }
        finally
        {
            cachedAccount.IndividualLock.Release();
        }
    }
    
    // all awaiting and token fetching happens in here. Should only happen in a locked state for that IndividualKey:
    private async Task<MyToken> FetchAccessToken(string key, CancellationToken cancellationToken)
    {
        var refreshToken = await _refreshProvider.GetTokenAsync(key, cancellationToken);
        return await _tokenClient.GetTokenAsync(refreshToken, cancellationToken);
    }

    // we create empty Dictionary entry if if Cached-Element does not already exist: 
    private async Task<(SemaphoreSlim IndividualLock, MyToken? Token)> FindAccountOrCreate
        (string key, CancellationToken cancellationToken)
    {
        if (_cache.TryGetValue(key, out var cachedElement))
        {
            return cachedElement;
        }
        
        await _cacheCreationLock.WaitAsync(cancellationToken);
        try
        {
            cachedElement = _cache.GetOrAdd(key, (new SemaphoreSlim(1,1), null));
            return cachedElement;
        }
        finally
        {
            _cacheCreationLock.Release();
        }
    }

    public async Task<MyToken[]> GetMultTokensAsync(IEnumerable<string> ids, CancellationToken token = default)
    {
        var tasks = ids.Select(id => GetTokenAsync(id, token));
        return await Task.WhenAll(tasks);
    }
}

```
