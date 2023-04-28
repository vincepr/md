"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[1287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(m,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="gleitkommazahlen, Float etc als datentyp",o={unversionedId:"fiae/Programmierung/Float",id:"fiae/Programmierung/Float",title:"gleitkommazahlen, Float etc als datentyp",description:"allgemein nachkommastellen im bin\xe4rsystem",source:"@site/docs/fiae/Programmierung/Float.md",sourceDirName:"fiae/Programmierung",slug:"/fiae/Programmierung/Float",permalink:"/md/fiae/Programmierung/Float",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/Float.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Algorithmentypen",permalink:"/md/fiae/Programmierung/Algorithmen"},next:{title:"Grundlagen der Programmierung",permalink:"/md/fiae/Programmierung/Grundlagen"}},m={},c=[{value:"allgemein nachkommastellen im bin\xe4rsystem",id:"allgemein-nachkommastellen-im-bin\xe4rsystem",level:2},{value:"decimal",id:"decimal",level:2},{value:"float",id:"float",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gleitkommazahlen-float-etc-als-datentyp"},"gleitkommazahlen, Float etc als datentyp"),(0,a.kt)("h2",{id:"allgemein-nachkommastellen-im-bin\xe4rsystem"},"allgemein nachkommastellen im bin\xe4rsystem"),(0,a.kt)("p",null,"bsp 13.25 als float berechnen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"13  :2  =6  R1\n6   :2  =0  R0\n3   :2  =1  R1\n1   :2  =0  R1\n0.25*2  =0  .5  (1 stelle entspricht bin\xe4r, kommawert neuer \xfcbertrag)\n0.5 *2  =1  .0\n0   *2  =0  .0\n0   *2  =0  .0\n...\n\n-> 1101.0100\n")),(0,a.kt)("p",null,"bsp 13.4 kann nur ann\xe4herungsweise dargestellt werden, da sie sich (im bin\xe4rsystem) periodisch wiederholt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0.4 *2  =0.8\n0.8 *2  =1.6\n0.6 *2  =1.2\n0.2 *2  =0.4\n0.4 *2  =0.8\n... widerholt sich periodisch\n-> 1101.011001100110011..\n")),(0,a.kt)("h2",{id:"decimal"},"decimal"),(0,a.kt)("p",null,"ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"decimal(6,2) <- 3Byte")," Mit 1 halfbyte pro nachkommastelle im decimalsystem (so lassen sich diese genau darstellen, z.B. f\xfcr W\xe4hrungssysteme)"),(0,a.kt)("h2",{id:"float"},"float"),(0,a.kt)("p",null,"Float 4 Byte 32Bit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1Bit        8Bit        23Bit\nVorzeichen  Exponent    Mantisse\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Exponent gibt an wo das kommaziechen "einger\xfcckt wird". oder der positive exponent liegt.0',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Bias 127 ist der mittelwert. Kleiner als dieser -> komma einr\xfccken, gr\xf6\xdfer-> positiver exponent e hoch...")))))}p.isMDXComponent=!0}}]);