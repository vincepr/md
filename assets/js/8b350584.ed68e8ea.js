"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[2194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2079:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{arr:t,withHelp:n}=e;const[a,o]=(0,r.useState)(0),[l,i]=(0,r.useState)("");function s(){l===t[a]&&(o(a+1),i(""))}return r.createElement("div",null,r.createElement("ol",{className:"CodeAnswersList"},t.filter(((e,t)=>function(e,t,n){return t<n}(0,t,a))).map(((e,n)=>function(e,t,n){return r.createElement("li",{className:n?"typed-out finished":"typed-out",key:t}," ",e," ")}(e,n,a===t.length)))),r.createElement("input",{className:"CodeAnswersInput",disabled:a===t.length?"disabled":"",onKeyDown:e=>{"Enter"===e.key&&s()},onChange:e=>i(e.target.value),value:l}),r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:s,className:"CodeAnswersButton"},"Check one Line"),n?r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:()=>{a<t.length&&o(a+1)}},"Help - one line"):"",n?r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:()=>o(t.length),style:{marginLeft:"1%"}},"Help - show all"):"")}},697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(2079);const l={slug:"mdx-interactive4",title:"Aufgabe 4",authors:["Vincent"],tags:["JS-Hero"]},i=void 0,s={permalink:"/md/blog/mdx-interactive4",editUrl:"https://github.com/vincepr/md/blob/main/blog/2023-02-16-Aufgabe4.mdx",source:"@site/blog/2023-02-16-Aufgabe4.mdx",title:"Aufgabe 4",description:"Gesucht sind die 6 Zeilen die der ConsoleLog ausgibt. Sollten L\xf6sbar sein wenn man in Js-Hero bis ca 37. gekomen ist.",date:"2023-02-16T00:00:00.000Z",formattedDate:"16. Februar 2023",tags:[{label:"JS-Hero",permalink:"/md/blog/tags/js-hero"}],readingTime:.72,hasTruncateMarker:!1,authors:[{name:"Vincent",title:"Creator of this Repo",url:"https://github.com/vincepr",imageURL:"https://github.com/vincepr.png",key:"Vincent"}],frontMatter:{slug:"mdx-interactive4",title:"Aufgabe 4",authors:["Vincent"],tags:["JS-Hero"]},nextItem:{title:"Aufgabe 3",permalink:"/md/blog/mdx-interactive3"}},c={authorsImageUrls:[void 0]};let u=["hello world!1412","122hello world!12","a_string_has_22letters","22-characters-has-the-following-string:-a_string_has_22letters","11","44"];const p=[],d={toc:p};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gesucht sind die 6 Zeilen die der ConsoleLog ausgibt. Sollten L\xf6sbar sein wenn man in Js-Hero bis ca 37. gekomen ist."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function x(a){\n  return a % 10;\n}\n\nfunction y(str){\n  return str.length;\n}\n\nfunction pr(a,b){\n  console.log(a+b+c);\n}\n\n// 1 Block | strings and numbers\nlet a = "hello world!";\nlet b = x(a.length);\nlet c = y(a);\npr( a, b + c );\npr( c, b + a );\n\n// 2 Block | charAt() und substr() JS-Hero 22-26\na = "This_string_has_26_letters";\nb = "This_string_has_29_characters";\nc = b.charAt(23) + b.charAt(4) + b.substr(5,11) + a.charAt(16) + b.charAt(16) + a.substr(19,7);\nconsole.log(c);\npr(c.length, "-characters-has-the-following-string:-");\n\n// 3 Block | Math-functions JS-Hero 32-37\na = y("12345") + Math.random();\nb = Math.ceil(a) + Math.floor(a);\nc = c.length;\nconsole.log(b);\npr(b,b);\n')),(0,a.kt)(o.Z,{arr:u,withHelp:!1,mdxType:"CodeAnswers"}))}b.isMDXComponent=!0}}]);