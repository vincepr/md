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

```


## Exercise: rot13Reader
A common pattern is an io.Reader that wraps another io.Reader, modifying the stream in some way.

For example, the gzip.NewReader function takes an io.Reader (a stream of compressed data) and returns a *gzip.Reader that also implements io.Reader (a stream of the decompressed data).

Implement a rot13Reader that implements io.Reader and reads from an io.Reader, modifying the stream by applying the rot13 substitution cipher to all alphabetical characters.

The rot13Reader type is provided for you. Make it an io.Reader by implementing its Read method.

```Go {13-23}
package main
import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

func (reader rot13Reader) Read(bytes []byte) (int, error) {
	n, err := reader.r.Read(bytes)
	for i, val := range bytes[:n] {
		if val >= 'a' && val <= 'z' {
			bytes[i] = (val-'a'+13)%26 + 'a'
		} else if val >= 'A' && val <= 'Z' {
			bytes[i] = (val-'A'+13)%26 + 'A'
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

### Exercise: Readers
Implement a Reader type that emits an infinite stream of the ASCII character 'A'.

```go

```

### Exercise: Images
Remember the picture generator you wrote earlier? Let's write another one, but this time it will return an implementation of image.Image instead of a slice of data.

Define your own Image type, implement the necessary methods, and call pic.ShowImage.

Bounds should return a image.Rectangle, like image.Rect(0, 0, w, h).

ColorModel should return color.RGBAModel.

At should return a color; the value v in the last picture generator corresponds to color.RGBA{v, v, 255, 255} in this one.

```go

```

### Exercise Equivalent Binary Trees
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

```

### Exercise: Web Crawler
In this exercise you'll use Go's concurrency features to parallelize a web crawler.

Modify the Crawl function to fetch URLs in parallel without fetching the same URL twice.

Hint: you can keep a cache of the URLs that have been fetched on a map, but maps alone are not safe for concurrent use!

```go

```