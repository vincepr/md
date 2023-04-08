# some Notes while starting to learn Rust
## Setup
### Automatic Formatting with rustfmt
- `cargo fmt` to format the whole project according to community code style guidelines.
- `cargo fix` to fix some compiler warnings automatically, if they have a clear way (stay away from while learning)
- optional linter: `rustup component add clippy` `cargo clippy`

### Cargo
- create a new project: `cargo new hello_project`
- create a new project inside existing folder: `cargo new`
- `cargo build` builds a binary to `./target/debug/projectname`
- `cargo run` to build and run.
- `cargo check` to check for compiler errors (nice if building takes longer)
- `cargo build --release` to compile it with optimizations

## Basics
### Documentation
```rust
// comment
/* block comment */

/// Generate library docs for the following item.
//! Generate library docs for the enclosing item.
```
### Print out
handled by a series of macros defined in `std::fmt`
- `format!` formatted text to String
- `print!` `println!` pinted to console (io::stdout)
- `eprint!` `eprintln!` printed to the standard error (io::stderr)

```rust
// in general the {} will be automatically replaced with the stringified args.
println!("{subject} {verb} {object}",
    object="He",
    subject=10,
    verb="aged by");
println("{0}, this is {1}. {0} how are you?", "Alice", "Bob");

// Different formatting can be invoked by specifying the format character :
println!("Base 10:               {}",   69420); // 69420
println!("Base 2 (binary):       {:b}", 69420); // 10000111100101100
println!("Base 8 (octal):        {:o}", 69420); // 207454
println!("Base 16 (hexadecimal): {:x}", 69420); // 10f2c
println!("Base 16 (hexadecimal): {:X}", 69420); // 10F2C

// Min length right-justify text: (adding whitespaces to the left:)
println!("{number:>5}", number=1);              // ->     1
// pad numbers with extra zeros
println("{number:0<5}", number=1);              // -> 10000
// named arguments in the format specifier by appending a $
println("{numb:0>width$}", numb=1, width=5);    // -> 00001
// capture variales:
let number: f64 = 1.0;
let width: usize = 5;
println!("{number:>width$}");                   // ->     1
```
- fmt::Debug: Uses the {:?} marker. Format text for debugging purposes.
- that way we can "print" structs etc, that do not implement `std::fmt::Display`, the default toString (interface?)
```rust
println!("{1:?} {0:?} is the {actor:?} name.",
             "Slater",
             "Christian",
             actor="actor's");
```
- pretty printing by using `{:#?}` extends the `fmt::Debug`
```rust
#[derive(Debug)]
struct Person<'a> {
    name: &'a str,
    age: u8
}

fn main() {
    let name = "Peter";
    let age = 27;
    let peter = Person { name, age };

    // Pretty print
    println!("{:#?}", peter);
}
```

### Importing
```rust
use std::io;

io::stdin()

// would be the same as:
std::io::stdin()
```

## Common Programming Concepts
### Variables and Mutability
- `let mut` to indicate the value can be reassigned. (so even changed from a int -> string)
- `const` must be without mut. Also types (ex. Uint/String) have to be assigned.

### Number literals:
- you can use `_` as a visual separator to make numbers more human readable.
```
Decimal	        98_222
Hex	            0xff
Octal	        0o77
Binary	        0b1111_0000
Byte (u8 only)  b'A'
```
### Integer Overflow
- when in debug mode, rust checks for overflows that will panic
- when building with `--releaste` there is no overflow checking. Just the as expected Overflowing.

### Compond Types
#### Touple
- fixed length once declared. Can hold multiple different types.
```rust
let tup1: (i32, f64, u8) = (500, 6.4, 1);
let tup2 = (500, 6.4, 1);
let (x,y,z) = tup2;          // destructuring is possible to get individual values
let mid = tup1.0;            // refferencing by index is possible aswell
```
- the touble without any values has a special name: **unit**. This value and its type are written `()` and represent an empty value or empty return type. Expressions implicitly return this (if nothing else is returned).

#### Array
- fixed length and can hold only one type.
```rust
let a = [1,2,3];
let b: [i32; 5] = [1,2,1,2,3];
let same: [3;6];    // all 5 entries are the same value(3) -> [3,3,3,3,3,3]
```

#### Vector
- unlike the array a vector is not fixed in size.

### Statements vs Expressions
- Statements are everything without a return value.
- Expressions evaluate to a value. 
    - Examples: calling a fn, calling a macro, a new scope block created with Curly-Braces.
    - Expressions do **not include ending semicolons**. 
```rust
// expression example
let y = {
    let x = 3;
    x + 10
};
println!("The value of y is: {y}"); //-> The value of y is: 13
```
- blocks of code always evaluate to the last expression in them.
- we can use expressions as implicit return in functions:
```rust
fn plus_one(x: i32) -> i32 {
    x + 1;
}
```
### using if in a let Statement
```rust
let condition = true;
let number = if condition {5} else {6};
```
## Different Loops
### loop
- we can use breaks optional value to pass a value out of the scope of the loop itself:
```rust
let mut counter =0;
let result = loop{
    counter += 1;
    println!("going again");
    if counter == 5{
        break counter * 10;
    }
}
println("result is {result}");
```
- we can label loops to distinguish break and continue for inner and outer loops.
```rust
let mut count = 0;
'counting_up: loop{
    let mut remaining = 10;
    loop {
        println!("remaining = {remaining}");
        if remaing == 9 {
            break;
        }
        if count == 2{
            break 'counting_up;
        }
        remaining -= 1;
    }
    count += 1;
}
println!("End count = {count}")
```
### while loop
```rust
while number != 0 {
    number -= 1;
}
```
### for loop
```rust
let a = [10,20,30,40,50];
for element in a {
    println!("the value is: {element}")
}

// using for loop with a Range (1..4). .rev() to reverse said Range:
for nr in (1..4).rev() {
    println!("{nr}")
}
// 3
// 2 
// 1
```