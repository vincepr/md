"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3085],{4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var l=t(7294),a=t(6010),r=t(1944),c=t(5281),i=t(3285),o=t(210),s=t(9407);const m="mdxPageWrapper_j9I6";function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return l.createElement(r.FG,{className:(0,a.Z)(f??c.k.wrapper.mdxPages,c.k.page.mdxPage)},l.createElement(r.d,{title:t,description:d}),l.createElement(i.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,a.Z)("row",m)},l.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},l.createElement("article",null,l.createElement(o.Z,null,l.createElement(n,null)))),!v&&n.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},9407:(e,n,t)=>{t.d(n,{Z:()=>o});var l=t(7462),a=t(7294),r=t(6010),c=t(3743);const i="tableOfContents_bqdL";function o(e){let{className:n,...t}=e;return a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",n)},a.createElement(c.Z,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,n,t)=>{t.d(n,{Z:()=>v});var l=t(7462),a=t(7294),r=t(6668);function c(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const l=t.slice(2,e.level);e.parentIndex=Math.max(...l),t[e.level]=n}));const l=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):l.push(a)})),l}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:l});return function(e){return e.level>=t&&e.level<=l}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const l=e.find((e=>o(e).top>=t));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const l=[];for(let a=n;a<=t;a+=1)l.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),o=s(i,{anchorTopOffset:t.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:l,isChild:r}=e;return n.length?a.createElement("ul",{className:r?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}const f=a.memo(u);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const g=(0,r.L)(),h=m??g.tableOfContents.minHeadingLevel,L=u??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:c(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:h,maxHeadingLevel:L});return d((0,a.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:L}}),[o,s,h,L])),a.createElement(f,(0,l.Z)({toc:p,className:t,linkClassName:o},v))}}}]);