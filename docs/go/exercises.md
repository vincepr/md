# Exercises

- Exercises from the "A Tour of Go" Golang intro

## Exercise: rot13Reader

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