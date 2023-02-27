# Exercises

- Exercises from the "A Tour of Go" Golang intro

## Exercise: Loops and Functions
```go
package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
	z := float64(x*x)
	for i:=0; i<10; i++{
		diff := (z*z-x) / (2*z)
		z = z-diff
		if diff<0.000000001{
			break
			}
	}
	return z
}

func main() {
	in := 10.0
	fmt.Println("Methods diverge by:", Sqrt(in)- math.Sqrt(in))
}
```

## Exercise:Slices
Implement Pic. It should return a slice of length dy, each element of which is a slice of dx 8-bit unsigned integers. When you run the program, it will display your picture, interpreting the integers as grayscale (well, bluescale) values.

The choice of image is up to you. Interesting functions include (x+y)/2, x*y, and x^y.

(You need to use a loop to allocate each []uint8 inside the [][]uint8.)

(Use uint8(intValue) to convert between types.

```go
package main
import (
	"golang.org/x/tour/pic"
)

// makes a dx by dy large field of 8 bit unsigned slices to "draw" a picture.
func Pic(dx, dy int) [][]uint8 {
	var p [][]uint8 = make([][]uint8, dy)
	//allocate al []unit8s:
	for i := 0; i < dy; i++ {
		p[i] = make([]uint8, dx)
	}

	for x := 0; x < dx; x++ {
		for y := 0; y < dy; y++ {
			// p[x][y] = uint8((x+y)/2) // gradient towards corner
			// p[x][y] = uint8(x*y)		// fractals
			
			gradX := (x-255)			// cross-"ish":
			if x<dx/2{gradX=255-x}
			gradY := (y-255)
			if y<dy/2{gradY=255-y}
			
			p[x][y] = uint8(gradY+gradX)
		}
	}

	return p
}

func main() {
	pic.Show(Pic)
}
```


## Exercise: Maps
Implement WordCount. It should return a map of the counts of each “word” in the string s. The wc.Test function runs a test suite against the provided function and prints success or failure.

You might find strings.Fields helpful.

```go
package main
import (
	"golang.org/x/tour/wc"
	"strings"
)

func WordCount(s string) map[string]int {
	m := make( map[string] int)
	words := strings.Fields(s)
	
	for _, word := range words {
		_, ok := m[word]
		if ok {					//if same word more than twice
			m[word] ++
		} else{
			m[word] = 1
		}
	}
	return m
}

func main() {
	wc.Test(WordCount)
}
```
## Exercise: Fibonacci closure
Let's have some fun with functions.

Implement a fibonacci function that returns a function (a closure) that returns successive fibonacci numbers (0, 1, 1, 2, 3, 5, ...).

```go
package main

import "fmt"

// fibonacci is a function that returns successive fibonacci numbers 0 1 1 2 3 5 8 ...
func fibonacci() func() int {
	prevN := 0
	nextN := 1
	return func() int{
		// edge case for the start needed:
		if prevN == 0 {
			prevN = 1
			return 0
		}
		
		prevN, nextN = nextN, prevN+nextN
		return prevN
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
```


### Exercise: Readers
Implement a Reader type that emits an infinite stream of the ASCII character 'A'.

```go
package main
import	"golang.org/x/tour/reader"

type MyReader struct{}

// TODO: Add a Read([]byte) (int, error) method to MyReader.
func (s MyReader) Read(b []byte) (int, error) {
	// fill all (8) bit with A's
	for idx := range b {
		b[idx] = byte('A')		// 'A' is the Char. String wouldnt work like this
		// "A"[0] would also work reading the first byte of the string "A"
	}
    return len(b), nil
}
// :TODO

func main() {
	reader.Validate(MyReader{})
}

```



## Exercise: rot13Reader
A common pattern is an io.Reader that wraps another io.Reader, modifying the stream in some way.

For example, the gzip.NewReader function takes an io.Reader (a stream of compressed data) and returns a *gzip.Reader that also implements io.Reader (a stream of the decompressed data).

Implement a rot13Reader that implements io.Reader and reads from an io.Reader, modifying the stream by applying the rot13 substitution cipher to all alphabetical characters.

The rot13Reader type is provided for you. Make it an io.Reader by implementing its Read method.

```Go
package main
import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

func (reader rot13Reader) Read(b []byte) (int, error) {
	n, err := reader.r.Read(b)
	for i, val := range b[:n] {
		if val >= 'a' && val <= 'z' {
			b[i] = (val-'a'+13)%26 + 'a'
		} else if val >= 'A' && val <= 'Z' {
			b[i] = (val-'A'+13)%26 + 'A'
		}
	}
	return n, err
}

func main() {
	s := strings.NewReader("Lbh penpxrq gur pbqr!")
	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
}
```



### Exercise: Images
Remember the picture generator you wrote earlier? Let's write another one, but this time it will return an implementation of image.Image instead of a slice of data.

Define your own Image type, implement the necessary methods, and call pic.ShowImage.

Bounds should return a image.Rectangle, like image.Rect(0, 0, w, h).

ColorModel should return color.RGBAModel.

At should return a color; the value v in the last picture generator corresponds to color.RGBA{v, v, 255, 255} in this one.

```go
package main

import (
	"golang.org/x/tour/pic"
	"image"
	"image/color"
)

type Image struct{}

// ColorModel returns the Image's color model.
func (i Image) ColorModel() color.Model {
	return color.RGBAModel
}

// Bounds returns the domain for which At can return non-zero color.
// The bounds do not necessarily contain the point (0, 0).
func (i Image) Bounds() image.Rectangle {
	return image.Rect(0, 0, 255, 255)
}

// At returns the color of the pixel at (x, y).
// At(Bounds().Min.X, Bounds().Min.Y) returns the upper-left pixel of the grid.
// At(Bounds().Max.X-1, Bounds().Max.Y-1) returns the lower-right one.

func (i Image) At(x, y int) color.Color {
	return color.RGBA{uint8(x), uint8(y), 100, 255}
}

func main() {
	m := Image{}
	pic.ShowImage(m)
}
```

### Exercise Equivalent Binary Trees
A function to check whether two binary trees store the same sequence is quite complex in most languages. We'll use Go's concurrency and channels to write a simple solution.		

This example uses the tree package, which defines the type:
```go
type Tree struct {
    Left  *Tree
    Value int
    Right *Tree
}
```
Exercise: Equivalent Binary Trees
1. Implement the Walk function.

2. Test the Walk function.

The function tree.New(k) constructs a randomly-structured (but always sorted) binary tree holding the values k, 2k, 3k, ..., 10k.

Create a new channel ch and kick off the walker:

go Walk(tree.New(1), ch)
Then read and print 10 values from the channel. It should be the numbers 1, 2, 3, ..., 10.

3. Implement the Same function using Walk to determine whether t1 and t2 store the same values.

4. Test the Same function.

Same(tree.New(1), tree.New(1)) should return true, and Same(tree.New(1), tree.New(2)) should return false.

The documentation for Tree can be found here.

```go
package main

import (
	"fmt"
	"golang.org/x/tour/tree"
)

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {
    innerWalk(t, ch)
	close(ch)
}
func innerWalk(t *tree.Tree, ch chan int) {
	if t.Left != nil {	
		innerWalk(t.Left, ch)
    }
    ch <- t.Value
    if t.Right != nil {
        innerWalk(t.Right, ch)
    }
}


// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	chan1 := make(chan int)
	chan2 := make(chan int)
	go Walk(t1, chan1)
	go Walk(t2, chan2)
	for val1 := range chan1{
		val2 := <-chan2
		if val1 != val2 {
			return false
		}
	}
	return true
}


func main() {
	fmt.Println( Same(tree.New(1), tree.New(1)) )
	fmt.Println( Same(tree.New(1), tree.New(20)) )
}
```

### Exercise: Web Crawler
In this exercise you'll use Go's concurrency features to parallelize a web crawler.

Modify the Crawl function to fetch URLs in parallel without fetching the same URL twice.

Hint: you can keep a cache of the URLs that have been fetched on a map, but maps alone are not safe for concurrent use!

```go
package main
import (
	"fmt"
	"sync"
)
type Fetcher interface {
	// Fetch returns the body of URL and
	// a slice of URLs found on that page.
	Fetch(url string) (body string, urls []string, err error)
}


// create a mutex to store data savely.
type SafeMap struct{
	mut sync.Mutex
	data map[string]string
}

// write to data without anyone else accessing data simultaneously
func (mapp *SafeMap) addLink(url string, body string){
	mapp.mut.Lock()
	mapp.data[url] = body
	defer mapp.mut.Unlock()
}
/*
// read from data without anyone else accessing data simultaneously.
func (mapp *SafeMap) readSavely(key string) (string, bool) {
    mapp.mut.Lock()
    // Lock so only one goroutine at a time can access the map c.v.
    defer mapp.mut.Unlock()
    val, ok := mapp.data[key]
    return val, ok
}
*/
// crawls the url, getting all urls, going deeper till it reaches certain depth. 
// adds new entries into saveMap.data and prints out errors
func Crawl(url string, depth int, fetcher Fetcher, saveMap SafeMap) {
	defer wg.Done()

	if depth <= 0 {
		return
	}
	body, urls, err := fetcher.Fetch(url)
	if err != nil {
		fmt.Println(err)
		return
	}
	saveMap.addLink(url, body)

	for _, url := range urls {
		_, ok := saveMap.data[url]; 					// we could lock data while reading with saveMap.readSavely(url) 
		if !ok{											// but i dont think it should be a neccessary for just this usecase.
			wg.Add(1)
			go Crawl(url, depth-1, fetcher, saveMap)
		}
	}
	return
}


var wg sync.WaitGroup										// CANT use this inside main() and pass it on(actually maybe as a pointer) it HAS TO BE GLOBAL!
func main() {
	wg.Add(1)												// we add() count+=1 every time we create a Crawl() instance
	links := SafeMap{data: make(map[string]string)}			// and on defer wg.Done(), once that crawl finishes: counts-=1
	Crawl("https://golang.org/", 4, fetcher, links)
	wg.Wait()												//  Once total reaches 0 we know every process finished and we move on with main()

	// print out the stored data:
	for url, body := range links.data{
		fmt.Println("Url:", url," -> Body:", body)
	}
}




// fakeFetcher is Fetcher that returns canned results.
type fakeFetcher map[string]*fakeResult

type fakeResult struct {
	body string
	urls []string
}

func (f fakeFetcher) Fetch(url string) (string, []string, error) {
	if res, ok := f[url]; ok {
		return res.body, res.urls, nil
	}
	return "", nil, fmt.Errorf("not found: %s", url)
}

// fetcher is a populated fakeFetcher.
var fetcher = fakeFetcher{
	"https://golang.org/": &fakeResult{
		"The Go Programming Language...<html>...",
		[]string{
			"https://golang.org/pkg/",
			"https://golang.org/cmd/",
		},
	},
	"https://golang.org/pkg/": &fakeResult{
		"Packages...<html>...",
		[]string{
			"https://golang.org/",
			"https://golang.org/cmd/",
			"https://golang.org/pkg/fmt/",
			"https://golang.org/pkg/os/",
		},
	},
	"https://golang.org/pkg/fmt/": &fakeResult{
		"Package fmt...<html>...",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
	"https://golang.org/pkg/os/": &fakeResult{
		"Package os...<html>...",
		[]string{
			"https://golang.org/",
			"https://golang.org/pkg/",
		},
	},
}
```