"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),s=p(n),k=i,m=s["".concat(u,".").concat(k)]||s[k]||c[k]||r;return n?a.createElement(m,l(l({ref:t},o),{},{components:n})):a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[s]="string"==typeof e?e:i,l[1]=d;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l="Raid - Redundant Array of Independent Disks",d={unversionedId:"fiae/Software/Sicherung_Von_Daten/raid",id:"fiae/Software/Sicherung_Von_Daten/raid",title:"Raid - Redundant Array of Independent Disks",description:"Ist Raid ein Backup?",source:"@site/docs/fiae/Software/Sicherung_Von_Daten/raid.md",sourceDirName:"fiae/Software/Sicherung_Von_Daten",slug:"/fiae/Software/Sicherung_Von_Daten/raid",permalink:"/md/fiae/Software/Sicherung_Von_Daten/raid",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Software/Sicherung_Von_Daten/raid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schutz und Sicherung von Daten",permalink:"/md/fiae/Software/Sicherung_Von_Daten/SicherungDaten"},next:{title:"Betriebliche Anwendungen",permalink:"/md/fiae/Software/betriebliche_anwendungen"}},u={},p=[{value:"Ist Raid ein Backup?",id:"ist-raid-ein-backup",level:2},{value:"Brutto- und Nettospeicher im Raid verbund",id:"brutto--und-nettospeicher-im-raid-verbund",level:2},{value:"Typen",id:"typen",level:2},{value:"Vorteile Nachteile",id:"vorteile-nachteile",level:4},{value:"JBOD - Just a bunch of disks",id:"jbod---just-a-bunch-of-disks",level:3},{value:"Raid 0 - Stripped Disk",id:"raid-0---stripped-disk",level:3},{value:"Raid 1 - Spiegelung",id:"raid-1---spiegelung",level:3},{value:"Berechnung:",id:"berechnung",level:4},{value:"Raid 10 / 0+1 - kombination von 1 und 0",id:"raid-10--01---kombination-von-1-und-0",level:3},{value:"Raid 5",id:"raid-5",level:3},{value:"Berechnung:",id:"berechnung-1",level:4},{value:"Raid 6",id:"raid-6",level:3},{value:"Berechnung:",id:"berechnung-2",level:4},{value:"Hot-spare-Festplatte",id:"hot-spare-festplatte",level:2},{value:"Hot-swap-Festplatte",id:"hot-swap-festplatte",level:2}],o={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raid---redundant-array-of-independent-disks"},"Raid - Redundant Array of Independent Disks"),(0,i.kt)("h2",{id:"ist-raid-ein-backup"},"Ist Raid ein Backup?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NEIN"),", Backup helfen zwar bei der Wiederhestellung nach einem Datenverlust, RAID ist jedoch ein Werkzeug um Datenverluste von vornherein zu verhindern."),(0,i.kt)("h2",{id:"brutto--und-nettospeicher-im-raid-verbund"},"Brutto- und Nettospeicher im Raid verbund"),(0,i.kt)("p",null,"Brutto kapazit\xe4t: Summe der KApazit\xe4ten der im RAid Verbund steckenden Platten."),(0,i.kt)("p",null,"Netto kapazit\xe4t: Die nach Au\xdfen zur Verf\xfcgung gestellte Kapazit\xe4t."),(0,i.kt)("h2",{id:"typen"},"Typen"),(0,i.kt)("h4",{id:"vorteile-nachteile"},"Vorteile Nachteile"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Vorteile"),(0,i.kt)("th",{parentName:"tr",align:null},"Nachteile"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vollst\xe4ndige Redundanz"),(0,i.kt)("td",{parentName:"tr",align:null},"Speicherkapazit\xe4t ist maximal so gro\xdf wie Kapazit\xe4t der kleinsten Festplatte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Datensicherheit und Geschwindigkeit l\xe4sst sich bei passendem Controller und Software optional erh\xf6hen"),(0,i.kt)("td",{parentName:"tr",align:null},"Hoher Kostenfaktor")))),(0,i.kt)("h3",{id:"jbod---just-a-bunch-of-disks"},"JBOD - Just a bunch of disks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es wird erst eine Festplatte vollgeschrieben, dann n\xe4chste etc.")),(0,i.kt)("h3",{id:"raid-0---stripped-disk"},"Raid 0 - Stripped Disk"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Daten werden auf 2 Festplatten aufgeteilt"),(0,i.kt)("li",{parentName:"ul"},"Kapazit\xe4tsnutzung, 100% aller Festplatten (da keine redundanz)"),(0,i.kt)("li",{parentName:"ul"},"Es wird sektorenweise zwischen den Festplatten gewechselt",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- daraus h\xf6here Lesegeschwindigkeit\n- h\xf6here Schreibgeschwindigkeit\n")),"Bei Raid 0 darf maximal 0 Platten ausfallen.")),(0,i.kt)("h3",{id:"raid-1---spiegelung"},"Raid 1 - Spiegelung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ist eine Spiegelung. Alles was auf Platte 1 kommt wird auf Platte 2 gespiegelt. (und bei weiteren mehrfach gespiegelt. bsp 1 Festplatte 4 mal identisch bei 5-Platten in Raid1 )\nSpeicherkapazit\xe4ten: (Bsp Platte1: 100GB, Platte2 100GB) / (P1: 250GB, P2: 150GB)"),(0,i.kt)("li",{parentName:"ul"},"Brutto-speicherkapazit\xe4t: (200GB) / (400GB)"),(0,i.kt)("li",{parentName:"ul"},"Netto-speicherkapazit\xe4t: (100GB) / (150GB)\nBei Raid 1 darf maximal eine Platte gleichzeitig ausfallen.")),(0,i.kt)("h4",{id:"berechnung"},"Berechnung:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PlatteA: 10TB, PlatteB: 20TB -> Kapazit\xe4t: (Min)=10TB"))),(0,i.kt)("h3",{id:"raid-10--01---kombination-von-1-und-0"},"Raid 10 / 0+1 - kombination von 1 und 0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raid 10 und Raid01 (auch Raid0+1) sind in ihrem effekt \xe4hnlich. Kapazit\xe4t/Speichereffizienz sind identisch.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Nur was toplevel ist wird jeweils getauscht")))),(0,i.kt)("p",null,"Durch Kombination von Raid1 und Raid0 werden z.B. 2 Raid1 Systeme mit Raid0 kombiniert:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Raid1-Nr1 - PlatteA=10TB + PlatteB=20TB -> Kapazit\xe4t:10TB ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Raid1-Nr2 - PlatteC=30TB + PlatteD=20TB -> Kapazit\xe4t:20TB ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Gesamte Kapazit\xe4t = kap.Raid1-Nr1 + kap.Raid2-Nr2 = 10TB + 20TB = 30TB"))),(0,i.kt)("h3",{id:"raid-5"},"Raid 5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mindestens 3 Platten"),(0,i.kt)("li",{parentName:"ul"},"Parit\xe4tsfestplatte: 1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Solange Parit\xe4tsplatte und eine Weitere Platte (oder 2 nicht Parit\xe4tsplatten) da sind, k\xf6nnen vollst\xe4ndige Informationen wiederhergestellt werden.")))),(0,i.kt)("p",null,"Bei Raid 5 darf 1 Platte ausfallen"),(0,i.kt)("h4",{id:"berechnung-1"},"Berechnung:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PlatteA: 10TB, PlatteB: 20TB, PlatteD: 40TB -> Kapazit\xe4t: (Min)*(Anz-1)=(10TB)*(3-1)=20TB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PlatteA: 20TB, PlatteB: 20TB, PlatteC: 40TB, PlatteD 20TB -> Kapazit\xe4t: (Min)*(Anz-1)=(20TB)*(4-1)=90TB"))),(0,i.kt)("h3",{id:"raid-6"},"Raid 6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mindestens 4 Festplatten"),(0,i.kt)("li",{parentName:"ul"},"2 Parit\xe4tsplatten\nBei Raid 6 d\xfcrfen 2 Platten ausfallen")),(0,i.kt)("h4",{id:"berechnung-2"},"Berechnung:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PlatteA: 10TB, PlatteB: 20TB, PlatteC: 20TB, PlatteD: 40TB -> Kapazit\xe4t: (Min)*(Anz-2)=(10TB)*(4-2)=20TB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PlatteA: 30TB, PlatteB: 30TB, PlatteC: 40TB, PlatteD: 40TB, PlatteE: 50TB -> Kapazit\xe4t: (Min)*(Anz-2)=(30TB)*(5-2)=20TB"))),(0,i.kt)("h2",{id:"hot-spare-festplatte"},"Hot-spare-Festplatte"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eingebaute Festplatte die zuerst inaktiv bleibt. "),(0,i.kt)("li",{parentName:"ul"},"Sollte eine Festplatte ausfallen, z.B. im Raid Betrieb, springt diese Swap-Festplatte automatisch ein und ",(0,i.kt)("inlineCode",{parentName:"li"},"ersetzt")," die ausgefallene Festplatte.")),(0,i.kt)("h2",{id:"hot-swap-festplatte"},"Hot-swap-Festplatte"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bei Festplatten die z.B. im Raidverbund sind, kann im laufenden Betrieb eine herausgenommen und oder ausgetauscht werden.")))}s.isMDXComponent=!0}}]);