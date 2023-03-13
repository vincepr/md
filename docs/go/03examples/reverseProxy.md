# Reverse Proxy with Login
minimal example of a reverse proxy to put our app(s) behind so we can use one login for it all.

- This is just a early snapshot, before implementing jwt, env-secret...

- Only using standard library packages, vanilla js
- this just exists to build upon, or as a quick reminder to refresh my memory

## golang - server
`./main.go`
```go
package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"
	"time"
)

/*
* SETUP - initializing defaults and checking urls
 */
var (
	port 		= flag.String("port", "3002", "the port this proxy should listen for requets from")
	name 		= flag.String("name", "vince", "the address and port of the server we proxy to")
	password 		= flag.String("pw", "123", "the address and port of the server we proxy to")
	urlProxy 	= flag.String("url", "http://127.0.0.1:3001", "the address and port of the server we proxy to")
	
)
const cookieToken string  = "123asdfasdoi123"

// read env values, atm just using flags -port -url etc
func getEnvValues() {
	flag.Parse()
	formatUrl := func(str *string){
		if !strings.HasPrefix(*str, "http://") && !strings.HasPrefix(*str, "https://"){
			*str = "http://" + *str
			log.Println("adding http:// str the URL -str:", *str)
		}
	}
	formatUrl(urlProxy)

	fmt.Println("Server running on port: :", *port)
	fmt.Println("Redirecting to:", *urlProxy)
	fmt.Println("name: ", *name)
	fmt.Println("pw", *password)
}


func main(){
	// load our setup, :todo repalce this with env-values
	getEnvValues()

	// create our routes:
	mux := http.NewServeMux()
	mux.Handle("/login/", http.StripPrefix("/login/", http.FileServer(http.Dir("./public"))))
	mux.HandleFunc("/api", handleLoginRequest)
	mux.HandleFunc("/", handleRequestAndRedirect)
	mux.HandleFunc("/logout", handleLogoutRequest)

	err := http.ListenAndServe(":"+*port, mux)
	if err != nil{
		panic(err)
	}
}


/*
*	Handle Login/Logout
*/

type LoginRequest struct{
	Name		string `json:"name"`
	Password	string `json:"password"`
}

func handleLoginRequest(rw http.ResponseWriter, req *http.Request){
	writeBadRequest := func(){
		rw.WriteHeader(http.StatusBadRequest)
		rw.Write([]byte("400 - Bad Request"))
	}

	if req.Method != "POST"{
		writeBadRequest()
		return
	} 

	var request LoginRequest
	if err := json.NewDecoder(req.Body).Decode(&request); err != nil{
		writeBadRequest()
		return
	}

	if(request.Name =="vince" && request.Password=="123"){

		// grant our cookie and then redirect to basepath
		log.Println("login sucess - cookie granted")
		addCookie(rw, "LoginToken", cookieToken, 2*time.Minute)

		http.Redirect(rw, req, "/", http.StatusSeeOther)
		//rw.Write([]byte("sending cookie over, have fun"))

	} else {

	fmt.Println(" :todo wrong pw")
		log.Printf("name: %v pw: %v \n",request.Name, request.Password)
		writeBadRequest() 
	}
	
}

// we use the cookie to store our credibility into, ;todo repalce with JWT
func addCookie(rw http.ResponseWriter, name, value string, duration time.Duration){
	expire := time.Now().Add(duration)
	cookie := http.Cookie{
		Name: name,
		Value: value,
		Expires: expire,
		Path: "/",
	}
	http.SetCookie(rw, &cookie)
}

// logout just removes the cookie ( creating a  new one to overwrite old, setting negative time)
func handleLogoutRequest(rw http.ResponseWriter, req *http.Request){
	http.SetCookie(rw, &http.Cookie{
		Name: "LoginToken",
		Expires: time.Now().Add(-time.Hour),
	})
	rw.WriteHeader(http.StatusOK)
	rw.Write([]byte("Logout Sucessful"))
}


/*
*	redirect logic depending if were logged in or not
*/

// redirect requests to the appropriate url vs proxy
func handleRequestAndRedirect(rw http.ResponseWriter, req *http.Request) {
	validToken := false
	cookie, err := req.Cookie("LoginToken")
	if err != nil {
		validToken = false
	} else if cookie.Value==cookieToken{
		validToken = true
	}

	if !validToken {
		// not logged-in so we redirect to login page
		http.Redirect(rw, req, "/login", http.StatusSeeOther)
	} else {
		// logged-in so we proxy forward to our proxy server
		url := *urlProxy
		log.Println("we serve proxy to:",url)

		serveReverseProxy(url, rw, req)
	}
}


/*
*	the actual reverse proxy
*/
func serveReverseProxy(to string, rw http.ResponseWriter, req *http.Request){
	url, err := url.Parse(to)
	if err != nil{
		panic(err)
	}
	
	proxy := httputil.NewSingleHostReverseProxy(url)

	// update headers to allow for ssl redirection
	//req.URL.Host = url.Host
	//req.URL.Scheme = url.Scheme
	req.Header.Set("X-Forwarded-Host", req.Header.Get("Host"))
	//req.Host = url.Host

	proxy.ServeHTTP(rw, req)
}
```
# minimal html and js for a login page
`./public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        label {
            display: block;
            font: 0.9rem 'Fira Sans', sans-serif;
        }
        input[type='submit'],
        label {
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <h1>Login:</h1>
    <div id="app" class="app">
        <div>
            <label for="username">Username:</label>
            <input id="username" type="text" id="username" name="username">
        </div>
        
        <div>
            <label for="pass">Password (8 chars minimum):</label>
            <input id="password" type="password" id="pass" name="password" autofocus>
        </div>
        
        <input id="submit" type="submit" value="Sign in">
    </div>
    <script defer type="text/javascript" src="./main.js"></script> 
</body>
</html>
```
`./public/main.js`
```js
function App(){
    console.log("js running")
    let $name = document.querySelector("#username")
    let $password = document.querySelector("#password")
    let $submit = document.querySelector("#submit")
    $submit.addEventListener("click", handleSubmit)

    function handleSubmit(){
        let name = $name.value
        let pass = $password.value
        loginRequest(name, pass)
    }
}
App()


function loginRequest(name, pass){
    fetch("/api",{
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({name: name, password: pass})
            })
    .then(res => {
        if(!res.ok) throw Error(res.statusText)
        console.log(res)
        if (res.redirected) {
            window.location.href = res.url;
        }
        return res
    } )
    .then(data => console.log(data))
    .catch(function(res){ console.log(res) })
}
```