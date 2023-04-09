# structure related to data

## structs
- if a struct instance is mutable, the whole thing is mutable. (cant specify certain fields only)
```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}
fn main() {
    let mut user1 = User{
        active: true,
        username: String::from("Bob"),
        email: String::from("bob@ross.wrong"),
        sign_in_count: 0,
    };
    user1.email = String::from("bob@ross.gg");
}
```

- writing a constructor there is a shorthand syntax. (using same arg- and field-name)
```rust
fn build_user(email: String, username: String)-> User{
    User{
        active: true,
        username,               // instead of username: username
        email,
        sign_in_count: 0,
    }
}
```

- short way to move (NOT COPY) a user and change some fields:
```rust
let user2 = User{
    email: String::from("anotherBob@ross.us"),
    ..user1                     // must be last
};
// user1 not usable anymore (UNLESS we would set email and username)
```
as discussed in the Ownership chapter, we just moved the data and now user1 exists no longer. Thats because User struct includes 2 strings. If we had set both email and username, the other values would be copied over and user1 would still exist as a variable!

### Touple struct
```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
```
### structs without any fields
unit-like structs without any fields hold no data. still useful since we can use traits on them.

```rust
struct AlwaysEqual;
fn main(){
    let subject = AlwaysEqual;
}
```

## Enums
You can put any kind of data inside an enum variant: strings, numeric types or structs, even other enums...
```rust
enum IpAddrKind {
    V4,
    V6,
}
struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

let test = IpAddrKind::V4;
let home = IpAddr {
    kind: IpAddrKind::V4,
    address: String::from("127.0.0.1"),
};

fn route(ip_kind: IpAddrKind) {}    // takes in any variant
```

- it is also possible to put data directly into each enum variant (so there is no need for an extra struct in this case):
- they can even have different data inside:
```rust
enum IpAddr {
        V4(u8, u8, u8, u8),
        V6(String),
    }

    let home = IpAddr::V4(127, 0, 0, 1);

    let loopback = IpAddr::V6(String::from("::1"));
```

- there is a std implementation for ip in rust aswell:
```rust
use std::net::{IpAddr, Ipv4Addr, Ipv6Addr};

let localhost_v4 = IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1));
let localhost_v6 = IpAddr::V6(Ipv6Addr::new(0, 0, 0, 0, 0, 0, 0, 1));

assert_eq!("127.0.0.1".parse(), Ok(localhost_v4));
assert_eq!("::1".parse(), Ok(localhost_v6));

assert_eq!(localhost_v4.is_ipv6(), false);
assert_eq!(localhost_v4.is_ipv4(), true);
```

### Option Enum
Rust does **NOT** have null. Instead there are Options, a bit like Js-Promises.
- Definition in the std lib. It is automatically included, without explicit importing it. (along with `None` and `Some(T)`)
```rust
enum Option<T> {    //implemented using generic type <T>
    None,
    Some(T),
}
```
- examples:
```rust
let some_number = Some(5);
let some_char = Some('x');
let absent_number = Option<i32> = None;
let x :i32 = 4
// let sum = some_number + x //is not allowed before "checking for null / if the option is None"
```
### Match expression
- matches only compile if they cover all possibilites.
```rust
enum UsState {
    Alabama,
    Alaska,
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}

fn value_in_cents(c: Coin) -> u8 {
    match c {
        Coin::Penny => {
            println!("Lucky penny found");
            1
        }
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) =>{
            println!("State of the quarter found: {:?}", state);
            25
        }
    }
}
```
- Matching a Option
```rust
// if the Option is not "null" we add 1 to it then return it. If "null" we return "null"
fn plus_one(x: Option<i32>) -> Option<i32>{
    match x{
        None => None,
        Some(i) => Some(i+1)
    }

    let five = some(5);
    let six = plus_one(five);

    let none = plus_one(None);
}
```
- catch all patterns
```rust
let dice_roll = 5;
match dice_roll {
    6 => double_points(),
    other => move_player(other),
}
```
- `_` placeholder if we do not need to use these numbers/states
```rust
let dice_roll = 5;
match dice_roll {
    1 => loose(),
    6 => double_points(),
    _other_ => reroll(),
}

// we can even do nothing:
match dice_roll2 {
    1 => loose(),
    6 => points(),
    _ => (),
}
```
### if let statement
- another way to extract Option types out:
```rust
let config_max = Some(3u8);
if let Some(max) = config_max {
    println!("The maximum is configured to be {}", max);
}

// another example
let mut count = 0;
if let Coin::Quarter(state) = coin {
    println!("State quarter from {:?}!", state);
} else {
    count += 1;
}
```

## std collections
`std::collections` https://doc.rust-lang.org/std/collections/index.html offers good implementions of default data structures.
- like vector, string, hash map, binary tree...

### Vector
- stored on the heap
```rust
let v1: Vec<i32> = Vec::new();      // without initial value
let v2 = vec![1,2,3,4,5]            // with initial values, with the vec! macro.

// adding to a vector:
let mut v3 = Vec::new();
v3.push(5);
v3.push(6);

//reading elements:
let third: Option<&i32> = v2.get(2);
match third {
    Some(third) => println!("the 3rd element is {third}"),
    None => println!("There is no 3rd element"),
}

let thiswillcrash = &v2[100];       // will panic
let thiswill_none = v2.get(100);    // will return None
```
Vectors are allocated next to each other in memory. Because of this, the following will not compile:
```rust
    let mut v = vec![1,2,3,4,5,6];
    let first = &v[0];
    v.push(7);
    println!("{:?}", v);        // -> [1, 2, 3, 4, 5, 6, 7]
    // println!("{:?}", first); // this wont compile!
```
- since after `v.push(7)` v will be reallocated to some bigger space. Now first might point to some wrong spot. The compiler catches this.

#### iterating over a vector
```rust
let v = vec![11,22,33];
for i in &v {
    println!("{i}");
}

let mut v2 = vec![11,22,33];
for i in &v {
    *i += 100;                  // dereferencing with * to get the value behind the pointer (like in go)
}
```
- similar to above we are not allowed to add to &v while in the loop for example. While changing the referenced values is allowed.

#### enum to store multiple types in a vector
- vectors can only store the same type. But with a enum we can basically circumvent this:
```rust
enum Cell {
    Int(i32),
    Float(f64),
    Text(String),
}
let row = vec![
    Cell::Text(String::from("numbers of people")),
    Cell::Int(30),
    Cell::Text(String::from("numbers of households")),
    Float::(20.5),
];
```

### String
`&str` string slices are references to some utf8 encoded string data. (and is stored on Stack)

`String` type on the other hand is provided by the std-library and is a growable mutable owned utf encoded string type. Stored on the Heap.

- actually string is implemented as a wrapper arround the previous vector type (of bytes).
```rust
// create a empty string:
let mut s = String::new();

// create from data/stringliterals
let data_from_some_file = "blah blah blah";
let s1 = data.to_string();                      // available on any type that implements the Display type
let s2 = "also works on string literals directly".to_string();

// initial value
let s3 = String::from("some initial value");

// add to strings
s.push_str("foobar");

s.push('A')             // single characters
```
- `push_str()` only takes in a stringslice and does **not** take ownership, so the following is allowed:
```rust
let mut s1 = String::from("foo");
let s2 = "bar";
s1.push_str(s2);
println!("s1 is {s1}");     // -> s1 is foobar
println!("s2 is {s2}");     // -> s2 is bar
```

#### Concatenation
```rust
let s1 = String::from("Hello ");
let s2 = String::from("world");
let s3 = s1 + &s2;              // short-form for: let s3 = s1.add(&s2);     

// note s1 has been moved and can no longer be used. (s2 and s3 are fine)
```
- `format!` macro to make concatenating multiple strings even more streamlined:
```rust
let s1 = String::from("hello");
let s2 = String::from("world");
let s3 = String::from("whatsup");

let s = format!("{s1} {s2}, {s3}?");
```
#### indexing and slicing strings
- and again: Strings do **NOT** allow indexing: ` String::from("hello")[0];` . But Stringslices do: `let h = "hello"; let a = &h[0] `
- in slicing we also need to take care not to slice inbetween a utf8 encoded character!
```rust
let hello = "Здрав";
let s = &hello[0..4];
// let s2 = &hello[0..1];       // will crash because it tries to slice the first char in half!
```

#### iterating over strings
- we need to define if we want to iterate over the raw bytes or the utf8 encoded Characters:
```rust
// iterate over chars
for ch in "a2b3дв5".chars(){
    println!("{ch}")
}

// iterate over bytes
for by in "a2b3дв5".bytes(){
    println!("{by}")
}
```

### Hash Maps
- key value pairs (JS Ojects...)
- stored on the heap. So if we add to it we remove references to elements of it we made before. Borrowing rules etc.
- uses SipHash Algorithm for hashing by default. (provides some DoS protection against attacks abusing hashing). If speed is needed easy to switch the alorith out by getting another hasher type.
```rust
// need to import it
use std::collections::HashMap;

// create it empty and write to it
let mut scores = HashMap::new();
scores.insert(String::from("BlueTeam"), 10);
scores.insert(String::from("RedTeam"), 50);

// accessing values
let team_name = String::from("TeamRed");
let s = scores.get(&team_name).copied().unwrap_or(0);
```
1. Here the get method returns an `Option<&V>` or None. 
2. We then copy the option to get a `Option<i32>` over a `Option<&i32>`.
3. Afterwards we use `unwrap_or("defaultvalue")` to get a i32 instead of an option.
```rust
// iterating over a map:
for (key, value) in &scores{
    println!("{key}:{value}");
}
// as usual maps are not ordered and might return differently ordered lists each time.
```
- If we insert references to values into the hash map, the values won’t be moved into the hash map. The values that the references point to must be valid for at least as long as the hash map is valid.

#### Different strategies to insert over existing keys
```rust
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert(String::from("One"), 10);

// just Overwrite the value:
map.insert(String::from("One"), 20);

// adding a key,val par only if key isnt present:
map.entry(String::from("One")).or_insert(50);                 // does nothing since its already One: 20
map.entry(String::from("Two")).or_insert(50);                 // enters Two:50 just fine

println!("{:?}", map);
```
- example counting how often a word is in a sentence (updating an existing value):
```rust
use std::collections::HashMap;

fn main(){
    let text = "this is a text, some realy good text this is. text.";
    let map = count_words(text);
    println!("{map:?}");
}

fn count_words(s: &str)-> HashMap<&str, i32>{
    let mut map: HashMap<&str, i32> = HashMap::new();

    for word in s.split_whitespace(){
        let count = map.entry(word).or_insert(0);       // we create our entry with 0 or get a pointer to it
        *count +=1;
    }
    return map;
}
```
