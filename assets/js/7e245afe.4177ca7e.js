"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2079:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{arr:t,withHelp:n}=e;const[a,o]=(0,r.useState)(0),[l,i]=(0,r.useState)("");function c(){l===t[a]&&(o(a+1),i(""))}return r.createElement("div",null,r.createElement("ol",{className:"CodeAnswersList"},t.filter(((e,t)=>function(e,t,n){return t<n}(0,t,a))).map(((e,n)=>function(e,t,n){return r.createElement("li",{className:n?"typed-out finished":"typed-out",key:t}," ",e," ")}(e,n,a===t.length)))),r.createElement("input",{className:"CodeAnswersInput",disabled:a===t.length?"disabled":"",onKeyDown:e=>{"Enter"===e.key&&c()},onChange:e=>i(e.target.value),value:l}),r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:c,className:"CodeAnswersButton"},"Check one Line"),n?r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:()=>{a<t.length&&o(a+1)}},"Help - one line"):"",n?r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:()=>o(t.length),style:{marginLeft:"1%"}},"Help - show all"):"")}},2761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(2079);const l={slug:"mdx-interactive2",title:"Aufgabe 2",authors:["Vincent"],tags:["JS-Hero"]},i=void 0,c={permalink:"/md/blog/mdx-interactive2",editUrl:"https://github.com/vincepr/md/blob/main/blog/2023-02-12-Aufgabe2.mdx",source:"@site/blog/2023-02-12-Aufgabe2.mdx",title:"Aufgabe 2",description:"Gesucht sind die 2 Zeilen die der ConsoleLog ausgibt.",date:"2023-02-12T00:00:00.000Z",formattedDate:"12. Februar 2023",tags:[{label:"JS-Hero",permalink:"/md/blog/tags/js-hero"}],readingTime:.695,hasTruncateMarker:!1,authors:[{name:"Vincent",title:"Creator of this Repo",url:"https://github.com/vincepr",imageURL:"https://github.com/vincepr.png",key:"Vincent"}],frontMatter:{slug:"mdx-interactive2",title:"Aufgabe 2",authors:["Vincent"],tags:["JS-Hero"]},prevItem:{title:"Aufgabe 3",permalink:"/md/blog/mdx-interactive3"},nextItem:{title:"Aufgabe 1",permalink:"/md/blog/mdx-interactive1"}},u={authorsImageUrls:[void 0]};let s=["10 5 9 25 250","15 925 250"];const m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gesucht sind die 2 Zeilen die der ConsoleLog ausgibt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let var1 = 3;\nlet var2 = addiere(3, 2);\nlet var3 = 31;\nvar3 = multipliziere(var1, 1);\nlet var4 = hoch2(5);\nlet var5 = hoch3(5, 10, 15);\nvar1 = addiere(var2, 5);\nconsole.log(var1 + " " + var2 + " " + var3+ " "  + var4 + " " + var5);\nconsole.log(var1 + var2 + " " + var3 + var4 + " " + var5);\n\n\nfunction addiere(x, y){\n  let z = x + y + 1;\n  return x + y;\n}\n\nfunction multipliziere(a, b){\n  let x = a;\n  return x*a;\n}\n\nfunction hoch2(num){\n  return num*num;\n}\n\nfunction hoch3(num1, num2, num3){\n  return num1 * num2 * num1;\n}\n')),(0,a.kt)(o.Z,{arr:s,withHelp:!0,mdxType:"CodeAnswers"}))}d.isMDXComponent=!0}}]);