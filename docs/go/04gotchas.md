# Gotchas
Just a few notes, where go didnt behave as expcted.


### variable shadowing
```go
func shadow(){
    x := 99
    fmt.Println(x)

    if true {
        fmt.Println(x)
        x := 2
        fmt.Println(x)
    }
    fmt.Println(x)

    if true {
        fmt.Println(x)
        x = 23
        fmt.Println(x)
    }
    fmt.Println(x)
}
// 99 99 2 99 99 23 23
```

### panicking maps
```go
var x map[string]bool

x["isHome"]=true    //panics

y :=make(map[string]bool)
y["isHome"]=true    //works

z :=map[string]bool{}
z["isHome"]=true    //should also work
```

### pointers
```go
func one(a *int){
    x := 101
    a = &x
}
func two(a *int){
    x := 99
    *a=x
}
func tre(a int){
    x :=12
    a=x
}

i :=100
fmt.Print(i)

one(&i)
fmt.Print(i)

two(&i)
fmt.Print(i)

tre(i)
fmt.Print(i)

// 100 100 99 99
```
- one: in go a is a copy and does NOT allow changing the pointer,
- two: BUT go only allows for the pointer to point at new memory.
- tre: new value of a stays in the scope of the block (angled-brackets:{})


### Zero Values in enums
Do NOT use Zero values in enums. This might lead to unexpected behaviors down the line, especially when including databases, json etc. where a undefined might be a 0.
```go
// BAD:
const(
    Summer int  = 0
    Autumn      = 1
    Winter      = 2
    Spring      = 3
)

// Instead do it like this:
const(
    Unknown int = 0
    Summer      = 1
    Autumn      = 2
    Winter      = 3
    Spring      = 4
)
```