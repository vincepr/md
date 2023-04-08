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

- there is a std implementation for ip in rust:
```rust
use std::net::{IpAddr, Ipv4Addr, Ipv6Addr};

let localhost_v4 = IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1));
let localhost_v6 = IpAddr::V6(Ipv6Addr::new(0, 0, 0, 0, 0, 0, 0, 1));

assert_eq!("127.0.0.1".parse(), Ok(localhost_v4));
assert_eq!("::1".parse(), Ok(localhost_v6));

assert_eq!(localhost_v4.is_ipv6(), false);
assert_eq!(localhost_v4.is_ipv4(), true);
```


```rust

```

```rust

```

```rust

```