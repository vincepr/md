"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[627],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const s={},i="MinimalAPI example project in csharp",l={unversionedId:"csharp/api",id:"csharp/api",title:"MinimalAPI example project in csharp",description:"on github",source:"@site/docs/csharp/api.md",sourceDirName:"csharp",slug:"/csharp/api",permalink:"/md/csharp/api",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wilkommen",permalink:"/md/"},next:{title:"Dapper",permalink:"/md/csharp/dapper"}},o={},c=[{value:"Infos",id:"infos",level:2},{value:"Notes on Setting up the Project",id:"notes-on-setting-up-the-project",level:2},{value:"SQL Server Database Project",id:"sql-server-database-project",level:3},{value:"Class Library",id:"class-library",level:3},{value:"Importing some packages/libraries",id:"importing-some-packageslibraries",level:4},{value:"Data access library",id:"data-access-library",level:3},{value:"the web API",id:"the-web-api",level:3},{value:"Program.cs",id:"programcs",level:4}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minimalapi-example-project-in-csharp"},"MinimalAPI example project in csharp"),(0,r.kt)("p",null,"on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vincepr/CS_MinimalApiApp"},"github")),(0,r.kt)("h2",{id:"infos"},"Infos"),(0,r.kt)("p",null,"Goal is learning some Csharp basics, about APIs, SQL-Integration, Swagger etc. Coding along loosely (at least in the beginning) with the Youtube Project from ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=dwMFg6uxQ0I"},"IAmTimCorey")),(0,r.kt)("h2",{id:"notes-on-setting-up-the-project"},"Notes on Setting up the Project"),(0,r.kt)("p",null,"First we create the ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core Web Api")," then the ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL Server Database Project")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"class library")," to define the shape of our data."),(0,r.kt)("h3",{id:"sql-server-database-project"},"SQL Server Database Project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"had to change to SQL Server 2019, to get it to work in Win11 (might have had to do something with disk sector size for win11 having changed the default settings, but whatever for now)"),(0,r.kt)("li",{parentName:"ul"},"add the Tables we want"),(0,r.kt)("li",{parentName:"ul"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},"StoredProcedures")," for all our incoming crud requests. (more optimized than just plain incoming sql queries)\nexample for the ",(0,r.kt)("inlineCode",{parentName:"li"},"spUser_Update.sql")," (User is in squareBrackets because it is a reserved keyword)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE [dbo].[spUser_GetAll]\nAS\nBEGIN\n    SELECT Id, FirstName, LastName\n    FROM dbo.[User];\nEND\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE [dbo].[spUser_Get]\n    @Id int\nAS\nBEGIN\n    SELECT Id, FirstName, LastName\n    FROM dbo.[User]\n    WHERE Id = @Id;\nEND\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE [dbo].[spUser_Insert]\n    @FirstNAme nvarchar(50),\n    @LastName nvarchar(50)\nAS\nBEGIN\n    INSERT INTO dbo.[User] (FirstName, LastName)\n    VALUES (@FirstName, @LastName);\nEND\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE [dbo].[spUser_Update]\n    @Id int,\n    @FirstName nvarchar(50),\n    @LastName nvarchar(50)\nAS\nBEGIN\n    UPDATE dbo.[USER]\n    SET Firstname = @FirstName, LastName = @LastName\n    WHERE Id = @Id;\nEND\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE [dbo].[spUser_Delete]\n    @Id int\nAS\nBEGIN\n    DELETE\n    FROM dbo.[User]\n    WHERE Id = @Id;\nEND\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"next we a ",(0,r.kt)("inlineCode",{parentName:"li"},"Script")," to the database-project. A post-deployment-script to run after the db is up.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/*  if were empty we fill some sample data for testing */\nif not exists (select 1 from dbo.[User])\nbegin\n    insert into dbo.[User] (FirstName, LastName)\n    values('Tim', 'Hames'),('Bob', 'Ross'),('Amber','Spender'),('Cameron','Griffin');\nend\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"finally we rightclick the db-project and ",(0,r.kt)("inlineCode",{parentName:"li"},"Publish"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Edit - Browse - Local - Select the local MSSQLLocalDB"),(0,r.kt)("li",{parentName:"ul"},"give the local DB a name then ",(0,r.kt)("inlineCode",{parentName:"li"},"Save Profile As")," into the db-project folder. Now we can re-publish after making changes etc.")))),(0,r.kt)("p",null,"The DB should be ready now. We can View - SQL Server Object Explorer. Open the localdb - Databases - nameOfDb - Tables - dbo.User rightclick and showData to check if it worked."),(0,r.kt)("h3",{id:"class-library"},"Class Library"),(0,r.kt)("p",null,"We create the class library and name it DataAccess. Will define the shape of the data in our App/Api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"namespace DataAccess.Models;\ninternal class User{\n    public int Id { get; set; }\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n}\n")),(0,r.kt)("h4",{id:"importing-some-packageslibraries"},"Importing some packages/libraries"),(0,r.kt)("p",null,"rightClick Dependencies in the DataAccess class library - Manage NuGet Packages. We add"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dapper (Micro-ORM supporting different SQL Servers)"),(0,r.kt)("li",{parentName:"ul"},"System.Data.SqlClient"),(0,r.kt)("li",{parentName:"ul"},"Microsoft.Extensions.Configuration.Abstractions")),(0,r.kt)("h3",{id:"data-access-library"},"Data access library"),(0,r.kt)("p",null,"Sq\xf6DataAccess.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using Dapper;\nusing System.Data;\nusing Microsoft.Extensions.Configuration;\nusing System.Data.SqlClient;\n\nnamespace DataAccess.DbAccess;\npublic class SqlDataAccess\n{\n    // _ to indicate private vars coming over from Dependency Injection\n    private readonly IConfiguration _config;\n\n    public SqlDataAccess(IConfiguration config)\n    {\n        _config = config;\n    }\n\n    public async Task<IEnumerable<T>> LoadData<T, U>(\n        string storedProcedure,             // storedProcedure name in our db\n        U parameters,                       // (optional) params like the {id} for /Get?id=123\n        string connectionId = "Default")    // info about what db-name/port/etc we are connecting to\n                                            //  this is stored in the appsettings.json of our Api\n    {\n        // with the using here we garante (graceful) conn.Close() when leaving the scope\n        // so we garantee 100%? were not leaving connections to the db open.\n        using IDbConnection conn = new SqlConnection(_config.GetConnectionString(connectionId));\n        return await conn.QueryAsync<T>(storedProcedure, parameters, commandType: CommandType.StoredProcedure);\n    }\n\n    public async Task SaveData<T>(\n        string storedProcedure,\n        T parameters,\n        string connectionId = "Default")\n    {\n        using IDbConnection conn = new SqlConnection(_config.GetConnectionString(connectionId));\n        await conn.ExecuteAsync(storedProcedure, parameters, commandType: CommandType.StoredProcedure);\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we extract out our interfaces for easy conveniant use as dependency injection. In Visual Studio we can just select the public class ",(0,r.kt)("inlineCode",{parentName:"li"},"SqlDataAccess")," and then press ctrl + dot then ",(0,r.kt)("inlineCode",{parentName:"li"},"extract interface")," to autogenerate:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'namespace DataAccess.DbAccess\npublic interface ISqlDataAccess\n{\n    Task<IEnumerable<T>> LoadData<T, U>(string storedProcedure, U parameters, string connectionId = "Default");\n    Task SaveData<T>(string storedProcedure, T parameters, string connectionId = "Default");\n}\n// here we could easy switch to another db just by implementing another interface like this (for mongodb/redis for ex.)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"now we implement all our usecases:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'namespace DataAccess.Data;\npublic class UserData\n{\n    private readonly ISqlDataAccess _db;\n\n    public UserData(ISqlDataAccess db)\n    {\n        _db = db;\n    }\n\n    public Task<IEnumerable<UserModel>> GetUsers() =>\n        _db.LoadData<UserModel, dynamic>("dbo.spUser_GetAll", new { });\n\n    public async Task<UserModel?> GetUser(int id)\n    {\n        var res = await _db.LoadData<UserModel, dynamic>("dbo.spUser_Get", new { Id = id });\n        return res.FirstOrDefault();        // default for our UserModel is null\n    }\n\n    public Task InsertUser(UserModel user) => \n        _db.SaveData("dbo.spUser_Insert", new {user.FirstName, user.LastName});\n\n    public Task UpdateUser(UserModel user) =>\n        _db.SaveData("dbo.spUser_Update", user);\n\n    public Task DeleteUser(int id) =>\n        _db.SaveData("dbo.spUser_Delete", new {Id=id});\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"then we again extract this as an interface for use in dependency injection. (autogenerated with ",(0,r.kt)("inlineCode",{parentName:"li"},"extract interface"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public interface IUserData\n{\n    Task DeleteUser(int id);\n    Task<UserModel?> GetUser(int id);\n    Task<IEnumerable<UserModel>> GetUsers();\n    Task InsertUser(UserModel user);\n    Task UpdateUser(UserModel user);\n}\n")),(0,r.kt)("h3",{id:"the-web-api"},"the web API"),(0,r.kt)("p",null,"View - SQL Server Object Explorer - Sql Server - localdbxyz - Cs_MinimalApiDB - rightClick Properties - ConnectionString. Should give something like: ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Cs_MinimalApiDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"now we add the above ConnectionString to our ",(0,r.kt)("inlineCode",{parentName:"li"},"appsettings.json"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"note here formating of ",(0,r.kt)("inlineCode",{parentName:"li"},"Trust Server Certificate=False")," had to be changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"TrustServerCertificate=False")," and the same for ",(0,r.kt)("inlineCode",{parentName:"li"},"Multi Subnet Failover=False")," (removed empty spaces) for it to work")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  },\n  "AllowedHosts": "*",\n  "ConnectionStrings": {\n    "Default": "Data Source=(localdb)\\\\MSSQLLocalDB;Initial Catalog=Cs_MinimalApiDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rightClick ",(0,r.kt)("inlineCode",{parentName:"li"},"Dependencies")," then ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Project Reference")," and add the previous generated class Lib DataAccess")),(0,r.kt)("h4",{id:"programcs"},"Program.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"// we define some top level imports for our whole api project here (or refactor them to own file 'GlobalUsings.cs')\nglobal using DataAccess.Data;\nglobal using DataAccess.Models;\n// normal usings\nusing CS_MinimalApi;        // importing our Handlers from next step\nusing DataAccess.DbAccess;  // importing Sql Interfaces\n\n//  the WebApp builder:\nvar builder = WebApplication.CreateBuilder(args);\n\n// Add services to the container.\n// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\n// dependency inject our Interfaces into the app.\n// This way we can use for example our UserData down in our RouteHandlers\nbuilder.Services.AddSingleton<ISqlDataAccess, SqlDataAccess>();\nbuilder.Services.AddSingleton<IUserData, UserData>();\n\n\nvar app = builder.Build();\n\n// Enable Swagger for DevEnv only\nif (app.Environment.IsDevelopment())\n{\n    app.UseSwagger();\n    app.UseSwaggerUI();\n}\n\napp.UseHttpsRedirection();\n\n// Route our Handlers, separated to its own static Class\napp.SetupApiRoutes();\n\napp.Run();\n")),(0,r.kt)("h4",{id:""}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Runtime.CompilerServices;\n\nnamespace CS_MinimalApi;\n/*\n    All Handlers that handle any Routes like /api or /api/login etc come here.\n    - midleware like loggers could be used in here aswell\n    - Dapper? (as i understand at the moment) does most of the heavy lifting here, like\n        - Automagically serialize and deserialize to and from json.\n        - TODO: might wanna read up on that at some later point\n */\n\npublic static class Api\n{\n    public static void SetupApiRoutes(this WebApplication app)\n    {\n        // mapping the Routes/enpoints to the Api methods\n        app.MapGet("/Users", Handle_GetUsers);\n        app.MapGet("/Users/{id}", Handle_GetUser);      // id from the Url (because no body for Getrequest)\n        app.MapPost("/Users", Handle_InsertUser);       // user in body - body gets passed down and json parsed automagically using Dapper!\n        app.MapPut("/Users", Handle_UpdateUser);        // user in body\n        app.MapDelete("/Users", Handle_DeletetUser);    // id in json from in body\n    }\n\n    private static async Task<IResult> Handle_GetUsers(IUserData data)\n    {\n        try\n        {\n            return Results.Ok(await data.GetUsers());\n        }catch (Exception ex)\n        {\n            return Results.Problem(ex.Message); // just throw the error back to client\n        }\n    }\n\n    private static async Task<IResult> Handle_GetUser(int id, IUserData data)\n    // we get the id from the Url\n    // and the data from the singleton we injected into app in Programm.Main\n    {\n        try\n        {\n            var res = await data.GetUser(id);\n            if (res == null) return Results.NotFound();\n            return Results.Ok(res);\n        }\n        catch (Exception ex)\n        {\n            return Results.Problem(ex.Message);\n        }\n    }\n\n    private static async Task<IResult> Handle_InsertUser(UserModel user, IUserData data)\n    // we get the UserModel from the Body of the http-request (the data again from the singleton)\n    {\n        try\n        {\n            await data.InsertUser(user);\n            return Results.Ok();\n        }\n        catch (Exception ex)\n        {\n            return Results.Problem(ex.Message);\n        }\n    }\n\n    private static async Task<IResult> Handle_UpdateUser(UserModel user, IUserData data)\n    {\n        try\n        {\n            await data.UpdateUser(user);\n            return Results.Ok();\n        }\n        catch (Exception ex)\n        {\n            return Results.Problem(ex.Message);\n        }\n    }\n\n    private static async Task<IResult> Handle_DeletetUser(int userId, IUserData data)\n    {\n        try\n        {\n            await data.DeleteUser(userId);\n            return Results.Ok();\n        }\n        catch (Exception ex)\n        {\n            return Results.Problem(ex.Message);\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);