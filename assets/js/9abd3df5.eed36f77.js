"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[1599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2079:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{arr:t,withHelp:n}=e;const[a,o]=(0,r.useState)(0),[l,i]=(0,r.useState)("");function c(){l===t[a]&&(o(a+1),i(""))}return r.createElement("div",null,r.createElement("ol",{className:"CodeAnswersList"},t.filter(((e,t)=>function(e,t,n){return t<n}(0,t,a))).map(((e,n)=>function(e,t,n){return r.createElement("li",{className:n?"typed-out finished":"typed-out",key:t}," ",e," ")}(e,n,a===t.length)))),r.createElement("input",{className:"CodeAnswersInput",disabled:a===t.length?"disabled":"",onKeyDown:e=>{"Enter"===e.key&&c()},onChange:e=>i(e.target.value),value:l}),r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:c,className:"CodeAnswersButton"},"Check one Line"),n?r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:()=>{a<t.length&&o(a+1)}},"Help - one line"):"",n?r.createElement("button",{disabled:a===t.length?"disabled":"",onClick:()=>o(t.length),style:{marginLeft:"1%"}},"Help - show all"):"")}},6647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(2079);const l={slug:"mdx-interactive1",title:"Aufgabe 1",authors:["Vincent"],tags:["JS-Hero"]},i=void 0,c={permalink:"/md/blog/mdx-interactive1",editUrl:"https://github.com/vincepr/md/blob/main/blog/2023-02-11-Aufgabe1.mdx",source:"@site/blog/2023-02-11-Aufgabe1.mdx",title:"Aufgabe 1",description:"Gesucht sind die 4 Zeilen die der ConsoleLog ausgibt.",date:"2023-02-11T00:00:00.000Z",formattedDate:"11. Februar 2023",tags:[{label:"JS-Hero",permalink:"/md/blog/tags/js-hero"}],readingTime:.31,hasTruncateMarker:!1,authors:[{name:"Vince",title:"The Creator",url:"https://github.com/vincepr",imageURL:"https://github.com/vincepr.png",key:"Vincent"}],frontMatter:{slug:"mdx-interactive1",title:"Aufgabe 1",authors:["Vincent"],tags:["JS-Hero"]},prevItem:{title:"Aufgabe 2",permalink:"/md/blog/mdx-interactive2"},nextItem:{title:"Playground",permalink:"/md/blog/mdx-playground"}},u={authorsImageUrls:[void 0]};let s=["10","22","0","-78"];const m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gesucht sind die 4 Zeilen die der ConsoleLog ausgibt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let aNumber;\nlet anotherNumber;\n\nfunction changeNumber(number){\n  aNumber = number;\n  console.log(number);\n  return anotherNumber;\n}\n\nfunction whatDoesThisDo(xyz){\n  console.log(xyz - 100);\n  return aNumber + 1;\n  console.log(xyz + aNumber);\n}\n\nanotherNumber = 22;\nchangeNumber(10);\nchangeNumber(anotherNumber);\nwhatDoesThisDo(100);\nanotherNumber = whatDoesThisDo(aNumber);\n\n")),(0,a.kt)(o.Z,{arr:s,withHelp:!0,mdxType:"CodeAnswers"}))}d.isMDXComponent=!0}}]);