# Traits and Lifetime in Rust

## Traits in Rust
Fills a similar purpose to interfaces in other languages. The compiler will enforce that any type implementing a Trait must implement all it's methods.
```rust
// the trait definition
pub trait Summary {
    fn summarize(&self) -> String;
}
// a struct
pub struct NewsFeed {
    pub headline: String,
    pub author: String,
    pub content: String,
}
// above struct implements the Summary trait
impl Summary for NewsFeed {
    fn summarize(&self) -> String{
        format!("{} \n {}, written by {}", self.headline, self.content, self.author)
    }
}

fn main(){
    let news = NewsFeed{
        headline: String::from("A Story"),
        author: String::from("by Me"),
        content: String::from("Some lorem Ipsum never fails to impress..."),
    };
    println!("{}", news.summarize())
}
```
### default implementation for Traits
```rust
pub trait Summary {
    fn summarize(&self) -> String{
        String::from("This is a default value")
    }
}
```

### Traits in Parameters
```rust
// syntax with impl
pub fn some_func_printer(input: &impl Summary) {
    println!("{}", input.summarize());
}
// trait bound syntax forcing both inputs to the the same type
pub fn some_func_printer<T: Summary>(input1: &T, input2: &T) {
    println!("{} and {}", input1.summarize(), input2.summarize());
}

// forcing more than one traits at once:
pub fn func(input: &(impl Summary + Display)){}
pub fn func<T: Summary + Display>(input: &T){}

// alternate traits syntax with where:
fn func<T:Display + Clone, U: clone+ + Debug>(in1: &T, in2: &U) {}
fn func<T, U>(in1: &T, in2: &U)
where
    T: Display + Clone,
    U: Clone + Debug,
{}

// returning Types that implement Traits
fn returns_summ() -> impl Summary{
    NewsFeed{
        headline: String::from("A Story"),
        author: String::from("by Me"),
        content: String::from("Some lorem Ipsum never fails to impress..."),
    }
}
```
### conditionally implement Methods:
```rust
use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
```
## Lifetime syntax
```rust
&i32        // a reference
&'a i32     // a reference with an explicit lifetime
&'a mut i32 // a mutable reference with an explicit lifetime
```

## References with Lifetimes (functions)
Lifetimes ensure that a reference is valid as long as we need it. Most of the time lifetimes are implicid and inferred, compare Borrowing Rules.
- Lifetime annotations don’t change how long any of the references live. Rather, they describe the relationships of the lifetimes of multiple references to each other without affecting the lifetimes.
- The following will **NOT COMPILE** without the lifetime annotation `'a` added in. (we are basically asserting that s1 s2 and the return value all have the same lifetime.)
```rust
fn main() {
    let str1 = String::from("1234");
    let str2 = "abcde";

    let result = longest(str1.as_str(), str2);
    println!("The longest string is {}", result);
}

// fn longest(s1: &str,s2: &str) -> &str {      // would not compile
fn longest<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len(){
        s1
    } else {
        s2
    }
}
```
We just defined that the returned stringslice lives as long as the minimum between s1 and s2 lifetime.

## References with Lifetimes (structs)
As long as a struct only holds owned types there is no need for lifetime annotations. But once we define a struct to hold references we need to add those:
```rust
struct Excerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("Some Lorem Ipsum. blah blah...");
    let first_sentence = novel.split('.').next().expect("Failed no . found");
    let ex = Excerpt {
        part: first_sentence
    };
    println!("{:?}", ex.part)
}
```

### References with Lifetime (struct-methods)
Lifetime names for struct fields always need to be declared after the `impl` keyword:
```rust
impl <'a> excerpt <'a> {
    fn level(&self) -> i32{
        3
    }
}
```

## static lifetime
All string literals have the `'static`lifetime. The text is stored directly in the binary which is always available.
```rust
let s: &'static str = "I have a static lifetime.";
```