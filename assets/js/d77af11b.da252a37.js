"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[7344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2079:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);function o(e){let{arr:t,withHelp:n}=e;const[o,a]=(0,r.useState)(0),[i,l]=(0,r.useState)("");function c(){i===t[o]&&(a(o+1),l(""))}return r.createElement("div",null,r.createElement("ol",{className:"CodeAnswersList"},t.filter(((e,t)=>function(e,t,n){return t<n}(0,t,o))).map(((e,n)=>function(e,t,n){return r.createElement("li",{className:n?"typed-out finished":"typed-out",key:t}," ",e," ")}(e,n,o===t.length)))),r.createElement("input",{className:"CodeAnswersInput",value:i,onChange:function(e){l(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&c()}}),r.createElement("button",{className:"CodeAnswersButton",onClick:c},"Check one Line"),n?r.createElement("button",{onClick:()=>{o<t.length&&a(o+1)}},"Help - reveal one line"):"",n?r.createElement("button",{style:{marginLeft:"1%"},onClick:function(){a(t.length)}},"Help - show all"):"")}},6452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(2079);const i={slug:"mdx-interactive3",title:"Aufgabe 3",authors:["Vincent"],tags:["JS-Hero"]},l=void 0,c={permalink:"/md/blog/mdx-interactive3",editUrl:"https://github.com/vincepr/md/blob/main/blog/2023-02-13-Aufgabe3.mdx",source:"@site/blog/2023-02-13-Aufgabe3.mdx",title:"Aufgabe 3",description:"Gesucht sind die 8 Zeilen die der ConsoleLog ausgibt.",date:"2023-02-13T00:00:00.000Z",formattedDate:"13. Februar 2023",tags:[{label:"JS-Hero",permalink:"/md/blog/tags/js-hero"}],readingTime:.68,hasTruncateMarker:!1,authors:[{name:"Vincent",title:"Creator of this Repo",url:"https://github.com/vincepr",imageURL:"https://github.com/vincepr.png",key:"Vincent"}],frontMatter:{slug:"mdx-interactive3",title:"Aufgabe 3",authors:["Vincent"],tags:["JS-Hero"]},prevItem:{title:"Aufgabe 4",permalink:"/md/blog/mdx-interactive4"},nextItem:{title:"Aufgabe 2",permalink:"/md/blog/mdx-interactive2"}},u={authorsImageUrls:[void 0]};let s=["Hello23","Ergebnis:_Hello23","21","Ergebnis:_5610","444","Ergebnis:_820416","444","820416"];const p=[],m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gesucht sind die 8 Zeilen die der ConsoleLog ausgibt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var x = "Hello";\nvar y = 2;\nvar z = 3;\nprintOut();\n\nx = a();\ny = a() + b(1);\nz = x + a();\nprintOut();\n\nx = c(1, 2);\ny = c(x, 4);\nz = c(z, b(y)) - 2;\nprintOut();\n\nconsole.log(x + y + z + "");\nconsole.log("" + x + y + z);\n\n\nfunction a() {\n  let a = 1;\n  a = a + 1;\n  a += 3;\n  return a;\n}\n\nfunction b(base){\n  return base * base;\n}\n\nfunction c(a, b){\n  return x + a + b;\n}\n\nfunction printOut(){\n  console.log(x + y + z);\n  console.log("Ergebnis:_" + x + y+ z);\n}\n\n')),(0,o.kt)(a.Z,{arr:s,withHelp:!0,mdxType:"CodeAnswers"}))}f.isMDXComponent=!0}}]);