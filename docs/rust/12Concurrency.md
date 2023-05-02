# Concurrency in Rust

## Threads
Rust attempts to mitigate the negative effects of using threads, but special care is still required to avoid, race conditions, dedlocks etc...

The rust standard library uses a 1:1 model of thread implementation of system-threads to language-threads.

```rust
use std::thread;
use std::time::Duration;

fn main() {
    thread::spawn(|| {
        for i in 1..10 {
            println!("first thread: {}", i);
            thread::sleep(Duration::from_millis(1));
        }
    });

    for i in 1..5 {
        println!("from mian: {}", i);
        thread::sleep(Duration::from_millis(1));
    }
}
```
### Waiting for threads to finish
using the ``join` Handles, we can sync up again after the thread has fully completed:
```rust
/// we add a thread variable to identify our thread:
    let handle = thread::spawn(|| {
/// ...
/// at the end of the above main we can add:
    handle.join().unwrap();
```
### move keyword to transferr ownerhip into Threads(/closures)
```rust
use std::thread;

fn main() {
    let v = vec![1, 2, 3];
    let handle = thread::spawn(move || {              // we have to move v into the closure if we want to access it inside
        println!("Here is vector from inside a thread: {:?}", v)
    });
    handle.join().unwrap();
    //drop(v);               // rust's borrowing rules will not allow this (since we moved v's ownership inside the closure)
}
```

## Message Passing
A popular approach to ensure safe concurrency is **message passing**. (like go routines with channels)
- in rust std-library we have (among others) `mpsc` *multiple producer*, *single consumer*. 
- `tx` is the *transmitter*, the second element `rx` is the *receiver*;
```rust
use std::sync::mpsc;

fn main() {
    let (tx, rx) = mpsc::channel();

    // open a thread that sends some data down the channel:
    thread::spawn(move || {
        let val = 'String::from("hello from thread");
        tx.send(val).unwrap();
    });

    let received = rx.recv().unwrap();
    println!("Got in main: {}", received);
}
```
- the receiver `rx` has two useful methods: `recv()` and `try_recv()`. 
    - `recv()` will block till a value is stent. It will return in a `Result<T,E>`. Once the transmitter closes recv will return an error to signal, that no more values will be coming.
    - `try_recv()` does not block but instead return a `Result<T,E>` immediately. An Ok with a value or an Error if there arent any messages at this time.

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || { from the thread
        let vals = vec![
            String::from("hello"),
            String::from("from the"),
            String::from("thread"),
        ];
        for val in vals{
            tx.send(val).unwrap();
            thread::sleep(Duration::from_secs(1));
        }
        // println!("sending value: {}", vals)       //not allowed since we 'moved' our vals back out
    });

    for received in rx{
        println!("Got in main: {}", received);
    }
}
```
### multiple producers for a channel
We can create multiple producers (with a mscp) by cloning the producer.

```rust
let (tx, rx) = mpsc::channel();

// first thread:
let tx1 = tx.clone();
thread::spawn(move || {
    let vals = vec![1,2,3,4,5];
    for val in vals{
        tx1.send(val).unwrap();
        thread::sleep(Duration::from_secs(2));
    }
});
// second thread:
thread::spawn(move || {
    let vals = vec![99,88,77,66,55,44,33,22,11,0];
    for val in vals{
        tx.send(val).unwrap();
        thread::sleep(Duration::from_secs(1));
    }
});
// receive in main channel:
fro received in rx {
    println!("Got: {}", received);
}
```
## Shared State Concurrency
Another way of handeling concurrency: read-,write- locked mutexes..., atomic values.
### Mutex in Rust with Atomic Reference Counting
- We cant just wrap our Mutex in a Reference Counted Pointer, copy that and move it into the threads. `Rc` is **NOT** threadsave (because it does not implement the send trait)
- Instead we can use `Arc<T>`. A atmoic reference counted type.
```rust
use std::sync::{Mutex, Arc};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));  // Reference Counted Pointer to our Mutex
    let mut handles = vec![];
    for _ in 0..10{
        let counter = Arc::clone(&counter);
        let handle= thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num +=1;
        });
        handles.push(handle);
    }
    // wait for threads to finish:
    for handle in handles {
        handle.join().unwrap();
    }
    println!("m: {m}"); // -> 10
}
```
Atomic types in general Implement a lot of Primitives that are threadsave.

## Sync and Send Traits
We could implement own concurrency features for custom Types etc. Send Trait and Sync Trait are part of ``std::marker`

### Send
The `Send` marker trait indicates that ownership of values can be transferred between threads.

Most Rust types are Send by default, except Pointers. For example Reference Counted Pointer: `Rc<T>` is not. Because if we cloned it and both threads tried to write to it at the same time we would create a racecondition.
- Any type composed entirely of Send types is automatically marked Send aswell.

### Sync
The `Sync` marker trait indicates that is safe to be referenced from multiple threads.

Meaning the type reference can be sent safely to another thread.
- Any type composed entirely of Sync types is automatically marked Sync aswell.
