# Js async

- quick lookup for js implementations for when i need them

## Callback Function
- function that is performed after another function has completed.

```js
//html
<button class="clickMe">Click Me</button>

//js
const btn = document.querySelector(".clickMe");

// implementation without a callback:
function wasClicked(){
    console.log("was clicked")
}
btn.addEventListener("click", wasClicked)

// implementation with a callback:
btn.addEventListener("click", () => {
  console.log("was clicked")
})
```

## Promises in JS
- cleaner way to write asynchronous code
- a promise is an object that returns a value that you expect/hope to see in the future, but have no access to at the moment (HTTP-request, userimput, API-call ....).
- There are 3 states of the Promise object:
    - **Pending:** initial state
    - **Resolved:** completed the promise
    - **Rejected:** failed to complete the promise

```js
// example stacking callbacks the BAD! way:
setTimeout(() => {
    console.log("loading stuff took 5 Seconds...")
    setTimeout(() => {
        console.log("done stuff for 3 more Seconds..")
            setTimeout(() => {
            console.log("it took 2 seconds to prepare, finishing in 1 more.")
            setTimeout(() => {
                console.log("finally done with everything!")
            }, 1000)
        }, 1000)
    }, 3000)
}, 5000)
```

- basic structure:

```js
const promise = new Promise((resolve, reject) => {
    let condition

    if(condition){
        resolve("Promise was successfully")
    } else {
        reject("Promise is rejected")
    }
})
```

- rewrite example
```js
function addToQueue(timeItTakes, todo){
    return new Promise((resolve, reject) => {
        if(todo){
            setTimeout(() => {
                console.log(todo)
                resolve()
            }, timeItTakes)
        } else {
            reject("cant do nothing")
        }
    })
}


addToQueue(5000, "loading stuff took 5 Seconds...")
    .then(response => addToQueue(3000, "done stuff for 3 more Seconds.."))
    .then(res => addToQueue(2000, "it took 2 seconds to prepare, finishing in 1 more."))
    .then(res => addToQueue(1000, "finally done with everything!"))
    .catch(err => console.log(err)) // will catch errors in any of the above promises
```

- example of fetching some Data
```js
const promise = fetch("https://getweather.com/api/location=leipzig")

promise
    .then(res => res.json())
    .then(data => console.log(`weather in Leipzig is ${data.description} and Temperature is ${data.temp.celsius}°C`))
    .catch(err => console.error(err))
```

## fetch request - GET request
- small working fetch request
```js
fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```
- the above will not catch HTTP errors such as 400, since we will get a "response", so we add the res.ok check
```js
fetch("https://type.fit/api/quotes")
    .then(response =>{
        if(!respone.ok) throw Error(response.statusText)
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
```

## async
- allows to write asynchronous code in a more human style compared to promises
- all we have to do is write the word async before a function and it returns a promise of whatever return value it had before
- try{} catch{} finally {} for error handling
```js 

// the above fetch-request rewritten:
const fetchData = async () => {
  try {
    const quotes = await fetch("https://type.fit/api/quotes")
    const response = await quotes.json()
    console.log(response)
  } catch (error) console.log(error)
}
fetchData()
```
## await
- the await makes JS wait untill a promise setlles and returns its result

```js
function delay() {
    let time = Math.random()*3000
    setTimeout(function() {
        //your code to be executed after 1 second
    }, time)
    return time/1000
}

async function fetchJuice(name){
    const table = {
        orange: "orange-juice",
        peach: "peach-juice",
        strawberry: "strawberry-juice",
    }
    let time = await delay()

    console.log("fetched: "+table[name]+ `in ${time} seconds`)
    return table[name]
}
fetchJuice("strawberry").then(console.log)

const mixJuices = async() => {
    const juice1 = fetchJuice("orange")
    const juice2 = fetchJuice("peach")
    const mix = await Promise.all([juice1, juice2])    //this will wait for all the promises of the fetchJuice juices to resolve
    return mix
}
mixJuices().then(console.log)
```

```js
// additional to iterate
const fruit = ["peach", "orange", "strawberry"]

const fruitLoop = async() =>{
    for await (let flavor of fruit){ console.log(flavor)}
}

const fruitInspection = async () =>{
    if (await getFruit("peach") === "peach-juice"){
        console.log("real peach")
    }
}
```

# POST request

```js
// fill our data we want to post
const update = {
    title: "blogpost by vincepr",
    body: "the most brilliant essay to ever be written...",
    userId: 123,
}

// get Post-request format ready
const options = {
    method: "POST",
    headers: {
        "Concent-Type": "appliaction/json",
    },
    body: JSON.stringify(update),
}

// communicate with the api
fetch("https://someblog.com/api/posts", options)
    .then(data => {
        if(!data.ok) throw Error(data.status)
        return data.json()
    })
    .then(update => {
        console.log(update)
        //show new blog on the ui etc...
    })
    .catch(err => console.error(err))
```
- notice endpoints may change with time and API's may be restructured. So put all your fetch calls together for easier access.


