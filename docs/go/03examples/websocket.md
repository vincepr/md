# Websockets in go
- using the std lib extension for websockets: `golang.org/x/net/websocket`
- the mux/websocket library is archived, so no clear best library currently found, so the default one is probably worth a shot till that one is not good enough for the project.

## Server
```go
package main

import (
	"fmt"
	"log"
	"net/http"

	"golang.org/x/net/websocket"
)

func Echo(ws *websocket.Conn) {
	var err error
	for {
		var reply string
		if err = websocket.Message.Receive(ws, &reply); err != nil{
			log.Println("WS-Error Receive() :", err)
			break
		}
		fmt.Println("Incoming -> " + reply)

		msg := "Answer back for client" + reply +" have fun !"
		fmt.Println("Sending -> ", msg)

		if err = websocket.Message.Send(ws, msg); err != nil{
			log.Println("WS-Error Send()", err)
			break
		}
	}
}

func main() {
	filePath := "./public/"
	listenPort := ":"+"5555"
	fmt.Println("Serving on", listenPort)
	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir(filePath)))
	mux.Handle("/ws", websocket.Handler(Echo))
	if err := http.ListenAndServe(listenPort, mux); err != nil{
		log.Fatal("unable to serve: ", listenPort, err)
	}
}
```


## Client
- `./public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Websocket-Test</title>
</head>
<body>
    <script defer type="text/javascript" src="./client.js"></script> 
</body>
    <h3> Websocket Echo Test</h3>
    <form>
        <p>
            Message: <input id="message" type="test" value="send a msg...">
        </p>
    </form>
    <button onclick="send();">Send Message</button>
</html>
```


- `./public/client.js`
```js
var url = "ws://vprobst.de:5555/ws"
ws = new WebSocket(url);

// gets triggered after connection gets accepted by the server
ws.onopen = () => {
    console.log("connected to: "+ url);
}

// gets triggered after the connection has closed
ws.onclose = (ev) => {
    console.log("connection close with: " + ev.code);
}

// gets triggered after receiving a message von the server
ws.onmessage = (ev) => {
    console.log("message received: " + ev.data);
}

// gets triggered on errors
ws.onerror = (ev) => {
    console.log("error with the websocket: "+ ev)
}

// onclick callback to send data to our server
function send() {
    var msg = document.getElementById("message").value;
    ws.send(msg);
}
```