"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[7163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=i,h=d["".concat(o,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={},l="Building blocks Networksecurity",s={unversionedId:"fiae/IT-Sicherheit/firewall",id:"fiae/IT-Sicherheit/firewall",title:"Building blocks Networksecurity",description:"Firewall",source:"@site/docs/fiae/IT-Sicherheit/firewall.md",sourceDirName:"fiae/IT-Sicherheit",slug:"/fiae/IT-Sicherheit/firewall",permalink:"/md/fiae/IT-Sicherheit/firewall",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/IT-Sicherheit/firewall.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IT Sicherheit",permalink:"/md/fiae/IT-Sicherheit/Sicherheit"},next:{title:"Bedrohungsanalyse - Threat Moddeling",permalink:"/md/fiae/IT-Sicherheit/threat_modeling/threat_modelling"}},o={},u=[{value:"Firewall",id:"firewall",level:2},{value:"Basics - (hardware) Firewall",id:"basics---hardware-firewall",level:3},{value:"Wann macht eine hardware Firewall Sinn",id:"wann-macht-eine-hardware-firewall-sinn",level:4},{value:"Angrifsf\xe4che einer Firewall",id:"angrifsf\xe4che-einer-firewall",level:3},{value:"Firewallarten",id:"firewallarten",level:3},{value:"DMZ",id:"dmz",level:2},{value:"who is in a dmz network usually",id:"who-is-in-a-dmz-network-usually",level:3},{value:"Exposed Host",id:"exposed-host",level:2},{value:"Proxy (forward-Proxy)",id:"proxy-forward-proxy",level:2},{value:"Vorteile",id:"vorteile",level:3},{value:"Reverse-Proxy",id:"reverse-proxy",level:3},{value:"IDS - Intrusion Detection System",id:"ids---intrusion-detection-system",level:2},{value:"IPS",id:"ips",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-blocks-networksecurity"},"Building blocks Networksecurity"),(0,i.kt)("h2",{id:"firewall"},"Firewall"),(0,i.kt)("h3",{id:"basics---hardware-firewall"},"Basics - (hardware) Firewall"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"System aus Software und Hardwarekomponenten"),(0,i.kt)("li",{parentName:"ul"},"Ip basierte Netze koppeln"),(0,i.kt)("li",{parentName:"ul"},"Zugriff \xfcberwachen und Einschr\xe4nken"),(0,i.kt)("li",{parentName:"ul"},"Der gesamte Netzwerkverkehr nach und von au\xdfen geht durch die Firewall")),(0,i.kt)("h4",{id:"wann-macht-eine-hardware-firewall-sinn"},"Wann macht eine hardware Firewall Sinn"),(0,i.kt)("p",null,"z.B. Intranet, Sensible Daten (mehr Sicherheit als Softwarefirewall). Oder bei gro\xdfem Volumen, z.B. Provider einer API oder eines gro\xdfen Onlinestores."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vorteile"),": erh\xf6te Sicherheit, gr\xf6\xdferes Volumen m\xf6glich, mehr/bessere erweitere Funktionalit\xe4ten, bessere Admin-Verwaltung."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nachteile"),": Anschaffungskosten, ben\xf6tigtes Fachwissen zum einrichten.")),(0,i.kt)("h3",{id:"angrifsf\xe4che-einer-firewall"},"Angrifsf\xe4che einer Firewall"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DDOS. Begrenzte Kapazit\xe4t/Durchfluss-Rate der Firewall kann \xfcberw\xe4ltigt werden."),(0,i.kt)("li",{parentName:"ul"},"Konfigurationsfehler"),(0,i.kt)("li",{parentName:"ul"},"Umgehung von Firewall-regeln.")),(0,i.kt)("h3",{id:"firewallarten"},"Firewallarten"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Packetfilternde Firewalls")," - verifies IPs, Ports and Protocols."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Circuit Level Gateway")," - verifies TCP handshakes and session fulfilment rules. Consumes low resources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stateful Inspection FW")," - packetfilternd und circuit-level."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Next gen FW")," - adds features like SSL and SSH inspection, deep-packet inspection, anti malware features."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Application level FW")," - advanced features against things like SQL-injections, cross-site-scripting, cookie-tempering."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unifed Thread management")," - combining multiple security features (anti-virus, anti-spam, content filtering, web-filtering) in a single device.")),(0,i.kt)("h2",{id:"dmz"},"DMZ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eigenst\xe4ndiges Netzwerk, das als Pufferzone zwischem dem Internet und Intranet fungiert."),(0,i.kt)("li",{parentName:"ul"},"Oft (aber nicht zwingend) mit eigener Firewall"),(0,i.kt)("li",{parentName:"ul"},"safety hardened (more so than needed for internal networks)"),(0,i.kt)("li",{parentName:"ul"},"einfach einzurichten und zu verwalten")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dmz picture",src:r(2563).Z,width:"2238",height:"1059"})),(0,i.kt)("h3",{id:"who-is-in-a-dmz-network-usually"},"who is in a dmz network usually"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Email servers"),(0,i.kt)("li",{parentName:"ul"},"FTP servers"),(0,i.kt)("li",{parentName:"ul"},"Web servers"),(0,i.kt)("li",{parentName:"ul"},"Reverse-Proxy (to add another layer before the Web servers or secure content behind some auth)")),(0,i.kt)("h2",{id:"exposed-host"},"Exposed Host"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dmz f\xfcr arme"),(0,i.kt)("li",{parentName:"ul"},"open both directions"),(0,i.kt)("li",{parentName:"ul"},"uses public ip (or via dyndns etc.)")),(0,i.kt)("h2",{id:"proxy-forward-proxy"},"Proxy (forward-Proxy)"),(0,i.kt)("p",null,"Vermittler in einem Netzwerk. Jede Verbindung geht nicht direkt ins Internet, sondern an den Proxy, der dann weiterleitet."),(0,i.kt)("h3",{id:"vorteile"},"Vorteile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einsparen von Bandbreite."),(0,i.kt)("li",{parentName:"ul"},"Bessere Kontrolle (z.B. Welche Webseiten aufgerufen werden)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Whitelist/Blacklist einfach implementierbar"),(0,i.kt)("li",{parentName:"ul"},"Identit\xe4ten hinter dem Proxy verborgen"))),(0,i.kt)("li",{parentName:"ul"},"Erh\xf6hung des Datenschutzes/Sicherheit"),(0,i.kt)("li",{parentName:"ul"},"Caching kann Geschwindigkeit erh\xf6hen"),(0,i.kt)("li",{parentName:"ul"},"Kontrolle \xfcber Bandbreite, Lastenverteilung steuerbar",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kann f\xfcr Loadbalancing eingesetzt werden")))),(0,i.kt)("h3",{id:"reverse-proxy"},"Reverse-Proxy"),(0,i.kt)("p",null,"sits in front of back-end applications and forwards client(ex. browsers) requests to those."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"help increase scalability, performance, resilience and security. by for example caching static content, acting as load balancers, redirecting not logged in reuqests to login page etc..."),(0,i.kt)("li",{parentName:"ul"},"Popular examples that include reverse proxys: nginx, apache, caddy.")),(0,i.kt)("h2",{id:"ids---intrusion-detection-system"},"IDS - Intrusion Detection System"),(0,i.kt)("p",null,"Sammelt daten und Analysiert diese automatisiert aus um dann nach gewissen Regel automatisiert zu benachrichtigen. (auch als moderne KI systeme m\xf6glich)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"passives tool"),(0,i.kt)("li",{parentName:"ul"},"Soll eine Erg\xe4nzung zur Firewall sein"),(0,i.kt)("li",{parentName:"ul"},"Es soll Muster/Anomlien erkennen (Viele Login-Requests fehlgeschlagen, Viele Timeouts etc.)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"automatisierte Meldungen an Admin"))),(0,i.kt)("li",{parentName:"ul"},"Host-basiert / Netzwerk-basiert / Hybride-systeme")),(0,i.kt)("h2",{id:"ips"},"IPS"),(0,i.kt)("p",null,"Wie IDS, reagiert jedoch auch und meldet nicht ausschlie\xdflich."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aktives tool"),(0,i.kt)("li",{parentName:"ul"},"automatische Abwehrma\xdfnahmen ergreifen"),(0,i.kt)("li",{parentName:"ul"},"z.B. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Verbindung unterbrechen"),(0,i.kt)("li",{parentName:"ul"},"Pakete verwerfen"),(0,i.kt)("li",{parentName:"ul"},"Verbindungen von Zeil und Quelle"),(0,i.kt)("li",{parentName:"ul"},"grunds\xe4tzliches Blocken"),(0,i.kt)("li",{parentName:"ul"},"Admin informieren")))))}d.isMDXComponent=!0},2563:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/DMZ.excalidraw-7efd73cb1fbdff1dd4a045e341a3fae8.svg"}}]);