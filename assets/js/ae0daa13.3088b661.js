"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,g=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={},l="Basic Examples",s={unversionedId:"rust/01examples/01basic",id:"rust/01examples/01basic",title:"Basic Examples",description:"Number guessing game:",source:"@site/docs/rust/01examples/01basic.md",sourceDirName:"rust/01examples",slug:"/rust/01examples/01basic",permalink:"/md/rust/01examples/01basic",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/rust/01examples/01basic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gotchas",permalink:"/md/go/04gotchas"},next:{title:"some Notes while starting to learn Rust",permalink:"/md/rust/02start"}},o={},u=[{value:"Number guessing game:",id:"number-guessing-game",level:2},{value:"a struct example",id:"a-struct-example",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-examples"},"Basic Examples"),(0,a.kt)("h2",{id:"number-guessing-game"},"Number guessing game:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::io;\nuse rand::Rng;\nuse std::cmp::Ordering;\n\n\nfn main() {\n    loop {\n        println!("--------");\n        \n        let secret = random_nr();\n        println!("{secret}");\n        if input(secret) {\n            break;   \n        }\n    }\n}\n\nfn input(secret: u32)-> bool{\n    // handle the input\n    println!("Input the number you guess:");\n    let mut guess = String::new();\n    io::stdin()\n        .read_line(&mut guess)\n        .expect("Failed to read line");\n\n    // parse str -> uint. Shadowing allows reusing the variable here!\n    // let guess: u32 = guess.trim().parse().expect("Only numbers allowed");\n    let guess: u32 = match guess.trim().parse() {\n        Ok(num) => num,\n        Err(_) => return false,     // return early so loop starts again\n    };\n\n    // we check if were bigger or smaller by using Ordering:\n    println!("You guessed: {guess}");\n    match guess.cmp(&secret){\n        Ordering::Less => println!("Too small"),\n        Ordering::Greater => println!("Too Big"),\n        Ordering::Equal => {\n            println!("You Guessed right");\n            return true;\n        },\n    }\n    return false;\n}\n\nfn random_nr()->u32{\n    let secret_number = rand::thread_rng().gen_range(1..=100);\n    return secret_number;\n}\n')),(0,a.kt)("h2",{id:"a-struct-example"},"a struct example"),(0,a.kt)("p",null,"and implementing custom printing on the struct. By default  ",(0,a.kt)("inlineCode",{parentName:"p"},'println!("{figure}");')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'println!("{figure:?}");')," will fail since they dont implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"std::fmt::Display")," trait. ",(0,a.kt)("inlineCode",{parentName:"p"},"#[derive(Debug)]")," is the answer here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"another way would be the ",(0,a.kt)("inlineCode",{parentName:"li"},"dbg!")," macro. But that takes ownership of an expression (",(0,a.kt)("inlineCode",{parentName:"li"},"println!")," does not). This is really useful for quick debugging.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug)]\nstruct Rectangle{\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    // all functions defined in an imp block are called associated functions:\n    fn area(&self) -> u32 {         // first arg always must be &self\n        self.width * self.height    // self. to get struct attributes\n    }\n    fn can_hold(&self, other: &Rectangle) -> bool{\n        let case1 = self.width > other.width && self.height> other.height;\n        let case2 = self.height> other.width && self.width > other.height;\n        case1 || case2\n    }\n}\n// multiple impl blocks are allowed\nimpl Rectangle{\n    // constructor like function, for a special case(but could be a constructor aswell)\n    fn square(size: u32) -> Self{\n        Self { width: size, height: size, }\n    }\n}\n\nfn main() {\n    let rect1 = Rectangle{\n        width:30,\n        height: 50,\n    };\n\n    let rect1 = dbg!(rect1);        // works even without the #[derive(Debug)]\n    println!("Current rect1 is: {rect1:#?}");\n    println!( "The area of the rectangle is {} square pixels.", rect1.area() );\n\n    let rect2 = Rectangle{\n        width: 50,\n        height: 50,\n    };\n    let rect3 = Rectangle::square(25);\n    \n    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));\n    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));\n}\n')))}p.isMDXComponent=!0}}]);