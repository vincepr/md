"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[7187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:r,l[1]=d;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l="Raid - Redundant Array of Independent Disks",d={unversionedId:"fiae/Software/windows/raid",id:"fiae/Software/windows/raid",title:"Raid - Redundant Array of Independent Disks",description:"Ist Raid ein Backup?",source:"@site/docs/fiae/Software/windows/raid.md",sourceDirName:"fiae/Software/windows",slug:"/fiae/Software/windows/raid",permalink:"/md/fiae/Software/windows/raid",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Software/windows/raid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows Grundlagen",permalink:"/md/fiae/Software/windows/grundlagen"},next:{title:"Marketing - Einf\xfchrung",permalink:"/md/fiae/Wirtschaft/Marketing/Einf\xfchrung"}},o={},u=[{value:"Ist Raid ein Backup?",id:"ist-raid-ein-backup",level:2},{value:"Brutto- und Nettospeicher im Raid verbund",id:"brutto--und-nettospeicher-im-raid-verbund",level:2},{value:"Typen",id:"typen",level:2},{value:"Vorteile Nachteile",id:"vorteile-nachteile",level:4},{value:"JBOD",id:"jbod",level:3},{value:"Raid 0 - Stripped Disk",id:"raid-0---stripped-disk",level:3},{value:"Raid 1 - Spiegelung",id:"raid-1---spiegelung",level:3},{value:"Raid 10 - kombination von 1 und 0",id:"raid-10---kombination-von-1-und-0",level:3},{value:"Raid 5",id:"raid-5",level:3},{value:"Raid 6",id:"raid-6",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"raid---redundant-array-of-independent-disks"},"Raid - Redundant Array of Independent Disks"),(0,r.kt)("h2",{id:"ist-raid-ein-backup"},"Ist Raid ein Backup?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NEIN"),", Backup helfen zwar bei der Wiederhestellung nach einem Datenverlust, RAID ist jedoch ein Werkzeug um Datenverluste von vornherein zu verhindern."),(0,r.kt)("h2",{id:"brutto--und-nettospeicher-im-raid-verbund"},"Brutto- und Nettospeicher im Raid verbund"),(0,r.kt)("p",null,"Brutto kapazit\xe4t: Summe der KApazit\xe4ten der im RAid Verbund steckenden Platten."),(0,r.kt)("p",null,"Netto kapazit\xe4t: Die nach Au\xdfen zur Verf\xfcgung gestellte Kapazit\xe4t."),(0,r.kt)("h2",{id:"typen"},"Typen"),(0,r.kt)("h4",{id:"vorteile-nachteile"},"Vorteile Nachteile"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Vorteile"),(0,r.kt)("th",{parentName:"tr",align:null},"Nachteile"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vollst\xe4ndige Redundanz"),(0,r.kt)("td",{parentName:"tr",align:null},"Speicherkapazit\xe4t ist maximal so gro\xdf wie Kapazit\xe4t der kleinsten Festplatte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datensicherheit und Geschwindigkeit l\xe4sst sich bei passendem Controller und Software optional erh\xf6hen"),(0,r.kt)("td",{parentName:"tr",align:null},"Hoher Kostenfaktor")))),(0,r.kt)("h3",{id:"jbod"},"JBOD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Es wird erst eine Festplatte vollgeschrieben, dann n\xe4chste etc.")),(0,r.kt)("h3",{id:"raid-0---stripped-disk"},"Raid 0 - Stripped Disk"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Daten werden auf 2 Festplatten aufgeteilt"),(0,r.kt)("li",{parentName:"ul"},"Kapazit\xe4tsnutzung, 100% aller Festplatten (da keine redundanz)"),(0,r.kt)("li",{parentName:"ul"},"Es wird sektorenweise zwischen den Festplatten gewechselt",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- daraus h\xf6here Lesegeschwindigkeit\n- h\xf6here Schreibgeschwindigkeit\n")),"Bei Raid 0 darf maximal 0 Platten ausfallen.")),(0,r.kt)("h3",{id:"raid-1---spiegelung"},"Raid 1 - Spiegelung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ist eine Spiegelung. Alles was auf Platte 1 kommt wird auf Platte 2 gespiegelt.\nSpeicherkapazit\xe4ten: (Bsp Platte1: 100GB, Platte2 100GB) / (P1: 250GB, P2: 150GB)"),(0,r.kt)("li",{parentName:"ul"},"Brutto-speicherkapazit\xe4t: (200GB) / (400GB)"),(0,r.kt)("li",{parentName:"ul"},"Netto-speicherkapazit\xe4t: (100GB) / (150GB)\nBei Raid 1 darf maximal eine Platte gleichzeitig ausfallen.")),(0,r.kt)("h3",{id:"raid-10---kombination-von-1-und-0"},"Raid 10 - kombination von 1 und 0"),(0,r.kt)("h3",{id:"raid-5"},"Raid 5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mindestens 3 Platten"),(0,r.kt)("li",{parentName:"ul"},"Parit\xe4tsfestplatte: 1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Solange Parit\xe4tsplatte und eine Weitere Platte (oder 2 nicht Parit\xe4tsplatten) da sind, k\xf6nnen vollst\xe4ndige Informationen wiederhergestellt werden.")))),(0,r.kt)("p",null,"Bei Raid 5 darf 1 Platte ausfallen"),(0,r.kt)("h3",{id:"raid-6"},"Raid 6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mindestens 4 Festplatten"),(0,r.kt)("li",{parentName:"ul"},"2 Parit\xe4tsplatten\nBei Raid 6 d\xfcrfen 2 Platten ausfallen")))}s.isMDXComponent=!0}}]);