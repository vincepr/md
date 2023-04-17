# Ownership Principles in Rust

## Stack vs Heap
### Stack
- For Fixed length elements (ex i32, Char, float...). 
- Last In, First Out. (so we can just push and pop to it)
- faster
- When your code calls a function, the values passed into the function (including, potentially, pointers to data on the heap) and the function’s local variables get pushed onto the stack. When the function is over, those values get popped off the stack.


### Heap
- for elements of varrying size (ex. Strings ...)
- slower. Especially on allocation. Also cleanup/bookkeeping etc.
- 
## Ownership
- each value in Rust has an owner.
- There can only be one owner at a time.
- When the owner goes out of scope, the value will be dropped.
### Difference stack vs heap elements:
Rust does not shallow copy elements by default. For fixed length elements it will just copy the value. For heap elements it will default to moving the value.
```rust
let x = 5;
let y = x;      // just a copy since x is a int and just lives on the stack -> default is a copy

let s1 = String::from("hello");
let s2 = s1;    // here rust s1 goes out of scope; only s2 is accessible afterwards. 
```
```rust
fn main(){
    let s = String::from("hello");
    let x = 10;
    makescopy(x);
    makescopy(x);       // x is still available since it got copied
    takes_ownership(s); // s is "gone" after here
}
fn makes_copy(some_integer: i32) { // some_integer comes into scope
    println!("{}", some_integer);
} // Here, some_integer goes out of scope. Nothing special happens.
fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.
```
- We can implement the `Copy` trait to add this first behavior to custom types.
    - similar there is a `Drop` trait, for actions that need to happen if the object goes out of scope.
- Ways to deal with Ownership are:
#### Variables and Data interacting with Clone
to deeply copy heap data we can use the clone method.
```rust
let s1 = String::from("hello");
let s2 = s1.clone();
```

#### Return the args back in a touple
```rust
fn main() {
    let s1 = String::from("hello");
    (s2, length) = get_len(s1);
    println!("{s2} has a length of: {length}");
}
fn get_len(s: String) -> (String, usize){
    let length = s.len();
    (s, length)
}
```

#### References and Borrowing
Unlike a pointer a reference is guaranteed to point to a valid value, for the life of that reference.

This is called borrowing. By default references are immutable.

Two borrowing rules that always must hold true:
- At any given time, you can have either (but not both) one mutable reference or any number of immutable references.
- References must always be valid.

```rust
fn main() {
    let s1 = String::from("hello");
    let len = get_len(&s1);
    println!("{s1} has the length of: {len}");
}
fn get_len(s: &String) -> usize{
    s.len()
}
```
- mutable References:
```rust
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
}
fn change(s: &mut String){
    s.push_str(", world");
}
```
Mutable references have one big restriction: if you have a mutable reference to a value, you can have no other references to that value. Code that attempts to create two mutable references to s will fail. This is our saveguard against dataraces, or dangling references.
- as always we can use curly brackets to create new scope, allowing for multiple mutable references:
```rust
let mut s = String::from("hello");
{
    let r0 = &mut s;
}
// new scope so no problem
let r1 = &s;
let r2 = &s;    // only read-access so no problem
println!("{} and {}", r1, r2);
// since r1 and r2 are not used after this we can now:
let r3 = &mut s;    
println!("{}", r2);


```
Recap on Rules of References:
- At any given time, you can have either one mutable reference or any number of immutable references.
- References must always be valid.

#### Slice Type
slices let you refernce a contiguous sequence of elements in a collection rather than the whole collection. A slice is a reference and thus has no ownership.
```rust
let s = String::from("hello world");
let len = s.len();

let hello1 = &s[0..5];      // start_index is inclusive; end_index is exclusive
let hello2 = &s[..5];       // same as above

let world1 = &s[6..11];
let world2 = &s[6..len];
let world3 = &s[6..];       // all 3 the same

let s2 = &s[..]             // whole string
```
- CAREFUL: indexes must occur at valid utf8 boundaries. And *multibyte* characters exist in utf8!


deref coercions:
```rust
// get_first_word(s: &String) -> &str // would only allow Strings as args
// the below allows both string literals and Strings and slices of those as args.
fn get_first_word(s: &str)-> &str{
    let bytes = s.as_bytes();
    
    for (idx, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..idx];
        }
    }
}
fn main() {
    let my_string = String::from("hello world");
    let my_string_literal = "hello world";

    let word = get_first_word(&my_string[0..6]);
    let word = get_first_word(&my_string[..]);
    let word = get_first_word(&my_string);

    let word = get_first_word(&my_string_literal[0..6]);
    let word = get_first_word(&my_string_literal[..]);
    let word = get_first_word(&my_string_literal);
}
```
- other slices
```rust
let a = [1,2,3,4,5];
let slice = &a[1..3];
assert_eq!(slice, &[2,3]);
```