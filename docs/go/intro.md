# notes while learning golang
- Ctrl + Enter to autoformat whith gofmt Shift+Enter or `go run .` to quickly run code

## 1. Packages, variables and functions
### variables, constants
```go
var x, y, z bool
const Num1, Num2 int = 8 , 99
// in functions we can use :=
func main {
    itsaInt := 1
    itsaFloat := 1.0
    mix1, mix2, mix3 := "hello", 1, true
}
```
- basic types
    - bool

    - string

    - int  int8  int16  int32  int64
    - uint uint8 uint16 uint32 uint64 uintptr

    - byte // alias for uint8

    - rune // alias for int32 // represents a Unicode code point

    - float32 float64

    - complex64 complex128
- if declared wihtout explicit initial value, they are given their zero value: `false, 0 and emptystring: ""`

### Type conversions
```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)

i := 42
f := float64(i)
u := uint(f)
```
### import syntax
```go
package main

import (
    "fmt"
    "math"
    "math/rand"
)
func main(){
	var rng float64 = float64( rand.Intn(10) )
    fmt.Println("Random numer is: ", rng, "\n sqrt of it is: ", math.Sqrt(rng) )
}
```

### functions

```go
func swap(x, y string) (string, string) {
	return y, x
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}
```

## 2. Flow control statments
###  for loop 
- there is only one loop, the for-loop 
```go
sum := 0
for i := 0; i < 10; i++ {
	sum += i
}
// "while" loop
sum := 1
for sum < 1000 {
    sum += sum
}
```
#### Range loop
- the range form of the for loop iterates over a slice or map
- when ranging over a slice 2 values are returned each iteration, first index, second a **copy** of the element
```go
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
for idx, value := range pow {
    fmt.Printf("2**%d = %d\n", idx, value)
}
// ->   2**0 = 1
// ->   2**1 = 2
// ...
// ->   2**6 = 64
// ->   2**7 = 128
```
- you can skip the index by assigning to _. you can just omit the 2nd variable if you only need the index
```go
for _,value : range pow{
    //....
}
```
### conditional if statement
```go
func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
        return lim   
    }
}
```

### Switch
```go
	t := 10
	switch {
	case t > 5:
		fmt.Println("is bigger 5")
	case t == 10;
		fmt.Println("is equal to 10")
	default:
		fmt.Println("is someting else")
	}
```

### Defer            
- A defer statement defers the execution of a function until the surrounding function returns.            
- Defer function calls are pushed onto a stack. And executed in last-in-fost-out order.
```go
func main() {
    count := 10
	defer fmt.Println("world", count)
    count += 5
	fmt.Println("hello", count)
}
// hello 15
// world 10
func countdown(){
    fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")
}
// counting
// done
// 9
// 8 
// ...
// 1
// 0
```

## more types

### Pointers
- `*T` is a pointer to a T value. Its zer value is `nil`
- pointers in go have no pointer arithmetic by default. `import "unsafe"` if those are needed.
```go
func main() {
	i, j := 42, 2700
	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer 	-> print: 42
	*p = 21         // set i through the pointer 	-> i = 21
	fmt.Println(i)  // see the new value of i 		-> print: 21

	p = &j         // point to j
	*p = *p / 2   // divide j through the pointer	-> j = 1350
	fmt.Println(j) // see the new value of j		-> print: 1350
}
```
### Structs

```go
base := Coordinates{10, 22, 0}
fmt.Println("coordinates are: ", base)
base.Height = -5
fmt.Println("Height is: ", base.Height)
// short form of accessing on pointers (*p).X becmes just p.X
pointer1 := &base
pointer1.X = 1e9
fmt.Println(base)
```
### Arrays
- have fixed size, can not be resized.
```go
var a [2]string
a[0] = "Hello"
a[1] = "World"
primes := [6]int{2, 3, 5, 7, 11, 13}
```

### Slices
- dynamically sized
- are references to the underlying array -> changes to the slice -> change the array
- slices can contain any type, including other slices

```go
primes := [6]int{2, 3, 5, 7, 11, 13}
var slice []int = primes[1:4]   // [inclusive:exclusive]
fmt.Println(slice)              //-> {3,5,7}
```
- when slicing you can omit the bounds:
```go
s := []int{2, 3, 5, 7, 11, 13}
fmt.Println(s[:2])              // -> [2 3]
fmt.Println(s[1:])              // -> [3 5 7 11 13]
```
- the zero value of a slice is `nil`
```go
var s []int
fmt.Println(s, len(s), cap(s))  // -> [] 0 0
if s == nil {
    fmt.Println("is nil!")      // -> is nil!
}
```

#### Slice literals
- is like any array but without the length
- basically creates the same array, then builds a slice that references it

```go
r := []bool{true, false, true, true, false, true}
s := []struct {
    i int
    b bool
}{
    {2, true},
    {3, false},
    {5, true},
    {7, true},
    {11, false},
    {99, true},
}
fmt.Println(r , s)
```

```go
var a [2]string
	a[0] = "Hello"
	a[1] = "World"
```

```go
var a [2]string
	a[0] = "Hello"
	a[1] = "World"
```

```go
var a [2]string
	a[0] = "Hello"
	a[1] = "World"
```

#### Slice length and capacity
- `len()` is the number of element it contains
- `cap()` is the number of elements in the underlying array, counting from the first element in the slice.
```go
func main() {
	s := []int{2, 3, 5, 7, 11, 13}
	printSlice(s)
	// -> len=6 cap=6 [2 3 5 7 11 13]

	// Slice the slice to give it zero length.
	s = s[:0]
	printSlice(s)
	// -> len=0 cap=6 []
	
	// Extend its length.
	s = s[:4]
	printSlice(s)
	// -> len=4 cap=6 [2 3 5 7]

	// Drop its first two values.
	s = s[2:]
	printSlice(s)
	// -> len=2 cap=4 [5 7]

	// Drop another value from front but extend it +2 at end
	s = s[1:4]
	printSlice(s)
	// -> len=3 cap=3 [7 11 13]
    // !cant extent beyond this since underlaying array maxes out here 
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

```

#### Creating dynamic slices - make()
- the make function allocates a zerod array and returns a slice that refers to that array.
- this is how we create dynamically-sized arrays.
```go
a := make([]int, 5)         // len(a)=5
b := make([]int, 0, 5)      // len(b)=0, cap(b)=5
b = b[:cap(b)]              // len(b)=5, cap(b)=5
b = b[1:]                   // len(b)=4, cap(b)=4
```
- example:
```go
func main() {
	a := make([]int, 5)
	printSlice("a", a)      // -> a len=5 cap=5 [0 0 0 0 0]

	b := make([]int, 0, 5)
	printSlice("b", b)      // -> b len=0 cap=5 []

	c := b[:2]
	printSlice("c", c)      // -> c len=2 cap=5 [0 0]

	d := c[2:5]
	printSlice("d", d)      // -> d len=3 cap=3 [0 0 0]
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}

```
- another example for some pseudo tic tac toe board
```go
func main() {
	// Create a tic-tac-toe board.
	board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}

	// The players take turns.
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}
}
```

#### append to a slice `append(someSlice, 0)`
- If the backing array of s is too small to fit all the given values a bigger array will be allocated. The returned slice will point to the newly allocated array.


```go
var s []int
s = append(s, 0)            // append works on nil slices.
s = append(s, 1)            // The slice grows as needed.
s = append(s, 2, 3, 4)      // We can add more than one 
```

### Maps 
- The zero value of a map is nil. A nil map has no keys, nor can keys be added.
```go
type Vertex struct {
	Lat, Long float64
}
var m map[string]Vertex
m = make(map[string]Vertex)
m["Bell Labs"] = Vertex{
    40.68433, -74.39967,
}
fmt.Println(m["Bell Labs"])

```
- or as literal:
```go
type Vertex struct {
	Lat, Long float64
}
var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}
fmt.Println(m)
```

```go
type Vertex struct {
	Lat, Long float64
}
var m = map[string]Vertex{
	"Bell Labs": {40.68433, -74.39967},
	"Google":    {37.42202, -122.08408},
}

fmt.Println(m)
```

#### mutating maps
```go
	m := make(map[string]int)
	m["Answer"] = 42							// insert or update an element in map m
	fmt.Println("The value:", m["Answer"])		// retrieve an element
	delete(m, "Answer")							// delete an element
	fmt.Println("The value:", m["Answer"])		// -> The value: 0  <- !! notice the zero value here !! 
	answer, isPresent := m["Answer"]
	fmt.Println(answer, isPresent)				// -> 0 false
```

### Function closures
- A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables; in this sense the function is "bound" to the variables.

- For example, the adder function returns a closure. Each closure is bound to its own sum variable.
```go
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}
}
```