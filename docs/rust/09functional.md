# Closures and Iterators in Rust
## Closures
Anonymous functions that capture their environment. That we save in a variable or pass as arguments to other functions.
- because of the narrow scope of closures (vs functions/methods) we can often omit explicit type annotations.
```rust
let some_closure = |num| {
    num + 2
};
let some_closure_with_types = |num: u32| -> u32 {
    println!("doint something");
    num + 1
};
```
- as usual it is also possible to shorten closures syntax a bit:
```rust
fn  add_one_v1   (x: u32) -> u32 { x + 1 }
let add_one_v2 = |x: u32| -> u32 { x + 1 };
let add_one_v3 = |x|             { x + 1 };
let add_one_v4 = |x|               x + 1  ;
```
As a note: in Rust a closure without explicit types can not infer different two or more types at the same time.
### Ownership for closures
```rust
let mut list = vec![1, 2, 3];
println!("At the start: {:?}", list);

let only_borrows = || println!("From closure: {:?}", list);
only_borrows();

let mut borrows_mutably = || list.push(4);
//println!("cant acess list since it belongs currently to borrows_mut() {:?}",list);
borrows_mutably();
// after here list is "free" again.

println!("At the end: {:?}", list);
```
In the following example we move the whole list into the closure. This needs to happen since we dont know when the multithreaded closure (in its own thread) will finish. It could finish before the main function, or main could finish first.
```rust
use std::thread;
fn main() {
    let list = vec![1,2,3];
    thread::spawn(move || println!("This gets executed in its own thread and list moved to this thread {:?}",list))
        .join().unwrap();
}
```
### Closure traits
Closures automatically implement, one, two or trhee of these `Fn` traits:
1. `FnOnce` applies to closures that can be called only once. Closures that moves captured values out of its body will only implement only this, because they can only be called once.
2. `FnMut` applies to closures, that can modify captured values out of their body, but do not move values out their body themselfs. Can be called multiple times.
3. `Fn` applies to closures that do not move values out of their body, or modify values. Can be called multiple times. (these are save for concurrency)


The following example calls `the sort_by_key()` function. That one is implemented with `FnMut`. This way it will allow flexible closures as input. But Fails once we were to try to move someting out of its scope etc.
```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let mut list = [
        Rectangle { width: 10, height: 1 },
        Rectangle { width: 3, height: 5 },
        Rectangle { width: 7, height: 12 },
    ];

    let mut count_operations = 0;
    list.sort_by_key( |r| {
        count_operations += 1;
        r.width
    });
    println!("{:#?}, sorted in {count_operations} operations.", list);
}
```

## Iterator
In rust iterators are *lazy*, meaning we need to consume the iterator to use it up. An iterator by itself does nothing.
- iterators can not just loop over indexable structures like a vector but also map etc...

```rust
let v = vec![1,2,3,4,5];

// create the iterator
let v_iter = v.iter();

// consume the iterator (if we just looped over v we would consume v)
for val in v_iter {
    println!("value: {}", val);
}

println!("{:?}", v);    // now v is still there, while v_iter is consumed
```

### How Iterators accomplish that:
All iterators implement the `Iterator` trait. This type requires implementors to define the `next()` method, that returns one item at a time, wrapped in either `Some` or `None`
- We could even call the next method directly:
```rust
let v = vec![1,2,3];


// the iterator needs to be mutable since we change the iterator by calling next():
let mut v_iter = v.iter();              

assert_eq!(v_iter.next(), Some(&1));    // we use up the first element of the iterator
assert_eq!(v_iter.next(), Some(&2));    // we use up the 2nd
assert_eq!(v_iter.next(), Some(&3));    // we use up the last
assert_eq!(v_iter.next(), None);        // no elements are left in the iterator
```
#### Different Methods that consume the Iterator
Our for in loop, the next call or `v_iter.sum()` are just a few of premade methods to consume iterators. These kinds of methods are called `consuming adaptors`

#### Methods that produce other Iterators
`Iterator adaptors` are methods that dont consume the iterator, but instead produce different iterators by chaning some aspects.

- The most common example could be the `map` method.
```rust
let v = vec![1,2,3,4,5];
// create & consume the new iterator with each value doubled
let v2: Vec<i32> = v.iter().map(|x|x*2).collect();
println!("{:?}", v2);
```
- another example implementing a `filter`
```rust
fn main() {
    let v = vec![1,2,3,4,5,6,7,8,9];
    let  v2 = custom_filter(v);
    println!("{:?}",v2)
}

fn custom_filter(v: Vec<i32>) -> Vec<i32>{
    v.into_iter().filter(|x| *x>5).collect()
}
```

### iterator to make code simpler
example of https://github.com/vincepr/rsgrep to show the same function once with a for loop and once written with an iterator:
```rust
/// searches a string for a substring. Returns array of lines that include substing.
pub fn search_str<'a>(substr: &str, data: &'a str) -> Vec<&'a str> {
    let mut found_lines:Vec<&str> = vec![];
    for line in data.lines() {
        if line.contains(substr) {
            found_lines.push(line);
        }
    }
    found_lines
}

// rewritten above with an iterator (more readable)
pub fn search_str<'a>(substr: &str, data: &'a str) -> Vec<&'a str> {
    data
        .lines()
        .filter(|line| line.contains(substr))
        .collect()
}
```

### Comparing Performance: Loops vs. Iterators
Iterators, though high level abstraction, get compiled down to roughly the same machine code in rust. (Zero-cost-abstraction principle in rust)
