"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},l="part2 - Platform Service",p={unversionedId:"csharp/examples/Microservices/part2-platformservice",id:"csharp/examples/Microservices/part2-platformservice",title:"part2 - Platform Service",description:"part of the https://github.com/vincepr/CS_Microservices Project",source:"@site/docs/csharp/examples/Microservices/part2-platformservice.md",sourceDirName:"csharp/examples/Microservices",slug:"/csharp/examples/Microservices/part2-platformservice",permalink:"/md/csharp/examples/Microservices/part2-platformservice",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/Microservices/part2-platformservice.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"part1 - Microservices Architecture",permalink:"/md/csharp/examples/Microservices/part1-intro"},next:{title:"part3 - Kubernetes - aka K8S",permalink:"/md/csharp/examples/Microservices/part3-kubernetes"}},i={},s=[{value:"setup",id:"setup",level:2},{value:"Adding Automapper",id:"adding-automapper",level:2},{value:"Our Controller Endpoint",id:"our-controller-endpoint",level:2},{value:"Data related things",id:"data-related-things",level:2},{value:"What we add to our Programm.cs",id:"what-we-add-to-our-programmcs",level:2}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"part2---platform-service"},"part2 - Platform Service"),(0,n.kt)("p",null,"part of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vincepr/CS_Microservices"},"https://github.com/vincepr/CS_Microservices")," Project"),(0,n.kt)("h2",{id:"setup"},"setup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dotnet new webapi -n PlatformService\n\ndotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection\ndotnet add package Microsoft.EntityFrameworkCore\ndotnet add package Microsoft.EntityFrameworkCore.Design\ndotnet add package Microsoft.EntityFrameworkCore.InMemory\ndotnet add package Microsoft.EntityFrameworkCore.SqlServer\n")),(0,n.kt)("h2",{id:"adding-automapper"},"Adding Automapper"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Program.cs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// we inject Automapper\nbuilder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());\n")),(0,n.kt)("p",null,"Then we create Profiles that Map our Models together with our Dtos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Profiles/PlatformsProfile.cs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"using AutoMapper;\nusing PlatformService.Dtos;\nusing PlatformService.Models;\n\nnamespace PlatformService.Profiles;\n\npublic class PlatformsProfile : Profile {\n    public PlatformsProfile() {\n\n        // Because Names of attributes match 1:1 this is all it needs\n        //       <from Source, to Target>\n        CreateMap<Platform, PlatformReadDto>(); \n        CreateMap<PlatformCreateDto, Platform>();\n    }\n}\n")),(0,n.kt)("h2",{id:"our-controller-endpoint"},"Our Controller Endpoint"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Controllers/PlatformsController.cs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace PlatformService.Controllers;\n\n[Route("api/[controller]")]     // translates to ".../api/Platforms/"\n[ApiController] // implements some default behaviours we want from our Controller\npublic class PlatformsController: ControllerBase {\n    private readonly IPlatformRepo _repository;\n    private readonly IMapper _mapper;\n\n    public PlatformsController(IPlatformRepo repository, IMapper mapper) {\n        _repository = repository;\n        _mapper = mapper;\n    }\n\n    [HttpGet]\n    public ActionResult<IEnumerable<PlatformReadDto>> GetPlatforms() {\n        var platformItems = _repository.GetPlatforms();\n        return Ok(_mapper.Map<IEnumerable<PlatformReadDto>>(platformItems));\n    }\n\n    [HttpGet("{id}", Name = "GetPlatformById")]\n    public ActionResult<PlatformReadDto> GetPlatformById(int id) {\n        var platform = _repository.GetPlatformById(id);\n        if (platform is null) return NotFound();\n        return Ok(_mapper.Map<PlatformReadDto>(platform));\n    }\n\n    [HttpPost]\n    public ActionResult<PlatformReadDto> CreatePlatform(PlatformCreateDto dto) {\n        var newPlatform = _mapper.Map<Platform>(dto);\n        _repository.CreatePlatform(newPlatform);\n        if (_repository.SaveChanges() == false) return StatusCode(500);\n         \n        var platformReadDto = _mapper.Map<PlatformReadDto>(newPlatform);\n\n        return CreatedAtRoute(\n            nameof(GetPlatformById),            // provides a link to the /api/get/{newId}\n            new { Id = platformReadDto.Id },    // the id of our newly created obj\n            platformReadDto);                   // and we also return the dtoObject directly\n    }\n}\n')),(0,n.kt)("h2",{id:"data-related-things"},"Data related things"),(0,n.kt)("p",null,"Our Actual Database Implemention, at the start a Imemory, later Ms-SqlServer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Data/AppDbContext.cs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace PlatformService.Data {\n    public class AppDbContext : DbContext {\n        public AppDbContext(DbContextOptions<AppDbContext> opts) : base(opts) { }   \n        public DbSet<Platform> Platforms { get; set; }\n    }\n}\n")),(0,n.kt)("p",null,"This Interface Makes Swapping How We implement Our Repository Methods easy. (also testable)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Data/IPlatformRepo.cs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace PlatformService.Data {\n    public interface IPlatformRepo\n    {\n        bool SaveChanges();\n\n        IEnumerable<Platform> GetPlatforms();\n\n        Platform? GetPlatformById(int id);\n\n        void CreatePlatform(Platform? plat);\n    }\n}\n")),(0,n.kt)("p",null,"Our Implementation of our Repository Methods."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Data/PlatformRepo.cs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace PlatformService.Data {\n    public class PlatformRepo : IPlatformRepo {\n        private readonly AppDbContext _ctx;\n\n        public PlatformRepo(AppDbContext ctx) {\n            _ctx = ctx;   \n        }\n\n        /// <summary>\n        /// Inserts a new platform into the Database. Will Throw if null is passed in.\n        /// </summary>\n        /// <param name="plat"></param>\n        /// <exception cref="ArgumentNullException"></exception>\n        public void CreatePlatform(Platform? plat) {\n            if (plat is null) throw new ArgumentNullException(nameof(plat));\n            _ctx.Platforms.Add(plat);\n        }\n\n        public Platform? GetPlatformById(int id) {\n            return _ctx.Platforms.FirstOrDefault(p => p.Id == id);\n        }\n\n        public IEnumerable<Platform> GetPlatforms() {\n            return _ctx.Platforms.ToList();\n        }\n\n        public bool SaveChanges() {\n            return _ctx.SaveChanges() > 0;\n        }\n    }\n}\n')),(0,n.kt)("p",null,"For Quick development we fill our Database with some Data if Empty"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Data/PrepDb.cs"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace PlatformService.Data\npublic static class PrepDb{\n    public static void PrepPopulation(IApplicationBuilder app) {\n        using (var serviceScope = app.ApplicationServices.CreateScope()) {\n            SeedData(serviceScope.ServiceProvider.GetService<AppDbContext>());\n        }\n    }\n\n    public static void SeedData(AppDbContext ctx) {\n        if(!ctx.Platforms.Any()) {\n            ctx.Platforms.AddRange(\n                new Platform() {Name="Dot Net", Publisher="Microsoft", Cost="Free"},\n                new Platform() {Name="SQL Server Express", Publisher="Microsoft", Cost="Free"},\n                new Platform() {Name="Kubernetes", Publisher="Cloud Native Computing Foundation", Cost="Free"}\n            );\n            ctx.SaveChanges();\n            Console.WriteLine("---\x3e Seeding Data with some made up Data");\n        } else {\n            Console.WriteLine("---\x3e Database already has Data. Didn\'t have to populate the Database with Seed Data.");\n        }\n    }\n}\n')),(0,n.kt)("h2",{id:"what-we-add-to-our-programmcs"},"What we add to our Programm.cs"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.EntityFrameworkCore;\nusing PlatformService.Data;\n\nvar builder = WebApplication.CreateBuilder(args);\n\n// we dependencyinject => If someone asks for IPlatformRepo he will get our PlatformRepo implementation\nbuilder.Services.AddScoped<IPlatformRepo, PlatformRepo>();\n\n// we inject our Database context\nbuilder.Services.AddDbContext<AppDbContext>(opts => {\n    opts.UseInMemoryDatabase("InMem");\n});\n\n// we inject Automapper\nbuilder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());\n\n\n// ... everyhing else we can just leave untouched\n\n\n// we manually (for testing/quick-development) inject some fake data into our db\nPrepDb.PrepPopulation(app);\n\napp.Run();\n')),(0,n.kt)("h1",{id:"dockerize-this-service"},"Dockerize this service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/language/dotnet/build-images/"},"https://docs.docker.com/language/dotnet/build-images/"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM mcr.microsoft.com/dotnet/sdk:7.0 as build-envFROM\nWORKDIR /app\n\nCOPY *.csproj ./\nRUN dotnet restore\n\nCOPY . ./\nRUN dotnet publish -c Release -o out\n\nFROM mcr.microsoft.com/dotnet/aspnet:7.0\nWORKDIR /app\nCOPY --from=build-envFROM /app/out .\nENTRYPOINT [ "dotnet", "PlatformService.dll" ]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// build our docker container\ndocker build -t vincepr/platformservice .\n\n// run our created container listening on port 8080 mapped to inside the container 80 (so http).\ndocker run -p 8080:80 -d vincepr/platformservice\n\n// show running containers, then use containerID to kill the container\ndocker ps\ndocker stop 4edfbdeac6e9\n// if we docker run -p 8080:80 -d vincepr/platformservice we create A NEW container\n// we can restart the the same container using the id\ndocker start 4edfbdeac6e9\n// or using the vscode-extension/docker-desktop etc\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:r(4236).Z,width:"929",height:"988"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// pushing up to hub.docker.com\ndocker push vincepr/platformservice\n// now the docker repo should show up on your hub.docker.com account:\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:r(8445).Z,width:"1825",height:"978"})))}m.isMDXComponent=!0},4236:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/docker-097fe83ee908bc4c38abba3ac6256530.png"},8445:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dockerhub-471758ebfe17d9666a51d54a00f04fa3.png"}}]);