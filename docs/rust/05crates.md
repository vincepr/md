# Crates projects, packages and modules in Rust

## modules
start from the crate root. `src/lib.rs` for a library- and `src/main.rs` for a binary-crate.
```rust
// src/lib.rs
mod our_restaurant {
    pub mod cooking {
        pub fn start_cooking() {}
        fn plate_meal() {}
    }

    mod serving {
        fn take_order() {}
        fn serve_order() {}
        fn payment() {}
    }
}
```
## paths
- absolute path is the full path starting from a crate root. it starts with the literal `crate`
- relative path starts from the current module and uses `self`, `super`

```rust
mod our_restaurant {
    pub mod cooking {
        pub fn start_cooking() {}
    }
}

pub fn dostuff(){
    // absolute path
    crate::our_restaurant::cooking::start_cooking();

    // relative path
    our_restaurant::cooking::start_cooking();
}
```
### relative paths with super
easy way to reference some parent function/struct. Useful if we think those components belong together and will be moved arround together if at all.
```rust
fn basic_addition(){}

mod modify {
    fn fix_addition(){
        fix();
        super::basic_addition();
    }
    fn fix() {}
}
```
### making structs and enums public.
- default for enums is public.
- default for structs is private.
```rust
mod restaurant {
    pub struct Meal {
        pub food: String,
        price:  i32,
    }
    impl Meal {
        pub fn make(f: &str) -> Meal {
            Meal {
                food: String::from(f),
                price: 8,
            }
        }
    }
}

pub fn eat() {
    let mut meal = restaurant::Meal::make("Muesli");
    // we can still change our food because its public
    meal.food = String("Toast a la Tuna");
    println!("Ordering {}, please!", meal.food);
    // println!("cant access {}!", meal.price);       // this will not compile because its private
}
```

## use keyword
to shorten inport paths.
```rust
mod restaurant {
    pub mod service{
        pub fn clean_table(){}
    }
}

use crate::restaurant::service;

pub fn dostuff(){
    restaurant::service::clean_table();
    service::clean_table();             // same "target" as above
}
```
- it is idiomatic to bring the service package in this case but not the function. `use crate::restaurant::service::clean_table` That would make it difficoult to spot where `clean_table()` is defined.
- for enums and structs on the other hand it is idiomatic to bring them directly into scope:
```rust
use std::collections::HashMap;

fn main(){
    let mut map = HashMap::new();   // instead of collections::HashMap::new();
    map.insert(1,2);
}
```
- as keyword
```rust
use std::fmt::Result as Res;

fn function() => Res {}
```
- nesting imports
```rust
// we can nest them like this:
use std::{fmt::Result, io }         

// instead of 2 lines:
use std::io;
use std::io::Write;
// we could also use self to reference itself:
use std::io::{self, Write}
```
- the glob operator
```rust
use std::collections::*;    // gets all items into scope
```

## Extended Cargo features
### Release Profiles
Profiles provide a way to alter the compiler settings, influencing things like optimizations and debugging symbols.
- cargo has default settings, that can be overwritten by adding `profile.*`
```toml
[profile.dev]
opt-level = 0           ## 0 the lowest optimisation level possible
overflow-checks = false ## disable integer overflow checks

[profile.release]
opt-level = 3           ## 3 is the hightest optimisation level (is default for --release)
```
Some noteworthy settings:
- opt-level
    - 0 no optimization
    - 3 all optimizations
    - "s" optimize for binary size
    - "Z" optimize for binary size but also turn off loop vectorization
- debug 
    - 0 or false : no debug info at all (might be faster/less binary etc.)
    - 1 : line tables only
    - 2 or true : full debug info




## Configuring multi-workspace structure with cargo Rust
### creating the project structure
```
cargo new rs_file_tree --lib
cd rs_file_tree
cargo new filetree --lib
cargo new main-unix
cargo new main-win
```
In the root project's Cargo.toml we delete everything but the workspace definitions/paths:
```
[workspace]
members=[
    "main-unix",
    "filetree",
]
```
- now we can already `cargo build`
### using code from filetree crates
In our main crates we import our library:
```
[dependencies]
filetree = { path = "../filetree" }
```

## Adding Clap crate to parse Args
activate derive-mode-macros with the feature flag:
- `cargo add clap --features derive`
