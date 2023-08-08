"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[1866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="AddSingleton() vs AddScoped() vs AddTransient()",s={unversionedId:"csharp/examples/singleton_scoped_transient",id:"csharp/examples/singleton_scoped_transient",title:"AddSingleton() vs AddScoped() vs AddTransient()",description:"AddSingleton",source:"@site/docs/csharp/examples/singleton_scoped_transient.md",sourceDirName:"csharp/examples",slug:"/csharp/examples/singleton_scoped_transient",permalink:"/md/csharp/examples/singleton_scoped_transient",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/singleton_scoped_transient.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 2 - Unit Testing in Csharp",permalink:"/md/csharp/examples/refactoring/refactoring2"},next:{title:"Span and Benchmarking in Csharp",permalink:"/md/csharp/examples/span"}},o={},c=[{value:"AddSingleton",id:"addsingleton",level:3},{value:"AddScoped",id:"addscoped",level:3},{value:"AddTransient",id:"addtransient",level:3},{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addsingleton-vs-addscoped-vs-addtransient"},"AddSingleton() vs AddScoped() vs AddTransient()"),(0,a.kt)("h3",{id:"addsingleton"},"AddSingleton"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddSingleton() "),"- our 2 services point to the same Singleton"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"one gets mutated -> all do.")),(0,a.kt)("h3",{id:"addscoped"},"AddScoped"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddScoped()")," - The Services gets created (then destroyed) for EVERY HTTP Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"so no persistence between requests."),(0,a.kt)("li",{parentName:"ul"},"BUT service1 == service2 both again point to the same 'singleton'-ish for that lifetime."),(0,a.kt)("li",{parentName:"ul"},"We could make the ",(0,a.kt)("inlineCode",{parentName:"li"},"private static string[] _stages")," ",(0,a.kt)("strong",{parentName:"li"},"static")," to persists the service.instance lifetimes.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"then the Plants would increase agai")))),(0,a.kt)("h3",{id:"addtransient"},"AddTransient"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddTransient()")," - our 2 services are Separate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"again no persistence between requests. Lifetime coupled to Http-Request."),(0,a.kt)("li",{parentName:"ul"},"one gets mutated then destroyed without touching the other.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Programm.cs"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"// inject our Services:\n// Singleton() - our 2 services point to the same Singleton\n// - one gets mutated -> all do.\n// builder.Services.AddSingleton<IPlantService, PlantService>();\n\n// Scoped() - The Services gets created (then destroyed) for EVERY HTTP Request\n// - so no persistence between requests.\n// - BUT service1 == service2 both again point to the same 'singleton'-ish for that lifetime.\n// - We could make the `private static string[] _stages` **static** to persists the service.instance lifetimes.\n//      - then the Plants would increase again.\n// builder.Services.AddScoped<IPlantService, PlantService>();\n\n// Transient() - our 2 services are Separate\n// - again no persistence between requests. Lifetime coupled to Http-Request.\n// - one gets mutated then destroyed without touching the other.\nbuilder.Services.AddTransient<IPlantService, PlantService>();\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Controllers/PlantController.cs"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Mvc;\nusing tutorials.Models;\nusing tutorials.Services.PlantService;\n\nnamespace tutorials.Controllers\n{\n    [Route("api/[controller]")]\n    [ApiController]\n    public class PlantController : ControllerBase\n    {\n        private readonly IPlantService _plantService1;\n        private readonly IPlantService _plantService2;\n\n        public PlantController(IPlantService s1, IPlantService s2)\n        {\n            _plantService1 = s1;\n            _plantService2 = s2;\n        }\n\n        [HttpGet("count")]\n        public ActionResult<int> GetPlantsCount()\n        {\n            return _plantService2.GetPlantsCount();\n        }\n\n        [HttpGet]\n        public ActionResult<List<Plant>> GetPlantsList()\n        {\n            return _plantService2.GetPlantsList();\n        }\n\n        [HttpPost]\n        public ActionResult<List<Plant>> Grow()\n        {\n            _plantService1.GrowRandomPlant();\n            return _plantService2.GetPlantsList();\n        }\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Services/PlantService/PlantService.cs "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using tutorials.Models;\n\nnamespace tutorials.Services.PlantService;\n\n/// <summary>\n/// Some basic Service that grows Trees and returns data about the Trees\n/// </summary>\npublic class PlantService : IPlantService\n{\n    private static string[] _stages = { "Seed", "Germination", "Sapling", "Mature Tree", "Dying Tree", "Fire Wood", };\n\n    public List<Plant> PlantsList = new()\n    {\n        new Plant(){ Stage = _stages[0]},\n        new Plant(){ Stage = _stages[0]},\n        new Plant(){ Stage = _stages[2]},\n    };\n\n    public int GetPlantsCount()=> PlantsList.Count;\n    \n    public List<Plant> GetPlantsList() => PlantsList;\n\n    public void GrowRandomPlant()\n    {\n        PlantsList.Add(new Plant\n        {\n            Stage = _stages[new Random().Next(_stages.Length)]\n        });\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Services/PlantService/IPlantService.cs "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using tutorials.Models;\nnamespace tutorials.Services.PlantService;\n\n// interface because we want to inject it to show different ways of doing so\npublic interface IPlantService\n{\n    int GetPlantsCount();\n    List<Plant> GetPlantsList();\n    void GrowRandomPlant();\n}\n")))}d.isMDXComponent=!0}}]);