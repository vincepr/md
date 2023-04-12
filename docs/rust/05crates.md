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