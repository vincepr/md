"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[4213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Js async",l={unversionedId:"webdev/js_async",id:"webdev/js_async",title:"Js async",description:"- quick lookup for js implementations for when i need them",source:"@site/docs/webdev/js_async.md",sourceDirName:"webdev",slug:"/webdev/js_async",permalink:"/md/webdev/js_async",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/webdev/js_async.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Express JS",permalink:"/md/webdev/expressjs"},next:{title:"Js Concepts",permalink:"/md/webdev/js_concepts"}},i={},c=[{value:"Callback Function",id:"callback-function",level:2},{value:"Promises in JS",id:"promises-in-js",level:2},{value:"fetch request - GET request",id:"fetch-request---get-request",level:2},{value:"async",id:"async",level:2},{value:"await",id:"await",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-async"},"Js async"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"quick lookup for js implementations for when i need them")),(0,a.kt)("h2",{id:"callback-function"},"Callback Function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"function that is performed after another function has completed.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//html\n<button class="clickMe">Click Me</button>\n\n//js\nconst btn = document.querySelector(".clickMe");\n\n// implementation without a callback:\nfunction wasClicked(){\n    console.log("was clicked")\n}\nbtn.addEventListener("click", wasClicked)\n\n// implementation with a callback:\nbtn.addEventListener("click", () => {\n  console.log("was clicked")\n})\n')),(0,a.kt)("h2",{id:"promises-in-js"},"Promises in JS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cleaner way to write asynchronous code"),(0,a.kt)("li",{parentName:"ul"},"a promise is an object that returns a value that you expect/hope to see in the future, but have no access to at the moment (HTTP-request, userimput, API-call ....)."),(0,a.kt)("li",{parentName:"ul"},"There are 3 states of the Promise object:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pending:")," initial state"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resolved:")," completed the promise"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rejected:")," failed to complete the promise")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// example stacking callbacks the BAD! way:\nsetTimeout(() => {\n    console.log("loading stuff took 5 Seconds...")\n    setTimeout(() => {\n        console.log("done stuff for 3 more Seconds..")\n            setTimeout(() => {\n            console.log("it took 2 seconds to prepare, finishing in 1 more.")\n            setTimeout(() => {\n                console.log("finally done with everything!")\n            }, 1000)\n        }, 1000)\n    }, 3000)\n}, 5000)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"basic structure:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n    let condition\n\n    if(condition){\n        resolve("Promise was successfully")\n    } else {\n        reject("Promise is rejected")\n    }\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rewrite example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function addToQueue(timeItTakes, todo){\n    return new Promise((resolve, reject) => {\n        if(todo){\n            setTimeout(() => {\n                console.log(todo)\n                resolve()\n            }, timeItTakes)\n        } else {\n            reject("cant do nothing")\n        }\n    })\n}\n\n\naddToQueue(5000, "loading stuff took 5 Seconds...")\n    .then(response => addToQueue(3000, "done stuff for 3 more Seconds.."))\n    .then(res => addToQueue(2000, "it took 2 seconds to prepare, finishing in 1 more."))\n    .then(res => addToQueue(1000, "finally done with everything!"))\n    .catch(err => console.log(err)) // will catch errors in any of the above promises\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"example of fetching some Data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const promise = fetch("https://getweather.com/api/location=leipzig")\n\npromise\n    .then(res => res.json())\n    .then(data => console.log(`weather in Leipzig is ${data.description} and Temperature is ${data.temp.celsius}\xb0C`))\n    .catch(err => console.error(err))\n')),(0,a.kt)("h2",{id:"fetch-request---get-request"},"fetch request - GET request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"small working fetch request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fetch("https://type.fit/api/quotes")\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n  .catch((err) => console.log(err));\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'the above will not catch HTTP errors such as 400, since we will get a "response", so we add the res.ok check')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'fetch("https://type.fit/api/quotes")\n    .then(response =>{\n        if(!respone.ok) throw Error(response.statusText)\n        return response.json()\n    })\n    .then((data) => console.log(data))\n    .catch((err) => console.log(err));\n')),(0,a.kt)("h2",{id:"async"},"async"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"allows to write asynchronous code in a more human style compared to promises"),(0,a.kt)("li",{parentName:"ul"},"all we have to do is write the word async before a function and it returns a promise of whatever return value it had before"),(0,a.kt)("li",{parentName:"ul"},"try{} catch{} finally {} for error handling")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\n// the above fetch-request rewritten:\nconst fetchData = async () => {\n  try {\n    const quotes = await fetch("https://type.fit/api/quotes")\n    const response = await quotes.json()\n    console.log(response)\n  } catch (error) console.log(error)\n}\nfetchData()\n')),(0,a.kt)("h2",{id:"await"},"await"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the await makes JS wait untill a promise setlles and returns its result")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function delay() {\n    let time = Math.random()*3000\n    setTimeout(function() {\n        //your code to be executed after 1 second\n    }, time)\n    return time/1000\n}\n\nasync function fetchJuice(name){\n    const table = {\n        orange: "orange-juice",\n        peach: "peach-juice",\n        strawberry: "strawberry-juice",\n    }\n    let time = await delay()\n\n    console.log("fetched: "+table[name]+ `in ${time} seconds`)\n    return table[name]\n}\nfetchJuice("strawberry").then(console.log)\n\nconst mixJuices = async() => {\n    const juice1 = fetchJuice("orange")\n    const juice2 = fetchJuice("peach")\n    const mix = await Promise.all([juice1, juice2])    //this will wait for all the promises of the fetchJuice juices to resolve\n    return mix\n}\nmixJuices().then(console.log)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// additional to iterate\nconst fruit = ["peach", "orange", "strawberry"]\n\nconst fruitLoop = async() =>{\n    for await (let flavor of fruit){ console.log(flavor)}\n}\n\nconst fruitInspection = async () =>{\n    if (await getFruit("peach") === "peach-juice"){\n        console.log("real peach")\n    }\n}\n')),(0,a.kt)("h1",{id:"post-request"},"POST request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// fill our data we want to post\nconst update = {\n    title: "blogpost by vincepr",\n    body: "the most brilliant essay to ever be written...",\n    userId: 123,\n}\n\n// get Post-request format ready\nconst options = {\n    method: "POST",\n    headers: {\n        "Concent-Type": "appliaction/json",\n    },\n    body: JSON.stringify(update),\n}\n\n// communicate with the api\nfetch("https://someblog.com/api/posts", options)\n    .then(data => {\n        if(!data.ok) throw Error(data.status)\n        return data.json()\n    })\n    .then(update => {\n        console.log(update)\n        //show new blog on the ui etc...\n    })\n    .catch(err => console.error(err))\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"notice endpoints may change with time and API's may be restructured. So put all your fetch calls together for easier access.")))}p.isMDXComponent=!0}}]);