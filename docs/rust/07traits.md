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

## References with Lifetimes
Lifetimes ensure that a reference is valid as long as we need it. Most of the time lifetimes are implicid and inferred, compare Borrowing Rules.
```rust
fn main() {
    let str1 = String::from("1234");
    let str2 = "abcde";

    let result = longest(str1.as_str(), str2);
    println!("The longest string is {}", result);
}

fn longest(s1: &str,s2: &str) -> &str {
    if s1.len() > s2.len(){
        s1
    } else {
        s2
    }
}
```