"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3042],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={},o="Span and Benchmarking in C",s={unversionedId:"csharp/examples/span",id:"csharp/examples/span",title:"Span and Benchmarking in C",description:"Span instead of String in C",source:"@site/docs/csharp/examples/span.md",sourceDirName:"csharp/examples",slug:"/csharp/examples/span",permalink:"/md/csharp/examples/span",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/span.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Records in C",permalink:"/md/csharp/examples/records"},next:{title:"a backlog of videos / tutorials that look promising",permalink:"/md/csharp/microservices/info"}},l={},c=[{value:"Span instead of String in C#",id:"span-instead-of-string-in-c",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"span-and-benchmarking-in-c"},"Span and Benchmarking in C#"),(0,r.kt)("h2",{id:"span-instead-of-string-in-c"},"Span instead of String in C#"),(0,r.kt)("p",null,"By using Span (in combination with fitting methods like Slice()) we can remove expensive Allocation on the heap alltogether."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'namespace span;\n\nclass Program\n{\n    private static readonly string _dateAsText = "20.07.2022";\n    static void Main(string[] args)\n    {\n        Console.WriteLine(DateFromString());\n        Console.WriteLine(DateFromSpan());\n    }\n\n    public static (int day, int month, int year) DateFromString(){\n        var dayTxt = _dateAsText.Substring(0,2);    // here we allocate "20",\n        var monthTxt = _dateAsText.Substring(3,2);  // here "07",\n        var yearTxt = _dateAsText.Substring(6);     // and here "2022" on the heap.\n        var day = int.Parse(dayTxt);\n        var month = int.Parse(monthTxt);\n        var year = int.Parse(yearTxt);\n        return (day, month, year);                  // they get cleaned when leaving scope.\n    }\n\n    public static (int day, int month, int year) DateFromSpan(){\n        ReadOnlySpan<char> dateAsSpan = _dateAsText;\n        var dayTxt = dateAsSpan.Slice(0,2);\n        var monthTxt = dateAsSpan.Slice(3,2);\n        var yearTxt = dateAsSpan.Slice(6);\n        var day = int.Parse(dayTxt);\n        var month = int.Parse(monthTxt);\n        var year = int.Parse(yearTxt);\n        return (day, month, year);\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Span will only need to store a pointer and some data about the length of the slice. this can all stay on the Stack. So it will always outperform heap allocations by a ton.")),(0,r.kt)("h1",{id:"benchmarking-class-in-c"},"Benchmarking Class in C#"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the BenchmarkDotNet Nu Get package. ",(0,r.kt)("inlineCode",{parentName:"li"},"dotnet add package BenchmarkDotNet")),(0,r.kt)("li",{parentName:"ol"},"create a class having one more more methods decorated with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Benchmark")," attribute."),(0,r.kt)("li",{parentName:"ol"},"Run your benchmark project in ",(0,r.kt)("inlineCode",{parentName:"li"},"Release mode")," using the Run method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"BenchmarkRunner"))),(0,r.kt)("p",null,"Example of Benchmarking the above code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run it with: ",(0,r.kt)("inlineCode",{parentName:"li"},"dotnet run -c Release"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using BenchmarkDotNet.Attributes;\nusing BenchmarkDotNet.Running;\nnamespace span;\n\nclass Program\n{\n    static void Main(string[] args)\n    {\n        BenchmarkRunner.Run<BenchmarkDemo>();\n    }\n}\n\n[MemoryDiagnoser]\npublic class BenchmarkDemo{\n    private static readonly string _dateAsText = "20.07.2022";\n    \n    [Benchmark]\n    public (int day, int month, int year) DateFromString(){\n        var dayTxt = _dateAsText.Substring(0,2);\n        var monthTxt = _dateAsText.Substring(3,2);\n        var yearTxt = _dateAsText.Substring(6);\n        var day = int.Parse(dayTxt);\n        var month = int.Parse(monthTxt);\n        var year = int.Parse(yearTxt);\n        return (day, month, year);\n    }\n\n    [Benchmark]\n    public (int day, int month, int year) DateFromSpan(){\n        ReadOnlySpan<char> dateAsSpan = _dateAsText;\n        var dayTxt = dateAsSpan.Slice(0,2);\n        var monthTxt = dateAsSpan.Slice(3,2);\n        var yearTxt = dateAsSpan.Slice(6);\n        var day = int.Parse(dayTxt);\n        var month = int.Parse(monthTxt);\n        var year = int.Parse(yearTxt);\n        return (day, month, year);\n    }\n}\n')),(0,r.kt)("p",null,"Results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"|         Method |     Mean |    Error |   StdDev |   Gen0 | Allocated |\n|--------------- |---------:|---------:|---------:|-------:|----------:|\n| DateFromString | 48.34 ns | 0.070 ns | 0.062 ns | 0.0459 |      96 B |\n|   DateFromSpan | 34.75 ns | 0.254 ns | 0.238 ns |      - |         - |\n")))}m.isMDXComponent=!0}}]);