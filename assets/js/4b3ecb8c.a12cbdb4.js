"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[7401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,b=u["".concat(c,".").concat(y)]||u[y]||m[y]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={slug:"typescript",title:"Typescript",authors:["Vincent"]},i=void 0,l={permalink:"/md/blog/typescript",editUrl:"https://github.com/vincepr/md/blob/main/blog/2023-12-14-Typescript.mdx",source:"@site/blog/2023-12-14-Typescript.mdx",title:"Typescript",description:"Typescript examples where the Typesystem fails",date:"2023-12-14T00:00:00.000Z",formattedDate:"14. Dezember 2023",tags:[],hasTruncateMarker:!1,authors:[{name:"Vince",title:"The Creator",url:"https://github.com/vincepr",imageURL:"https://github.com/vincepr.png",key:"Vincent"}],frontMatter:{slug:"typescript",title:"Typescript",authors:["Vincent"]},nextItem:{title:"Aufgabe 7",permalink:"/md/blog/mdx-interactive7"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Typescript examples where the Typesystem fails"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"from ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=u1WmiqlrqL0"},"https://www.youtube.com/watch?v=u1WmiqlrqL0"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'function shouldMutateArray(items: (number | string)[]) {\n    items.push("woops");\n}\nconst calculationOnNumbers = (items: number[]) => items.reduce((a, b) => a - b, 0)\n\nconst items: number[] = [1, 2, 3]; // only numbers allowed in here\n\nconsole.log(items); // -> [1, 2, 3]\nconsole.log(calculationOnNumbers(items)); // -6\n\nshouldMutateArray(items);\n// ! we now have a STRING in our array of NUMBERS...\n\nconsole.log(items); // -> [1, 2, 3, "woops"]\nconsole.log(calculationOnNumbers(items)); // -> NAN\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\ntype ReadonlyStruct = {\n    readonly a: number;\n    readonly b: number;\n}\n\ntype NormalStruct = {\n    a: number;\n    b: number;\n}\n\nfunction newReadonly(): ReadonlyStruct {\n    return {\n        a: 1,\n        b: 2,\n    };\n}\n\nfunction willMutateNormalStruct(item: NormalStruct) {\n    item.a = 99;\n    item.b = 88;\n}\n\nconst item = newReadonly();\n\nconsole.log(item); // { a: 1, b: 2 }\n\n//  item.a = 1; // <- this is not allowed. Not Allowed to mutate readonly field\n\nwillMutateNormalStruct(item);\n\nconsole.log(item); // { a: 99, b: 88 }\n\n// ! typescript can't properly differentiate between the 2 Structs with same name fields\n// !!! typescript just ignore the readonly annotation and mutation of those fields becomes possible\n")))}u.isMDXComponent=!0}}]);