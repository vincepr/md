# Error Handling in Rust
Rust distinguishes between recoverable and unrecoverable errors.

## unrecoverable errors
The `panic!` Macro is one way to panic. The other by an action (like trying to access an array index out of bounds).
- by default after a panic rust goes backwards on the stack and frees all memory used (unwind). It is possible to remove this behavior and depend on the os memory system for cleanup. This strips away binary size, but brings its own risks. Doable by adding panic abort to the `Cargo.toml` file:
```
[profile.release]
panic = 'abort'
```

### using a panic Backtrace
```rust
// trying a buffer overread in rust:
let v = vec![1,2,3];
v[100];
```
and `RUST_BACKTRACE=1 cargo run` leads to:

```
 Finished dev [unoptimized + debuginfo] target(s) in 0.00s
     Running `target/debug/variables`
thread 'main' panicked at 'index out of bounds: the len is 3 but the index is 99', src/main.rs:5:5
stack backtrace:
   0: rust_begin_unwind
             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/std/src/panicking.rs:575:5
   1: core::panicking::panic_fmt
             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/panicking.rs:64:14
   2: core::panicking::panic_bounds_check
             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/panicking.rs:159:5
   3: <usize as core::slice::index::SliceIndex<[T]>>::index
             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/slice/index.rs:260:10
   4: core::slice::index::<impl core::ops::index::Index<I> for [T]>::index
             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/slice/index.rs:18:9
   5: <alloc::vec::Vec<T,A> as core::ops::index::Index<I>>::index
             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/alloc/src/vec/mod.rs:2732:9
   6: variables::main
             at ./src/main.rs:5:5
   7: core::ops::function::FnOnce::call_once
             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/ops/function.rs:250:5
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
```

## recoverable Errors with Result
```rust
// definition
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```
- a function that could fail is reading a file:
```rust
use std::fs::File;
let result = File::open("text.txt");
println!("{:?}", result);   // depending if file exists:
    // Err(Os { code: 2, kind: NotFound, message: "No such file or directory" })
    // Ok(File { fd: 3, path: "/home/vince/rust/variables/text.txt", read: true, write: false })

let content = match result {
    Ok(file) => file,
    Err(err)=> panic!("Cant open file, ERROR: {:?}", err),
};
```
- we want different behavior depending on what error (file not exist then we create it, other reason we panic etc...)
```rust
use std::fs::File;
use std::io::ErrorKind;

let result = File::open("text.txt");
let content = match result {
    Ok(file) => file,
    Err(err)=> match err.kind() {
        ErrorKind::NotFound => match File::create("hello.txt") {
            Ok(file) => file,
            Err(e) => panic!("Cant create the file{:?}", e),
        },
        other => panic!("Cant open file, ERROR: {:?}", other),
    }
};
```
- another way to write the exact same error handling using closures:
```rust
use std::fs::File;
use std::io::ErrorKind;

let file = File::open("hello.txt").unwrap_or_else(|err|{
    if err.kind() == ErrorKind::NotFound {
        File::create("hello.txt").unwrap_or_else(|e|{
            panic!("Cant create the file{:?}", e);
        })
    } else {
        panic!("Cant open file, ERROR: {:?}", err);
    }
});
```
- if the Result value is `Ok` the **unwrap** will return the value T inside `Ok(T)`. If the Result is the Err Variant unwrap will panic for us.
- This way we can give the error message more additional context etc.
```rust
use std::fs::File;
let file = File::open("hello.txt").unwrap();
```
- similar the **expect** method lets us choose the panic error message:
```rust
use std::fs::File;
let file = File::open("hello.txt").expect("ERROR: need hello.txt file and access!");
```

- propagating Errors:
```rust
fn main() {
    let data = read_data_from_file("data.txt");
    // now we can handle our errors here (or not)
    println!("{:?}", data);
}

use std::fs::File;
use std::io::{self, Read};
fn read_data_from_file(path: &str) -> Result<String, io::Error> {
    let file_result = File::open(&path);

    let mut file = match file_result {
        Ok(f) => f,
        Err(e) => return Err(e),
    };

    let mut data = String::new();
    match file.read_to_string(&mut data) {
        Ok(_) => Ok(data),
        Err(e) => Err(e),
    }
}
```
### if Err
if we are for example only concerned with the Err, or the Ok would wrap the empty object `()`then it might be beneficial to just use a if statement:
```rust
if let Err(e) = funcThatCanError(){
    println("Error in funcThatCanError:{e}");
}
```

### ? Operator 
The `?` operator can only be used in functions whose return type is compatible with the value it uses. For example the `Result` value, or an `Option`.
- a shortcut for propagating errors (does same as above example):
```rust
fn read_data_short(path: &str) -> Result<String, io::Error>{
    let mut file = File::open(&path)?;          // ?shortcut: if it errors then we return the Err(e)
    let mut data = String::new();
    file.read_to_string(&mut data)?;
    Ok(data)
}
```
- it is even possible to shorten this further by chaning the calls:
```rust
fn read_data_short(path: &str) -> Result<String, io::Error>{
    let mut data = String::new();
    File::open(&path)?.read_to_string(&mut data)?;
    Ok(data)
}
```
- a quick example of the ? Operator with a Option instead:
```rust
fn last_char_of_the_first_line(text: &str) -> Option<char> {
    text.lines().next()?.chars().last()
}
```

## Handling different Error Types in the same Result
2 Main Ways, wrapping the Error in a `Box<dyn error::Error>` or using enums.
- really useful if we want to be able to just ? Operator all errors and handle them upstream.


### Box with dyn Error
Since both Errors implement the `std::error::Error` Trait we can use a box that implements that Trait inside.
```rust
fn number_from_file(filename: &str) -> Result<u64, Box<dyn std::error::Error>> {
    use std::io::Read;
    
    /* 1: std::io::Error */
    let mut file = std::fs::File::open(filename)?;
    let mut buffer = String::new();
    file.read_to_string(&mut buffer)?;

    /* 2: ParseIntError */
    let parsed: u64 = buffer.trim().parse()?;

    Ok(parsed)
}
```
A downside to this could be that we only will handle that error at runtime dynamically. So less savety at compile time etc.

### Enums for bringing Error Types together
Instead of having dynamic results above we can also prepare an Error enum with all possible errors.
- That way we get full coverage of possible cases upstream when propagating errors up.
- in short we gain accuracy in cost of some boilerplate.
```rust
// We just bundle our Error Types in an enum:
enum NumFromFileErr {
    IoErr(std::io::Error),
    ParseErr(ParseIntError),
}
// Implement the conversion from the default errors to NumFromFileErr
// This will be automatically called by the ? if needed for conversion thanks to the into Trait
impl From<ParseIntError> for NumFromFileErr {
    fn from(err: ParseIntError) -> Self {
        NumFromFileErr::ParseErr(err)
    }
}

impl From<std::io::Error> for NumFromFileErr {
    fn from(err: std::io::Error) -> Self {
        NumFromFileErr::IoErr(err)
    }
}

fn number_from_file(filename: &str) -> Result<u64, NumFromFileErr> {
    // same as above ....
}
```

## Writing Error Messages to Standard Error instead of Standard Output
By default we write everything ti Standart Output.
- To test we can redirect our Standard Output to a file: `cargo run > out.txt`
- It is useful to print our error messages out to Standard Error instead.
```rust
eprintln!("Our custom Error");
```
- now we can `cargo run > out.txt` write to our file, while still showing errors in our main channel.


# A few notes after a while:
```rust
// handling multiple Err or failed options in one fn:
fn get_age(mut slices: core::str::Split<char>) -> Option<usize>{
    let age = slices.next()?;               // here we can just propagate the Failed Option up
    let age = age.parse::<usize>().ok()?;   // here we Result->Option with .ok() then propagate up
    if slices.count() >0 {
        return None                         // here we manually propagate the failed uption up
    }
    Some(age)                               // and lastly we propagate the success+value
}


// handle our Results and Options:
fn parse_string() -> Result<String, String>{

    let mut slices = "hello from a string".split(' ');
    let Some(word1) = slices.next() else {
        return Err("Error: failed parsing 1st word".to_string())
    };

    if let Some(word2) = slices.next(){
        println!("2nd word only lives in this closure: {word2}");
    } else {
        println!("is exhaustive so we have to handle this with else !");  
    }
    match slices.next(){
        Ok(s) => println!("word3 is: {s}"),
        _ => {},                                     // also exhaustive
    }
    let word4 = slices.next().unwrap_or_default();   // will fallback to default ""
    let word5 = slices.next().unwrap();              // will panic, so avoid.
    let word6 = slices.next().unwrap_or(" default"); // will fallback to custom

    Ok(word1.to_string()+word3+word4+word5)          // Ok("helloa default")
}

```