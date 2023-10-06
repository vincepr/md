"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?s.createElement(g,a(a({ref:t},p),{},{components:n})):s.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(7462),r=(n(7294),n(3905));const i={},a="Asynchronous API example in csharp",o={unversionedId:"csharp/examples/AsynchronousApi",id:"csharp/examples/AsynchronousApi",title:"Asynchronous API example in csharp",description:"Minimal Api. Revolves around the Client posting a large number or Data to our Service.",source:"@site/docs/csharp/examples/AsynchronousApi.md",sourceDirName:"csharp/examples",slug:"/csharp/examples/AsynchronousApi",permalink:"/md/csharp/examples/AsynchronousApi",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/AsynchronousApi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Await Task in csharp",permalink:"/md/csharp/examples/AsyncAwaitTask"},next:{title:"CancellationToken in Csharp",permalink:"/md/csharp/examples/CancellationToken"}},u={},l=[{value:"setup",id:"setup",level:2},{value:"Model and Dtos and DatabaseContext",id:"model-and-dtos-and-databasecontext",level:2},{value:"The Code",id:"the-code",level:2}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asynchronous-api-example-in-csharp"},"Asynchronous API example in csharp"),(0,r.kt)("p",null,"Minimal Api. Revolves around the Client posting a large number or Data to our Service."),(0,r.kt)("p",null,"This should take so long, as that we want to decouple the your post received and the your post has completely ran trough messages."),(0,r.kt)("p",null,"So in that sense being Asynchronous in it's response."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"example img",src:n(2983).Z,width:"2120",height:"1083"}),"6"),(0,r.kt)("h2",{id:"setup"},"setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dotnet add package Microsoft.EntitiyFrameworkCore.Design\ndotnet add package Microsoft.EntitiyFrameworkCore.Sqlite\n")),(0,r.kt)("p",null,"Rough steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create our Model"),(0,r.kt)("li",{parentName:"ol"},"Create our DBContext and inject it into our app"),(0,r.kt)("li",{parentName:"ol"},"create EF migration: dotnet ef migrations add initialMigration"),(0,r.kt)("li",{parentName:"ol"},"apply the migrations: dotnet ef database update")),(0,r.kt)("h2",{id:"model-and-dtos-and-databasecontext"},"Model and Dtos and DatabaseContext"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Models/ListingRequests.cs"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"/// Holds a Lost of Products our Client is trying to post to our Service\npublic class ListingRequest{\n    public int Id { get; set; }\n    public string? RequestBody { get; set; }\n    public string? EstimatedCompletionTime { get; set; }\n    public string? RequestStatus { get; set; }\n    public string RequestId { get; set; } = Guid.NewGuid().ToString();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Dtos/ListingRequests.cs"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class DtoListingStatus{\n    public string? RequestStatus { get; set; }\n    public string? EstimatedcompletionTime { get; set; }\n    public string? ResourceUrl { get; set; }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Data/AppDbContext.cs"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using AsyncApiExample.Models;\nusing Microsoft.EntityFrameworkCore;\npublic class AppDbContext : DbContext{\n    public AppDbContext(DbContextOptions<AppDbContext> options) \n        : base(options){}\n    public DbSet<ListingRequest> ListingRequests => Set<ListingRequest>();\n}\n")),(0,r.kt)("h2",{id:"the-code"},"The Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var builder = WebApplication.CreateBuilder(args);\n// to not loose db ctx for our dirty async takesSomeTimeAsync() we need to use a singleton here\nbuilder.Services.AddDbContext<AppDbContext>(opt => {\n    opt.UseSqlite("Data Source=RequestDB.db");\n}, ServiceLifetime.Singleton);\nvar app = builder.Build();\napp.UseHttpsRedirection();\n\n// our Insert Enpoint that starts the process that takes a \'long time\' to finish\napp.MapPost("api/v1/products", async (AppDbContext ctx, ListingRequest listingRequest) => {\n    if (listingRequest == null) return Results.BadRequest();\n    listingRequest.RequestStatus = "ACCEPTED";\n    listingRequest.EstimatedCompletionTime = DateTime.Now.AddSeconds(20).ToString(CultureInfo.CurrentCulture);\n\n    await ctx.ListingRequests.AddAsync(listingRequest);\n    await ctx.SaveChangesAsync();\n    takesSomeTimeAsync(ctx, listingRequest.Id);\n\n    // for a non Synchronous Method we would use Results.Created\n    // .Accepted(uri) takes an uri pointing to where the status of our requests\n    // can be monitored it.\n    return Results.Accepted($"api/v1/productstatus/{listingRequest.RequestId}", listingRequest);\n});\n\n// our Status Endpoint - gives feedback on if process finished, and how long it might take\napp.MapGet("api/v1/productstatus/{requestId}", (AppDbContext ctx, string requestId) => {\n    // we check for any info in our db\n    var listeningRequest = ctx.ListingRequests.FirstOrDefault(e => e.RequestId == requestId);\n    if (listeningRequest is null) return Results.NotFound();\n\n    // we build our Dto-response\n    DtoListingStatus response = new DtoListingStatus {\n        RequestStatus = listeningRequest.RequestStatus,\n        ResourceUrl = String.Empty\n    };\n    \n    // process has finished so we return path to results client wants\n    if (response.RequestStatus.ToUpper() == "COMPLETED") {\n        // the guid could come from the db or wherever we generate the resources\n        var uid = Guid.NewGuid().ToString();\n        // response.ResourceUrl = $"api/vi/products/{uid}";\n        // return Results.Ok(response);\n        return Results.Redirect($"http://localhost:5042/api/vi/products/{uid}");\n    }\n    \n    // in case it hasn\'t finished we calculate and return an estimated time\n    response.EstimatedcompletionTime = DateTime.Now.AddSeconds(5).ToString(CultureInfo.CurrentCulture);\n    return Results.Ok(response);\n\n});\n\n// Endpoint that supplies Resources at the end\napp.MapGet("api/vi/products/{resourceId}", (string resourceId) => {\n    return Results.Ok($"This is where we would pass back our results for {resourceId}");\n});\n\n// (in its own thread) this will after 5 seconds change the Status to COMPLETED\nasync static void takesSomeTimeAsync(AppDbContext ctx, int id){\n    int timeoutMs = 5000;\n    await Task.Delay(timeoutMs);\n    \n    var entry = ctx.ListingRequests.FirstOrDefault(e => e.Id == id);\n    if (entry is not null) {\n        entry.RequestStatus = "COMPLETED";\n        ctx.SaveChanges();\n        Console.WriteLine("finished task");\n    }\n}\napp.Run();\n')))}c.isMDXComponent=!0},2983:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/AsynchronousApi-1f6cee893bb3b06fc1d1ebdd022fc4df.svg"}}]);