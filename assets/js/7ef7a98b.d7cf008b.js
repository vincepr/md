"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[2435],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4636:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const l={},i="Handling errors",o={unversionedId:"rust/06errors",id:"rust/06errors",title:"Handling errors",description:"Rust distinguishes between recoverable and unrecoverable errors.",source:"@site/docs/rust/06errors.md",sourceDirName:"rust",slug:"/rust/06errors",permalink:"/md/rust/06errors",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/rust/06errors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"projects, packages, crates and modules",permalink:"/md/rust/05crates"},next:{title:"Traits and Lifetime in Rust",permalink:"/md/rust/07traits"}},s={},c=[{value:"unrecoverable errors",id:"unrecoverable-errors",level:2},{value:"using a panic Backtrace",id:"using-a-panic-backtrace",level:3},{value:"recoverable Errors with Result",id:"recoverable-errors-with-result",level:2},{value:"? Operator",id:"-operator",level:3}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handling-errors"},"Handling errors"),(0,a.kt)("p",null,"Rust distinguishes between recoverable and unrecoverable errors."),(0,a.kt)("h2",{id:"unrecoverable-errors"},"unrecoverable errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"panic!")," Macro is one way to panic. The other by an action (like trying to access an array index out of bounds)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"by default after a panic rust goes backwards on the stack and frees all memory used (unwind). It is possible to remove this behavior and depend on the os memory system for cleanup. This strips away binary size, but brings its own risks. Doable by adding panic abort to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[profile.release]\npanic = 'abort'\n")),(0,a.kt)("h3",{id:"using-a-panic-backtrace"},"using a panic Backtrace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// trying a buffer overread in rust:\nlet v = vec![1,2,3];\nv[100];\n")),(0,a.kt)("p",null,"and ",(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE=1 cargo run")," leads to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n     Running `target/debug/variables`\nthread 'main' panicked at 'index out of bounds: the len is 3 but the index is 99', src/main.rs:5:5\nstack backtrace:\n   0: rust_begin_unwind\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/std/src/panicking.rs:575:5\n   1: core::panicking::panic_fmt\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/panicking.rs:64:14\n   2: core::panicking::panic_bounds_check\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/panicking.rs:159:5\n   3: <usize as core::slice::index::SliceIndex<[T]>>::index\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/slice/index.rs:260:10\n   4: core::slice::index::<impl core::ops::index::Index<I> for [T]>::index\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/slice/index.rs:18:9\n   5: <alloc::vec::Vec<T,A> as core::ops::index::Index<I>>::index\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/alloc/src/vec/mod.rs:2732:9\n   6: variables::main\n             at ./src/main.rs:5:5\n   7: core::ops::function::FnOnce::call_once\n             at /rustc/9eb3afe9ebe9c7d2b84b71002d44f4a0edac95e0/library/core/src/ops/function.rs:250:5\nnote: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.\n")),(0,a.kt)("h2",{id:"recoverable-errors-with-result"},"recoverable Errors with Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// definition\nenum Result<T, E> {\n    Ok(T),\n    Err(E),\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a function that could fail is reading a file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nlet result = File::open("text.txt");\nprintln!("{:?}", result);   // depending if file exists:\n    // Err(Os { code: 2, kind: NotFound, message: "No such file or directory" })\n    // Ok(File { fd: 3, path: "/home/vince/rust/variables/text.txt", read: true, write: false })\n\nlet content = match result {\n    Ok(file) => file,\n    Err(err)=> panic!("Cant open file, ERROR: {:?}", err),\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we want different behavior depending on what error (file not exist then we create it, other reason we panic etc...)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nuse std::io::ErrorKind;\n\nlet result = File::open("text.txt");\nlet content = match result {\n    Ok(file) => file,\n    Err(err)=> match err.kind() {\n        ErrorKind::NotFound => match File::create("hello.txt") {\n            Ok(file) => file,\n            Err(e) => panic!("Cant create the file{:?}", e),\n        },\n        other => panic!("Cant open file, ERROR: {:?}", other),\n    }\n};\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"another way to write the exact same error handling using closures:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nuse std::io::ErrorKind;\n\nlet file = File::open("hello.txt").unwrap_or_else(|err|{\n    if err.kind() == ErrorKind::NotFound {\n        File::create("hello.txt").unwrap_or_else(|e|{\n            panic!("Cant create the file{:?}", e);\n        })\n    } else {\n        panic!("Cant open file, ERROR: {:?}", err);\n    }\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if the Result value is ",(0,a.kt)("inlineCode",{parentName:"li"},"Ok")," the ",(0,a.kt)("strong",{parentName:"li"},"unwrap")," will return the value T inside ",(0,a.kt)("inlineCode",{parentName:"li"},"Ok(T)"),". If the Result is the Err Variant unwrap will panic for us."),(0,a.kt)("li",{parentName:"ul"},"This way we can give the error message more additional context etc.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nlet file = File::open("hello.txt").unwrap();\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"similar the ",(0,a.kt)("strong",{parentName:"li"},"expect")," method lets us choose the panic error message:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fs::File;\nlet file = File::open("hello.txt").expect("ERROR: need hello.txt file and access!");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"propagating Errors:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let data = read_data_from_file("data.txt");\n    // now we can handle our errors here (or not)\n    println!("{:?}", data);\n}\n\nuse std::fs::File;\nuse std::io::{self, Read};\nfn read_data_from_file(path: &str) -> Result<String, io::Error> {\n    let file_result = File::open(&path);\n\n    let mut file = match file_result {\n        Ok(f) => f,\n        Err(e) => return Err(e),\n    };\n\n    let mut data = String::new();\n    match file.read_to_string(&mut data) {\n        Ok(_) => Ok(data),\n        Err(e) => Err(e),\n    }\n}\n')),(0,a.kt)("h3",{id:"-operator"},"? Operator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," operator can only be used in functions whose return type is compatible with the value it uses. For example the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," value, or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a shortcut for propagating errors (does same as above example):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn read_data_short(path: &str) -> Result<String, io::Error>{\n    let mut file = File::open(&path)?;          // ?shortcut: if it errors then we return the Err(e)\n    let mut data = String::new();\n    file.read_to_string(&mut data)?;\n    Ok(data)\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it is even possible to shorten this further by chaning the calls:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn read_data_short(path: &str) -> Result<String, io::Error>{\n    let mut data = String::new();\n    File::open(&path)?.read_to_string(&mut data)?;\n    Ok(data)\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a quick example of the ? Operator with a Option instead:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn last_char_of_the_first_line(text: &str) -> Option<char> {\n    text.lines().next()?.chars().last()\n}\n")))}p.isMDXComponent=!0}}]);