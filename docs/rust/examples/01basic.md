# Basic Examples

## Number guessing game:
```rust
use std::io;
use rand::Rng;
use std::cmp::Ordering;


fn main() {
    loop {
        println!("--------");
        
        let secret = random_nr();
        println!("{secret}");
        if input(secret) {
            break;   
        }
    }
}

fn input(secret: u32)-> bool{
    // handle the input
    println!("Input the number you guess:");
    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    // parse str -> uint. Shadowing allows reusing the variable here!
    // let guess: u32 = guess.trim().parse().expect("Only numbers allowed");
    let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => return false,     // return early so loop starts again
    };

    // we check if were bigger or smaller by using Ordering:
    println!("You guessed: {guess}");
    match guess.cmp(&secret){
        Ordering::Less => println!("Too small"),
        Ordering::Greater => println!("Too Big"),
        Ordering::Equal => {
            println!("You Guessed right");
            return true;
        },
    }
    return false;
}

fn random_nr()->u32{
    let secret_number = rand::thread_rng().gen_range(1..=100);
    return secret_number;
}
```

## a struct example 
and implementing custom printing on the struct. By default  `println!("{figure}");` and `println!("{figure:?}");` will fail since they dont implement the `Debug` or `std::fmt::Display` trait. `#[derive(Debug)]` is the answer here.
- another way would be the `dbg!` macro. But that takes ownership of an expression (`println!` does not). This is really useful for quick debugging.
```rust
#[derive(Debug)]
struct Rectangle{
    width: u32,
    height: u32,
}

impl Rectangle {
    // all functions defined in an imp block are called associated functions:
    fn area(&self) -> u32 {         // first arg always must be &self
        self.width * self.height    // self. to get struct attributes
    }
    fn can_hold(&self, other: &Rectangle) -> bool{
        let case1 = self.width > other.width && self.height> other.height;
        let case2 = self.height> other.width && self.width > other.height;
        case1 || case2
    }
}
// multiple impl blocks are allowed
impl Rectangle{
    // constructor like function, for a special case(but could be a constructor aswell)
    fn square(size: u32) -> Self{
        Self { width: size, height: size, }
    }
}

fn main() {
    let rect1 = Rectangle{
        width:30,
        height: 50,
    };

    let rect1 = dbg!(rect1);        // works even without the #[derive(Debug)]
    println!("Current rect1 is: {rect1:#?}");
    println!( "The area of the rectangle is {} square pixels.", rect1.area() );

    let rect2 = Rectangle{
        width: 50,
        height: 50,
    };
    let rect3 = Rectangle::square(25);
    
    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}
```