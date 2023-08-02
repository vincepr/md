"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[8438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const s={},i="Parallel For foreach and Task.WhenAll in C",l={unversionedId:"csharp/examples/parellism",id:"csharp/examples/parellism",title:"Parallel For foreach and Task.WhenAll in C",description:"",source:"@site/docs/csharp/examples/parellism.md",sourceDirName:"csharp/examples",slug:"/csharp/examples/parellism",permalink:"/md/csharp/examples/parellism",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/parellism.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MinimalAPI example project in csharp",permalink:"/md/csharp/examples/minimal_api"},next:{title:"Records in C",permalink:"/md/csharp/examples/records"}},o={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parallel-for-foreach-and-taskwhenall-in-c"},"Parallel For foreach and Task.WhenAll in C#"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'\nusing BenchmarkDotNet.Attributes;\n\nnamespace tutorials.ApiParallelTest;\n\npublic class ApiParallelTest{\n\n    private static readonly HttpClient HttpClient = new();\n    private const int TaskCount = 1000;\n\n    [Benchmark]\n    public async Task<List<int>> ForEachApi(){\n        List<int> list = new();\n        var fakeTasks = Enumerable.Range(0, TaskCount)\n            .Select(_ => new Func<Task<int>>(() => SomeAsyncRequest(HttpClient))).ToList();\n        \n        foreach(var task in fakeTasks){\n            // since the Tasks we created above are wrapped in a Function they didnt fire\n            // we now evoke them and await that:\n            list.Add(await task());\n        }\n        return list;\n    }\n\n    // this will load all available cores to nearly 100% load\n    // - so wasting some cycles blocking a thread while awaiting!\n    [Benchmark]\n    public async Task<List<int>> UnlimitedParallelForeachApi(){\n        List<int> list = new();\n        var fakeTasks = Enumerable.Range(0, TaskCount)\n            .Select(_ => \n                new Func<int>(() => SomeAsyncRequest(HttpClient).GetAwaiter().GetResult())).ToList();\n        \n\n        Parallel.For(0, TaskCount, i => list.Add(fakeTasks[i]()));\n        return list;\n    }\n\n    // here we can provide a variable degree of parallelism (ex. according to load)\n    [Benchmark]\n    public async Task<List<int>> MaxParallelForeachApi(int maxDegreeParallelism){\n        List<int> list = new();\n        var fakeTasks = Enumerable.Range(0, TaskCount)\n            .Select(_ => \n                new Func<int>(() => SomeAsyncRequest(HttpClient).GetAwaiter().GetResult())).ToList();\n        \n\n        Parallel.For(0, TaskCount, new ParallelOptions{\n            MaxDegreeOfParallelism = maxDegreeParallelism,\n        }, i => list.Add(fakeTasks[i]()));\n        return list;\n    }\n\n    // Task.WhenAll does NOT block and await but instead asynchrony instead.\n    // - this doesnt overutilize the cores that much -\n    // - while still beeing much faster than ForeachApi\n    // - this will perform more consistently and efficient\n    // -> and overall scale the best\n    [Benchmark]\n    public async Task<List<int>> WhenAllApi(){\n        var fakeTasks = Enumerable.Range(0, TaskCount)\n            .Select(_ => SomeAsyncRequest(HttpClient));\n        var result = await Task.WhenAll(fakeTasks);\n        return result.ToList();\n    }\n\n    // CUSTOM combined parallel AND await to get the fasts troughput possible\n    [Benchmark]\n    public async Task<List<int>> CustomAsyncParallelv1() => await ParallelAndAsyncApi(1);\n    [Benchmark]\n    public async Task<List<int>> CustomAsyncParallelv2() => await ParallelAndAsyncApi(10);\n    [Benchmark]\n    public async Task<List<int>> CustomAsyncParallelv3() => await ParallelAndAsyncApi(100);\n\n    public async Task<List<int>> ParallelAndAsyncApi(int batches){\n        List<int> list = new();\n        var fakeTasks = Enumerable.Range(0, TaskCount)\n            .Select(_ => new Func<Task<int>>(() => SomeAsyncRequest(HttpClient))).ToList();\n        \n        await CustomParallelAndAsyncForeach(fakeTasks, batches, async func =>{\n            list.Add(await func());\n        });\n        return list;\n    }\n\n    /// Custom Task that executes both in parallel AND uses Await at the same time\n    public static Task CustomParallelAndAsyncForeach<T>(\n            IEnumerable<T> source,\n            int degreeOfParallelization,\n            Func<T, Task> body)\n    {\n        async Task AwaitPartition(IEnumerator<T> partition)\n        {\n            using(partition){\n                while(partition.MoveNext()){\n                    await body(partition.Current);\n                }\n            }\n        }\n\n        return Task.WhenAll(\n            System.Collections.Concurrent.Partitioner\n                .Create(source)\n                .GetPartitions(degreeOfParallelization)\n                .AsParallel()\n                .Select(AwaitPartition)\n        );\n    }\n\n    // this is the request we make a bunch of times, doing some Json parsing as work.\n    private static async Task<int> SomeAsyncRequest(HttpClient httpClient){\n        var response = await httpClient.GetStringAsync($"");\n        var user = JsonSerializer.Deserialize<SomeUserData>(response);\n        return user!.Data;\n    }\n}\n')))}u.isMDXComponent=!0}}]);