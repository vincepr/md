"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[9811],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=m(t),p=a,h=d["".concat(s,".").concat(p)]||d[p]||k[p]||i;return t?r.createElement(h,l(l({ref:n},o),{},{components:t})):r.createElement(h,l({ref:n},o))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const i={},l="Netzwerke - Grundlagen",u={unversionedId:"fiae/netzwerk/netzwerk",id:"fiae/netzwerk/netzwerk",title:"Netzwerke - Grundlagen",description:"Vorteile von Netzwerken:",source:"@site/docs/fiae/netzwerk/netzwerk.md",sourceDirName:"fiae/netzwerk",slug:"/fiae/netzwerk/",permalink:"/md/fiae/netzwerk/",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/netzwerk/netzwerk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fiae - Mitschriften",permalink:"/md/category/fiae---mitschriften"},next:{title:"Pr\xe4sentation - IGRP",permalink:"/md/fiae/netzwerk/IGRP/"}},s={},m=[{value:"Vorteile von Netzwerken:",id:"vorteile-von-netzwerken",level:2},{value:"Nachteile von Netzwerken",id:"nachteile-von-netzwerken",level:2},{value:"PAN",id:"pan",level:2},{value:"LAN (local area network)",id:"lan-local-area-network",level:2},{value:"WLAN (wireless local area network)",id:"wlan-wireless-local-area-network",level:2},{value:"MAN (metropolian area network)",id:"man-metropolian-area-network",level:2},{value:"WAN",id:"wan",level:2},{value:"GAN",id:"gan",level:2},{value:"Peer-to-Peer",id:"peer-to-peer",level:2},{value:"Client-Server",id:"client-server",level:2},{value:"Token Ring Topologie",id:"token-ring-topologie",level:2},{value:"Vollvermaschtes netz Topologie",id:"vollvermaschtes-netz-topologie",level:2},{value:"Repeater : Layer 1",id:"repeater--layer-1",level:3},{value:"Hub : Layer 1",id:"hub--layer-1",level:3},{value:"Bridge : Layer 2",id:"bridge--layer-2",level:3},{value:"Layer-2-Switch : Layer 2",id:"layer-2-switch--layer-2",level:3},{value:"Gateway : Layer 3-7",id:"gateway--layer-3-7",level:3},{value:"Router : Layer 3",id:"router--layer-3",level:3},{value:"Layer3-Switch : Layer 3",id:"layer3-switch--layer-3",level:3},{value:"Kollisionsdom\xe4ne",id:"kollisionsdom\xe4ne",level:2},{value:"halfduplex / vollduplex",id:"halfduplex--vollduplex",level:2},{value:"- CSMA / CA",id:"--csma--ca",level:3},{value:"Protokollablauf",id:"protokollablauf",level:4},{value:"- CDMA",id:"--cdma",level:3},{value:"- TDMA",id:"--tdma",level:3},{value:"- FDMA",id:"--fdma",level:3},{value:"- Token Passing",id:"--token-passing",level:3},{value:"Der Aufbau eines Ethernet-v2-Rahmens nach IEEE 802.3",id:"der-aufbau-eines-ethernet-v2-rahmens-nach-ieee-8023",level:2},{value:"Frames",id:"frames",level:2}],o={toc:m};function d(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"netzwerke---grundlagen"},"Netzwerke - Grundlagen"),(0,a.kt)("h1",{id:"\xfcberblick"},"\xdcberblick"),(0,a.kt)("h2",{id:"vorteile-von-netzwerken"},"Vorteile von Netzwerken:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"verbesserte Kommunikation: verst\xe4rkt den Informationsaustausch"),(0,a.kt)("li",{parentName:"ul"},"Im abgeschlossenen firmeneigenen Netzwerk werden Neuigkeiten ver\xf6ffentlicht, die jeder berechtigte Mitarbeiter abrufen kann."),(0,a.kt)("li",{parentName:"ul"},"Anbindung an Internet kann zentral erfolgen und erm\xf6glicht damit weltweiten Austausch"),(0,a.kt)("li",{parentName:"ul"},"Einsatz von Email, Messengern... erm\xf6glicht instant, persistant Kommunikation"),(0,a.kt)("li",{parentName:"ul"},"Zentral abgespeicherte Daten k\xf6nnen geteilt Verwendet/Zugegriffen werden."),(0,a.kt)("li",{parentName:"ul"},"Zentralisierung"),(0,a.kt)("li",{parentName:"ul"},"Kosteneinspaarung"),(0,a.kt)("li",{parentName:"ul"},"Steigerung der Effektivit\xe4t"),(0,a.kt)("li",{parentName:"ul"},"Automatisierung"),(0,a.kt)("li",{parentName:"ul"},"Standartisierung, z.B.Versionierung von Daten"),(0,a.kt)("li",{parentName:"ul"},"Datensicherung"),(0,a.kt)("li",{parentName:"ul"},"Gemeinsamme Nutzung von Ressourcen (z.B. geteilter Drucker)"),(0,a.kt)("li",{parentName:"ul"},"Absicherung der Verf\xfcgbarkeit: im Verf\xfcgbarkeitsverbund kann durch Aufbau von Redundanzen/Failover auch im Ausfall einzelner Komponenten arbeitsf\xe4hig bleiben"),(0,a.kt)("li",{parentName:"ul"},"Lastverbund (Cluster)"),(0,a.kt)("li",{parentName:"ul"},"Optimierung der Wartung: z.B. Remote Zugriff"),(0,a.kt)("li",{parentName:"ul"},"Mobilit\xe4t: Arbeiten von Unterwegs/Homeoffice")),(0,a.kt)("h2",{id:"nachteile-von-netzwerken"},"Nachteile von Netzwerken"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kosten: evtl. teure Investionen m\xfcssen \xf6konomischen / unternehmerischen Vorteile aufwiegen. Aufbau, Wartung, Pflege, Instandhaltung erzeugt kosten.")),(0,a.kt)("h1",{id:"geografische-ausdehnung"},"Geografische Ausdehnung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"zentrale vs dezentrale"),(0,a.kt)("li",{parentName:"ul"},"strukturierte und organisierte Hierarchie")),(0,a.kt)("h1",{id:"netzwerkklassifizierungen"},"Netzwerkklassifizierungen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PAN"),(0,a.kt)("li",{parentName:"ul"},"LAN",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"WLAN"))),(0,a.kt)("li",{parentName:"ul"},"MAN"),(0,a.kt)("li",{parentName:"ul"},"WAN"),(0,a.kt)("li",{parentName:"ul"},"GAN")),(0,a.kt)("h2",{id:"pan"},"PAN"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB, FireWire, Blootooth"),(0,a.kt)("li",{parentName:"ul"},"wenige Meter, maximal Nebenraum")),(0,a.kt)("h2",{id:"lan-local-area-network"},"LAN (local area network)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mindestens 2 Ger\xe4te im Verbund"),(0,a.kt)("li",{parentName:"ul"},"auch Ortznetz genannt. Bis ca. Grundst\xfccksfl\xe4che."),(0,a.kt)("li",{parentName:"ul"},"standartm\xe4\xdfig Ethernet")),(0,a.kt)("h2",{id:"wlan-wireless-local-area-network"},"WLAN (wireless local area network)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"werden durch Normenfamilie IEEE 802.11 definiert"),(0,a.kt)("li",{parentName:"ul"},"ger\xe4te bequem in Heim- oder Unternehmensnetz einbinden"),(0,a.kt)("li",{parentName:"ul"},"geringerer Datendurchsatz als LAN")),(0,a.kt)("h2",{id:"man-metropolian-area-network"},"MAN (metropolian area network)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"St\xe4dtenetzwerk. Breitbandiges Telekommunikationsnetz genannt, das mehrere LANs in geografischer N\xe4he verbindet."),(0,a.kt)("li",{parentName:"ul"},"z.b. im Uninetzwerk werden mehrere Geb\xe4ude und LANs verbunden."),(0,a.kt)("li",{parentName:"ul"},"aber auch Regionenweites Internet")),(0,a.kt)("h2",{id:"wan"},"WAN"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mehrere MANs zusammengeschlossen."),(0,a.kt)("li",{parentName:"ul"},"streng genommen, mehrere L\xe4nder/Kontinente zusammengeschlossen."),(0,a.kt)("li",{parentName:"ul"},"meist in Besitzt einer besetimmten Organisation oder Unternehmens.")),(0,a.kt)("h2",{id:"gan"},"GAN"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"weltumspannendes Netzwerk wie das Internet"),(0,a.kt)("li",{parentName:"ul"},"umfasst mehrere WANs"),(0,a.kt)("li",{parentName:"ul"},"GANs nutzen die Glasfaserinfrastruktur, Seekabel oder Satelliten\xfcbertragung.")),(0,a.kt)("h1",{id:"zentralisierung-vs-dezentralisierung"},"Zentralisierung vs Dezentralisierung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gleichberechtigt vs hierarchische struktur"),(0,a.kt)("li",{parentName:"ul"},"zwei Grunkonzepte Client-server Peer-to-Peer")),(0,a.kt)("h2",{id:"peer-to-peer"},"Peer-to-Peer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"von peer (engl. Gleichgestellter)"),(0,a.kt)("li",{parentName:"ul"},"prinzipiell alle Computersysteme gleichberechtigt"),(0,a.kt)("li",{parentName:"ul"},"im lokalen: Drucker- oder Netzlaufwerksfreigaben"),(0,a.kt)("li",{parentName:"ul"},"im globalen: Filesharing-Netzte z.B. ",(0,a.kt)("strong",{parentName:"li"},"Torrent"),", Grid- oder CloudComputing")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Vorteile:")," keine Extrakosten f\xfcr Server",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Nachteile:")," Sicherheitsrichtlinen nur sehr eingeschr\xe4nkt umsetzbar. Keine Zentrale Verwaltung.  "),(0,a.kt)("h2",{id:"client-server"},"Client-Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server-Anwendung welches \xfcber Netzwerkverbindung eine Dienstleistungen/Ressourcen bereitstellt und passiv auf Anfragen wartet."),(0,a.kt)("li",{parentName:"ul"},'Client-Programm kommuniziert mit dem Server \xfcber eindeutige "Sprache", dem ',(0,a.kt)("strong",{parentName:"li"},"Protokoll"),". Bsp, HTTP und Webserver."),(0,a.kt)("li",{parentName:"ul"},"sobald ein Netzwerk gr\xf6\xdfere Dimensionen annimt, wird PeerToPeer un\xfcbersichtlich und schwer zu administrieren."),(0,a.kt)("li",{parentName:"ul"},"Je nach Protokoll ist eine Anmeldung nicht erforderlich (z.B. Web- DNS- und DHCP-Server)")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Vorteile:")," Zentralisierte Sicherheitsfreigaben. Erh\xf6hte Sicherheit. Spezialisierung des Servers nach Anforderungen m\xf6glich. Redundanz m\xf6glich f\xfcr z.B. Ausf\xe4lle oder Loadbalancing.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Nachteile:")," Anschaffungs-Kosten f\xfcr Hardware und Betriebssysteme, Verwaltungskosten. mehrfach um Ausfallsicherheit zu garantieren.",(0,a.kt)("br",{parentName:"p"}),"\n","Daher ist Abw\xe4gung wichtig : Total Cost of Ownership (TCO) vs. Return On Investment (ROI)",(0,a.kt)("br",{parentName:"p"}),"\n","-> Kosten-Nutzen-Relation/Rechnung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File-Server"),(0,a.kt)("li",{parentName:"ul"},"Print-Server"),(0,a.kt)("li",{parentName:"ul"},"Application-Server"),(0,a.kt)("li",{parentName:"ul"},". . .")),(0,a.kt)("h1",{id:"us-topologie--diffusionsnetz"},"us-Topologie / Diffusionsnetz"),(0,a.kt)("p",null,"Die Bus-Topologie ist eine passive Topologie. Die angeschlossenen sTationen f\xfchren keine Wiederaufbereitung des Signals durch.",(0,a.kt)("br",{parentName:"p"}),"\n",'Shared Medium ->sie h\xe4ngen alle in Reihe am "selben" Kabel.'),(0,a.kt)("p",null,"Fr\xfcher h\xe4ufig verwendet, z.B. in Version 10Base5 oder 10Base2. Mittlerweile wird es eher vermieden.\n",(0,a.kt)("em",{parentName:"p"},"Vorteile:")," G\xfcnstig",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Nachteile:")," Single point of Failure, keine wirkliche skallierbarkeit."),(0,a.kt)("h1",{id:"physikalischer-stern"},"physikalischer Stern"),(0,a.kt)("p",null,"(der logisch jedoch noch Bus ist)",(0,a.kt)("br",{parentName:"p"}),"\n","Zentraler Verteiler nimmt anfragen an und sendet aber immer an alle gleichzeitig (wie Bus)",(0,a.kt)("br",{parentName:"p"}),"\n","Immer noch Single point of failure (Verteiler)",(0,a.kt)("br",{parentName:"p"}),"\n","ausfall einer statiun oder defekt eines Kabels hat keine Auswirkung auf das restliche Netz."),(0,a.kt)("h1",{id:"logischer-stern"},"logischer Stern"),(0,a.kt)("p",null,"(der ebenso immer auch physikalischer Stern ist)",(0,a.kt)("br",{parentName:"p"}),"\n","Zentraler Verteiler (Switch) stellt punkt zu punkt verbindung zwischen clients her.",(0,a.kt)("br",{parentName:"p"}),"\n","Hat heutzutage fast vollst\xe4ndig den Bus verdr\xe4ngt.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Vorteile:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extrem Flexibel bzgl. Skallierbarkeit. Weitere Stationen und/oder Verteiler k\xf6nnen problemlos hinzugef\xfcgt werden.   "),(0,a.kt)("li",{parentName:"ul"},"H\xf6here Durchsatzraten, da 2 Stationen die Volle Bandbreite ben\xfctzen k\xf6nnen.     "),(0,a.kt)("li",{parentName:"ul"},"allgemein wenn aktiver Verteiler (vs passiver) wird das Signalverst\xe4rkt -> gr\xf6\xdfere Reichweite.    ")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Nachteile:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gr\xf6\xdfere Kabelmenge "),(0,a.kt)("li",{parentName:"ul"},"Kosten f\xfcr Switch"),(0,a.kt)("li",{parentName:"ul"},"Beim Ausfall des Verteilers -> Totalausfall")),(0,a.kt)("h1",{id:"ring-topologie"},"Ring Topologie"),(0,a.kt)("p",null,"jede Station hat einen klar definierten Vorg\xe4nger und Nachfolger",(0,a.kt)("br",{parentName:"p"}),"\n","Nachteile wie bei Bus",(0,a.kt)("br",{parentName:"p"}),"\n","Ring-Topologie spielt heutzutage neben in der Automatisierungstechnik (um hier hohe Fehlertoleranz zu gew\xe4hren) fast keine Rolle mehr."),(0,a.kt)("h2",{id:"token-ring-topologie"},"Token Ring Topologie"),(0,a.kt)("p",null,"Token wandert Reih-um, bis er an eine Station kommt die senden m\xf6chte -> Kollisionen minimiert.     "),(0,a.kt)("h1",{id:"baum-topologie"},"Baum Topologie"),(0,a.kt)("p",null,"Stern Topologien werden zusammengeschalten um z.B. verschiedene Abteilungen zusammenzuf\xfcgen.",(0,a.kt)("br",{parentName:"p"}),"\n","z.B. 1 Hauptverteiler hat 3 Abteilung mit jeweils mehreren Clients. Server z.B. am Hauptverteiler angeschlossen."),(0,a.kt)("h1",{id:"einfaches-maschennetz-topologie"},"(einfaches) Maschennetz Topologie"),(0,a.kt)("p",null,"In einem vernetzten Netzt existieren zwischen Verschiedenen Knoten mehrere Verbindungen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keinen single point of failure. Da redundanzen vorhanden."),(0,a.kt)("li",{parentName:"ul"},"Vorteile \xfcberwiegen nur, wenn Sicherheit bzgl. Verf\xfcgbarkeit das h\xf6chste Gut ist."),(0,a.kt)("li",{parentName:"ul"},"Extra Leitungen k\xf6nnen load sharing oder passiv (standby) implementiert werden\n",(0,a.kt)("em",{parentName:"li"},"Nachteil:")),(0,a.kt)("li",{parentName:"ul"},"extra Kabel, Hardware braucht genug LAN Ausg\xe4nge/Eing\xe4nge -> kosten"),(0,a.kt)("li",{parentName:"ul"},"Routing kann extrem komplex werden. (um feedbacks zu vermeiden etc)")),(0,a.kt)("p",null,"werden siemit switchen realisiert, sind das Spanning-Tree-Protokoll bzw. meshing-f\xe4hige Switche erforderlich."),(0,a.kt)("h2",{id:"vollvermaschtes-netz-topologie"},"Vollvermaschtes netz Topologie"),(0,a.kt)("p",null,"Jedes Mitglied ist mit ",(0,a.kt)("strong",{parentName:"p"},"allen")," anderen Mitgliedern vernetzt."),(0,a.kt)("h1",{id:"osi--schichten"},"OSI- Schichten"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"OSI"),(0,a.kt)("th",{parentName:"tr",align:null},"Protokolle"),(0,a.kt)("th",{parentName:"tr",align:null},"Protokoll-bsp."),(0,a.kt)("th",{parentName:"tr",align:null},"Kopplungselemente"),(0,a.kt)("th",{parentName:"tr",align:null},"Einheiten"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"Anwendung / Application"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP, DNS, FTP, DHCP"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Daten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"Darstellung / Presentation"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP, DNS, FTP, DHCP"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Daten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"Sitzung / Session"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP, DNS, FTP, DHCP"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Daten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"Transport / Transport"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP, UDP"),(0,a.kt)("td",{parentName:"tr",align:null},"LoadBalancer, (Firewall)"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP-Segmente, UDP-Datagramme")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Vermittlung / Network"),(0,a.kt)("td",{parentName:"tr",align:null},"IP, IPsec, ICMP"),(0,a.kt)("td",{parentName:"tr",align:null},"Gateway, Router, Layer-3-Switch"),(0,a.kt)("td",{parentName:"tr",align:null},"Pakete")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"Sicherung / Data Link"),(0,a.kt)("td",{parentName:"tr",align:null},"Ethernet (IEEE 802.3), ARP, WLAN (WLAN ja, LAN nein)"),(0,a.kt)("td",{parentName:"tr",align:null},"Bridge, Layer-2-Switch, WirelessAcessPoint"),(0,a.kt)("td",{parentName:"tr",align:null},"Frames")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Bit\xfcbertragung / Physical"),(0,a.kt)("td",{parentName:"tr",align:null},"1000BASE-T, Token Ring"),(0,a.kt)("td",{parentName:"tr",align:null},"Kabel, Repeater(=Verst\xe4rker), Hub"),(0,a.kt)("td",{parentName:"tr",align:null},"Bits")))),(0,a.kt)("h3",{id:"repeater--layer-1"},"Repeater : Layer 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"verst\xe4rkt Sendesignal um verl\xe4ngerung der Kabell\xe4nge \xfcber physikalisches Maxium."),(0,a.kt)("li",{parentName:"ul"},"5-4-3 Regel. Begrenzt Reichweite => mittlerweile in kabelgebundenen Netzwerken fast vollst\xe4ndig verdr\xe4ngt. (effektiv \xfcbernehmen Kopplungselemente in Schichten 2-3 die Signalauffrischung, da diese nicht mit 5-4-3 Regel beschr\xe4nkt sind)")),(0,a.kt)("h3",{id:"hub--layer-1"},"Hub : Layer 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ist ein multiport Repeater. Frischt also Signal auf wie der Repeater.   "),(0,a.kt)("li",{parentName:"ul"},"Sendet Packete die ankommen an ",(0,a.kt)("strong",{parentName:"li"},"alle")," anderen Stationen. (=> physikalischer Stern Topologie mit Hub in der Mitte).    "),(0,a.kt)("li",{parentName:"ul"},"Nachteile (da effektiv ein Bus) Anzahl der Stationen ist begrenzt. Geteilte Bandbreite. Heutztutage heute nicht mehr wirklich relevant."),(0,a.kt)("li",{parentName:"ul"},"Vorteile kosteng\xfcnstig.")),(0,a.kt)("h3",{id:"bridge--layer-2"},"Bridge : Layer 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verbindet 2 Segmente in einem Computernetz. Reduziert unn\xf6tigen Datenverkehr => Um z.B. Kollisionen zu vermeiden verdoppeln wir die Kollisionsdom\xe4nen => Auslastung des Netzwerks wird besser verteilt."),(0,a.kt)("li",{parentName:"ul"},'Bridge hat eine "Datenbank" aller relevanten MAC-Adressen. Bridge entscheidet dann ob es relevant ist die Datenpakete weiterzuleiten oder nicht.'),(0,a.kt)("li",{parentName:"ul"},"heutzutage nicht mehr wirklich relevant.")),(0,a.kt)("h3",{id:"layer-2-switch--layer-2"},"Layer-2-Switch : Layer 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"stellt Punkt zu Punkt verbindung zwischen 2 Stationen her. (logischer Stern)"),(0,a.kt)("li",{parentName:"ul"},"benutzt MAC adressen um zu wissen wohin die Datenpakete m\xfcssen. Und updated diese regelm\xe4\xdfig."),(0,a.kt)("li",{parentName:"ul"},'\xfcber Uplinkports k\xf6nnen mehrere Switches miteinander kombiniert werden. Adresstable hat jedoch eine Obergrenze der maximalen Endger\xe4te die "bedient werden k\xf6nnen".'),(0,a.kt)("li",{parentName:"ul"},"Bandbreite ist hier nicht mehr geteilt."),(0,a.kt)("li",{parentName:"ul"},"An einem Empf\xe4nger Port ist jedoch die Bandbreite immer noch limitiert. => wenn zu viele Pakete an einen Port gehen, mehr als der Switch zwischenspeichern kann werden Pakete verworfen/gel\xf6scht."),(0,a.kt)("li",{parentName:"ul"},'es gibt "dumme" unmanaged switches und managed switches. Die z.B. Nutzergruppen, Zugangsberechtigungen, Port-Mirroring(zum debuggen/leistungs\xfcberpr\xfcfung) etc. verwalten k\xf6nnen.')),(0,a.kt)("h3",{id:"gateway--layer-3-7"},"Gateway : Layer 3-7"),(0,a.kt)("p",null,"Verbindet Netzwerke mit unterschiedlichen Protokollen/Systemen miteinander, die sonst nicht miteinander Kommunizieren k\xf6nnten."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standart-Gateway: Standart weg ins Internet, zuhause z.B. Modem-Router."),(0,a.kt)("li",{parentName:"ul"},"Router, Proxyies etc sind beispiele f\xfcr Gateways."),(0,a.kt)("li",{parentName:"ul"},"Gateways k\xf6nnen auf vielen Ebenen existieren. Nicht nur auf Layer 3.")),(0,a.kt)("h3",{id:"router--layer-3"},"Router : Layer 3"),(0,a.kt)("p",null,'Verbintet Netzwerke. "Wegfinder" im Internet.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jeder Router ist ein Gateway.")),(0,a.kt)("h3",{id:"layer3-switch--layer-3"},"Layer3-Switch : Layer 3"),(0,a.kt)("h2",{id:"kollisionsdom\xe4ne"},"Kollisionsdom\xe4ne"),(0,a.kt)("p",null,"Teilbereich auf OSI-Schicht 1. Fangen auf einem derartigen gemeinsamen Layer-1 Segment zwei Stationen gleichzeig an zu senden (z.B. auf gleichem Kabel), kommt es zu Kollisionen. (z.B. Stationen die an einem Hub zusammengeschlossen sind.)     "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Switches z.B. haben viele Kollisionsdom\xe4nen. Eine Bridge z.B. 2 Kollisionsdomen\xe4en.\n",(0,a.kt)("img",{src:t(903).Z,width:"1194",height:"480"}))),(0,a.kt)("h2",{id:"halfduplex--vollduplex"},"halfduplex / vollduplex"),(0,a.kt)("p",null,"half: gleichzeitiges senden und empfangen ist nicht m\xf6glich.",(0,a.kt)("br",{parentName:"p"}),"\n","vollduplex: quasi 2 leitungen (in einem Kabel), die gleichzeitiges Senden und Empfangen erm\xf6glichen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"im halfduplex Betrieb werden ",(0,a.kt)("strong",{parentName:"li"},"Zugriffsverfahren")," benutzt um zu regeln wer wann senden darf:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CSMA/CA"),(0,a.kt)("li",{parentName:"ul"},"Token Passing"),(0,a.kt)("li",{parentName:"ul"},"FDMA"),(0,a.kt)("li",{parentName:"ul"},"TDMA"),(0,a.kt)("li",{parentName:"ul"},"CDMA")))),(0,a.kt)("h1",{id:"mehrfachzugriffsverfahren"},"Mehrfachzugriffsverfahren"),(0,a.kt)("p",null,"Mehrere Zeilnehmer teilen sich ein Zugriffsmedium"),(0,a.kt)("h3",{id:"--csma--ca"},"- CSMA / CA"),(0,a.kt)("p",null,"carrier-sense multiple access with collision avoidance.",(0,a.kt)("br",{parentName:"p"}),"\n","Prinzip: Listen before Talk.",(0,a.kt)("br",{parentName:"p"}),"\n","Z.B. bei einem Bus / Hub Netzwerk. Aber auch wenn sich ein \xdcbertragungsmedium wie ein Frequenzbereich geteilt wird, z.B. WLAN.      "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Carrier Sense:"),"  Teilnehmer d\xfcrfen nur Daten an das Netz versenden, wenn das \xdcbertragungsmedium frei ist.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Multiple Access:")," Mehrere Stationen teilen sich ein \xdcbertragungsmedium. Noch zu erw\xe4hnen das sie nat\xfcrlich auf dem selben verbindlichen Protokoll kommunizieren m\xfcssen.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Collision Avoidance:")," Ein komplexer Ablaufplan versucht daf\xfcr zu sorgen, dass zwei oder mehr Teilnehmer nicht gleichzeitig eine \xdcbertragung beginnen. Sollte es doch mal passieren wird dies erkannt und die \xdcbertragung abgebrochen -> erneut versucht."))),(0,a.kt)("p",null,"gro\xdfes Problem: Hidden-Station-Problem. Wenn 2 entfernte Statiunen sich gegenseitig nicht mehr wahrnehmen k\xf6nnen. Stationen dazwischen jedoch beide. -> beide Senden ohne das sie es merken gleichzeitig."),(0,a.kt)("p",null,"-> L\xf6sung: RTS/CTS Koordination. Request to Send/Clear"),(0,a.kt)("h4",{id:"protokollablauf"},"Protokollablauf"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Medium abhorchen"),(0,a.kt)("li",{parentName:"ol"},"ist MNedium f\xfcr die Dauer eines DIFS (Taktung die ein Datenpaket maximal gesendet werden kann) frei, wird gesendet"),(0,a.kt)("li",{parentName:"ol"},"ist das Medium belegt wird gestoppt und nach einem DIFS erneut probiert"),(0,a.kt)("li",{parentName:"ol"},"nach vollst\xe4ndigem Empfang des Pakets warted der Empf\xe4nger ein SIFS bevor eine Antwort ges\xe4ndet wird"),(0,a.kt)("li",{parentName:"ol"},"Eine Kollion f\xfchrt zum gleichzeitigen Timeout, bevor der gesamte Vorgang wiederholt werden kann.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(269).Z,width:"1540",height:"380"})),(0,a.kt)("h3",{id:"--cdma"},"- CDMA"),(0,a.kt)("p",null,"Code-division-Multiplex Verfahren. Benutzt z.B. im Mobilfunk.  "),(0,a.kt)("p",null,"Mehrere Signale benutzen den gleichen Kanal. Durch z.B. Spreizung."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Jeder Sender hat einen anderen Code, mit dem auf verschiedenen "Frequenzen" der Code zusammengef\xfcgt wird.'),(0,a.kt)("li",{parentName:"ul"},"dadurch wird die Bandbreite besser genutzt/erweitert. (als bei z.B. TDMA oder FDMA)")),(0,a.kt)("h3",{id:"--tdma"},"- TDMA"),(0,a.kt)("p",null,"Zeit-Multiplex Verfahren. Benutzt z.B. in ISDN Mobilfunk(2G.), Satellitenkommunikation.\nJeder Sender hat sein festgesetztes Zeitfenster zum Senden."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zuordnung der Empfangenen Daten erfolgt alleine auf Zeitlichen Position der Daten"),(0,a.kt)("li",{parentName:"ul"},"Kennen die Stationen ihren Zeitslot k\xf6nnen Kollisionen vermieden werden.")),(0,a.kt)("p",null,"Synchrones TDMA feste Zeitslots -> viel verschwendung von Bandbreite.\nAsyncrones TDMA gibt es auch noch. -> Effizienter. Nachteil: Mehr Protokoll/Aufwand."),(0,a.kt)("h3",{id:"--fdma"},"- FDMA"),(0,a.kt)("p",null,"Frequenz-Multiplex Verfahren. Mobilfunk, Kabel-Fernsehr."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Digitales Signal wird in analoge Sinus Welle ge\xe4ndert."),(0,a.kt)("li",{parentName:"ul"},'Jeder Sender bekommt eigene Frequenz.(Mit kleinen Frequenz l\xfccken um Interferenzen auszuschlie\xdfen) Alle senden "Gleichzeitig".'),(0,a.kt)("li",{parentName:"ul"},"Am Empf\xe4nger werden die einzelnen Frequenzen wieder herausgefiltert.")),(0,a.kt)("h3",{id:"--token-passing"},"- Token Passing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Token Ring: Ich erhalte (reihum) den Token. Wenn ich senden m\xf6chte sende ich, nachdem ich den Token habe, oder reiche ihn weiter."),(0,a.kt)("li",{parentName:"ul"},"Token Bus: Nimmt logisch gesehen den n\xe4chsten Teilnehmer. (MAC adressen z.B. nach Value-sortiert)")),(0,a.kt)("h2",{id:"der-aufbau-eines-ethernet-v2-rahmens-nach-ieee-8023"},"Der Aufbau eines Ethernet-v2-Rahmens nach IEEE 802.3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Liegt in Schichten 1 und 2 und \xfcbertr\xe4gt dort Daten"),(0,a.kt)("li",{parentName:"ul"},"am bekanntesten ist die Definiton des noch heute g\xfcltigen Ethernet-v2- Rahmens f\xfcr den Layer 2.")),(0,a.kt)("h2",{id:"frames"},"Frames"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MTU - Maximum transmission Unit kann bei der Konfiguration eines Netzinterfaces angegeben werden."),(0,a.kt)("li",{parentName:"ul"},"Sie definieret die maximale Gr\xf6\xdfe des Datagramms. Daten die diese L\xe4nge \xfcberschreiten, werden immer in mehrere Frames aufgeteilt/fragmentiert und dann \xfcber das Netzwerk versendet."),(0,a.kt)("li",{parentName:"ul"},"Dadurch m\xfcssen bei Fehlern nur die entsprechenden Rahmen neu \xfcbertragen werden. Au\xdferdem k\xf6nnen mehrere Benutzer abwechselnd Rahmen verschickem. -> nahezu gleichzeitiger Netzwerkzugriff mehrere User m\xf6glich."),(0,a.kt)("li",{parentName:"ul"},"Prinzipielle Aufbau nach Rahmen nach IEEE 802.3 ist dabei immer gleich.")),(0,a.kt)("h1",{id:"header---daten--trailer"},"Header - Daten -Trailer"),(0,a.kt)("p",null,"Schicht1:\n|Pr\xe4ambel|Zieladresse|Ursprungsadresse|Typ|Datenteil|Frame-Kontroll-Sequenz|\n|---|---|---|---|---|---|\n|8 Bytes|6 Bytes|6 Bytes|2 Bytes|46-1500 Bytes|4 Bytes|"),(0,a.kt)("p",null,"Ohne Pr\xe4ambel ergibt sich: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"min. gr\xf6\xdfe: 64 Bytes"),(0,a.kt)("li",{parentName:"ul"},"max. gr\xf6\xdfe 1518 Bytes (= Nutzlast 1518/1522bytes)")),(0,a.kt)("h1",{id:"ethernet"},"ethernet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ein ethernet-v2-Rahmen hat ohne VLAN-Tag eine Rahmengr\xf6\xdfe von 64 und 1518Bytes und folgenden Aufbau:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"als Frame Kontroll Sequenz (FCS) wird ein CRC Algorithmus eingesetzt"),(0,a.kt)("li",{parentName:"ul"},"unter IPv6 gibt es keine fragmentierungen mehr."),(0,a.kt)("li",{parentName:"ul"},"Ist ein Frame zu gro\xdf, erh\xe4lt der Absender eine Fehlermeldung"),(0,a.kt)("li",{parentName:"ul"},"Ist ein Netzwerk \xfcbeer Switche in virtuelle Netzwerke aufgeteilt, erh\xe4lt jeder Frame eim Datenteil zur Identifizierung des VLANs ein zus\xe4tzlich 4Byte gro\xdfes Feld, das VLAN-Tag.")))))}d.isMDXComponent=!0},903:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Kollisionsdomaene-aa79371f039ee44c13c36a017c3b7a2a.svg"},269:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/csmaca-66c9b0976c4dd865ea79ced0ca66c7c8.svg"}}]);