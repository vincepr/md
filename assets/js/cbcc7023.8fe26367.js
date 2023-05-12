"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,g=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="Event-driven Design with WinForms",l={unversionedId:"fiae/Programmierung/CSharp/winforms",id:"fiae/Programmierung/CSharp/winforms",title:"Event-driven Design with WinForms",description:"Event Handler svg",source:"@site/docs/fiae/Programmierung/CSharp/winforms.md",sourceDirName:"fiae/Programmierung/CSharp",slug:"/fiae/Programmierung/CSharp/winforms",permalink:"/md/fiae/Programmierung/CSharp/winforms",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/CSharp/winforms.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File stream in C",permalink:"/md/fiae/Programmierung/CSharp/examples/file"},next:{title:"Grundlagen der Programmierung",permalink:"/md/fiae/Programmierung/Grundlagen/"}},s={},u=[{value:"Typen in C#",id:"typen-in-c",level:2},{value:"Control events",id:"control-events",level:3},{value:"Delegates and their role",id:"delegates-and-their-role",level:3}],d={toc:u};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-driven-design-with-winforms"},"Event-driven Design with WinForms"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Event Handler svg",src:n(6232).Z,width:"1125",height:"966"})),(0,a.kt)("h2",{id:"typen-in-c"},"Typen in C#"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Event"),(0,a.kt)("li",{parentName:"ul"},"Delegate")),(0,a.kt)("h3",{id:"control-events"},"Control events"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.control#events"},"Full list of Events and Properties")),(0,a.kt)("p",null,"An event is an action that you can respond to, or ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," in your code. ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyDownHandler"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mouse events (MouseClick, MouseEnter, -Hover, -Leave...)"),(0,a.kt)("li",{parentName:"ul"},"Keyboard events (KeyDown, KeyPress, KeyUp)"),(0,a.kt)("li",{parentName:"ul"},"Property changed events",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BackgroundColorChanged, BackgroundImageChanged, BindingContextChanged, DockChanged, EnabledChanged, FontChanged, SizeChanged, VisibleChanged..."))),(0,a.kt)("li",{parentName:"ul"},"Other events")),(0,a.kt)("h3",{id:"delegates-and-their-role"},"Delegates and their role"),(0,a.kt)("p",null,"Delegates roughly equate to function pointers. But they are object-oriented, type-safe and secure."),(0,a.kt)("p",null,"This event model uses delegates to bind events to the methods that are used to handle them. This enables other classes to register for event notification specifying custom ",(0,a.kt)("inlineCode",{parentName:"p"},"handler methods"),"."),(0,a.kt)("p",null,"Delegates can be bound to a single method or multiple methods (aka multicasting). When an event is recoded by the app, the control raises the event by invoking the delegate for that event. The delegate in turn calls the bound method(s). Or in case of a multicast delegate each bound method in the invocation list in turn. The binding mechanism used with delegates is dynamic at run time."))}c.isMDXComponent=!0},6232:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EventHandlers.excalidraw-c8e7258e7c02161a6307a1fc46707b7c.svg"}}]);