"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[2435],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4636:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const l={},i="Error Handling in Rust",o={unversionedId:"rust/06errors",id:"rust/06errors",title:"Error Handling in Rust",description:"Rust distinguishes between recoverable and unrecoverable errors.",source:"@site/docs/rust/06errors.md",sourceDirName:"rust",slug:"/rust/06errors",permalink:"/md/rust/06errors",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/rust/06errors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Crates projects, packages and modules in Rust",permalink:"/md/rust/05crates"},next:{title:"Traits and Lifetime in Rust",permalink:"/md/rust/07lifetime_traits"}},s={},u=[{value:"unrecoverable errors",id:"unrecoverable-errors",level:2},{value:"using a panic Backtrace",id:"using-a-panic-backtrace",level:3},{value:"recoverable Errors with Result",id:"recoverable-errors-with-result",level:2},{value:"if Err",id:"if-err",level:3},{value:"? Operator",id:"-operator",level:3},{value:"Handling different Error Types in the same Result",id:"handling-different-error-types-in-the-same-result",level:2},{value:"Box with dyn Error",id:"box-with-dyn-error",level:3},{value:"Enums for bringing Error Types together",id:"enums-for-bringing-error-types-together",level:3},{value:"Writing Error Messages to Standard Error instead of Standard Output",id:"writing-error-messages-to-standard-error-instead-of-standard-output",level:2}],c={toc:u};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling-in-rust"},"Error Handling in Rust"),(0,a.kt)("p",null,"Rust distinguishes between recoverable and unrecoverable errors."),(0,a.kt)("h2",{id:"unrecoverable-errors"},"unrecoverable errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"panic!")," Macro is one way to panic. The other by an action (like trying to access an array index out of bounds)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"by default after a panic rust goes backwards on the stack and frees all memory used (unwind). It is possible to remove this behavior and depend on the os memory system for cleanup. This strips away binary size, but brings its own risks. Doable by adding panic abort to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[profile.release]\npanic = 'abort'\n")),(0,a.kt)("h3",{id:"using-a-panic-backtrace"},"using a panic Backtrace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// trying a buffer overread in rust:\nlet v = vec![1,2,3];\nv[100];\n")),(0,a.kt)("p",null,"and ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE=1 cargo run")," leads to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n     Running `target/debug/variables`\nthread 'main' panicked at 'index out of bounds: the len is 3 but the index is 99', src/main.rs:5:5\nstack backtrace:\n   0: rust_begin_unwind\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/std/src/panicking.rs:575:5\n   1: core::panicking::panic_fmt\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/panicking.rs:64:14\n   2: core::panicking::panic_bounds_check\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/panicking.rs:159:5\n   3: <usize as core::slice::index::SliceIndex<[T]>>::index\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/slice/index.rs:260:10\n   4: core::slice::index::<impl core::ops::index::Index<I> for [T]>::index\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/slice/index.rs:18:9\n   5: <alloc::vec::Vec<T,A> as core::ops::index::Index<I>>::index\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/alloc/src/vec/mod.rs:2732:9\n   6: variables::main\n             at ./src/main.rs:5:5\n   7: core::ops::function::FnOnce::call_once\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/ops/function.rs:250:5\nnote: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.\n")),(0,a.kt)("h2",{id:"recoverable-errors-with-result"},"recoverable Errors with Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// definition\nenum Result<T, E> {\n    Ok(T),\n    Err(E),\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a function that could fail is reading a file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nlet result = File::open("text.txt");\nprintln!("{:?}", result);   // depending if file exists:\n    // Err(Os { code: 2, kind: NotFound, message: "No such file or directory" })\n    // Ok(File { fd: 3, path: "/home/vince/rust/variables/text.txt", read: true, write: false })\n\nlet content = match result {\n    Ok(file) => file,\n    Err(err)=> panic!("Cant open file, ERROR: {:?}", err),\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we want different behavior depending on what error (file not exist then we create it, other reason we panic etc...)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nuse std::io::ErrorKind;\n\nlet result = File::open("text.txt");\nlet content = match result {\n    Ok(file) => file,\n    Err(err)=> match err.kind() {\n        ErrorKind::NotFound => match File::create("hello.txt") {\n            Ok(file) => file,\n            Err(e) => panic!("Cant create the file{:?}", e),\n        },\n        other => panic!("Cant open file, ERROR: {:?}", other),\n    }\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"another way to write the exact same error handling using closures:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nuse std::io::ErrorKind;\n\nlet file = File::open("hello.txt").unwrap_or_else(|err|{\n    if err.kind() == ErrorKind::NotFound {\n        File::create("hello.txt").unwrap_or_else(|e|{\n            panic!("Cant create the file{:?}", e);\n        })\n    } else {\n        panic!("Cant open file, ERROR: {:?}", err);\n    }\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if the Result value is ",(0,a.kt)("inlineCode",{parentName:"li"},"Ok")," the ",(0,a.kt)("strong",{parentName:"li"},"unwrap")," will return the value T inside ",(0,a.kt)("inlineCode",{parentName:"li"},"Ok(T)"),". If the Result is the Err Variant unwrap will panic for us."),(0,a.kt)("li",{parentName:"ul"},"This way we can give the error message more additional context etc.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nlet file = File::open("hello.txt").unwrap();\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"similar the ",(0,a.kt)("strong",{parentName:"li"},"expect")," method lets us choose the panic error message:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nlet file = File::open("hello.txt").expect("ERROR: need hello.txt file and access!");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"propagating Errors:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let data = read_data_from_file("data.txt");\n    // now we can handle our errors here (or not)\n    println!("{:?}", data);\n}\n\nuse std::fs::File;\nuse std::io::{self, Read};\nfn read_data_from_file(path: &str) -> Result<String, io::Error> {\n    let file_result = File::open(&path);\n\n    let mut file = match file_result {\n        Ok(f) => f,\n        Err(e) => return Err(e),\n    };\n\n    let mut data = String::new();\n    match file.read_to_string(&mut data) {\n        Ok(_) => Ok(data),\n        Err(e) => Err(e),\n    }\n}\n')),(0,a.kt)("h3",{id:"if-err"},"if Err"),(0,a.kt)("p",null,"if we are for example only concerned with the Err, or the Ok would wrap the empty object ",(0,a.kt)("inlineCode",{parentName:"p"},"()"),"then it might be beneficial to just use a if statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'if let Err(e) = funcThatCanError(){\n    println("Error in funcThatCanError:{e}");\n}\n')),(0,a.kt)("h3",{id:"-operator"},"? Operator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," operator can only be used in functions whose return type is compatible with the value it uses. For example the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," value, or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a shortcut for propagating errors (does same as above example):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn read_data_short(path: &str) -> Result<String, io::Error>{\n    let mut file = File::open(&path)?;          // ?shortcut: if it errors then we return the Err(e)\n    let mut data = String::new();\n    file.read_to_string(&mut data)?;\n    Ok(data)\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it is even possible to shorten this further by chaning the calls:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn read_data_short(path: &str) -> Result<String, io::Error>{\n    let mut data = String::new();\n    File::open(&path)?.read_to_string(&mut data)?;\n    Ok(data)\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a quick example of the ? Operator with a Option instead:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn last_char_of_the_first_line(text: &str) -> Option<char> {\n    text.lines().next()?.chars().last()\n}\n")),(0,a.kt)("h2",{id:"handling-different-error-types-in-the-same-result"},"Handling different Error Types in the same Result"),(0,a.kt)("p",null,"2 Main Ways, wrapping the Error in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Box<dyn error::Error>")," or using enums."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"really useful if we want to be able to just ? Operator all errors and handle them upstream.")),(0,a.kt)("h3",{id:"box-with-dyn-error"},"Box with dyn Error"),(0,a.kt)("p",null,"Since both Errors implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"std::error::Error")," Trait we can use a box that implements that Trait inside."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn number_from_file(filename: &str) -> Result<u64, Box<dyn std::error::Error>> {\n    use std::io::Read;\n    \n    /* 1: std::io::Error */\n    let mut file = std::fs::File::open(filename)?;\n    let mut buffer = String::new();\n    file.read_to_string(&mut buffer)?;\n\n    /* 2: ParseIntError */\n    let parsed: u64 = buffer.trim().parse()?;\n\n    Ok(parsed)\n}\n")),(0,a.kt)("p",null,"A downside to this could be that we only will handle that error at runtime dynamically. So less savety at compile time etc."),(0,a.kt)("h3",{id:"enums-for-bringing-error-types-together"},"Enums for bringing Error Types together"),(0,a.kt)("p",null,"Instead of having dynamic results above we can also prepare an Error enum with all possible errors."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"That way we get full coverage of possible cases upstream when propagating errors up."),(0,a.kt)("li",{parentName:"ul"},"in short we gain accuracy in cost of some boilerplate.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// We just bundle our Error Types in an enum:\nenum NumFromFileErr {\n    IoErr(std::io::Error),\n    ParseErr(ParseIntError),\n}\n// Implement the conversion from the default errors to NumFromFileErr\n// This will be automatically called by the ? if needed for conversion thanks to the into Trait\nimpl From<ParseIntError> for NumFromFileErr {\n    fn from(err: ParseIntError) -> Self {\n        NumFromFileErr::ParseErr(err)\n    }\n}\n\nimpl From<std::io::Error> for NumFromFileErr {\n    fn from(err: std::io::Error) -> Self {\n        NumFromFileErr::IoErr(err)\n    }\n}\n\nfn number_from_file(filename: &str) -> Result<u64, NumFromFileErr> {\n    // same as above ....\n}\n")),(0,a.kt)("h2",{id:"writing-error-messages-to-standard-error-instead-of-standard-output"},"Writing Error Messages to Standard Error instead of Standard Output"),(0,a.kt)("p",null,"By default we write everything ti Standart Output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To test we can redirect our Standard Output to a file: ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo run > out.txt")),(0,a.kt)("li",{parentName:"ul"},"It is useful to print our error messages out to Standard Error instead.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'eprintln!("Our custom Error");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"now we can ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo run > out.txt")," write to our file, while still showing errors in our main channel.")))}d.isMDXComponent=!0}}]);