# notes while learning golang

## 0. Packages, commands etc.
- `go mod tidy` after just writing a import like "golang.org/x/crypto/bcrypt" in a file.
- equal-ish to `go get golang.org/x/crypto/bcrypt` 
- `go test ./... -v` do all tests in verbose mode
- `go test --race` for inbuild racecondition testing
- in structs we can define default json-names and even block it from getting json-ifed with "-" :
```go
PasswordEnc string	`json:"-"`
```
___
## 1. imports, variables and functions
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
___
## 2. more types

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

	p = &j         	// point to j
	*p = *p / 2   	// divide j through the pointer	-> j = 1350
	fmt.Println(j)	// see the new value of j		-> print: 1350
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
    i int	`json:"i-int"`
    b bool	`json:"bertha"`
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
// -> 0 0
// -> 1 -2
// -> 3 -6
// -> 6 -12
// -> 10 -20
// -> 15 -30
// -> 21 -42
// -> 28 -56
// -> 36 -72
// -> 45 -90
```
___
## 3. Methods and interfaces
- has **no** classes

### define methods on types
- You can only declare a method with a receiver whose type is **defined in the same package** as the method. You cannot declare a method with a receiver whose type is defined in another package (which includes the built-in types such as int).
```go
type Coords struct{
	x , y float64
}
func (c Coords) Absolute() float64{
	return math.Sqrt(c.x*c.x + c.y*c.y)
}
var ch = Coords{3,4}
fmt.Println( ch.Absolute() )		// -> 5
```
- even on non-struct types
```go
type MyFloat float64

func (f MyFloat) Absolute() float64{
	if f > 0 {
		return float64(f)
	}
	return float64(-f)
}
```

### Pointer receivers
- **Only** Methods with pointer receivers can modify the value to which the receiver points.
```go
func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}
ver := Vertex{3,4}
ver.Scale(10)
fmt.Println(ver)					// {30. 40}
// we could also pass in a pointer 
p := &v
fmt.Println( p.Scale(10) )			// {30, 40}

// or the same function written with a pointer argument:
func ScaleFunc(v *Vertex, f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}
ve := Vertex{3,4}
ScaleFunc( &ve, 10 )				// notice how we need to pass in the pointer in this case
ScaleFunc( v, 5 )					// WILL THROW AN ERROR
```
- in gernal, all mehods on a given type should have either value or pointer receivers. But NOT a mixture of both!

### Interfaces
- a type implements an interface implicit. Just by having the fitting method(s).
- could appear in any package without prearrangement (no a "implements" b keyword etc.)
```go
type ChessFigure interface{
	Move() (int, int)
}

type BlackPawn struct{
	x, y int
}
func (v BlackPawn) Move() (int, int){
	return v.x, (v.y -1)
}

type WhitePawn  struct{
	x, y int
}
func (v *WhitePawn) Move() (int, int) {
	return v.x, (v.y + 1)
}

func main(){
	var figure ChessFigure
	pawn1 := WhitePawn{3,2}
	figure = &pawn1					// figure = pawn1 would throw and error : since only *WhitePawn implements the Move() method and WhitePawn does not.
	fmt.Println(figure.Move())		// ->  3 3
	pawn2 := BlackPawn{3,7}
	figure = pawn2
	fmt.Println(figure.Move())		// ->  3 6
}
```

```go
type Element interface{
	LogLength()
}
func describe(el Element){
	fmt.Printf("value: %v , Type: %T \n", el, el)
}

type Word struct{
	Str string
}
func (w *Word) LogLength(){
	fmt.Println(len(w.Str))
}

type Number int
func (f Number) LogLength(){
	fmt.Println( len(strconv.Itoa(int(f))) )
}

func main() {
	var el Element
	w := &Word{"Golang"}
	el = w
	el.LogLength()
	describe(el)
	n := Number(12345)
	el = n
	el.LogLength()
	describe(el)
}
```

#### how to handle nil - and avoid "null pointer" exceptions in go
```go
type Element interface{
	LogLength()
}
func describe(el Element){
	fmt.Printf("value: %v , Type: %T \n", el, el)
}

type Word struct{
	Str string
}
func (w *Word) LogLength(){
	if w == nil{
		fmt.Println("<nil>")
		return
	}
	fmt.Println(len(w.Str))
}

type Number int
func (f Number) LogLength(){
	fmt.Println( len(strconv.Itoa(int(f))) )
}

func main() {
	var el Element
	var w *Word
	el = w
	el.LogLength()
	describe(el)
	var n Number
	el = n
	el.LogLength()
	describe(el)
}
// ->  <nil>
// ->  value: <nil> , Type: *main.Word 
// ->  1
// ->  value: 0 , Type: main.Number
```

#### empty interface
- empty interface: interface type that specifies zero methods- `interface{}`
- accepts every type.
- used by code that handles values of unknown type. Example `ftm.Print` accepts any number of agruments of type `interface{}`
```go
func main() {
	var i interface{}
	describe(i)			// -> (<nil>, <nil>)

	i = 42
	describe(i)			// -> (42, int)

	i = "hello"
	describe(i)			// -> (hello, string)
}

func describe(i interface{}) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

### Type assertions
- `t := i.(T)`  this tatement asserts that the interface value i holds the concrete type T and assigns the underlying T value to the variable t.
- `t, ok := i.(T)` to test wheter an interface value holds a specific type.
```go
var i interface{} = "hello"

s := i.(string)
fmt.Println(s)				// -> hello

s, ok := i.(string)
fmt.Println(s, ok)			// -> hello true

f, ok := i.(float64)
fmt.Println(f, ok)			// -> 0 false

// f = i.(float64) 			// panic: interface:conversion... error
// fmt.Println(f)
```

### Type switches
- is a construct that allows several type assertions after another.
```go
func testType(i interface{}) {
	switch v := i.(type) {
	case int:
		fmt.Println("here v has type int: ", v)
	case string:
		fmt.Println("here v has type string: ", v)
	default:
		fmt.Printf("no match; here v is a type not int or string but a %T \n", v)
	}
}
func main(){
	testType(21)
	testType("golang")
	testType(21.0)
}
```

### Stringers
```go
type Stringer interface {
	String() string
}
```
	- packages like `fmt` look for this interface to print values. So we can make our Custom structs be printable by implementing this interface:

```go
type Person struct{
	Name string
	Age int
	Height float64
}
func (p Person) String() string{
	return fmt.Sprintf("%v,_%v_years_old,_height_%v", p.Name, p.Age, p.Height)
}
func main(){
	a := Person{"Clark-Kent", 35, 1.85}
	b := Person{"Peter-Parker", 25, 1.81}
	fmt.Println(a, b)
}
// -> Clark-Kent,_35_years_old,_height_1.85 Peter-Parker,_25_years_old,_height_1.81
```

#### Example
```go
type IPAddr [4]byte

// TODO: Add a "String() string" method to IPAddr.
func (ip IPAddr) String() string{
	return fmt.Sprintf("%v.%v.%v.%v",ip[0], ip[1], ip[2], ip[3])
}
// :TODO

func main() {
	hosts := map[string]IPAddr{
		"loopback":  {127, 0, 0, 1},
		"googleDNS": {8, 8, 8, 8},
	}
	for name, ip := range hosts {
		fmt.Printf("%v: %v\n", name, ip)
	}
}

// without the TODO: function
// -> loopback: [127 0 0 1]
// -> googleDNS: [8 8 8 8]

// after implementing the TODO: function
// -> loopback: 127.0.0.1
// -> googleDNS: 8.8.8.8
```

### Errors
- go programs express error state with `error` values similar to `fmt.Stringer`
```go
type error interface {
    Error() string
}
```
- functions often return an `error` value and calling code should handle errors by testing whether the error equals `nil`:
```go
i, err := strconv.Atoi("42")
if err != nil {
    fmt.Printf("couldn't convert number: %v\n", err)
    return
}
fmt.Println("Converted integer:", i)
```

### Readers - Data Sreams
- the `io` package specifies the `io.Reader` interface, which represents the read end of a stream of data. Like files, network connections, audiostream...
```go
func (T) Read(b []byte) (n int, err error)
```
- Read populates the given byte slice with data and returns the number of bytes populated and an error value. It returns an `io.EOF` error when the stream ends.

#### The following example creates a strings.Reader and consumes its output 8 bytes at a time:
```go
import (
	"fmt"
	"io"
	"strings"
)

func main() {
	r := strings.NewReader("Hello, Reader!")

	b := make([]byte, 8)
	for {
		n, err := r.Read(b)
		fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
		fmt.Printf("b[:n] = %q\n", b[:n])
		if err == io.EOF {
			break
		}
	}
}
// ->  n = 8 err = <nil> b = [72 101 108 108 111 44 32 82]
// ->  b[:n] = "Hello, R"
// ->  n = 6 err = <nil> b = [101 97 100 101 114 33 32 82]
// ->  b[:n] = "eader!"
// ->  n = 0 err = EOF b = [101 97 100 101 114 33 32 82]
// ->  b[:n] = ""
```

#### Wrapping a reader in another reader
- example in go/exercises

### Images
- [Package image](https://pkg.go.dev/image#Image) defines the Image interface:
```go
package image

type Image interface {
    ColorModel() color.Model
    Bounds() Rectangle
    At(x, y int) color.Color
}
```

```go

import (
	"fmt"
	"image"
)

func main() {
	m := image.NewRGBA(image.Rect(0, 0, 100, 100))
	fmt.Println(m.Bounds())
	fmt.Println(m.At(0, 0).RGBA())
}
```

## 4. Generics
### Generic functioins - unsing Type parameters
- functions that can work on multiple types. 
- 
```go
// returns the index of x in s, or -1 if not found.
func FindIndex[T comparable](s []T, x T) int {
	for i, v := range s {
		// v and x are type T, which has the comparable
		// constraint, so we can use == here.
		if v == x {
			return i
		}
	}
	return -1
}

func SumChars[T comparable] (s[]T, x T) int{
	return 1
}

func main() {
	// Index works on a slice of ints
	si := []int{10, 20, 15, -10}
	fmt.Println( FindIndex(si, 15) )						// ->  2

	// Index also works on a slice of strings
	ss := []string{"hello", "cruel", "world"}
	fmt.Println( FindIndex(ss, "hello") )					// -> -1
}
```
- comparable is a useful constraint that makes it possible to use the == and != operators on values of the type. In this example, we use it to compare a value to all slice elements until a match is found. This Index function works for any type that supports comparison.


### Generic types
- useful for implementing generic data structures.
- example below a linked-list, that holds values of any type
```go
type List[T any] struct {
	next *List[T]
	val  T
}
```
- example implementing a linked list structure
### 
```go
import (
	"fmt"
)

// List represents a singly-linked list that holds values of any type.
type List[T any] struct {
	value  T
	next *List[T]
}

// returns length of the Linked-List
func (l *List[T]) Len() int  {
	count := 0
	for el := l; el != nil; el = el.next {
		count ++
	}
	return count
}

// insert element into linked list at pos with value
func (l *List[T]) InsertAt(pos int, value T) *List[T] {
	if l == nil || pos <= 0 {
		return &List[T]{
			value: value,
			next:  l,
		}
	}
	l.next = l.next.InsertAt(pos-1, value)
	return l
}

// appends an element at the End of the Linked-List
func (l *List[T]) Append(value T) *List[T] {
	return l.InsertAt(l.Len(), value)
}

// String() to print the Linked-List
func (l *List[T]) String() string {
	if l == nil {
		return "nil"
	}
	return fmt.Sprintf("%v->%v", l.value, l.next.String())
}

func main() {
	var ll *List[string]
	fmt.Println(ll)
	ll = ll.Append("hello")
	ll = ll.Append("something else")
	fmt.Println(ll, "length:", ll.Len())

}
// ->  nil
// ->  hello->something else->nil length: 2
```

- adding to the above code we can fill our List with anything
```go

func main() {
	//...
	var peopleList *List[Person]
	peopleList = peopleList.Append(Person{"Adam", 22})
	peopleList = peopleList.Append(Person{"Adam", 66})
	peopleList = peopleList.Append(Person{"Adam", 44})
	fmt.Println(peopleList)
}

type Person struct{
	Name string
	Age int
}

func (p Person) String() string{
	return fmt.Sprintf("%v_is_of_age:%v", p.Name, p.Age)
}
// -> Adam_is_of_age:22->Adam_is_of_age:66->Adam_is_of_age:44->nil
```

## 5. Concurrency

### Goroutines
- a goroutine is a lightweight thread managed by the Go runtime. `go doStuff(a, b, c)`
- the evaluation of doStuff() and a, b, c happens in the current goroutine. Execution of doStuff happens in the new goroutine.
- Goroutines run in the same address space, so access to shared memory must be synchronized. The sync package provides useful primitives, although you won't need them much in Go as there are other primitives.
```go
import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 3; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func main() {
	go say("world")
	say("hello")
}
```

### Channels
- Channels are typed pipes trough which you can send and receive values with the channel operator: `<-`
```go
ch := make(chan int)	// like maps and slices channels must be created before use
ch <- v    				// Send v to channel ch.
v := <-ch  				// Receive from ch, and assign value to v.
```
- By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables.

- The example below splits up building the sum of a slice in 2 goroutines:
```go
func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum // send sum to c
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // receive from c

	fmt.Println(x, y, x+y)
}
```

#### Buffered Channels
- `ch := make(chan int, 100)`
- Sends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty.

#### Close Channels
- Only senders can close a channel to indicate that no more values will be sent.
- Receivers can test wheter a channel has been closed by assigning a second parameter to the receive expression: `v, ok := range c`
- Channels arent like files; you do not usually need to close them. Only if the the receiver must be told no more values are coming.

```go 
func fibonacci(n int, c chan int) {
	x, y := 0, 1
	for i := 0; i < n; i++ {
		c <- x
		x, y = y, x+y
	}
	close(c)
}

func main() {
	c := make(chan int, 10)
	go fibonacci(cap(c), c)
	for i := range c {
		fmt.Println(i)
	}
}
```
#### Select
- the `select` statement lets a goroutine wait on multiple communication operations.
- it blocks untill one of its cases can run. If multiple are ready then it chooses one **random**.

```go
func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
			case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}

func main() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
}
```
- we can use a default case to try a send or receive without blocking
```go
select {
case i := <-c:
    // use i
default:
    // receiving from c would block
}
```
```go
import (
	"fmt"
	"time"
)

func main() {
	tick := time.Tick(100 * time.Millisecond)
	boom := time.After(500 * time.Millisecond)
	for {
		select {
		case <-tick:
			fmt.Println("tick.")
		case <-boom:
			fmt.Println("BOOM!")
			return
		default:
			fmt.Println("    .")
			time.Sleep(50 * time.Millisecond)
		}
	}
}
```

### sync.WaitGroup
- we need to make sure some goroutines have finished before we can continue. For example 3 sync goroutines getting some SQL data.
- sync.WaitGroup makes this trivial. We put them all in one wait group. ADD() +1 to a "counter" whenever we start something that needs to be finished.
- and on defer of the goroutine we call Done() -1 to the "counter". Once the counter reaches 0 Wait() releases and we can now grab our complete fetched data etc.

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func fetchSomeData(nr int, wg *sync.WaitGroup){
	defer wg.Done()
	time.Sleep(time.Second *2)
	fmt.Println("done fetching data")
}

func main() {
    fmt.Println("starting main")
	wg := &sync.WaitGroup{}
	for i :=0;i<20;i++{
		wg.Add(1)
		go fetchSomeData(1, wg)
	}
	wg.Wait()
	fmt.Println("all waitgroups have finished")
}
```


### sync.Mutex
- if we want to make sure only one goroutine can access a variable at a time to avoid conflicts.
- `sync.Mutex` and its two methods `Lock` and `Unlock`

```go
import (
	"fmt"
	"sync"
	"time"
)

// SafeCounter is safe to use concurrently.
type SafeCounter struct {
	mu sync.Mutex
	v  map[string]int
}

// Inc increments the counter for the given key.
func (c *SafeCounter) Inc(key string) {
	c.mu.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	c.v[key]++
	c.mu.Unlock()
}

// Value returns the current value of the counter for the given key.
func (c *SafeCounter) Value(key string) int {
	c.mu.Lock()
	// Lock so only one goroutine at a time can access the map c.v.
	defer c.mu.Unlock()
	return c.v[key]
}

func main() {
	c := SafeCounter{v: make(map[string]int)}
	for i := 0; i < 1000; i++ {
		go c.Inc("somekey")
	}

	time.Sleep(time.Second)
	fmt.Println(c.Value("somekey"))
}
```