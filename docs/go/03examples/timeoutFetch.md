# Timeout - Context package

### Timeout with the context-package
- handling Timout in a fetch request, ex. some Http request on another external server, where we do not know when or if we will get a reply.

```go
package main

import (
	"context"
	"fmt"
	"log"
	"time"
)

func main(){
	timerStart := time.Now()
	ctx := context.Background()
	userId := 123
	val, err := fetchUserData(ctx, userId)
	if err != nil{
		log.Fatal(err)
	}
	fmt.Println("Fetched Data: ", val)
	fmt.Println("it took: ", time.Since(timerStart))
}

type Response struct{
	value string
	err error
}

func fetchUserData(ctx context.Context, userId int) (string, error){
	timeOutLimit := time.Millisecond *600
	ctx, cancel := context.WithTimeout(ctx, timeOutLimit)
	defer cancel()													//cancel the timeout-counter on success

	responseChannel := make(chan Response)
	go func(){
		val, err := fetchSomethingSlow()
		responseChannel <- Response{
			value: val,
			err: err,
		}
	}()

	for {
		select{
			case <- ctx.Done():
				return "", fmt.Errorf("Error: Timeout, fetching data took to long.")
			case res := <- responseChannel:
				return res.value, res.err
		}
	}
}

func fetchSomethingSlow() (string, error){
	time.Sleep(time.Millisecond * 1500)
	return "<http>Hello World!</http>", nil
}
```

### Shared State with the context-package
- store variables in context.
- so we can create some data that all our go-methods can share, a bit like `[state, setState] = useState()`

```go
func main(){
	timerStart := time.Now()

	key, value := "foo", "currentState"
	ctx := context.WithValue(context.Background(), key, value)
	userId := 123
	val, err := fetchUserData(ctx, userId)
	if err != nil{
		log.Fatal(err)
	}
	fmt.Println("Fetched Data: ", val)
	fmt.Println("it took: ", time.Since(timerStart))
}

func fetchUserData(ctx context.Context, userId int) (string, error){
	state := ctx.Value("foo")
	fmt.Println(state)
	timeOutLimit := time.Millisecond *600
	ctx, cancel := context.WithTimeout(ctx, timeOutLimit)
	defer cancel()													//cancel the timeout-counter on success

	responseChannel := make(chan Response)
	go func(){
		val, err := fetchSomethingSlow()
		responseChannel <- Response{
			value: val,
			err: err,
		}
	}()

	for {
		select{
			case <- ctx.Done():
				return "", fmt.Errorf("Error: Timeout, fetching data took to long.")
			case res := <- responseChannel:
				return res.value, res.err
		}
	}
}
```
