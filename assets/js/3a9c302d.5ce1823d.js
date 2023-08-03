"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[8282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="PostgreSQL with donet",l={unversionedId:"csharp/sql_docker/postgre",id:"csharp/sql_docker/postgre",title:"PostgreSQL with donet",description:"Connecting a dotnet webapi with postgresql. All started in one dockerfile.",source:"@site/docs/csharp/sql_docker/postgre.md",sourceDirName:"csharp/sql_docker",slug:"/csharp/sql_docker/postgre",permalink:"/md/csharp/sql_docker/postgre",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/sql_docker/postgre.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker with mssql server",permalink:"/md/csharp/sql_docker/docker"},next:{title:"Evaluating Data Structures",permalink:"/md/datastructures/Evaluating"}},s={},c=[{value:"setup",id:"setup",level:2},{value:"Injecting the connection string",id:"injecting-the-connection-string",level:2},{value:"Add entitiy migrations",id:"add-entitiy-migrations",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"the dirty way to fill our db",id:"the-dirty-way-to-fill-our-db",level:3},{value:"setting it up for real",id:"setting-it-up-for-real",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgresql-with-donet"},"PostgreSQL with donet"),(0,o.kt)("p",null,"Connecting a dotnet webapi with postgresql. All started in one dockerfile."),(0,o.kt)("h2",{id:"setup"},"setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet add package Microsoft.EntityFrameworkCore.Tools\ndotnet add package Npgsql.EntityFrameworkCore.PostgreSQL\n")),(0,o.kt)("h2",{id:"injecting-the-connection-string"},"Injecting the connection string"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"instead of a static one, goal is to make the connection string dynamically available from the docker container"),(0,o.kt)("li",{parentName:"ul"},"placerholder in our code. that the docker compose should inject the real-current connection string into.")),(0,o.kt)("p",null,"First we add the placeholder to the appsettings.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"AllowedHosts": "*",\n  "ConnectionStrings": {\n    "Defaultconnection" : ""\n  }\n')),(0,o.kt)("p",null,"Then we inject the db-context into the builder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var builder = WebApplication.CreateBuilder(args);\n\n// inject the connection string:\nvar conn = builder.Configuration.GetConnectionString("DefaulCconnection");\nbuilder.Services.AddDbContext<ApiDbContext>(options =>\n    options.UseNpgsql(conn)\n);\n')),(0,o.kt)("h2",{id:"add-entitiy-migrations"},"Add entitiy migrations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'dotnet ef migrations add "initial-migrations"\n')),(0,o.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build\nWORKDIR /app\nEXPOSE 80\nEXPOSE 433\n\n## copy project files over and restore dependencies etc.\nCOPY *.csproj ./\nRUN dotnet restore\n\n## build the binary\nCOPY . ./\nRUN dotnet publish -c Release -o out\n\n\n\nFROM mcr.microsoft.com/dotnet/sdk:7.0 AS final\nWORKDIR /app\n## copy over the binary from build container\nCOPY --from=build /app/out .\nENTRYPOINT ["dotnet", "CS_Postgre_Example.dll"]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"docker build -t postgre_api"),(0,o.kt)("li",{parentName:"ul"},"docker run -p 8081:80 -e ASPNETCORE_URLS=http://+:80 postgre_api")),(0,o.kt)("p",null,"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\n# network to connect containers (sql-db and dotnet-api)\nnetworks:\n    dev:\n        driver: bridge\n\nservices:\n\n    #the dotnet api   -   running on port 8080\n    cs-api:\n        # name we get when building the Dockerfile\n        image: docker.io/library/postgre_api\n        depends_on:\n            - "postgre_db"\n        container_name: cs-api-services\n        ports:\n            - "8080:80"\n        build:\n            context: .\n            dockerfile: Dockerfile\n        environment:\n            # the connection string (we use this env to pass in connectionstrings to our api)\n            ##      NOTICE 2 underscores __ here!\n            - ConnectionStrings__DefaultConnection=User ID=postgres;Password=postgres;Server=postgre_db;Port=5432;Database=SampleDbDriver; IntegratedSecurity=true;Pooling=true;\n            - ASPNETCORE_URLS=http://+:80\n        networks:\n            - dev\n\n    # the db we use to connect to   -   running on 5433\n    postgre_db:\n        image: postgres:latest\n        container_name: postgre_db\n        environment:\n            - POSTGRES_USER=postgres\n            - POSTGRES_PASSWORD=postgres\n            - POSTGRES_DB=SampleDbDriver\n        ports:\n            - "5433:5432"\n        # volume for persistand data between sessions\n        volumes:\n            - app_data:/var/lib/postgresql/data\n        networks:\n            - dev\n\n# list all our volumes and define them/name them:\nvolumes:\n    app_data:\n')),(0,o.kt)("p",null,"Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json"),". Notice we changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Server=")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," and the Port to the actual port used in the dockercompose: ",(0,o.kt)("inlineCode",{parentName:"p"},"Port=5433")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"ConnectionStrings": {\n"DefaultConnection" : "User ID=postgres;Password=postgres;Server=localhost;Port=5433;Database=SampleDbDriver; IntegratedSecurity=true;Pooling=true;"\n}\n')),(0,o.kt)("h3",{id:"the-dirty-way-to-fill-our-db"},"the dirty way to fill our db"),(0,o.kt)("p",null,"(better would be to create the db if not existing on local machine. Or maybe entityframework provides a better way)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"since the db stores fiels to the volume wa can just:\nIf we were to quickly want to test if the connection string is ok we could:")),(0,o.kt)("p",null,"Now we just need to recreate our files. (while the server is up we:)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet build\ndotnet ef database update\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"now the db should have neccessary tables created. And we can be sure the connection string is correct."),(0,o.kt)("li",{parentName:"ul"},"time to delete the defaultConnection from the appsettings again. (since the container will provide the env)")),(0,o.kt)("h2",{id:"setting-it-up-for-real"},"setting it up for real"),(0,o.kt)("p",null,"compose down to remove the old containers then rebuild from scratch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose down\ndocker-compose up --build\n")))}d.isMDXComponent=!0}}]);