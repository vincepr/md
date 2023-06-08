"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6138],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>N});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,N=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(N,i(i({ref:n},p),{},{components:t})):r.createElement(N,i({ref:n},p))}));function N(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={},i="Dapper",o={unversionedId:"csharp/examples/dapper",id:"csharp/examples/dapper",title:"Dapper",description:"Micro ORM. Used to",source:"@site/docs/csharp/examples/dapper.md",sourceDirName:"csharp/examples",slug:"/csharp/examples/dapper",permalink:"/md/csharp/examples/dapper",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/dapper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Minimal Api compared to MVC",permalink:"/md/csharp/api_basics"},next:{title:"MinimalAPI example project in csharp",permalink:"/md/csharp/examples/minimal_api"}},l={},c=[{value:"what dapper is not",id:"what-dapper-is-not",level:2},{value:"some examples",id:"some-examples",level:2},{value:"QueryAsync with parameters",id:"queryasync-with-parameters",level:3},{value:"QueryAsync with dynamic parameters",id:"queryasync-with-dynamic-parameters",level:3},{value:"QueryFirst or QueryFirstOrDefault",id:"queryfirst-or-queryfirstordefault",level:3},{value:"ExecuteAsync for INSERT/UPDATE/DELETE",id:"executeasync-for-insertupdatedelete",level:3},{value:"StoredProcedure",id:"storedprocedure",level:3},{value:"Transactions",id:"transactions",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dapper"},"Dapper"),(0,a.kt)("p",null,"Micro ORM. Used to "),(0,a.kt)("h1",{id:"what-it-does"},"what it does"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provides fluent interface for mapping DataReaders to objects. (instead of doing the Marshalling by hand)"),(0,a.kt)("li",{parentName:"ul"},"works across SQL Server, SQLite, MySQL, PostgresSQL..."),(0,a.kt)("li",{parentName:"ul"},"no unneccessary Memory Overhead.")),(0,a.kt)("h2",{id:"what-dapper-is-not"},"what dapper is not"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no (automatic) SQL generation from code. Like Entity Framework."),(0,a.kt)("li",{parentName:"ul"},"no Database generation. Again like Entity Framework.")),(0,a.kt)("h2",{id:"some-examples"},"some examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class Person{\n    public string Title { get; set; }\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n    public int Age { get; set; }\n}\n\nprivate const string CONNECTION_STRING = "Server=.;Database=..."\n[HttpGet("")]\npublic async Task<IActionResult> Index(){\n    var sql = @"SELECT\n                [Title],\n                [FirstName],\n                [LastName],\n                [Age]\n            FROM [Person].[Person]\n            WHERE FirstName= \'Kevin\' ";\n    using (var conn = new SqlConnection(CONNECTION_STRING)){\n        var persons = await conn.QueryAsync<Person>(sql);\n        return Ok(persons);\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using syntax and dapper take care of the .open() and .close() to the database connection."),(0,a.kt)("li",{parentName:"ul"},"We pass in a the target Object-Type as generic (here Person)")),(0,a.kt)("h3",{id:"queryasync-with-parameters"},"QueryAsync with parameters"),(0,a.kt)("p",null,"if we always use the parameters we can just pass them in wrapped in a object. either a real one that will just match for the defined ",(0,a.kt)("inlineCode",{parentName:"p"},"@firstN"),", or wrappeed in an anonymous object like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public async Task<IActionResult> Index(){\n    var sql = @"SELECT\n                [Title],\n                [FirstName],\n                [LastName],\n                [Age]\n            FROM [Person].[Person]\n            WHERE FirstName = @firstN ";\n    using (var conn = new SqlConnection(CONNECTION_STRING)){\n        var persons = await conn.QueryAsync<Person>(sql, new{firstN = "Kevin" });\n        return Ok(persons);\n    }\n}\n')),(0,a.kt)("h3",{id:"queryasync-with-dynamic-parameters"},"QueryAsync with dynamic parameters"),(0,a.kt)("p",null,'If we were to dynamically build a sql querry, like custom search interface (sort by age, name, only with tile="Dr" ...) we can use the DynamicParameters()'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[HttpGet("")]\npublic async Task<IActionResult> Index([FromQuery]string? getName){\n    var sql = @"SELECT\n                [Title],\n                [FirstName],\n                [LastName],\n                [Age]\n            FROM [Person].[Person]";\n    dynParams = new DynamicParameters();\n    if (getName != null){\n        sql += " WHERE FirstName = @firstName";\n        dynParams.Add("firstName", getName);\n    }\n\n    using (var conn = new SqlConnection(CONNECTION_STRING)){\n        var persons = await conn.QueryAsync<Person>(sql, dynParams);    \n        return Ok(persons);\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if we pass in the 'empty' dynParams to the QueryAsyn nothing will happen and the normal sql gets used. Otherwise it will search for the '/api?getName=xzy' xzy-FirstNamed persons.")),(0,a.kt)("h3",{id:"queryfirst-or-queryfirstordefault"},"QueryFirst or QueryFirstOrDefault"),(0,a.kt)("p",null,"useful if we just need to chick if a value exists (at all) in the db."),(0,a.kt)("h3",{id:"executeasync-for-insertupdatedelete"},"ExecuteAsync for INSERT/UPDATE/DELETE"),(0,a.kt)("p",null,"Parameterized Queries to restrict against sql injections."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"INSERT")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public async Task DemoINSERT(string CONNECTION_STRING){\n    await using var conn = new SqlConnection(CONNECTION_STRING);\n\n    var sql = @"INSERT INTO [dbo].[Person].[Person]\n                ([Title],\n                [FirstName],\n                [LastName],\n                [Age])\n            VALUES\n                (@title, @firstName, @lastName, @age)";\n    var newUser = new User(){\n        Title = "Doctor", FirstName = "Who", LastName = "The Doctor", Age = 99\n    };\n    var result = await conn.ExecuteAsync(sql, newUser);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UPDATE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public async Task DemoUPDATE(string CONNECTION_STRING){\n    await using var conn = new SqlConnection(CONNECTION_STRING);\n\n    var sql = @"UPDATE [dbo].[Person].[Person]\n                SET LastName = @lastName\n                WHERE FirstName = @firstName";\n    var result = await conn.ExecuteAsync(sql, \n        new{ firstName "Who" , lastName="Who" });\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DELETE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public async Task DemoDELETE(string CONNECTION_STRING){\n    await using var conn = new SqlConnection(CONNECTION_STRING);\n\n    var sql = @"DELETE FROM [dbo].[Person].[Person]\n                WHERE FirstName = @firstName";\n    var result = await conn.ExecuteAsync(sql, new{ firstName "Who" });\n}\n')),(0,a.kt)("h3",{id:"storedprocedure"},"StoredProcedure"),(0,a.kt)("p",null,"Once it is more than just a handfull of Sql Querries (they also might be more optimized against) we can use StoredProcedures instead. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vincepr/CS_MinimalApiApp"},"minimalApi example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public async Task DemoStoredProcedure(string CONNECTION_STRING){\n    await using var conn = new SqlConnection(CONNECTION_STRING);\n    var nameOfProcedure = "dbo.LastNameList";\n    var result = await conn.QueryAsync<string>(sql, nameOfProcedure: CommandType.StoredProcedure);\n}\n')),(0,a.kt)("h3",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"great way to make sure everything finished correctly before any changes are made permanent to the db."),(0,a.kt)("p",null,"Or if the sql execution sends back something and only if that is correct/what we expect we commit this execution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[HttpGet("")]\npublic async Task<IActionResult> DemoWithoutTransactions(){\n    var sql = @"INSERT INTO [dbo].[Users]\n                    ([SomeName])\n                VALUES\n                    (@someName)";\n    using (var conn = new SqlConnection(CONNECTION_STRING)){\n        await conn.OpenAsync();\n        using (var transaction = conn.BeginTransaction()){\n            for (var x = 0; x < 1000; x++){\n                // we throw some error without the transaction the first 250 inserts would be permanent in the db => bad!\n                if (x == 250) throw new Exception("Some Error happened");\n                await connection.ExecuteAsync(\n                    sql,\n                    new {someName = $"testing{DateTime.UtcNow.Ticks}"},\n                    transaction: transaction\n                );\n            }\n            transaction.Commit();   // only if all 1000 inserts succeeded will we commit, otherwise it never gets put in the db.\n        }\n        return Ok();\n    }\n}\n')))}u.isMDXComponent=!0}}]);