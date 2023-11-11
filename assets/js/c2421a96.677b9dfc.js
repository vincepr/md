"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[4346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},c="Timeout - Context package",i={unversionedId:"go/03examples/timeoutFetch",id:"go/03examples/timeoutFetch",title:"Timeout - Context package",description:"Timeout with the context-package",source:"@site/docs/go/03examples/timeoutFetch.md",sourceDirName:"go/03examples",slug:"/go/03examples/timeoutFetch",permalink:"/md/go/03examples/timeoutFetch",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/go/03examples/timeoutFetch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reverse Proxy with Login",permalink:"/md/go/03examples/reverseProxy"},next:{title:"Websockets in go",permalink:"/md/go/03examples/websocket"}},l={},s=[{value:"Timeout with the context-package",id:"timeout-with-the-context-package",level:3},{value:"Shared State with the context-package",id:"shared-state-with-the-context-package",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"timeout---context-package"},"Timeout - Context package"),(0,o.kt)("h3",{id:"timeout-with-the-context-package"},"Timeout with the context-package"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"handling Timout in a fetch request, ex. some Http request on another external server, where we do not know when or if we will get a reply.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "time"\n)\n\nfunc main(){\n    timerStart := time.Now()\n    ctx := context.Background()\n    userId := 123\n    val, err := fetchUserData(ctx, userId)\n    if err != nil{\n        log.Fatal(err)\n    }\n    fmt.Println("Fetched Data: ", val)\n    fmt.Println("it took: ", time.Since(timerStart))\n}\n\ntype Response struct{\n    value string\n    err error\n}\n\nfunc fetchUserData(ctx context.Context, userId int) (string, error){\n    timeOutLimit := time.Millisecond *600\n    ctx, cancel := context.WithTimeout(ctx, timeOutLimit)\n    defer cancel()                                                  //cancel the timeout-counter on success\n\n    responseChannel := make(chan Response)\n    go func(){\n        val, err := fetchSomethingSlow()\n        responseChannel <- Response{\n            value: val,\n            err: err,\n        }\n    }()\n\n    for {\n        select{\n            case <- ctx.Done():\n                return "", fmt.Errorf("Error: Timeout, fetching data took to long.")\n            case res := <- responseChannel:\n                return res.value, res.err\n        }\n    }\n}\n\nfunc fetchSomethingSlow() (string, error){\n    time.Sleep(time.Millisecond * 1500)\n    return "<http>Hello World!</http>", nil\n}\n')),(0,o.kt)("h3",{id:"shared-state-with-the-context-package"},"Shared State with the context-package"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"store variables in context."),(0,o.kt)("li",{parentName:"ul"},"so we can create some data that all our go-methods can share, a bit like ",(0,o.kt)("inlineCode",{parentName:"li"},"[state, setState] = useState()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func main(){\n    timerStart := time.Now()\n\n    key, value := "foo", "currentState"\n    ctx := context.WithValue(context.Background(), key, value)\n    userId := 123\n    val, err := fetchUserData(ctx, userId)\n    if err != nil{\n        log.Fatal(err)\n    }\n    fmt.Println("Fetched Data: ", val)\n    fmt.Println("it took: ", time.Since(timerStart))\n}\n\nfunc fetchUserData(ctx context.Context, userId int) (string, error){\n    state := ctx.Value("foo")\n    fmt.Println(state)\n    timeOutLimit := time.Millisecond *600\n    ctx, cancel := context.WithTimeout(ctx, timeOutLimit)\n    defer cancel()                                                  //cancel the timeout-counter on success\n\n    responseChannel := make(chan Response)\n    go func(){\n        val, err := fetchSomethingSlow()\n        responseChannel <- Response{\n            value: val,\n            err: err,\n        }\n    }()\n\n    for {\n        select{\n            case <- ctx.Done():\n                return "", fmt.Errorf("Error: Timeout, fetching data took to long.")\n            case res := <- responseChannel:\n                return res.value, res.err\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);