"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3637],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},o="Exercises",l={unversionedId:"go/exercises",id:"go/exercises",title:"Exercises",description:'- Exercises from the "A Tour of Go" Golang intro',source:"@site/docs/go/exercises.md",sourceDirName:"go",slug:"/go/exercises",permalink:"/md/go/exercises",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/go/exercises.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wirtschaft_grundlagen",permalink:"/md/fiae/wirtschaft_grundlagen/"},next:{title:"notes while learning golang",permalink:"/md/go/intro"}},s={},c=[{value:"Exercise: Loops and Functions",id:"exercise-loops-and-functions",level:2},{value:"Exercise:Slices",id:"exerciseslices",level:2},{value:"Exercise: Maps",id:"exercise-maps",level:2},{value:"Exercise: Fibonacci closure",id:"exercise-fibonacci-closure",level:2},{value:"Exercise: Readers",id:"exercise-readers",level:3},{value:"Exercise: rot13Reader",id:"exercise-rot13reader",level:2},{value:"Exercise: Images",id:"exercise-images",level:3},{value:"Exercise Equivalent Binary Trees",id:"exercise-equivalent-binary-trees",level:3},{value:"Exercise: Web Crawler",id:"exercise-web-crawler",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exercises"},"Exercises"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Exercises from the "A Tour of Go" Golang intro')),(0,a.kt)("h2",{id:"exercise-loops-and-functions"},"Exercise: Loops and Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "math"\n)\n\nfunc Sqrt(x float64) float64 {\n    z := float64(x*x)\n    for i:=0; i<10; i++{\n        diff := (z*z-x) / (2*z)\n        z = z-diff\n        if diff<0.000000001{\n            break\n            }\n    }\n    return z\n}\n\nfunc main() {\n    in := 10.0\n    fmt.Println("Methods diverge by:", Sqrt(in)- math.Sqrt(in))\n}\n')),(0,a.kt)("h2",{id:"exerciseslices"},"Exercise:Slices"),(0,a.kt)("p",null,"Implement Pic. It should return a slice of length dy, each element of which is a slice of dx 8-bit unsigned integers. When you run the program, it will display your picture, interpreting the integers as grayscale (well, bluescale) values."),(0,a.kt)("p",null,"The choice of image is up to you. Interesting functions include (x+y)/2, x*y, and x^y."),(0,a.kt)("p",null,"(You need to use a loop to allocate each []uint8 inside the ","[][]","uint8.)"),(0,a.kt)("p",null,"(Use uint8(intValue) to convert between types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport (\n    "golang.org/x/tour/pic"\n)\n\n// makes a dx by dy large field of 8 bit unsigned slices to "draw" a picture.\nfunc Pic(dx, dy int) [][]uint8 {\n    var p [][]uint8 = make([][]uint8, dy)\n    //allocate al []unit8s:\n    for i := 0; i < dy; i++ {\n        p[i] = make([]uint8, dx)\n    }\n\n    for x := 0; x < dx; x++ {\n        for y := 0; y < dy; y++ {\n            // p[x][y] = uint8((x+y)/2) // gradient towards corner\n            // p[x][y] = uint8(x*y)     // fractals\n            \n            gradX := (x-255)            // cross-"ish":\n            if x<dx/2{gradX=255-x}\n            gradY := (y-255)\n            if y<dy/2{gradY=255-y}\n            \n            p[x][y] = uint8(gradY+gradX)\n        }\n    }\n\n    return p\n}\n\nfunc main() {\n    pic.Show(Pic)\n}\n')),(0,a.kt)("h2",{id:"exercise-maps"},"Exercise: Maps"),(0,a.kt)("p",null,"Implement WordCount. It should return a map of the counts of each \u201cword\u201d in the string s. The wc.Test function runs a test suite against the provided function and prints success or failure."),(0,a.kt)("p",null,"You might find strings.Fields helpful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport (\n    "golang.org/x/tour/wc"\n    "strings"\n)\n\nfunc WordCount(s string) map[string]int {\n    m := make( map[string] int)\n    words := strings.Fields(s)\n    \n    for _, word := range words {\n        _, ok := m[word]\n        if ok {                 //if same word more than twice\n            m[word] ++\n        } else{\n            m[word] = 1\n        }\n    }\n    return m\n}\n\nfunc main() {\n    wc.Test(WordCount)\n}\n')),(0,a.kt)("h2",{id:"exercise-fibonacci-closure"},"Exercise: Fibonacci closure"),(0,a.kt)("p",null,"Let's have some fun with functions."),(0,a.kt)("p",null,"Implement a fibonacci function that returns a function (a closure) that returns successive fibonacci numbers (0, 1, 1, 2, 3, 5, ...)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\n// fibonacci is a function that returns successive fibonacci numbers 0 1 1 2 3 5 8 ...\nfunc fibonacci() func() int {\n    prevN := 0\n    nextN := 1\n    return func() int{\n        // edge case for the start needed:\n        if prevN == 0 {\n            prevN = 1\n            return 0\n        }\n        \n        prevN, nextN = nextN, prevN+nextN\n        return prevN\n    }\n}\n\nfunc main() {\n    f := fibonacci()\n    for i := 0; i < 10; i++ {\n        fmt.Println(f())\n    }\n}\n')),(0,a.kt)("h3",{id:"exercise-readers"},"Exercise: Readers"),(0,a.kt)("p",null,"Implement a Reader type that emits an infinite stream of the ASCII character 'A'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport  "golang.org/x/tour/reader"\n\ntype MyReader struct{}\n\n// TODO: Add a Read([]byte) (int, error) method to MyReader.\nfunc (s MyReader) Read(b []byte) (int, error) {\n    // fill all (8) bit with A\'s\n    for idx := range b {\n        b[idx] = byte(\'A\')      // \'A\' is the Char. String wouldnt work like this\n        // "A"[0] would also work reading the first byte of the string "A"\n    }\n    return len(b), nil\n}\n// :TODO\n\nfunc main() {\n    reader.Validate(MyReader{})\n}\n\n')),(0,a.kt)("h2",{id:"exercise-rot13reader"},"Exercise: rot13Reader"),(0,a.kt)("p",null,"A common pattern is an io.Reader that wraps another io.Reader, modifying the stream in some way."),(0,a.kt)("p",null,"For example, the gzip.NewReader function takes an io.Reader (a stream of compressed data) and returns a *gzip.Reader that also implements io.Reader (a stream of the decompressed data)."),(0,a.kt)("p",null,"Implement a rot13Reader that implements io.Reader and reads from an io.Reader, modifying the stream by applying the rot13 substitution cipher to all alphabetical characters."),(0,a.kt)("p",null,"The rot13Reader type is provided for you. Make it an io.Reader by implementing its Read method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go",metastring:"{13-23}","{13-23}":!0},"package main\nimport (\n    \"io\"\n    \"os\"\n    \"strings\"\n)\n\ntype rot13Reader struct {\n    r io.Reader\n}\n\nfunc (reader rot13Reader) Read(b []byte) (int, error) {\n    n, err := reader.r.Read(b)\n    for i, val := range b[:n] {\n        if val >= 'a' && val <= 'z' {\n            b[i] = (val-'a'+13)%26 + 'a'\n        } else if val >= 'A' && val <= 'Z' {\n            b[i] = (val-'A'+13)%26 + 'A'\n        }\n    }\n    return n, err\n}\n\nfunc main() {\n    s := strings.NewReader(\"Lbh penpxrq gur pbqr!\")\n    r := rot13Reader{s}\n    io.Copy(os.Stdout, &r)\n}\n")),(0,a.kt)("h3",{id:"exercise-images"},"Exercise: Images"),(0,a.kt)("p",null,"Remember the picture generator you wrote earlier? Let's write another one, but this time it will return an implementation of image.Image instead of a slice of data."),(0,a.kt)("p",null,"Define your own Image type, implement the necessary methods, and call pic.ShowImage."),(0,a.kt)("p",null,"Bounds should return a image.Rectangle, like image.Rect(0, 0, w, h)."),(0,a.kt)("p",null,"ColorModel should return color.RGBAModel."),(0,a.kt)("p",null,"At should return a color; the value v in the last picture generator corresponds to color.RGBA{v, v, 255, 255} in this one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "golang.org/x/tour/pic"\n    "image"\n    "image/color"\n)\n\ntype Image struct{}\n\n// ColorModel returns the Image\'s color model.\nfunc (i Image) ColorModel() color.Model {\n    return color.RGBAModel\n}\n\n// Bounds returns the domain for which At can return non-zero color.\n// The bounds do not necessarily contain the point (0, 0).\nfunc (i Image) Bounds() image.Rectangle {\n    return image.Rect(0, 0, 255, 255)\n}\n\n// At returns the color of the pixel at (x, y).\n// At(Bounds().Min.X, Bounds().Min.Y) returns the upper-left pixel of the grid.\n// At(Bounds().Max.X-1, Bounds().Max.Y-1) returns the lower-right one.\n\nfunc (i Image) At(x, y int) color.Color {\n    return color.RGBA{uint8(x), uint8(y), 100, 255}\n}\n\nfunc main() {\n    m := Image{}\n    pic.ShowImage(m)\n}\n')),(0,a.kt)("h3",{id:"exercise-equivalent-binary-trees"},"Exercise Equivalent Binary Trees"),(0,a.kt)("p",null,"A function to check whether two binary trees store the same sequence is quite complex in most languages. We'll use Go's concurrency and channels to write a simple solution.\t\t"),(0,a.kt)("p",null,"This example uses the tree package, which defines the type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Tree struct {\n    Left  *Tree\n    Value int\n    Right *Tree\n}\n")),(0,a.kt)("p",null,"Exercise: Equivalent Binary Trees"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement the Walk function.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test the Walk function."))),(0,a.kt)("p",null,"The function tree.New(k) constructs a randomly-structured (but always sorted) binary tree holding the values k, 2k, 3k, ..., 10k."),(0,a.kt)("p",null,"Create a new channel ch and kick off the walker:"),(0,a.kt)("p",null,"go Walk(tree.New(1), ch)\nThen read and print 10 values from the channel. It should be the numbers 1, 2, 3, ..., 10."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement the Same function using Walk to determine whether t1 and t2 store the same values.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test the Same function."))),(0,a.kt)("p",null,"Same(tree.New(1), tree.New(1)) should return true, and Same(tree.New(1), tree.New(2)) should return false."),(0,a.kt)("p",null,"The documentation for Tree can be found here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "golang.org/x/tour/tree"\n)\n\n// Walk walks the tree t sending all values\n// from the tree to the channel ch.\nfunc Walk(t *tree.Tree, ch chan int) {\n    innerWalk(t, ch)\n    close(ch)\n}\nfunc innerWalk(t *tree.Tree, ch chan int) {\n    if t.Left != nil {  \n        innerWalk(t.Left, ch)\n    }\n    ch <- t.Value\n    if t.Right != nil {\n        innerWalk(t.Right, ch)\n    }\n}\n\n\n// Same determines whether the trees\n// t1 and t2 contain the same values.\nfunc Same(t1, t2 *tree.Tree) bool {\n    chan1 := make(chan int)\n    chan2 := make(chan int)\n    go Walk(t1, chan1)\n    go Walk(t2, chan2)\n    for val1 := range chan1{\n        val2 := <-chan2\n        if val1 != val2 {\n            return false\n        }\n    }\n    return true\n}\n\n\nfunc main() {\n    fmt.Println( Same(tree.New(1), tree.New(1)) )\n    fmt.Println( Same(tree.New(1), tree.New(20)) )\n}\n')),(0,a.kt)("h3",{id:"exercise-web-crawler"},"Exercise: Web Crawler"),(0,a.kt)("p",null,"In this exercise you'll use Go's concurrency features to parallelize a web crawler."),(0,a.kt)("p",null,"Modify the Crawl function to fetch URLs in parallel without fetching the same URL twice."),(0,a.kt)("p",null,"Hint: you can keep a cache of the URLs that have been fetched on a map, but maps alone are not safe for concurrent use!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"{7-65}","{7-65}":!0},'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\ntype Fetcher interface {\n    // Fetch returns the body of URL and\n    // a slice of URLs found on that page.\n    Fetch(url string) (body string, urls []string, err error)\n}\n\n\n// create a mutex to store data savely.\ntype SafeMap struct{\n    mut sync.Mutex\n    data map[string]string\n}\n\n// write to data without anyone else accessing data simultaneously\nfunc (mapp *SafeMap) addLink(url string, body string){\n    mapp.mut.Lock()\n    mapp.data[url] = body\n    defer mapp.mut.Unlock()\n}\n\n// read from data without anyone else accessing data simultaneously.\nfunc (mapp *SafeMap) readValue(key string) (string, bool) {\n    mapp.mut.Lock()\n    // Lock so only one goroutine at a time can access the map c.v.\n    defer mapp.mut.Unlock()\n    val, ok := mapp.data[key]\n    return val, ok\n}\n\n// crawls the url, getting all urls, going deeper till it reaches certain depth. \n// adds new entries into saveMap.data and prints out errors\nfunc Crawl(url string, depth int, fetcher Fetcher, saveMap SafeMap) {\n    defer wg.Done()\n\n    if depth <= 0 {\n        return\n    }\n    body, urls, err := fetcher.Fetch(url)\n    if err != nil {\n        fmt.Println(err)\n        return\n    }\n    saveMap.addLink(url, body)\n\n    for _, url := range urls {\n        _, ok := saveMap.readValue(url); \n        if !ok{\n            wg.Add(1)\n            go Crawl(url, depth-1, fetcher, saveMap)\n        }\n    }\n    return\n}\n\n\nvar wg sync.WaitGroup                                       // CANT use this inside main() and pass it on(actually maybe as a pointer) it HAS TO BE GLOBAL!\nfunc main() {\n    wg.Add(1)                                               // we add() count+=1 every time we create a Crawl() instance\n    links := SafeMap{data: make(map[string]string)}         // and on defer wg.Done(), once that crawl finishes: counts-=1\n    Crawl("https://golang.org/", 4, fetcher, links)\n    wg.Wait()                                               //  Once total reaches 0 we know every process finished and we move on with main()\n\n    for url, body := range links.data{\n        fmt.Println("Url:", url," -> Body:", body)\n    }\n}\n\n\n\n\n// fakeFetcher is Fetcher that returns canned results.\ntype fakeFetcher map[string]*fakeResult\n\ntype fakeResult struct {\n    body string\n    urls []string\n}\n\nfunc (f fakeFetcher) Fetch(url string) (string, []string, error) {\n    if res, ok := f[url]; ok {\n        return res.body, res.urls, nil\n    }\n    return "", nil, fmt.Errorf("not found: %s", url)\n}\n\n// fetcher is a populated fakeFetcher.\nvar fetcher = fakeFetcher{\n    "https://golang.org/": &fakeResult{\n        "The Go Programming Language...<html>...",\n        []string{\n            "https://golang.org/pkg/",\n            "https://golang.org/cmd/",\n        },\n    },\n    "https://golang.org/pkg/": &fakeResult{\n        "Packages...<html>...",\n        []string{\n            "https://golang.org/",\n            "https://golang.org/cmd/",\n            "https://golang.org/pkg/fmt/",\n            "https://golang.org/pkg/os/",\n        },\n    },\n    "https://golang.org/pkg/fmt/": &fakeResult{\n        "Package fmt...<html>...",\n        []string{\n            "https://golang.org/",\n            "https://golang.org/pkg/",\n        },\n    },\n    "https://golang.org/pkg/os/": &fakeResult{\n        "Package os...<html>...",\n        []string{\n            "https://golang.org/",\n            "https://golang.org/pkg/",\n        },\n    },\n}\n\n')))}p.isMDXComponent=!0}}]);