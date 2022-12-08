"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[4459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),o=r,N=m["".concat(p,".").concat(o)]||m[o]||k[o]||l;return n?a.createElement(N,i(i({ref:t},d),{},{components:n})):a.createElement(N,i({ref:t},d))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=o;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},2114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},i="IPs und Subnetting",s={unversionedId:"fiae/netzwerk/netzwerk2_Ip",id:"fiae/netzwerk/netzwerk2_Ip",title:"IPs und Subnetting",description:"- besteht aus 32 bit -> 2^32 maximale Ip-Adressen",source:"@site/docs/fiae/netzwerk/netzwerk2_Ip.md",sourceDirName:"fiae/netzwerk",slug:"/fiae/netzwerk/netzwerk2_Ip",permalink:"/md/fiae/netzwerk/netzwerk2_Ip",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/netzwerk/netzwerk2_Ip.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Netzwerke - Grundlagen",permalink:"/md/fiae/netzwerk/netzwerk1_grundlagen"},next:{title:"Protokolle",permalink:"/md/fiae/netzwerk/netzwerk3_protokolle"}},p={},u=[{value:"historische Netzklassen",id:"historische-netzklassen",level:2},{value:"private IP-Bereiche?",id:"private-ip-bereiche",level:2},{value:"unicast - multicast - broadcast",id:"unicast---multicast---broadcast",level:2},{value:"APIPA -Adresse",id:"apipa--adresse",level:2},{value:"unicast- multicast - anycast",id:"unicast--multicast---anycast",level:2},{value:"wieviele hosts passen in subnetzt:",id:"wieviele-hosts-passen-in-subnetzt",level:2},{value:"Rechenbeispiele",id:"rechenbeispiele",level:2},{value:"bsp gro\xdfes netzt in 2 kleinere teilen:",id:"bsp-gro\xdfes-netzt-in-2-kleinere-teilen",level:2}],d={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ips-und-subnetting"},"IPs und Subnetting"),(0,r.kt)("h1",{id:"ipv4-adressen"},"IPv4-Adressen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"besteht aus 32 bit -> 2^32 maximale Ip-Adressen")),(0,r.kt)("h2",{id:"historische-netzklassen"},"historische Netzklassen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Klasse"),(0,r.kt)("th",{parentName:"tr",align:null},"IP-Bereich von"),(0,r.kt)("th",{parentName:"tr",align:null},"bis IP-Bereich"),(0,r.kt)("th",{parentName:"tr",align:null},"Netzmaske"),(0,r.kt)("th",{parentName:"tr",align:null},"M\xf6gliche Hosts"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"127.255.255.254"),(0,r.kt)("td",{parentName:"tr",align:null},"255.0.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"254^3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"128.1.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"191.255.255.254"),(0,r.kt)("td",{parentName:"tr",align:null},"4 255.255.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"254^2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"192.1.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"223.255.255.254"),(0,r.kt)("td",{parentName:"tr",align:null},"255.255.255.0"),(0,r.kt)("td",{parentName:"tr",align:null},"254^1=254")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"224.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"239.255.255.254"),(0,r.kt)("td",{parentName:"tr",align:null},"255.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"254^0=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E"),(0,r.kt)("td",{parentName:"tr",align:null},"240.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"255.255.255.254"),(0,r.kt)("td",{parentName:"tr",align:null},"werden nicht vergeben !"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"private-ip-bereiche"},"private IP-Bereiche?"),(0,r.kt)("p",null,"wichtig lernen!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Bereich"),(0,r.kt)("th",{parentName:"tr",align:null},"von"),(0,r.kt)("th",{parentName:"tr",align:null},"bis"),(0,r.kt)("th",{parentName:"tr",align:null},"als netzbereich geschrieben:"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"10.255.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.0/8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"172.16.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"172.31.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"172.16.0.0/12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.0.0./16")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"127.0.0.1 -> loopback -> localhost!")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.it-administrator.de/download/whitepapers/BlackB_WP_Subnetzmasken.pdf"},"https://www.it-administrator.de/download/whitepapers/BlackB_WP_Subnetzmasken.pdf")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eine 1 in der Subnetzmaske -> das bit geh\xf6rt zum Netzanziel (vs 0)"),(0,r.kt)("li",{parentName:"ul"},"-> CIDR zeigt anzahl der gesetzen bits. (classless interdomain routing)"),(0,r.kt)("li",{parentName:"ul"},"-> LIDR zeigt netzteil")),(0,r.kt)("p",null,"Bsp. 10.43.8.67/28 entspricht der Adresse 10.43.8.67 mit der Netzmaske 255.255.255.240:",(0,r.kt)("br",{parentName:"p"}),"\n","IPv4-Adresse = 10.43.8.67/28 (32-28= 4 Bit (Netzmaske: 11111111.11111111.11111111.11110000 (mit 4 Stellen im Dualsystem lassen sich 16 unterschiedliche Werte darstellen, n\xe4mlich 0\u201315)) \u2192 16 Adressen \u2212 (Broadcast- und Netzadresse) = 14 IPv4-Adressen zu vergeben.)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"standart subnetzmaske ist 24, da berechnen der hosts damit sehr einfach wird. =2^n-2 mit n=32-CIDR-Zahl -> n= 32-24=8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"die CIDR -Zahl ordnet theoretisch bis /8 ->A, bis /16 ->B, bis 24/ ->C zu."))),(0,r.kt)("h2",{id:"unicast---multicast---broadcast"},"unicast - multicast - broadcast"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"unicast sendet point to point."),(0,r.kt)("li",{parentName:"ul"},"broadcast sendet an mehrere (>1 aber nicht alle). allgemeine broadcast adresse: 255.255.255.255. im privaten ist die (private) broadcast adresse die letzte hostadresse m\xf6glich +1."),(0,r.kt)("li",{parentName:"ul"},"multicast sendet an alle.")),(0,r.kt)("h2",{id:"apipa--adresse"},"APIPA -Adresse"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Autokonfiguration von Adressen f\xfcrs Lan, wenn nichts anderes eingestellt."),(0,r.kt)("li",{parentName:"ul"},"address from 169.254.0.0 to 169.254.255.255 (entspricht subnetztmaske 16)")),(0,r.kt)("h1",{id:"ipv6"},"Ipv6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"buch s.232 recht gut erkl\xe4rt",(0,r.kt)("br",{parentName:"p"}),"\n","gr\xf6\xdfe: 128 bit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"statt TTl (Time To Live, hat ipv6 ein hop limit =quasi das selbe)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vorteile:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"mehr sicherheit, durch historische verwendung von IP-Sec"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"theoretische gr\xf6\xdf in ipv4: 1500Bytes 65535 Bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"theoretische gr\xf6\xdfe ipv6:      x        -4Mrd Bytes (4 Gigabyte). In der praxis unterst\xfctzen jedoch auf unteren Schichten keine so gro\xdfen Pakete.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"8 Bl\xf6cke mit jeweils 4 Ziffern / jede Ziffer 0-9-A-F = 4 bit / =128bit"))),(0,r.kt)("h2",{id:"unicast--multicast---anycast"},"unicast- multicast - anycast"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unicast\nBezieht sich auf eine Schnittstelle auf einem einzelnen Knoten.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multicast\nBezieht sich auf eine Gruppe von Schnittstellen, in der Regel auf verschiedenen Knoten. Pakete, die eine Multicast-Adresse gesendet werden, werden an alle Mitglieder der Multicast-Gruppe geleitet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Anycast\nBezieht sich auf eine Gruppe von Schnittstellen, in der Regel auf verschiedenen Knoten. Pakete, die an eine Anycast-Adresse gesendet werden, gehen an den Mitgliedsknoten der Anycast-Gruppe, der dem Absender am n\xe4hesten ist.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fe80:: f\xfcr local adress.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Die link-lokale Adresse ist nur im lokalen Netzwerk\ng\xfcltig (Bild 3).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Eine globale IPv6-Adresse erm\xf6glicht Verbindungen\nins \xf6ffentliche Netz.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Eine tempor\xe4re IPv6-Adresse enth\xe4lt anstelle der\nMAC-Adresse der Schnittstelle eine zuf\xe4llig erzeugte\n64-Bit-Zahl als Schnittstellen-ID. Die tempor\xe4ren\nAdressen k\xf6nnen f\xfcr alle Schnittstellen verwendet\nwerden, die anonym bleiben sollen, z.B. beim Zugriff\nauf \xf6ffentliche Webserver."))),(0,r.kt)("h1",{id:"subnetting-beispiele"},"subnetting beispiele"),(0,r.kt)("h2",{id:"wieviele-hosts-passen-in-subnetzt"},"wieviele hosts passen in subnetzt:"),(0,r.kt)("p",null,"BSP /25 -> n=32-cid=7  -> 2^n=2^7=128 (-> 128-2=126 REchner passen ins netz mit /25)        "),(0,r.kt)("h1",{id:"subnetting-warum"},"Subnetting warum?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Orginisatorische und Logische Einheiten k\xf6nnen abgebildet werden. z.B. Abteilungen, alle Auszubildenden etc."),(0,r.kt)("li",{parentName:"ul"},"In ipv4 Broadcaststurm. Regelm\xe4\xdfige Broadcasts beanspruchen Netz Leistung/Bandbreite. Werden bei gro\xdfen Netzen zu viele.")),(0,r.kt)("h2",{id:"rechenbeispiele"},"Rechenbeispiele"),(0,r.kt)("p",null,"Bsp: 400 Hosts anforderung",(0,r.kt)("br",{parentName:"p"}),"\n","Frage: 10.0.0.0 /8?\nNein. Warum?: wenn broadcastdomaine zu gro\xdf wird:",(0,r.kt)("br",{parentName:"p"}),"\n","-> broadcaststurm/ regelm\xe4\xdfige broadcasts beanspruchen Netzt Leistung.",(0,r.kt)("br",{parentName:"p"}),"\n","-> Orginasitorische und Logische Einheiten k\xf6nnen abgebildet werden.",(0,r.kt)("br",{parentName:"p"}),"\n","-> erw\xe4gen ob kleinere Subnette Sinn machen.    "),(0,r.kt)("p",null,"Bsp. 10.4.5.50/24  ausf\xfchrlich berechnen",(0,r.kt)("br",{parentName:"p"}),"\n","in bits:    00001010.00000100.00000101.00110010",(0,r.kt)("br",{parentName:"p"}),"\n","24 1en->    11111111.11111111.11111111.00000000     (links netzanteil)",(0,r.kt)("br",{parentName:"p"}),"\n","&& bitwise: 00001010.00000100.00000101.00000000     ()\nin decimal  10.     .4      .5      .0              (NetzID)\n-> broadcast 10.    .4      .5      .255            (BC)\n-> letzte verf\xfcgbare 10.4   .5      .254\nGesammt hosts:n=32-CIDR -> 2^n -> =256      "),(0,r.kt)("p",null,"Bsp. 10.4.5.128/25  ausf\xfchrlich berechnen",(0,r.kt)("br",{parentName:"p"}),"\n","in bits:    00001010.00000100.00000101.10000000",(0,r.kt)("br",{parentName:"p"}),"\n","24 1en->    11111111.11111111.11111111.10000000     (links netzanteil)",(0,r.kt)("br",{parentName:"p"}),"\n","&& bitwise: 00001010.00000100.00000101.10000000     ()",(0,r.kt)("br",{parentName:"p"}),"\n","netzID  10.4.5.128",(0,r.kt)("br",{parentName:"p"}),"\n","erster host 10.4.5.129",(0,r.kt)("br",{parentName:"p"}),"\n","letzter host 10.4.5.254",(0,r.kt)("br",{parentName:"p"}),"\n","broadcast   10.4.5.255      "),(0,r.kt)("p",null,"Bsp. 10.1.1.0/22\n00001010.00000000.00000001.00000000",(0,r.kt)("br",{parentName:"p"}),"\n","11111111.11111111.11111100.00000000",(0,r.kt)("br",{parentName:"p"}),"\n","00001010.00000000.00000000.00000000 <-NetzID",(0,r.kt)("br",{parentName:"p"}),"\n","10.0.0.0    NetzID in decimal",(0,r.kt)("br",{parentName:"p"}),"\n","bc bestimmen: 32-CID = 32-22 = 10 -> 2^n=2^10 -> ",(0,r.kt)("strong",{parentName:"p"},"10 decimalstellen von links:")," = bc adresse",(0,r.kt)("br",{parentName:"p"}),"\n","00000000.00000000.0000001.11111111 <-BC adresse",(0,r.kt)("br",{parentName:"p"}),"\n","3.255 BC adresse in decimal     "),(0,r.kt)("h2",{id:"bsp-gro\xdfes-netzt-in-2-kleinere-teilen"},"bsp gro\xdfes netzt in 2 kleinere teilen:"),(0,r.kt)("p",null,"Bsp. 10.0.0.0/24 soll in 2 Bereiche geteilt werden. (z.B. aus Verwaltungsgr\xfcnden) (urspr\xfcngliche gr\xf6\xdfe: 2^8-2=254 m\xf6gliche hosts)",(0,r.kt)("br",{parentName:"p"}),"\n","-> eine 1 mehr in subnetzmaske = 24+1=/25\n10.0.0.0-10.0.0.127",(0,r.kt)("br",{parentName:"p"}),"\n","10.0.0.128-10.0.0.255",(0,r.kt)("br",{parentName:"p"}),"\n","mit hier jeweils (2^7-2=)126 hosts"),(0,r.kt)("p",null,"Bsp. 10.0.0.0/24 soll in 4 Bereiche gesplittet werden:",(0,r.kt)("br",{parentName:"p"}),"\n","geht bis. - 10.0.0.255/24",(0,r.kt)("br",{parentName:"p"}),"\n","2^(32-24)=256 -> 256/4=64-> jeder bereich wird 64 bit gro\xdf.     "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10.0.0.0.-10.0.0.63/26      "),(0,r.kt)("li",{parentName:"ul"},"10.0.0.64-10.0.0.127/26     "),(0,r.kt)("li",{parentName:"ul"},"10.0.0.128-10.0.0.191/26        "),(0,r.kt)("li",{parentName:"ul"},"10.0.0.192-10.0.0.255/26        ")),(0,r.kt)("h1",{id:"herangehensweise-ipv4-subnetz-in-4-teil-subnetzte-splitten"},"Herangehensweise ipv4 subnetz in 4 teil subnetzte splitten:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"71.56.8.0/16 -> 4 mal /18 -> 2^(32-CID) = 2^(32-18) = 2^",(0,r.kt)("strong",{parentName:"li"},"(14)")," = 16384 ip's pro Subnetz")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ausgangsnetz->"),(0,r.kt)("th",{parentName:"tr",align:null},"71."),(0,r.kt)("th",{parentName:"tr",align:null},"56."),(0,r.kt)("th",{parentName:"tr",align:null},"8."),(0,r.kt)("th",{parentName:"tr",align:null},"0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in bin\xe4r"),(0,r.kt)("td",{parentName:"tr",align:null},"(71)"),(0,r.kt)("td",{parentName:"tr",align:null},"0011 1000"),(0,r.kt)("td",{parentName:"tr",align:null},"0000 1000"),(0,r.kt)("td",{parentName:"tr",align:null},"0000 0000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&& biwise operator mit: ",(0,r.kt)("strong",{parentName:"td"},"14")," * bin\xe4res 1 dann 0s"),(0,r.kt)("td",{parentName:"tr",align:null},"1111 1111"),(0,r.kt)("td",{parentName:"tr",align:null},"1111 1100"),(0,r.kt)("td",{parentName:"tr",align:null},"0000 0000"),(0,r.kt)("td",{parentName:"tr",align:null},"0000 0000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ergibt bin\xe4r"),(0,r.kt)("td",{parentName:"tr",align:null},"(71)"),(0,r.kt)("td",{parentName:"tr",align:null},"0011 1000"),(0,r.kt)("td",{parentName:"tr",align:null},"0000 0000"),(0,r.kt)("td",{parentName:"tr",align:null},"0000 0000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ist NetzID des ersten Netztes:"),(0,r.kt)("td",{parentName:"tr",align:null},"71."),(0,r.kt)("td",{parentName:"tr",align:null},"56."),(0,r.kt)("td",{parentName:"tr",align:null},"0."),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("p",null,"Nun ist die letzte Verwendbare IP/Broadcast Adresse zu ermitteln um den Raum des netztes bestimmt zu haben:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"da 16348 Ip's verf\xfcgbar sind ist die letzten 8 bit alle 1: 1111 1111 -> 255"),(0,r.kt)("li",{parentName:"ul"},"da dies noch nicht ausreicht wird die stelle vor dem . aktiviert: 16348/2^8=16348/256=64"),(0,r.kt)("li",{parentName:"ul"},"(also beginnt das 2Subnetz das nachfolgt bei 71.56.64.0 (<=71.56.0.0 + 0.0.64.0)"),(0,r.kt)("li",{parentName:"ul"},"die Broadcastadresse des vorherigen ist also der wert davor(-=1): 71.56.63.255"),(0,r.kt)("li",{parentName:"ul"},"die letze Verwendbare Ip ist wiederrum die davor(-=1): 71.56.63.254"),(0,r.kt)("li",{parentName:"ul"},"die Subnetzmaske ist ja /24 -> 1111 1111.1111 1100.0000 0000.0000 0000 -> in decimal also 255.252.0.0  (vgl. usecase obere Tabelle 2 spalte)")),(0,r.kt)("p",null,"f\xfcr die 2 subnetzmaske haben wir ja bereits die NetzID, die Broadcastadresse ist also wieder 71.56.64.0+ 0.0.64.0 - 0.0.0.0.1). ebenso bei Folgenden:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subnetz"),(0,r.kt)("th",{parentName:"tr",align:null},"Netzadresse (Anfang des Raumes)"),(0,r.kt)("th",{parentName:"tr",align:null},"Broadcastadresse(Ende des Raumes)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.63.255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.64.0"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.127.255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.128.0"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.191.255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.192.0"),(0,r.kt)("td",{parentName:"tr",align:null},"71.56.255.255")))),(0,r.kt)("p",null,"Achtung: was hier noch falsch war: erst mit /16 die NetzID bilden und diese als Ausgangspunkt f\xfcr erstes Subnetz nehmen. NICHT wie im Beispiel direkt mit der && bitweise.",(0,r.kt)("br",{parentName:"p"}),"\n","Ausserdem wrsl. nicht wie eingezeichnet mit 14 sondern direkt mit 16 (oder 18) einsen, von /16 /18 "),(0,r.kt)("h1",{id:"ipv6-subnetting"},"ipv6 Subnetting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/32 wird quasi nur von Internet-Providern genutzt. Da extrem viele Subnetze."),(0,r.kt)("li",{parentName:"ul"},"ab ca. /64 -> 256")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6992).Z,width:"1946",height:"3046"})))}m.isMDXComponent=!0},6992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hexa_subnet-d9b87e85d0c130782a93700f0396fcd0.png"}}]);