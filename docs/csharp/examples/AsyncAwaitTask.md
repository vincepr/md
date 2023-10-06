# Async Await Task in csharp
- https://github.com/davidfowl/AspNetCoreDiagnosticScenarios more indepth examples on what to do and what not: [general]("https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AspNetCoreGuidance.md") / [async]("https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md")

- Task is the Promise/Future equivalent of Csharp.
    - Something that will take time to finish. Ex. a DB-Query or a API call.

- this will first syntax will consume extra memory/processor
- https://medium.com/@ranjeetdotme/how-async-await-works-in-c-eccf16bd3b90
```csharp
public async Task<string> InputOutput() {
    var msg = "Hello World";
    return msg;
}
```

- the next 2 examples will wait till completed then return (with and without an result)
- no extra state-machine will get spawned, just simple sequential execution
- these just pass down the promise thus no care about blocking/awaiting has to happen in this part, it will all be handled upstream
```csharp
public Task<string> IOCompletedWithResult() {
    var msg = "Hello World";
    return Task.FromResult(msg);
}
```

```csharp
public Task<string> IOCompletedNoResult() {
    var msg = "Hello World";
    return Task.CompletedTask;
}
```

- so there is (a small) benefit to wait as long as possible to change to async
and for example propagate the 
```csharp
public Task<string> InputOutputNetwork {
    var client = new HttpClient();
    return client.GetStringAsync("https://some.site");
    // instead of awaiting it here directly
    // response = await client.GetStringAsync("https://some.site);
    // return response;     // especially if we need to validate/transform the response we can only await it here and not upstream
}
```

## ConfigureAwait
ConfigureAwait(false) basically tells that it is ok to return this to any thread. (true the default will always continue on the same thread)

Some rough rules about when to use it.
- for a api/webapp we can basically use .ConfigureAwait(false) for some extra performance without too much worry
- on some desktop/wpf app on the other hand this will cause big problems.

```csharp
public async Task<string> InputOutput() {
    var client = new HttpClient();
    var content = await client.GetStringAsync("https://some.site")
        .ConfigureAwait(false);
    return content;
} 
```

## Blocking
In most cases we DO NOT want to block. But for those other cases:

```csharp
public IActionResult Index() {
    var task = InputOutput();

    // 3 ways to execute while blocking the whole thread:

    // blocks the whole Thread. USE WITH CARE!
    var a = task.Result();
    
    // blocks the whole Thread. USE WITH CARE!
    task.Wait();

    // blocks the whole Thread. USE WITH CARE!
    task.GetAwaiter().GetResult();

    return a;
}
```

## Example

```csharp
static void Main(string[] args){
    // we block here in the main, waiting for our whole app to finish
    StartApp().GetAwaiter().GetResult();
}
public static Task StartApp(){
    // start our Tasks
    var collect = CollectFromDb();
    var process = FetchFromApi("some.site.st");

    // We could block and wait on the Task, that completes when everything has finished:
    //     Task.WaitAll(new[] { collect, process });

    // or we propagate the task upstream and let main handle it:
    return Task.WhenAll(new[] { collect, process });
    
}
public static async Task CollectFromDb(){
    while (true){
        // reading some data from a slow Drive
    }
}
public static async Task FetchFromApi(string msg){
    while (true){
        // fetching some network responses here
    }
}
```

## Examples on what to do and avoid
- prefer `await` over `ContinueWith`. In Short it does not capture SynchronisationContext because it comes from a time before async/await in csharp.
```csharp
static async Task Maain(string[] args) {
    var service = new SomeService();
    //BAD:
    var number1 = await service
        .GetValueAsync()
        .ContinueWith(task => task.Result + 2);
    // GOOD:
    var number2 = await service.GetValueAsync();
    var finalNr = number2 + 2; 
}
```

- prefer async over Task
    - usually the performance hit for the extra state machine is negligible against benefits like code-readability and ease of use
- Don't use async in constructors. make a `CreateAsync` function instead where any neccessary await etc. happens