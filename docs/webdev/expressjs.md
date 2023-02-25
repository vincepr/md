# Express JS
https://www.youtube.com/watch?v=SccSCuHhOw0

## :todo auth in node:
https://www.passportjs.org/docs/

# create your own server with express.js (& node.js)

# useful:
lsof -Pi :8080          // find whatever is blocking port 8080 -> kill PID

# install
npm init  
npm i express

    nmp i --save-dev nodemon  
in package.json, add "scripts":  

    {"devStart": "nodemon server.js}
- fails with .ejs fix: nodemon -e js,ejs,css,html server.js

with server.js the server we are working with.  

# basics
make express listen on port 8080

    const express = require('express')
    const app = express()
    app.listen(8080)

express to handle common html requests

- app.get
- app.post
- app.put
- app.delete
- app.patch

example that listens to '/' (on port 8080)

    app.get('/', (req, res) =>{
        console.log("logs to console in server-terminal")
        res.send('sends data to user')
    })
send Status code 500 for Internal Server Error:
- res.sendStatus(500) : sends code 500, Internal Server Error   

or we can chain together methods:
- res.status(500).send("custom error message")

we can even send some json to, for example some API

    res.json( {message: "Error"} )

send some file to download for client
    
    res.download("./pdf/example.pdf")

render out a (html) file

    res.render('index')
- default path for those view-files is folder views/index.html

# view engine
npm install pug --save | or |  npm install ejs
here with ejs rename .html to .ejs -> views/index.ejs

    const express = require('express')
    const app = express()
    app.set('view engine*, 'ejs')
    app.get('/', (req, res) =>{
        res.render('index', {info: "object with any info you want to pass to client .ejs"})
    })
    app.listen(8080)

inside of the view we can access that object  
<% means to run this enclosed code serverside %>  
<%= to output it on the page    =%>  


    <body>
        <%= info =%>
    </body>
in the above case if info would not be defined -> error.  
Workarrond: locals is always defined, can also pass default value

    <%= locals.info || 'Default value' =%>

# routers
to manage big routing paths, encapsulating becomes a necessity. To create for example a seperate file for all User related paths:

    const express = require('express')
    const app = express()
    app.get("/", (req, res) =>{
        res.render("index")
    })
    app.get("/posts", (req, res) =>{
        res.send("Post History")
    })
    app.get("/posts/new", (req, res) =>{
        res.send("User New Form")
    })
    ...
    const userRouter =require('./routes/game)
    app.use('/game', userRouter)
    app.listen(8080)

standard is folder routes with for example routes/posts.js, routes/game.js ...

    const express = require('express')
    const router = express.Router()
    router.get("/move", (req, res) =>{      
        res.send("Player move")
    })
    router.get("/new", (req, res) =>{
        // we dont need the full path /game/new, only the relative one
        res.send("New game state")
    })
    
    module.exports = router

# advanced routing

in routes/users.js  
create a new user:

    router.post("/", (req, res) =>{
        res.send("Create User")
    })

get any user (pulling id from URL). Since id could be anything dynamic we catch it with "/:varname"

    router.get("/:userID", (req, res) =>{
        req.params.userID =req.params.userID + "access like so"
        res.send("Get User With ID ${req.params.userID}")
    })
- NOTE: top gets parsed before bottom means, if we use dynamic "/:id" first nothing else becomes reachable!

update user with put:

    router.put("/:name", (req, res) =>{
            res.send("Update User with ID ${req.params.name}"
        })

delete user with delete:

    delete.put("/:name", (req, res) =>{
            res.send("Delete User with ID ${req.params.name}"
        })

since router.get(), router.put(), router.delete() is a verry common pattern we can chain them instead:


    router
        .route("/:id").
        .get((req, res) =>{
            console.log(req.user)         // was set in the middleware below
            res.send("Get user: ${req.user} with id: ${req.params.id}"
        })
        .put((req, res) =>{
            res.send("Update user: ${req.params.id}"
        })
        .delete((req, res) =>{
            res.send("Delete user: ${req.params.id}"
        })

## router.param
Runs whenever any of the  "/:id" routings above triggers:

    const userStorage[{name: "Kyle"}, {name: "Sally}

    router.param("id", (req, res, next, n)=>{
        req.user = userStorage[id]
        console.log(n)
        next()
    })

param is **midleware** running between the request beeing sent to the server and the actual response (res.send("Get..."))  
- Without a next(), where the next, pending function gets called, the script would stop after the console.log(n)
- benefits include writing the code to "calculate" req.user only once and not 3 times for each .get, .put, .delete...

# middleware example
https://www.youtube.com/watch?v=lY6icfhap2o for more indepth view.

- middleware always uses the next() part where .get, .put... mostly dont use it.

this logger just console logs the url that this request originaly comes from:

    function logger(req, res, next){
        console.log(req.originalUrl)
        next()
    }

    app.use(logger)         
    
    put this app.use(logger) above the rest if you would want to log for every request. Since middleware like every other routing runs **top to bottom!**

    to just log for destinct requests. we could put multiple middleware functions there.

        app.get("/", logger, logger (req, res) =>{
            res.render("index", {text: "default"})
        })

# rendering static files

to serve out static files like a plain index.html we dont need a full route. Instead we can call the express.static. By convenction public folder ./public/index.html , ./public/css/style.css with:

    app.use(express.static("public"))

# parsing form/JSON data with middleware

we need to parse the information sent to your server by forms or JSON requests like api calls.


    <body>
        <form action="/users" method="POST">
            <label> First Name
                <input type="text" name="firstNameXXX" value= <%= locals.firstNameXXX %>" />
            </label>
            <button type="submit">Abschicken</button>
        </form>
    <body>

```
    router.get("/new", (req, res) => {
        res.render("users/new", {firstName: "show in client as default"})
    })

    router.post("/", (req, res) =>{
        res.body.firstNameXXX
    })
```
    app.use(express.urlencoded({extended: true}))

- urlencoded allows us to access data coming from forms. The {extended: true} is just there to avoid some warnings.
- express.json() for json requests.