# CancellationToken in C#
To stop wasting ressources on for example disconnected Http-Requests, Websockets etc. a often used strategy is to use CancellationTokens. (like golang's ctx Context)
- this can stop the running process (ex a Sql query taking time with more following after) and free those ressources.

The token itself has **no** `token.Cancel()` functionality. 

But instead the Consumer (ex the sql-library or entity-framework) has to check that token and then itself Stop the process/cleanup etc.

## Cancellation Token in the WebApi
Cancellation Tokens are well supported by most frameworks, the web-controllers etc.

- Controller without Cancellation
```cs
public class Examplecontroller : ControllerBase{
    private readonly IExampleRepository _exampleRepository;

    public ExampleController(IExampleRepository exampleRepository){
        _exampleRepository = exampleRepository;
    }

    [HttpGet("")]
    public async Task<IActionResult> SomeUnderPerformingQuery(){
        var result = await _exampleRepository.GetSomeNumersAsync();
        return Ok(result);
    }
}
```

- Controller passing down a Cancellation Token for the iExampleRepository to use
```cs
public class Examplecontroller : ControllerBase{
    private readonly IExampleRepository _exampleRepository;

    public ExampleController(IExampleRepository exampleRepository){
        _exampleRepository = exampleRepository;
    }

    [HttpGet("")]
    public async Task<IActionResult> SomeUnderPerformingQuery(CancellationToken token){
        var result = await _exampleRepository.GetSomeNumersAsync(token);
        return Ok(result);
    }
}
```

- Our IExampleRepository (passing down the Cancellation Token)
```cs
public interface IExampleRepository{
    Task<int> GetSomeNumersAsync(CancellationToken token);
}

public class ExampleRepository : IExampleRepository
{
    private readonly IbBConnectionFactory _dbConnectionFactory;
    private readonly ILogger<ExampleRepository> _logger;

    public ExampleRepository(IDbConnectionFactory dbFac, ILogger<ExampleRepository> logger){
        _dbConnectionFactory = dbFac;
        _logger = logger;
    }

    public async Task<int> GetSomeNumbersAsync(CancellationToken token){
        using var con = await _dbConnectionFactory.CreateconnectionAsync();
        _logger.LogInformation("This is designed to take forever");

        var cmdDef = new CommandDefinition(@"WITH RECURSIVE r(i) AS (VALUES(0) UNION SELECT i FROM r LIMIT 3000 ...)", cancellationToken: token);

        try
        {
            var firstResult = await connection.QueryFirstOrDefaultAsync<int>(cmdDef);
            _logger.LogInformation("First result done");

            // now with the token the second Query here should never run (if we cancel the request in the time the first takes)
            var secondResult = await connection.QueryFirstOrDefaultAsync<int>(cmdDef);
            _logger.LogInformation("Second result done");
        }
        catch(TaskCancelledException err)
        {
            ConsoleWriteLine("Operation was cancelled. Freeing resources.");
        }
        return firstResult + secondResult;
    }
}
```

Implementation differ on how those Cancellations get handled.
`TaskCanceledException` or `OperationCanceledException` Throws are common.

In the above example we are wrapping the firstResult and secondResult Query in a try-catch. 

Another way would be some Middleware to at one single point of contact handle those and for example log them.


 
## Cancellation Token in a Console App