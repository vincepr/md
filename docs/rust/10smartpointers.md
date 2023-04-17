# Smart Pointers in Rust
The most common kind of pointer in Rust is a reference. ( indicated by the `&` Symbol) They do not have any special capabilities or overhead attached to them.

Rust implements different kinds of smart points in the std-lib. One example would be a *reference counting* pointer type, that can have multiple owners, by keeping track of the numbers of owners and cleaning up when no one remains.
- Often smart pointers own the data they point to in rust. While refernces do not (only borrow it)
- Smart pointers are usually structs and implement the `Deref` and `Drop` traits.
    - the `Deref` trait allows an instance of the smartpointer to behave like a reference in our code.
    - the `Drop` trait allows custom behavior when going out of scope.
- Some examples of smart pointers:
    - the `String` or `Vec<T>` struct.
    - `Box<T>` for allocating values on the heap.
    - `Rc<T>` a reference counting type to enable multiple/shared ownership.
    - `Ref<T>` and `RefMut<T>` accessed trough `RefCell<T>` a type that enforces the borrowing rules at runtime instead of compile time.

## Box to point to Data on the Heap
```rust
let x = Box::new(7),
println!("x:{}",x);
```
`Box<T>` allow us to store data on the heap rather than the stack. Only the box pointer remains on the heap. Boxes have no performance overhead other than storing the data on the heap itself. Some common usecases:
1. when we have a type of unknown (at compiletime) size. But we want to use that value in a context that requires an exact size.
2. Large amount of data we want to transfer ownership of, but ensure the data does not get copied. (no loss of performance other than a reference created)
3. When you want to own a value and you only care that it implements a particular trait.

### Linked List - Example to 1. : Enabling recursive Types with Boxes
Rust needs to know at compile time how much space to allocate for a recursive type. But the nesting of values of recursive types stacks it cant be implemented like that. Boxes solve this by always beeing the same size (1 pointer big).

A cons list is a data structure from the Lisp language and is made up of nested pairs. It is the Lisp version of a linked list.
```rust
// this will not compile since: recursive type `List` has infinite size
enum List {
    Node(i32, List),
    Nil,
}
fn main() {
    use crate::List::{Node, Nil};
    let list = Node(1, Node(2, Node(3, Nil)));
}
```
The solution is to implement it with a Box instead (as the compiler suggests):
```rust
// here is the working LinkedList of generic Type:
#[derive(Debug)]
enum List<T> {
    Node(T, Box<List<T>>),
    Nil,
}
fn main() {
    use crate::List::{Node, Nil};
    let list = Node(1, Box::new(Node(2, Box::new(Node(3, Box::new(Nil))))));
    println!("{:?}", list);
}
```

## Deref Trait
- quick example of pointer behavior and dereferencing:
```rust
let x = 99;
let y = &x;
assert_eq!(99,x);
assert_eq!(99, *y);     // dereference operator: we follor the reference to the value.
```
- building our own `Box<T>` -like type. (it wont actually store data on the heap, were just focusing on the Deref Trait and functionality)
```rust
// this wont compile, because it is missing the Deref implementation
fn main() {
    let x = 5;
    let y = MyBox::new(x);

    assert_eq!(5, x);
    assert_eq!(5, *y);

}

struct MyBox<T>(T);
impl <T> MyBox<T> {
    fn new(r: T) -> MyBox<T>{
        MyBox(r)
    }
}
```
The above will not compile, since it is missing a implementation of the `Deref` trait. So we implement it like below:
```rust
// so we add our deref implementation
use std::ops::Deref;
impl<T> Deref for MyBox<T> {
    type Target = T;                // associated type for the Deref Trait to use.

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
```
### Implicit Deref Coercion
*Deref coercion* is a convenience feature that converts one Reference to another (ex `&String` to `&str`). Because String implements the Deref trait such, that it returns `&str`.

Deref coercion was added to Rust so that programmers writing function and method calls don’t need to add as many explicit references and dereferences with `&` and `*`
```rust
fn test(name: &str) {
    println!("{name}");
}
fn main() {
    let m = MyBox::new(String::from("Rust"));

    // instead of having to write the full casting like this:
    test(&(*m)[..]);

    // deref coercion allows us to just write:
    test(&m)
}
```
The `(*m)` dereferences the `MyBox<String>` into a String. Then the `&` and `[..]` take a string slice of the String that is equal to the whole string to match the signature of hello. This code without deref coercions is harder to read, write, and understand with all of these symbols involved. Deref coercion allows Rust to handle these conversions for us automatically.

When the Deref trait is involved, Rust will use the deref function as many times as necessary to get a reference to match the parameters type.

## Drop Trait
### Running Code on Cleanup with the Drop Trait
`Drop` lets us customize what happens when a value is about to go out of scope. For example when the `Box<T>` goes out of scope it will deallocate the space on the heap, the box points to.

This way no memory will leak. The following example will print out whenever an instance of our CustomPointer goes out of scope:

```rust
struct CustomSmartPointer {
    data: String,
}
impl Drop for CustomSmartPointer {
    fn drop(&mut self) {
        println!("Dropping CustomSmartPointer with data `{}`!", self.data);
        // this is where one could implement cleanup functionality
    }
}

fn main() {
    let c = CustomSmartPointer {
        data: String::from("first pointer"),
    };
    let d = CustomSmartPointer {
        data: String::from("second blah blah"),
    };
    println!("CustomSmartPointers created.");
}
```
### Dropping a Value Early
Rust does not allow us to call the drop function manually. This could be neccessary when implementing Smartpointers for a lock and unlock functionality for multithreading. 

Instead we have to use `std::mem::drop` to release the lock so that other code in the same scope can aquire the lock.

```rust
fn main() {
    let c = CustomSmartPointer {
        data: String::from("some data"),
    };
    println!("CustomSmartPointer created.");
    //c.drop();     // this is not allowed 
    drop(c);
    println!("CustomSmartPointer dropped before the end of main.");
}
```
## `Rc<T>` Reference counting Smart Pointer
`Rc<T>`is only for use in single threaded scendarios. Example: we have a graph data structure, multiple nodes might point to the same next node. That node is conceptually owned by those nodes and should be cleaned up when it has no owners left.

Those immutable References allow sharing data between multiple parts of the program for reading only.
```rust
use std::rc::Rc;
enum SharedList<T>{
    Node(T, Rc<SharedList<T>>),
    Nil,
}

fn main(){
    use crate::SharedList::{Node, Nil};

    let a = Rc::new(Node(5, Rc::new(Node(10, Rc::new(Nil)))));
    println!("count after creating a: {}", Rc::strong_count(&a));           //-> 1

    let b = Node(2, Rc::clone(&a));
    println!("count after creating b: {}", Rc::strong_count(&a));           //-> 2
    {
        let c = Node(8, Rc::clone(&a));
        println!("count after creating c: {}", Rc::strong_count(&a));       //-> 3
    }
    println!("count after c goes out of scope: {}", Rc::strong_count(&a));  //-> 2
}
```
We could have used `a.clone()` aswell, but `Rc::clone()` is the convention in rust. This iway it is easy to distinguish between deep copy kinds of clones and the clones that increase our reference count. When looking for perfomance problems in code, all wee need is to consider is the deep copy clones and we can disregard the `Rc::clone` ones.

## `RefCell<T>` and the Interior Mutability Pattern
*Interior Mutability* is a design pattern in Rust, that allows to mutate data, even when there already an immutable refference to that data. This is accomplished with the `unsafe` package and by manually guaranteeing memory safety.

The `RefCell<T>` type wraps the unsafe calls in a save to use API.

With normal references the borrowing rules are enforced at compile time. With `RefCell<T>` these invariants are enforced at runtime. So if refernces break, it wont compile. If `RefCell<T>` break these rules, the programm will panic.

Similar to `Rc<T>`RefCell is only for use in a single-threaded context.

- `RefCell<T>` allows mutable borrows checked at runtime. You can mutate the value inside the `RefCell<T>` even when it itself is immutable.

### use case: Mock Objects
Sometimes during tesing a programmer will have to use a *test double*. This type only exists in place of another type, in order to observe particular behavior and assert it is implemented correctly.

*Mock Objects* are specific types of test doubles that record what happens during a test.

Here’s the scenario we’ll test: we’ll create a library that tracks a value against a maximum value and sends messages based on how close to the maximum value the current value is. This library could be used to keep track of a user’s quota for the number of API calls they’re allowed to make, for example.

Consumers of the Library would have to implement the Messenger Trait and therefor the send method. (For example sending a Notification Mail etc.)

For testing purpose we want a mock object that, instead of sending an mail just keeps track of the messages it is told to send. So we can assert it is the messages we expect.