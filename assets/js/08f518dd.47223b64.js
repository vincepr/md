"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[4046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="Crates projects, packages and modules in Rust",s={unversionedId:"rust/05crates",id:"rust/05crates",title:"Crates projects, packages and modules in Rust",description:"modules",source:"@site/docs/rust/05crates.md",sourceDirName:"rust",slug:"/rust/05crates",permalink:"/md/rust/05crates",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/rust/05crates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structures related to data in Rust",permalink:"/md/rust/04data"},next:{title:"Error Handling in Rust",permalink:"/md/rust/06errors"}},o={},u=[{value:"modules",id:"modules",level:2},{value:"paths",id:"paths",level:2},{value:"relative paths with super",id:"relative-paths-with-super",level:3},{value:"making structs and enums public.",id:"making-structs-and-enums-public",level:3},{value:"use keyword",id:"use-keyword",level:2},{value:"Extended Cargo features",id:"extended-cargo-features",level:2},{value:"Release Profiles",id:"release-profiles",level:3},{value:"Configuring multi-workspace structure with cargo Rust",id:"configuring-multi-workspace-structure-with-cargo-rust",level:2},{value:"creating the project structure",id:"creating-the-project-structure",level:3},{value:"using code from filetree crates",id:"using-code-from-filetree-crates",level:3},{value:"Adding Clap crate to parse Args",id:"adding-clap-crate-to-parse-args",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crates-projects-packages-and-modules-in-rust"},"Crates projects, packages and modules in Rust"),(0,a.kt)("h2",{id:"modules"},"modules"),(0,a.kt)("p",null,"start from the crate root. ",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," for a library- and ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.rs")," for a binary-crate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// src/lib.rs\nmod our_restaurant {\n    pub mod cooking {\n        pub fn start_cooking() {}\n        fn plate_meal() {}\n    }\n\n    mod serving {\n        fn take_order() {}\n        fn serve_order() {}\n        fn payment() {}\n    }\n}\n")),(0,a.kt)("h2",{id:"paths"},"paths"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"absolute path is the full path starting from a crate root. it starts with the literal ",(0,a.kt)("inlineCode",{parentName:"li"},"crate")),(0,a.kt)("li",{parentName:"ul"},"relative path starts from the current module and uses ",(0,a.kt)("inlineCode",{parentName:"li"},"self"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"super"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"mod our_restaurant {\n    pub mod cooking {\n        pub fn start_cooking() {}\n    }\n}\n\npub fn dostuff(){\n    // absolute path\n    crate::our_restaurant::cooking::start_cooking();\n\n    // relative path\n    our_restaurant::cooking::start_cooking();\n}\n")),(0,a.kt)("h3",{id:"relative-paths-with-super"},"relative paths with super"),(0,a.kt)("p",null,"easy way to reference some parent function/struct. Useful if we think those components belong together and will be moved arround together if at all."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn basic_addition(){}\n\nmod modify {\n    fn fix_addition(){\n        fix();\n        super::basic_addition();\n    }\n    fn fix() {}\n}\n")),(0,a.kt)("h3",{id:"making-structs-and-enums-public"},"making structs and enums public."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"default for enums is public."),(0,a.kt)("li",{parentName:"ul"},"default for structs is private.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'mod restaurant {\n    pub struct Meal {\n        pub food: String,\n        price:  i32,\n    }\n    impl Meal {\n        pub fn make(f: &str) -> Meal {\n            Meal {\n                food: String::from(f),\n                price: 8,\n            }\n        }\n    }\n}\n\npub fn eat() {\n    let mut meal = restaurant::Meal::make("Muesli");\n    // we can still change our food because its public\n    meal.food = String("Toast a la Tuna");\n    println!("Ordering {}, please!", meal.food);\n    // println!("cant access {}!", meal.price);       // this will not compile because its private\n}\n')),(0,a.kt)("h2",{id:"use-keyword"},"use keyword"),(0,a.kt)("p",null,"to shorten inport paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'mod restaurant {\n    pub mod service{\n        pub fn clean_table(){}\n    }\n}\n\nuse crate::restaurant::service;\n\npub fn dostuff(){\n    restaurant::service::clean_table();\n    service::clean_table();             // same "target" as above\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"it is idiomatic to bring the service package in this case but not the function. ",(0,a.kt)("inlineCode",{parentName:"li"},"use crate::restaurant::service::clean_table")," That would make it difficoult to spot where ",(0,a.kt)("inlineCode",{parentName:"li"},"clean_table()")," is defined."),(0,a.kt)("li",{parentName:"ul"},"for enums and structs on the other hand it is idiomatic to bring them directly into scope:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::collections::HashMap;\n\nfn main(){\n    let mut map = HashMap::new();   // instead of collections::HashMap::new();\n    map.insert(1,2);\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as keyword")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::fmt::Result as Res;\n\nfn function() => Res {}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nesting imports")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// we can nest them like this:\nuse std::{fmt::Result, io }         \n\n// instead of 2 lines:\nuse std::io;\nuse std::io::Write;\n// we could also use self to reference itself:\nuse std::io::{self, Write}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the glob operator")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::collections::*;    // gets all items into scope\n")),(0,a.kt)("h2",{id:"extended-cargo-features"},"Extended Cargo features"),(0,a.kt)("h3",{id:"release-profiles"},"Release Profiles"),(0,a.kt)("p",null,"Profiles provide a way to alter the compiler settings, influencing things like optimizations and debugging symbols."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cargo has default settings, that can be overwritten by adding ",(0,a.kt)("inlineCode",{parentName:"li"},"profile.*"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[profile.dev]\nopt-level = 0           ## 0 the lowest optimisation level possible\noverflow-checks = false ## disable integer overflow checks\n\n[profile.release]\nopt-level = 3           ## 3 is the hightest optimisation level (is default for --release)\n")),(0,a.kt)("p",null,"Some noteworthy settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"opt-level",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"0 no optimization"),(0,a.kt)("li",{parentName:"ul"},"3 all optimizations"),(0,a.kt)("li",{parentName:"ul"},'"s" optimize for binary size'),(0,a.kt)("li",{parentName:"ul"},'"Z" optimize for binary size but also turn off loop vectorization'))),(0,a.kt)("li",{parentName:"ul"},"debug ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"0 or false : no debug info at all (might be faster/less binary etc.)"),(0,a.kt)("li",{parentName:"ul"},"1 : line tables only"),(0,a.kt)("li",{parentName:"ul"},"2 or true : full debug info")))),(0,a.kt)("h2",{id:"configuring-multi-workspace-structure-with-cargo-rust"},"Configuring multi-workspace structure with cargo Rust"),(0,a.kt)("h3",{id:"creating-the-project-structure"},"creating the project structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cargo new rs_file_tree --lib\ncd rs_file_tree\ncargo new filetree --lib\ncargo new main-unix\ncargo new main-win\n")),(0,a.kt)("p",null,"In the root project's Cargo.toml we delete everything but the workspace definitions/paths:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[workspace]\nmembers=[\n    "main-unix",\n    "filetree",\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"now we can already ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo build"))),(0,a.kt)("h3",{id:"using-code-from-filetree-crates"},"using code from filetree crates"),(0,a.kt)("p",null,"In our main crates we import our library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[dependencies]\nfiletree = { path = "../filetree" }\n')),(0,a.kt)("h2",{id:"adding-clap-crate-to-parse-args"},"Adding Clap crate to parse Args"),(0,a.kt)("p",null,"activate derive-mode-macros with the feature flag:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo add clap --features derive"))))}p.isMDXComponent=!0}}]);