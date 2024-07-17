"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[313],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,m=p["".concat(o,".").concat(g)]||p[g]||f[g]||s;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},724:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const s={},i="basic cli in rust",l={unversionedId:"rust/examples/02cli",id:"rust/examples/02cli",title:"basic cli in rust",description:"grep like ability to scan a textfile and return all lines that include a search-querry.",source:"@site/docs/rust/examples/02cli.md",sourceDirName:"rust/examples",slug:"/rust/examples/02cli",permalink:"/md/rust/examples/02cli",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/rust/examples/02cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Examples",permalink:"/md/rust/examples/01basic"},next:{title:"install codeserver",permalink:"/md/settings/codeserver"}},o={},c=[],u={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-cli-in-rust"},"basic cli in rust"),(0,a.kt)("p",null,"grep like ability to scan a textfile and return all lines that include a search-querry."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cargo new rsgrep"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/main.rs"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::{process};\n\nuse rsgrep::Config;                     // import "OUR"Library:\n\n\nfn main() {\n    // reading in args:\n    let cfg = Config::init().unwrap_or_else(|err|{\n        println!("rsgrep-Error: {err}");\n        process::exit(1);\n    });\n    if let Err(e) = rsgrep::run(&cfg) { // no need to unwrap here since its only () anyways\n        println!("rsgrep-Error: {e}");\n        process::exit(1);\n    }\n    process::exit(0);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/lib.rs"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::{fs,io};\n\n// main entrypoint of the binary\npub fn run(cfg: &Config) -> Result<(), io::Error >{\n    // reading the file:\n    let data = fs::read_to_string(&cfg.path)?;\n        \n\n    let lines = search_str(&cfg.query, &data);\n    for line in lines {\n        println!("{line}")\n    }\n    Ok(())\n}\n\n// searches a string for a substring. Returns array of lines that include substing.\npub fn search_str<\'a>(substr: &str, data: &\'a str) -> Vec<&\'a str> {\n    let mut found_lines:Vec<&str> = vec![];\n    for line in data.lines() {\n        if line.contains(substr) {\n            found_lines.push(line);\n        }\n    }\n    found_lines\n}\n\n// Config that holds Args params as Strings\npub struct Config {\n    query: String,\n    path: String,\n}\nimpl Config {\n    pub fn init() -> Result<Config, &\'static str> {\n        use std::env;\n        let args: Vec<String> = env::args().collect();  //-> ["pathToBinary/rsgrep", "Searchstring", "file.txt"]\n        if args.len() != 3 {\n            return Err("need 2 args to run rsgrep successfully")\n        }\n        let (query, path) = Config::parse_args(&args);\n        Ok(Config{\n            query: query.to_string(),\n            path: path.to_string(),\n        })\n    }\n    fn parse_args(args: &Vec<String>) -> (&str, &str){\n        let query = &args[1];\n        let path = &args[2];\n        (query, path)\n    }\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn one_result() {\n        let query = "blah";\n        let data = "\\\nLorem:\nipsum, blah lbah.\nLastline three.";\n        assert_eq!(vec!["ipsum, blah lbah."], search_str(query, data));\n    }\n}\n')))}p.isMDXComponent=!0}}]);