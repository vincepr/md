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

## Writing Error Messages to Standard Error instead of Standard Output
By default we write everything ti Standart Output.
- To test we can redirect our Standard Output to a file: `cargo run > out.txt`
- It is useful to print our error messages out to Standard Error instead.
```rust
eprintln!("Our custom Error");
```
- now we can `cargo run > out.txt` write to our file, while still showing errors in our main channel.