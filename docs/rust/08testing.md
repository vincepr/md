# Testing in Rust
- run all tests with `cargo test`

## Asserts
```rust
pub fn add(left: usize, right: usize) -> usize {
    left + right 
}

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn addition() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }

    #[test]
    fn should_fail() {
        panic!("Some Fail")
    }

    #[test]
    fn bigger_can_hold_small(){
        let bigger = Rectangle {
            width: 10,
            height: 10,
        };
        let smaller = Rectangle {
            width: 9,
            height: 9,
        };
        let is_true = bigger.can_hold(&smaller);
        assert!(is_true)
    }

    #[test]
    fn smaller_fits_not_bigger(){
         let bigger = Rectangle {
            width: 10,
            height: 10,
        };
        let smaller = Rectangle {
            width: 9,
            height: 9,
        };
        let is_true = smaller.can_hold(&bigger);
        assert!(is_true)
    }
}
```
- since the test module is a regular module, we need to bring the functions to test into scope with `use super::*;` 
```rust
// useful assert macros:
assert!(true);              // must be true to pass
assert_eq!(5+5,10);         // must be == to pass
assert_ne!(true, false);    // must be != to pass
```
- values beeing compared like this must implement the `PartialEq` and `Debug` traits to be comparable. For structs and enums we can just add `#[derive(PartialEq, Debug)]` to do this the easiest way.
```rust
// custom test-error message:
result = String::from("Person: James");
assert!(
    result.contains("Bond"),
    "The result must contain the last name with value 'Bond', but was only: '{}'",
    result
);
```

## Checking for panics
- using `should_panic`
```rust
pub struct Guess {
    value: i32,
}
impl Guess {
    pub fn new(val: i32)-> Guess {
        if val<1 || val>100 {
            panic!("{} must be between 1 and 100",val)
        }
        Guess {
            value: val,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic]
    fn greater_than_100(){
        Guess::new(999);
    }
}
```
- we can narrow down the exact panic using expected: `#[should_panic(expected = "must be between 1 and 100")]`

## Controlling Testing routine
- Sometimes it might be neccessary to run the tests one after the other (ex if many write to a file or read from the same file). This can be done by only running test on 1 thread: `cargo test -- --test-threads=1`
- include standard output of successful tests: `cargo test -- --show-output
- only running a subset of tests: `cargo test smaller_fits_not_bigger`
- filtering tests, that contain the word `bigger` : `cargo test bigger`
```rust
#[test]
#[ignore]
fn expensive_test() {
    // code that takes an hour to run
}
```
- the above test will not run with the default cargo test, to include we `cargo test -- --ignored` or `cargo test -- --include-ignored` for everythging.

## Organization, Unit Tests vs Integration Tests
### Unittests
Convention is  to create a module named tests in each file to contain the test functions and annotate the module with `cfg(test)`
- it is possible in rust to unit test private functions directly.
### Integrationtests
In rust those are external to your library. So they can only call public functions as a user of the library would.
- in the root folder (next to src) create a tests folder and in it a `tests/integration_test.rs` file
    - each file in tests directory is a separate crate, so we need to bring our library into scope for each:
```rust
use adder;      // our library

#[test]
fn it_adds_two() {
    assert_eq!(4, adder::add_two(2));
}
```
`cargo test` includes those integration tests. `cargo test --test integration_test` if we want to run just it.

Only Library `src/lib.rs` projects can integrate integration tests. Project binaries `src/main.rs` can not.
This is one good reason to make the main binary simple logic that just calls the src/lib.rs file.