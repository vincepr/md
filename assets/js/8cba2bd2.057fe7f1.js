"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[8202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,g=d["".concat(o,".").concat(s)]||d[s]||k[s]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={},i="Switches",u={unversionedId:"fiae/netzwerk/netzwerk7",id:"fiae/netzwerk/netzwerk7",title:"Switches",description:"||unmanaged|managed|",source:"@site/docs/fiae/netzwerk/netzwerk7.md",sourceDirName:"fiae/netzwerk",slug:"/fiae/netzwerk/netzwerk7",permalink:"/md/fiae/netzwerk/netzwerk7",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/netzwerk/netzwerk7.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Internet",permalink:"/md/fiae/netzwerk/netzwerk6_internet"},next:{title:"sql",permalink:"/md/fiae/sql/"}},o={},m=[{value:"3 Betriebsmodi",id:"3-betriebsmodi",level:2},{value:"StP - Spanning Tree Protocol",id:"stp---spanning-tree-protocol",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"switches"},"Switches"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"unmanaged"),(0,a.kt)("th",{parentName:"tr",align:null},"managed"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kosten"),(0,a.kt)("td",{parentName:"tr",align:null},"billig"),(0,a.kt)("td",{parentName:"tr",align:null},"teuer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Steuerung"),(0,a.kt)("td",{parentName:"tr",align:null},"kann konfiguriert werden, Fernzugriff (hat also IP-adresse)"),(0,a.kt)("td",{parentName:"tr",align:null},"keine Konfigurationsschnittstelle, Plug-and-Play")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sicherheit"),(0,a.kt)("td",{parentName:"tr",align:null},"Keine Sicherheit abgesehen von Zubeh\xf6r"),(0,a.kt)("td",{parentName:"tr",align:null},"802.1X-Authentifizierung, Schutz der Datenebene, Steuerungsebene und Managementebene")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Funktionen"),(0,a.kt)("td",{parentName:"tr",align:null},"keine extra Features"),(0,a.kt)("td",{parentName:"tr",align:null},"Vlan, Port-Spiegelung, Trunk-Ports, StP-unterst\xfctzung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Funktionen"),(0,a.kt)("td",{parentName:"tr",align:null},"genau 1 Broadcast-dom\xe4ne"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Funktionen"),(0,a.kt)("td",{parentName:"tr",align:null},"pro Port 1 Kollisionsdom\xe4ne"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"3-betriebsmodi"},"3 Betriebsmodi"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Cut-trough")," Switching -> schnell"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Fragment-Free")," Switching -> mittel"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Store and Forward")," Switching -> langsam")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"cut-trough"),(0,a.kt)("th",{parentName:"tr",align:null},"fragment-free"),(0,a.kt)("th",{parentName:"tr",align:null},"store-forward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wertet nur die ersten Bytes aus, die die MAC-Adresse enthalten"),(0,a.kt)("td",{parentName:"tr",align:null},"64Bytes ->f\xe4ngt meisten Kollisionen ab"),(0,a.kt)("td",{parentName:"tr",align:null},"Komplett empfangen->vollst\xe4ndige Kollisionserkennung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keine Fehlerkorrektur"),(0,a.kt)("td",{parentName:"tr",align:null},"keine Fehlerkorrektur"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcfsumme->Fehlererkennung/-Korrektur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"geringe Latenzzeit"),(0,a.kt)("td",{parentName:"tr",align:null},"etwas langsammer"),(0,a.kt)("td",{parentName:"tr",align:null},"langsam")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gute Switches k\xf6nnen dynamisch umschalten. Wenn viele Fehler -> umschalten auf store-forward.")),(0,a.kt)("h2",{id:"stp---spanning-tree-protocol"},"StP - Spanning Tree Protocol"),(0,a.kt)("p",null,"Verhindert loops / parallele Verbindungen in Netzwerken mit mehreren Switches."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"erzeugt eine Baumtopologie mit eindeutigen Verbindungspfaden -> keine doppelten Verbindungen zwischen Quelle und Ziel mehr vorhanden."),(0,a.kt)("li",{parentName:"ul"},"jeder vernetzte Punkt ist \xfcber die bestm\xf6gliche Verbindung zu erreichen"),(0,a.kt)("li",{parentName:"ul"},"reorganisiert sich bei Unterbrechungen/Ausf\xe4lle "),(0,a.kt)("li",{parentName:"ul"},"Funktioniert in beliebig vermaschten Netzstrukturen"),(0,a.kt)("li",{parentName:"ul"},"in der IEEE-Norm 802.1D standardisiert")),(0,a.kt)("p",null,"Benutzt insgesamt f\xfcnf verschiedene Portzust\xe4nde:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Forwarding"),(0,a.kt)("li",{parentName:"ul"},"Blocking "),(0,a.kt)("li",{parentName:"ul"},"Learning"),(0,a.kt)("li",{parentName:"ul"},"Listening"),(0,a.kt)("li",{parentName:"ul"},"Disabled")),(0,a.kt)("h1",{id:"ieee-8021x"},"IEEE 802.1X"),(0,a.kt)("p",null,"Standard zur Authentifizierung in Rechnernetzen.^"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Am Netzwerkzugang, einem physischen Port im LAN, einem logischen VLAN oder einem WLAN "),(0,a.kt)("li",{parentName:"ul"},"erfolgt die Authentifizierung eines Teilnehmers durch den RADIUS -Server"),(0,a.kt)("li",{parentName:"ul"},"der die ben\xf6tigten Zertifikate verwaltet.")))}d.isMDXComponent=!0}}]);