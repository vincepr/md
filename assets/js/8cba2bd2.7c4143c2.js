"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[8202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,g=m["".concat(o,".").concat(p)]||m[p]||s[p]||l;return n?r.createElement(g,i(i({ref:t},k),{},{components:n})):r.createElement(g,i({ref:t},k))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={},i="Switches",u={unversionedId:"fiae/netzwerk/netzwerk7",id:"fiae/netzwerk/netzwerk7",title:"Switches",description:"Eigenschaften",source:"@site/docs/fiae/netzwerk/netzwerk7.md",sourceDirName:"fiae/netzwerk",slug:"/fiae/netzwerk/netzwerk7",permalink:"/md/fiae/netzwerk/netzwerk7",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/netzwerk/netzwerk7.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Internet",permalink:"/md/fiae/netzwerk/netzwerk6_internet"},next:{title:"sql",permalink:"/md/fiae/sql/"}},o={},d=[{value:"Eigenschaften",id:"eigenschaften",level:2},{value:"halfduplex - vollduplex:",id:"halfduplex---vollduplex",level:3},{value:"netloadclass:",id:"netloadclass",level:3},{value:"IEEE 802.1X",id:"ieee-8021x",level:3},{value:"Port mirroring",id:"port-mirroring",level:3},{value:"quality of service",id:"quality-of-service",level:3},{value:"network switching parameters:",id:"network-switching-parameters",level:3},{value:"unmanaged -managed",id:"unmanaged--managed",level:2},{value:"3 Betriebsmodi",id:"3-betriebsmodi",level:2},{value:"Kaskadierung",id:"kaskadierung",level:2},{value:"Ulink -Downlink",id:"ulink--downlink",level:2},{value:"StP - Spanning Tree Protocol",id:"stp---spanning-tree-protocol",level:2}],k={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"switches"},"Switches"),(0,a.kt)("h2",{id:"eigenschaften"},"Eigenschaften"),(0,a.kt)("h3",{id:"halfduplex---vollduplex"},"halfduplex - vollduplex:"),(0,a.kt)("p",null,"Nur in eine Richtung vs gleichzeitiges Senden und Empfangen."),(0,a.kt)("h3",{id:"netloadclass"},"netloadclass:"),(0,a.kt)("p",null,"3 am h\xf6chsten"),(0,a.kt)("h3",{id:"ieee-8021x"},"IEEE 802.1X"),(0,a.kt)("p",null,"Standard zur Authentifizierung in Rechnernetzen.^"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Am Netzwerkzugang, einem physischen Port im LAN, einem logischen VLAN oder einem WLAN "),(0,a.kt)("li",{parentName:"ul"},"erfolgt die Authentifizierung eines Teilnehmers durch den RADIUS -Server"),(0,a.kt)("li",{parentName:"ul"},"der die ben\xf6tigten Zertifikate verwaltet.")),(0,a.kt)("h3",{id:"port-mirroring"},"Port mirroring"),(0,a.kt)("p",null,"Alles was einen Port gesendet wird wird geklont an einen anderen gesendet. -> \xdcberwachung/Fehleranalyse"),(0,a.kt)("h3",{id:"quality-of-service"},"quality of service"),(0,a.kt)("p",null,"priorisierung von Packeten, z.B. VoIP."),(0,a.kt)("h3",{id:"network-switching-parameters"},"network switching parameters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Switching-Speed: Wie schnell zwischen Modi umgeschalten werden k\xf6nnen. Wie schnell store-forward berechnungen intern dauern..."),(0,a.kt)("li",{parentName:"ol"},"Switching-Kapazit\xe4t: wieviele Packete k\xf6nnen pro port zwischengespeichert werden."),(0,a.kt)("li",{parentName:"ol"},"Switching-Memory: wieviele Packete zwischenzeitlich gespeichert werden k\xf6nnen.")),(0,a.kt)("h2",{id:"unmanaged--managed"},"unmanaged -managed"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"unmanaged"),(0,a.kt)("th",{parentName:"tr",align:null},"managed"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kosten"),(0,a.kt)("td",{parentName:"tr",align:null},"billig"),(0,a.kt)("td",{parentName:"tr",align:null},"teuer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Steuerung"),(0,a.kt)("td",{parentName:"tr",align:null},"kann konfiguriert werden, Fernzugriff (hat also IP-adresse)"),(0,a.kt)("td",{parentName:"tr",align:null},"keine Konfigurationsschnittstelle, Plug-and-Play")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sicherheit"),(0,a.kt)("td",{parentName:"tr",align:null},"Keine Sicherheit abgesehen von Zubeh\xf6r"),(0,a.kt)("td",{parentName:"tr",align:null},"802.1X-Authentifizierung, Schutz der Datenebene, Steuerungsebene und Managementebene")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Funktionen"),(0,a.kt)("td",{parentName:"tr",align:null},"keine extra Features"),(0,a.kt)("td",{parentName:"tr",align:null},"Vlan, Port-Spiegelung, Trunk-Ports, StP-unterst\xfctzung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Funktionen"),(0,a.kt)("td",{parentName:"tr",align:null},"genau 1 Broadcast-dom\xe4ne"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"|Funktio"),(0,a.kt)("h2",{id:"3-betriebsmodi"},"3 Betriebsmodi"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Cut-trough")," Switching -> schnell"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Fragment-Free")," Switching -> mittel"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Store and Forward")," Switching -> langsam")),(0,a.kt)("p",null,"---|\ndirekt weiterleiten, kopie im Speicher|\nkeine Fehlerkorrektur aber Counter der im Nachhinein Fehler z\xe4hlt|"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"cut-trough"),(0,a.kt)("th",{parentName:"tr",align:null},"error-free-cut-trough"),(0,a.kt)("th",{parentName:"tr",align:null},"fragment-free"),(0,a.kt)("th",{parentName:"tr",align:null},"store-forward"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wertet nur die ersten Bytes aus, die die MAC-Adresse enthalten"),(0,a.kt)("td",{parentName:"tr",align:null},"direkt weiterleiten, aber Kopie im Speicher -> Fehlercounter"),(0,a.kt)("td",{parentName:"tr",align:null},"64Bytes ->f\xe4ngt meisten Kollisionen ab"),(0,a.kt)("td",{parentName:"tr",align:null},"Komplett empfangen->vollst\xe4ndige Kollisionserkennung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keine Fehlerkorrektur"),(0,a.kt)("td",{parentName:"tr",align:null},"keine Fehlerkorrektur"),(0,a.kt)("td",{parentName:"tr",align:null},"keine Fehlerkorrektur"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcfsumme->Fehlererkennung/-Korrektur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"geringe Latenzzeit"),(0,a.kt)("td",{parentName:"tr",align:null},"wechselt Dynamisch den Modus wenn Fehlercounter zu gro\xdf wird"),(0,a.kt)("td",{parentName:"tr",align:null},"etwas langsammer"),(0,a.kt)("td",{parentName:"tr",align:null},"langsam")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gute Switches k\xf6nnen dynamisch umschalten. Wenn viele Fehler -> umschalten auf store-forward (error-free-cut-trough)"),(0,a.kt)("li",{parentName:"ul"},"wenn verschieden \xdcbertragungsmedien aufeinandertreffen (z.B. Kupfer auf Gla\xdffaser) kann nur store-forward switching betrieben werden.")),(0,a.kt)("h2",{id:"kaskadierung"},"Kaskadierung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verkettung von Switches")),(0,a.kt)("h2",{id:"ulink--downlink"},"Ulink -Downlink"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"downlink: normaler port"),(0,a.kt)("li",{parentName:"ul"},"uplink: schnelleren port mit langsameren (downlink) verbinden")),(0,a.kt)("h2",{id:"stp---spanning-tree-protocol"},"StP - Spanning Tree Protocol"),(0,a.kt)("p",null,"Au\xdfgangspunkt: Ausfallsicherheit ist wichtig -> Redundanzen im Netzwerk -> loops sind schlecht -> StP",(0,a.kt)("br",{parentName:"p"}),"\n","Verhindert loops / parallele Verbindungen in Netzwerken mit mehreren Switches."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"erzeugt eine Baumtopologie mit eindeutigen Verbindungspfaden -> keine doppelten Verbindungen zwischen Quelle und Ziel mehr vorhanden. -> jeder vernetzte Punkt ist \xfcber die bestm\xf6gliche Verbindung zu erreichen"),(0,a.kt)("li",{parentName:"ul"},'nicht ben\xf6tigte Switches werden "deaktiviert" und sind im standby-mode ("Blocking")'),(0,a.kt)("li",{parentName:"ul"},"reorganisiert sich Regelm\xe4\xdfig -> reagiert auf Unterbrechungen/Ausf\xe4lle ")),(0,a.kt)("p",null,"Au\xdferdem"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"h\xf6chster Switch hei\xdft Root-Bridge"),(0,a.kt)("li",{parentName:"ul"},"Funktioniert in beliebig vermaschten Netzstrukturen"),(0,a.kt)("li",{parentName:"ul"},"in der ",(0,a.kt)("strong",{parentName:"li"},"IEEE-Norm 802.1D")," standardisiert")),(0,a.kt)("p",null,"Gefahren bei Nichtverwendung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Braodcast-St\xfcrme"),(0,a.kt)("li",{parentName:"ul"},"instabile MAC-Adress-Tabellen"),(0,a.kt)("li",{parentName:"ul"},"hohe Auslastung der Leitung")),(0,a.kt)("p",null,"Algorithmus Ablauf:\n0. Switch mit der Niedrigsten Id wird zum Root. (bei gleicher ID entscheidet niedrigste MAC-Adresse)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Root-Switch hat alle Ports auf forward"),(0,a.kt)("li",{parentName:"ol"},"Jeder nicht-Root-Switch \xf6ffnet Ports mit dem niedrigsten kosten zum Root-Switch. Blockt rest."),(0,a.kt)("li",{parentName:"ol"},"mehrere Switche kommen in Frage -> Vergleichen der Ports -> niedrigste Kosten- >forward -> designierter Switch am designierten Port.")),(0,a.kt)("p",null,"Benutzt insgesamt f\xfcnf verschiedene Portzust\xe4nde:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Forwarding"),(0,a.kt)("li",{parentName:"ul"},"Blocking "),(0,a.kt)("li",{parentName:"ul"},"Learning"),(0,a.kt)("li",{parentName:"ul"},"Listening"),(0,a.kt)("li",{parentName:"ul"},"Disabled")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Charakteristik der Ports"),(0,a.kt)("th",{parentName:"tr",align:null},"StP Zustand"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alle Ports d Root-Switches"),(0,a.kt)("td",{parentName:"tr",align:null},"Forwarding"),(0,a.kt)("td",{parentName:"tr",align:null},"Root-Switch ist immer der designierte Switch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RootPorts aller nicht Root-Switches"),(0,a.kt)("td",{parentName:"tr",align:null},"Forwarding"),(0,a.kt)("td",{parentName:"tr",align:null},"Port mit den niedrigsten administrativen Kosten zum Root-Switch (=entsprechen direktem Weg zum Root-Switch)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Designated-Port aller Segmente"),(0,a.kt)("td",{parentName:"tr",align:null},"Forwarding"),(0,a.kt)("td",{parentName:"tr",align:null},"niedrigste Kosten vom Segment zum Root-SW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alle anderen Ports"),(0,a.kt)("td",{parentName:"tr",align:null},"Blocking"),(0,a.kt)("td",{parentName:"tr",align:null},"sollen zur Weiterleitung momentan nicht benutzt werden")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vom admin deaktiviert oder ohne Kabel"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"stehen nicht zur Verf\xfcgung")))),(0,a.kt)("h1",{id:"rstp-und-mstp"},"RSTP und MSTP"),(0,a.kt)("p",null,"\xdcrspr\xfcngliche StP besitzt lange Konvergenzzeiten "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RSTP ist Weiterentwicklung und benutzt bei Neuberechnung den alten Tree weiter bis der neue fertig ist"),(0,a.kt)("li",{parentName:"ul"},"MSTP erweiterung von RSTP f\xfcr VLANS.")))}m.isMDXComponent=!0}}]);