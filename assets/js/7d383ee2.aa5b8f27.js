"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[1178],{8549:(e,t,_)=>{_.d(t,{Z:()=>n});var r=_(7294);function n(e){let{arr:t,withHelp:_}=e;const[n,a]=(0,r.useState)(0),[l,o]=(0,r.useState)("");function s(){l===t[n]&&(a(n+1),o(""))}return r.createElement("div",null,r.createElement("ol",{className:"CodeAnswersList"},t.filter(((e,t)=>function(e,t,_){return t<_}(0,t,n))).map(((e,_)=>function(e,t,_){return r.createElement("li",{className:_?"typed-out finished":"typed-out",key:t}," ",e," ")}(e,_,n===t.length)))),r.createElement("input",{className:"CodeAnswersInput",disabled:n===t.length?"disabled":"",onKeyDown:e=>{"Enter"===e.key&&s()},onChange:e=>o(e.target.value),value:l}),r.createElement("button",{disabled:n===t.length?"disabled":"",onClick:s,className:"CodeAnswersButton"},"Check Answer"),_?r.createElement("button",{disabled:n===t.length?"disabled":"",onClick:()=>{n<t.length&&a(n+1)}},"Help - one line"):"",_?r.createElement("button",{disabled:n===t.length?"disabled":"",onClick:()=>a(t.length),style:{marginLeft:"1%"}},"Help - show all"):"")}},4784:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>JsPlayground});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9537),_AnswerGame__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8549),_TextArea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8752);function JsPlayground(e){let{importPath:t,defaultText:_}=e,r=!1;t&&(r=!0);const[n,a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_?String(_):""),[l,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[s,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("false");let i="";"false"!==s?i="\u274c "+s:l.forEach((e=>i+=e+"\n"));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextArea__WEBPACK_IMPORTED_MODULE_3__.Z,{setText:a,text:n}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{style:{float:"right"},onClick:()=>{if(r)fetch(t).then((e=>e.text())).then((e=>{let t=runJs(n+"\n"+e);o(t.arr),c(""+t.error)}));else{let e=runJs(n);o(e.arr),c(""+e.error)}}},"Run Code"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConsoleLogBlock,{title:"console.log",text:i}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleableAnswers,{text:n,answers:l,setText:a}))}function ConsoleLogBlock(e){let{title:t,text:_}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_1__.Z,{title:t,showLineNumbers:!0},_||"---press run to see if your code works---")}function runJs(text){let arrConsoleLogLines=[],console={log:e=>{arrConsoleLogLines.push(e.toString())}};try{eval(text)}catch(err){return{error:err,arr:[]}}return{error:!1,arr:arrConsoleLogLines}}function ToggleableAnswers(e){let{text:t,answers:_,setText:r}=e;const[n,a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{style:{marginRight:"10px"},onClick:e=>a(!n)},"Toggle"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{style:{marginRight:"10px"},onClick:e=>function(e){let t="Aufgabe.js",_=document.createElement("a");_.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),_.setAttribute("download",t),_.style.display="none",document.body.appendChild(_),_.click(),document.body.removeChild(_)}(t)},"Save file"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"file",accept:".js, .txt, .jsx",onChange:function(e){var t=e.target.files[0],_=new FileReader;_.onload=function(e){let t=e.target.result;r(t)},_.readAsText(t)}}),n&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_1__.Z,{isVisible:n.toString(),language:"jsx",showLineNumbers:!0},t||"---"),_&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnswerGame__WEBPACK_IMPORTED_MODULE_2__.Z,{arr:_,withHelp:!0})))}},8752:(e,t,_)=>{_.d(t,{Z:()=>u});var r=_(7462),n=_(7294),a=_(460),l=_.n(a),o=_(3746),s=_(7694),c=_(3618),i=_(2949);function u(e){let{text:t,setText:_}=e;const{colorMode:a,setColorMode:u}=(0,i.I)();let E="dark"===a?c.Z:s.Z;const d={boxSizing:"border-box",fontFamily:'"Dank Mono", "Fira Code", monospace',minHeight:"200px",fontSize:15,...E.plain};return n.createElement(l(),{value:t,onValueChange:e=>_(e),highlight:e=>n.createElement(o.ZP,(0,r.Z)({},o.lG,{theme:E,code:e,language:"jsx"}),(e=>{let{className:t,style:_,tokens:r,getLineProps:a,getTokenProps:l}=e;return n.createElement(n.Fragment,null,r.map(((e,t)=>n.createElement("div",a({line:e,key:t}),e.map(((e,t)=>n.createElement("span",l({token:e,key:t}))))))))})),padding:20,style:d,tabSize:1,insertSpaces:!1,placeholder:'console.log("write your js here")'})}},1115:(e,t,_)=>{_.r(t),_.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>E,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=_(7462),n=(_(7294),_(3905)),a=_(4784);const l={slug:"mdx-playground",title:"Playground",authors:["Vincent"],tags:["JS-Hero"]},o=void 0,s={permalink:"/md/blog/mdx-playground",editUrl:"https://github.com/vincepr/md/blob/main/blog/2023-02-10-Playground.mdx",source:"@site/blog/2023-02-10-Playground.mdx",title:"Playground",description:"",date:"2023-02-10T00:00:00.000Z",formattedDate:"10. Februar 2023",tags:[{label:"JS-Hero",permalink:"/md/blog/tags/js-hero"}],readingTime:.025,hasTruncateMarker:!1,authors:[{name:"Vince",title:"The Creator",url:"https://github.com/vincepr",imageURL:"https://github.com/vincepr.png",key:"Vincent"}],frontMatter:{slug:"mdx-playground",title:"Playground",authors:["Vincent"],tags:["JS-Hero"]},prevItem:{title:"Aufgabe 1",permalink:"/md/blog/mdx-interactive1"},nextItem:{title:"AboutDocusaurusBlog",permalink:"/md/blog/welcome"}},c={authorsImageUrls:[void 0]},i=[],u={toc:i};function E(e){let{components:t,..._}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,_,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{mdxType:"JsPlayground"}))}E.isMDXComponent=!0}}]);