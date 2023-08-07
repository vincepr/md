"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[8131],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),k=a,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||l;return t?o.createElement(d,r(r({ref:n},p),{},{components:t})):o.createElement(d,r({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=k;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const l={},r="CancellationToken in Csharp",i={unversionedId:"csharp/examples/CancellationToken",id:"csharp/examples/CancellationToken",title:"CancellationToken in Csharp",description:"To stop wasting ressources on for example disconnected Http-Requests, Websockets etc. a often used strategy is to use CancellationTokens. (like golang's ctx Context)",source:"@site/docs/csharp/examples/CancellationToken.md",sourceDirName:"csharp/examples",slug:"/csharp/examples/CancellationToken",permalink:"/md/csharp/examples/CancellationToken",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/CancellationToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wilkommen",permalink:"/md/"},next:{title:"Deconstruction in Csharp",permalink:"/md/csharp/examples/Deconstruction"}},c={},s=[{value:"Cancellation Token in the WebApi",id:"cancellation-token-in-the-webapi",level:2},{value:"Cancellation Token in a Console App",id:"cancellation-token-in-a-console-app",level:2},{value:"How it can cancel",id:"how-it-can-cancel",level:3},{value:"Example running a loop",id:"example-running-a-loop",level:4}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cancellationtoken-in-csharp"},"CancellationToken in Csharp"),(0,a.kt)("p",null,"To stop wasting ressources on for example disconnected Http-Requests, Websockets etc. a often used strategy is to use CancellationTokens. (like golang's ctx Context)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"this can stop the running process (ex a Sql query taking time with more following after) and free those ressources.")),(0,a.kt)("p",null,"The token itself has ",(0,a.kt)("strong",{parentName:"p"},"no")," ",(0,a.kt)("inlineCode",{parentName:"p"},"token.Cancel()")," functionality. "),(0,a.kt)("p",null,"But instead the Consumer (ex the sql-library or entity-framework) has to check that token and then itself Stop the process/cleanup etc."),(0,a.kt)("h2",{id:"cancellation-token-in-the-webapi"},"Cancellation Token in the WebApi"),(0,a.kt)("p",null,"Cancellation Tokens are well supported by most frameworks, the web-controllers etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Controller without Cancellation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class Examplecontroller : ControllerBase{\n    private readonly IExampleRepository _exampleRepository;\n\n    public ExampleController(IExampleRepository exampleRepository){\n        _exampleRepository = exampleRepository;\n    }\n\n    [HttpGet("")]\n    public async Task<IActionResult> SomeUnderPerformingQuery(){\n        var result = await _exampleRepository.GetSomeNumersAsync();\n        return Ok(result);\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Controller passing down a Cancellation Token for the iExampleRepository to use")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class Examplecontroller : ControllerBase{\n    private readonly IExampleRepository _exampleRepository;\n\n    public ExampleController(IExampleRepository exampleRepository){\n        _exampleRepository = exampleRepository;\n    }\n\n    [HttpGet("")]\n    public async Task<IActionResult> SomeUnderPerformingQuery(CancellationToken token){\n        var result = await _exampleRepository.GetSomeNumersAsync(token);\n        return Ok(result);\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our IExampleRepository (passing down the Cancellation Token)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public interface IExampleRepository{\n    Task<int> GetSomeNumersAsync(CancellationToken token);\n}\n\npublic class ExampleRepository : IExampleRepository\n{\n    private readonly IbBConnectionFactory _dbConnectionFactory;\n    private readonly ILogger<ExampleRepository> _logger;\n\n    public ExampleRepository(IDbConnectionFactory dbFac, ILogger<ExampleRepository> logger){\n        _dbConnectionFactory = dbFac;\n        _logger = logger;\n    }\n\n    public async Task<int> GetSomeNumbersAsync(CancellationToken token){\n        using var con = await _dbConnectionFactory.CreateconnectionAsync();\n        _logger.LogInformation("This is designed to take forever");\n\n        var cmdDef = new CommandDefinition(@"WITH RECURSIVE r(i) AS (VALUES(0) UNION SELECT i FROM r LIMIT 3000 ...)", cancellationToken: token);\n\n        try\n        {\n            var firstResult = await connection.QueryFirstOrDefaultAsync<int>(cmdDef);\n            _logger.LogInformation("First result done");\n\n            // now with the token the second Query here should never run (if we cancel the request in the time the first takes)\n            var secondResult = await connection.QueryFirstOrDefaultAsync<int>(cmdDef);\n            _logger.LogInformation("Second result done");\n        }\n        catch(TaskCancelledException err)\n        {\n            ConsoleWriteLine("Operation was cancelled. Freeing resources.");\n        }\n        return firstResult + secondResult;\n    }\n}\n')),(0,a.kt)("p",null,"Implementation differ on how those Cancellations get handled.\n",(0,a.kt)("inlineCode",{parentName:"p"},"TaskCanceledException")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"OperationCanceledException")," Throws are common."),(0,a.kt)("p",null,"In the above example we are wrapping the firstResult and secondResult Query in a try-catch. "),(0,a.kt)("p",null,"Another way would be some Middleware to at one single point of contact handle those and for example log them."),(0,a.kt)("h2",{id:"cancellation-token-in-a-console-app"},"Cancellation Token in a Console App"),(0,a.kt)("p",null,"Example to show how to handle the Token yourself."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The token itself cant be cancelled."),(0,a.kt)("li",{parentName:"ul"},"Instead it is a byproduct of a ",(0,a.kt)("inlineCode",{parentName:"li"},"new CancellationTokenSource()")),(0,a.kt)("li",{parentName:"ul"},"this Source provides a Token, and this source can then cancell tokens.")),(0,a.kt)("h3",{id:"how-it-can-cancel"},"How it can cancel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the source can manually Cancel",(0,a.kt)("inlineCode",{parentName:"li"},": "),"cancellationTokenSource.Cancel()`"),(0,a.kt)("li",{parentName:"ul"},"the source can manually Cancel",(0,a.kt)("inlineCode",{parentName:"li"},": "),"cancellationTokenSource.CancelAfter(someTimeStamp)`",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this way we could cancel Requests that take longer than 2 seconds etc."))),(0,a.kt)("li",{parentName:"ul"},"you can also set it in the TokenSource Constructor, to trigger a timeout-like cancellation.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var cancellationTokenSource = new CancellationTokenSource();\nvar token = cancellationTokenSource.Token;      // gets the Token to pass down\ncancellationTokenSource.CancelAfter(3000);      // cancels after 3 seconds\n\n// keep doing things while Token is active:\nwhile (!token.IsCancellationRequested){\n    Console.WriteLine("working");\n}\n\n// another strategy is to throw on cancellation (works with token and tokenSource)\ntoken.ThrowIfCancellationRequested();   // -> OperationCancelledException\ncancellationTokenSource.Token.ThrowIfCancellationRequested()\n')),(0,a.kt)("h4",{id:"example-running-a-loop"},"Example running a loop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class Program{\n    static async Task Main(string[] args){\n        var cancellationTokenSource = new CancellationTokenSource();\n        await ExampleWithLoop(cancellationTokenSource);\n    }\n\n    public static async Task ExampleWithLoop(CancellationTokenSource cancellationTokenSource){\n        // this task runs on its own and waits for C to be pressed -> cancels\n        Task.Run(() =>\n        {\n            var key = Console.ReadKey();\n            if (key.Key == ConsoleKey.C){\n                cancellationTokenSource.Cancel();\n                Console.WriteLine("Cancelling the task after C was pressed");\n            }\n        });\n\n        // so this can run synchronous and will keep running all 3 seconds.\n        while (!cancellationTokenSource.Token.IsCancellationRequested){\n            Console.WriteLine("Doing some work for 3 seconds.");\n            await Task.Delay(3000);\n        }\n        Console.WriteLine("We exited the loop");\n        \n        // it is important to dispose of the TokenSource after it is done:\n        cancellationTokenSource.Dispose();\n    }\n}\n')))}u.isMDXComponent=!0}}]);