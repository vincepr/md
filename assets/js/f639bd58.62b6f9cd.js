"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(k,o(o({ref:t},i),{},{components:r})):n.createElement(k,o({ref:t},i))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:s,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const a={},o=void 0,l={unversionedId:"webdev/expressjs",id:"webdev/expressjs",title:"expressjs",description:"https://www.youtube.com/watch?v=SccSCuHhOw0",source:"@site/docs/webdev/expressjs.md",sourceDirName:"webdev",slug:"/webdev/expressjs",permalink:"/md/webdev/expressjs",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/webdev/expressjs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webdev",permalink:"/md/category/webdev"},next:{title:"status_http_codes",permalink:"/md/webdev/status_http_codes"}},p={},u=[{value:"create your own server with express.js (&amp; node.js)",id:"create-your-own-server-with-expressjs--nodejs",level:2},{value:"router.param",id:"routerparam",level:2}],i={toc:u};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SccSCuHhOw0"},"https://www.youtube.com/watch?v=SccSCuHhOw0")),(0,s.kt)("h2",{id:"create-your-own-server-with-expressjs--nodejs"},"create your own server with express.js (& node.js)"),(0,s.kt)("h1",{id:"useful"},"useful:"),(0,s.kt)("p",null,"lsof -Pi :8080          // find whatever is blocking port 8080 -> kill PID"),(0,s.kt)("h1",{id:"install"},"install"),(0,s.kt)("p",null,"npm init",(0,s.kt)("br",{parentName:"p"}),"\n","npm i express"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"nmp i --save-dev nodemon  \n")),(0,s.kt)("p",null,'in package.json, add "scripts":  '),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"devStart": "nodemon server.js}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"fails with .ejs fix: nodemon -e js,ejs,css,html server.js")),(0,s.kt)("p",null,"with server.js the server we are working with.  "),(0,s.kt)("h1",{id:"basics"},"basics"),(0,s.kt)("p",null,"make express listen on port 8080"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"const express = require('express')\nconst app = express()\napp.listen(8080)\n")),(0,s.kt)("p",null,"express to handle common html requests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"app.get"),(0,s.kt)("li",{parentName:"ul"},"app.post"),(0,s.kt)("li",{parentName:"ul"},"app.put"),(0,s.kt)("li",{parentName:"ul"},"app.delete"),(0,s.kt)("li",{parentName:"ul"},"app.patch")),(0,s.kt)("p",null,"example that listens to '/' (on port 8080)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"app.get('/', (req, res) =>{\n    console.log(\"logs to console in server-terminal\")\n    res.send('sends data to user')\n})\n")),(0,s.kt)("p",null,"send Status code 500 for Internal Server Error:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"res.sendStatus(500) : sends code 500, Internal Server Error   ")),(0,s.kt)("p",null,"or we can chain together methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'res.status(500).send("custom error message")')),(0,s.kt)("p",null,"we can even send some json to, for example some API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'res.json( {message: "Error"} )\n')),(0,s.kt)("p",null,"send some file to download for client"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'res.download("./pdf/example.pdf")\n')),(0,s.kt)("p",null,"render out a (html) file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"res.render('index')\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"default path for those view-files is folder views/index.html")),(0,s.kt)("h1",{id:"view-engine"},"view engine"),(0,s.kt)("p",null,"npm install pug --save | or |  npm install ejs\nhere with ejs rename .html to .ejs -> views/index.ejs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"const express = require('express')\nconst app = express()\napp.set('view engine*, 'ejs')\napp.get('/', (req, res) =>{\n    res.render('index', {info: \"object with any info you want to pass to client .ejs\"})\n})\napp.listen(8080)\n")),(0,s.kt)("p",null,"inside of the view we can access that object",(0,s.kt)("br",{parentName:"p"}),"\n","<% means to run this enclosed code serverside %>",(0,s.kt)("br",{parentName:"p"}),"\n","<%= to output it on the page    =%>  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<body>\n    <%= info =%>\n</body>\n")),(0,s.kt)("p",null,"in the above case if info would not be defined -> error.",(0,s.kt)("br",{parentName:"p"}),"\n","Workarrond: locals is always defined, can also pass default value"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<%= locals.info || 'Default value' =%>\n")),(0,s.kt)("h1",{id:"routers"},"routers"),(0,s.kt)("p",null,"to manage big routing paths, encapsulating becomes a necessity. To create for example a seperate file for all User related paths:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'const express = require(\'express\')\nconst app = express()\napp.get("/", (req, res) =>{\n    res.render("index")\n})\napp.get("/posts", (req, res) =>{\n    res.send("Post History")\n})\napp.get("/posts/new", (req, res) =>{\n    res.send("User New Form")\n})\n...\nconst userRouter =require(\'./routes/game)\napp.use(\'/game\', userRouter)\napp.listen(8080)\n')),(0,s.kt)("p",null,"standard is folder routes with for example routes/posts.js, routes/game.js ..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'const express = require(\'express\')\nconst router = express.Router()\nrouter.get("/move", (req, res) =>{      \n    res.send("Player move")\n})\nrouter.get("/new", (req, res) =>{\n    // we dont need the full path /game/new, only the relative one\n    res.send("New game state")\n})\n\nmodule.exports = router\n')),(0,s.kt)("h1",{id:"advanced-routing"},"advanced routing"),(0,s.kt)("p",null,"in routes/users.js",(0,s.kt)("br",{parentName:"p"}),"\n","create a new user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'router.post("/", (req, res) =>{\n    res.send("Create User")\n})\n')),(0,s.kt)("p",null,'get any user (pulling id from URL). Since id could be anything dynamic we catch it with "/:varname"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'router.get("/:userID", (req, res) =>{\n    req.params.userID =req.params.userID + "access like so"\n    res.send("Get User With ID ${req.params.userID}")\n})\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'NOTE: top gets parsed before bottom means, if we use dynamic "/:id" first nothing else becomes reachable!')),(0,s.kt)("p",null,"update user with put:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'router.put("/:name", (req, res) =>{\n        res.send("Update User with ID ${req.params.name}"\n    })\n')),(0,s.kt)("p",null,"delete user with delete:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'delete.put("/:name", (req, res) =>{\n        res.send("Delete User with ID ${req.params.name}"\n    })\n')),(0,s.kt)("p",null,"since router.get(), router.put(), router.delete() is a verry common pattern we can chain them instead:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'router\n    .route("/:id").\n    .get((req, res) =>{\n        console.log(req.user)         // was set in the middleware below\n        res.send("Get user: ${req.user} with id: ${req.params.id}"\n    })\n    .put((req, res) =>{\n        res.send("Update user: ${req.params.id}"\n    })\n    .delete((req, res) =>{\n        res.send("Delete user: ${req.params.id}"\n    })\n')),(0,s.kt)("h2",{id:"routerparam"},"router.param"),(0,s.kt)("p",null,'Runs whenever any of the  "/:id" routings above triggers:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'const userStorage[{name: "Kyle"}, {name: "Sally}\n\nrouter.param("id", (req, res, next, n)=>{\n    req.user = userStorage[id]\n    console.log(n)\n    next()\n})\n')),(0,s.kt)("p",null,"param is ",(0,s.kt)("strong",{parentName:"p"},"midleware"),' running between the request beeing sent to the server and the actual response (res.send("Get..."))  '),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Without a next(), where the next, pending function gets called, the script would stop after the console.log(n)"),(0,s.kt)("li",{parentName:"ul"},'benefits include writing the code to "calculate" req.user only once and not 3 times for each .get, .put, .delete...')),(0,s.kt)("h1",{id:"middleware-example"},"middleware example"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lY6icfhap2o"},"https://www.youtube.com/watch?v=lY6icfhap2o")," for more indepth view."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"middleware always uses the next() part where .get, .put... mostly dont use it.")),(0,s.kt)("p",null,"this logger just console logs the url that this request originaly comes from:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'function logger(req, res, next){\n    console.log(req.originalUrl)\n    next()\n}\n\napp.use(logger)         \n\nput this app.use(logger) above the rest if you would want to log for every request. Since middleware like every other routing runs **top to bottom!**\n\nto just log for destinct requests. we could put multiple middleware functions there.\n\n    app.get("/", logger, logger (req, res) =>{\n        res.render("index", {text: "default"})\n    })\n')),(0,s.kt)("h1",{id:"rendering-static-files"},"rendering static files"),(0,s.kt)("p",null,"to serve out static files like a plain index.html we dont need a full route. Instead we can call the express.static. By convenction public folder ./public/index.html , ./public/css/style.css with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'app.use(express.static("public"))\n')),(0,s.kt)("h1",{id:"parsing-formjson-data-with-middleware"},"parsing form/JSON data with middleware"),(0,s.kt)("p",null,"we need to parse the information sent to your server by forms or JSON requests like api calls."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<body>\n    <form action="/users" method="POST">\n        <label> First Name\n            <input type="text" name="firstNameXXX" value= <%= locals.firstNameXXX %>" />\n        </label>\n        <button type="submit">Abschicken</button>\n    </form>\n<body>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'    router.get("/new", (req, res) => {\n        res.render("users/new", {firstName: "show in client as default"})\n    })\n\n    router.post("/", (req, res) =>{\n        res.body.firstNameXXX\n    })\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"app.use(express.urlencoded({extended: true}))\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"urlencoded allows us to access data coming from forms. The {extended: true} is just there to avoid some warnings."),(0,s.kt)("li",{parentName:"ul"},"express.json() for json requests.")))}d.isMDXComponent=!0}}]);