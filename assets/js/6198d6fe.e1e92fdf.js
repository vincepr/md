"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),g=d(t),h=a,k=g["".concat(s,".").concat(h)]||g[h]||m[h]||l;return t?r.createElement(k,i(i({ref:n},o),{},{components:t})):r.createElement(k,i({ref:n},o))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=h;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[g]="string"==typeof e?e:a,i[1]=u;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const l={},i="Bedrohungsanalyse - Threat Moddeling",u={unversionedId:"fiae/IT-Sicherheit/threat_modeling/threat_modelling",id:"fiae/IT-Sicherheit/threat_modeling/threat_modelling",title:"Bedrohungsanalyse - Threat Moddeling",description:"1. Einleitung - was ist Threat Modelling",source:"@site/docs/fiae/IT-Sicherheit/threat_modeling/threat_modelling.md",sourceDirName:"fiae/IT-Sicherheit/threat_modeling",slug:"/fiae/IT-Sicherheit/threat_modeling/threat_modelling",permalink:"/md/fiae/IT-Sicherheit/threat_modeling/threat_modelling",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/IT-Sicherheit/threat_modeling/threat_modelling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IT Monitoring",permalink:"/md/fiae/IT-Sicherheit/monitoring"},next:{title:"Security Design Principles",permalink:"/md/fiae/IT-Sicherheit/ubungsaufgabe"}},s={},d=[{value:"1. Einleitung - was ist Threat Modelling",id:"1-einleitung---was-ist-threat-modelling",level:2},{value:"2. Analyse des Anwendungsfalles - Ziele festlegen",id:"2-analyse-des-anwendungsfalles---ziele-festlegen",level:2},{value:"allgemeine Ziele:",id:"allgemeine-ziele",level:3},{value:"Weitere Ziele",id:"weitere-ziele",level:3},{value:"3. Datenfluss-Diagramm",id:"3-datenfluss-diagramm",level:2},{value:"4. Ermittlung und Einstufung von Bedrohungen",id:"4-ermittlung-und-einstufung-von-bedrohungen",level:2},{value:"Anhand der Diagramme Bedrohungen herausarbeiten",id:"anhand-der-diagramme-bedrohungen-herausarbeiten",level:3},{value:"Bedrohung Einstufen",id:"bedrohung-einstufen",level:3},{value:"Angreifer bekommt zugang zu Zustomer-Account(s)",id:"angreifer-bekommt-zugang-zu-zustomer-accounts",level:4},{value:"Zugang zu Schulungsr\xe4umen",id:"zugang-zu-schulungsr\xe4umen",level:4},{value:"Zugang zu Serverr\xe4umen",id:"zugang-zu-serverr\xe4umen",level:4},{value:"5. Security Controls - Ma\xdfnahmen zur Bedrohungsabwehr",id:"5-security-controls---ma\xdfnahmen-zur-bedrohungsabwehr",level:2},{value:"- Bios Passwort aller \xf6ffentlich zug\xe4nglichen PCs setzen",id:"--bios-passwort-aller-\xf6ffentlich-zug\xe4nglichen-pcs-setzen",level:3},{value:"- Daten auf den Festplatten verschl\xfcsseln",id:"--daten-auf-den-festplatten-verschl\xfcsseln",level:3},{value:"- Schulungsr\xe4ume au\xdferhalb der Schulzeiten verschlie\xdfen",id:"--schulungsr\xe4ume-au\xdferhalb-der-schulzeiten-verschlie\xdfen",level:3},{value:"- Schulung von Dozenten und Customern",id:"--schulung-von-dozenten-und-customern",level:3},{value:"- Vergabe von username, der von Robotron generiert wurde",id:"--vergabe-von-username-der-von-robotron-generiert-wurde",level:3},{value:"- Passwort Mindestanforderungen",id:"--passwort-mindestanforderungen",level:3},{value:"- Ein klares Protokoll zum Umgang mit Schl\xfcssel f\xfcr den Serverraum definieren",id:"--ein-klares-protokoll-zum-umgang-mit-schl\xfcssel-f\xfcr-den-serverraum-definieren",level:3},{value:"6. Zusammenfassung",id:"6-zusammenfassung",level:2}],o={toc:d};function g(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bedrohungsanalyse---threat-moddeling"},"Bedrohungsanalyse - Threat Moddeling"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Einleitung - was ist Threat Modelling"),(0,a.kt)("li",{parentName:"ol"},"Analyse des Anwendungsfalles"),(0,a.kt)("li",{parentName:"ol"},"Datenfluss-Diagramm?"),(0,a.kt)("li",{parentName:"ol"},"Ermittlung und Einstufung von Bedrohungen"),(0,a.kt)("li",{parentName:"ol"},"Security Controls - Ma\xdfnahmen zur Bedrohungsabwehr"),(0,a.kt)("li",{parentName:"ol"},"Zusammenfassung")),(0,a.kt)("h2",{id:"1-einleitung---was-ist-threat-modelling"},"1. Einleitung - was ist Threat Modelling"),(0,a.kt)("p",null,"Im Kontext der IT-Sicherheit ist einer der Bausteine das Thema ",(0,a.kt)("strong",{parentName:"p"},"Threat Analysis"),". In kurz: ein systematisches Schema zur Bedrohungsanalyse. Um z.B. im Rahmen eines Kundenauftrages ein klar definiertes Ergebnis zu erarbeiten."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Anhand von Tabellen und Definitonen k\xf6nnen die Begriffe und Entit\xe4ten des zu untersuchenden IT-Systems in eine Struktur gebracht werden, die es letztendlich erlaubt, Bedrohungen zu erkennen und zu managen.")),(0,a.kt)("p",null,"Die folgenden 3 Phasen sind in diesem Prozess Vorgesehen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zerlegen des Systems in Komponenten und Ablaufpl\xe4ne "),(0,a.kt)("li",{parentName:"ul"},"Bedrohungen erkennen und einstufen"),(0,a.kt)("li",{parentName:"ul"},"Bestimmungen von Gegenma\xdfnahmen und Entsch\xe4rfungen/ Risikominderung")),(0,a.kt)("h2",{id:"2-analyse-des-anwendungsfalles---ziele-festlegen"},"2. Analyse des Anwendungsfalles - Ziele festlegen"),(0,a.kt)("h3",{id:"allgemeine-ziele"},"allgemeine Ziele:"),(0,a.kt)("p",null,"In der Regel sind Ziele Confidentiality, Integrity und Ability (auch im Angriffsfall). Dies trifft auch f\xfcr unser Beispiel zu."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Confidentiality - Vertraulichkeit. Es soll keine unautorisierte Informationsgewinnung m\xf6glich sein.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Untergeordnete Schutzziele sind z.B. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Unverkettbarkeit"),(0,a.kt)("li",{parentName:"ul"},"Unbeobachtbarkeit"),(0,a.kt)("li",{parentName:"ul"},"Nicht-Verfolgbarkeit"))),(0,a.kt)("li",{parentName:"ul"},"Bsp. zur Realisierung z.B. Verschl\xfcsselung"))),(0,a.kt)("li",{parentName:"ul"},"Integrity - Integrit\xe4t:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Datenintegrit\xe4t: Korrektheit der Daten"),(0,a.kt)("li",{parentName:"ul"},"Systemintegrit\xe4t: korrekte Funktionsweise des Systems"),(0,a.kt)("li",{parentName:"ul"},"M\xf6gliche Manipulationen sind z.B. das Ver\xe4ndern von Daten, L\xf6schen von Daten und Einf\xfcgen von Daten."),(0,a.kt)("li",{parentName:"ul"},"Sollte keine starke Integrit\xe4t vorliegen (keine m\xf6gliche Datenmanipulation m\xf6glich) sollte mindestens eine schwache Integrit\xe4t gew\xe4hrleistet werden: (Datenmanipulation sollte in keinem FAll unbemerkt m\xf6glich sein)"),(0,a.kt)("li",{parentName:"ul"},"Bsp. zur Realisierung von Integrit\xe4t sind z.B. Message Authentication Codes oder Tamper-Resistant Security Module."))),(0,a.kt)("li",{parentName:"ul"},"Availability - Verf\xfcgbarkeit: Systeme sollen jederzeit (wenn ben\xf6tigt) betriebsbereit sein.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"im Sicherheitskontext spielt das Schutzziel Verf\xfcgbarkeit eine wichtige Rolle. Inwieweit k\xf6nnen z.B. denial of Service Angriffe unsere Systeme blockieren, st\xf6ren oder lahmlegen.")))),(0,a.kt)("h3",{id:"weitere-ziele"},"Weitere Ziele"),(0,a.kt)("p",null,"unter anderem sind auch folgende Ziele von Bedeutung:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authentizit\xe4t"),(0,a.kt)("li",{parentName:"ul"},"Nichtabstreitbarkeit"),(0,a.kt)("li",{parentName:"ul"},"Zurechenbarkeit"),(0,a.kt)("li",{parentName:"ul"},"Privatsph\xe4re"),(0,a.kt)("li",{parentName:"ul"},"Einhalten von Datenschutzverordnung und anderen gesetzlichen Rahmenbedingungen")),(0,a.kt)("h2",{id:"3-datenfluss-diagramm"},"3. Datenfluss-Diagramm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zum Anwendungsfall werden erste Datenfluss und Prozessfluss Diagramme erstellt um eine erste \xdcbersicht zu bekommen\n",(0,a.kt)("img",{alt:"Diagramm",src:t(2347).Z,width:"1949",height:"1160"}))),(0,a.kt)("h2",{id:"4-ermittlung-und-einstufung-von-bedrohungen"},"4. Ermittlung und Einstufung von Bedrohungen"),(0,a.kt)("p",null,"Grunds\xe4tzliche Herangehensweise bei Thread-modeling:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"asset-centric: Alle Bausteine werden individual auf Schwachstellen analysiert"),(0,a.kt)("li",{parentName:"ul"},"attacker-centric: F\xfcr bestimmte Angreifer-Profile \xfcberlegen welche Schnittstellen wie interessant und angreifbar sind"),(0,a.kt)("li",{parentName:"ul"},"software-centric: Aus System-Design Blickwinkel analysieren wie Daten durch das System/App flie\xdfen und wie diese Schnittstellen konfiguriert sind.")),(0,a.kt)("p",null,"Im Folgenden wird eine (attacker-centric) Herangehensweise gew\xe4hlt. F\xfcr einige denkbare und wahrscheinliche Angriffs-Potentiale sollen im Folgenden die Bedrohungen definiert und auf ihr Risikopotential eingestuft werden."),(0,a.kt)("h3",{id:"anhand-der-diagramme-bedrohungen-herausarbeiten"},"Anhand der Diagramme Bedrohungen herausarbeiten"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bedrohung 1",src:t(9415).Z,width:"1103",height:"670"})),(0,a.kt)("h3",{id:"bedrohung-einstufen"},"Bedrohung Einstufen"),(0,a.kt)("h4",{id:"angreifer-bekommt-zugang-zu-zustomer-accounts"},"Angreifer bekommt zugang zu Zustomer-Account(s)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Risiko-Faktor"),(0,a.kt)("th",{parentName:"tr",align:null},"Einsch\xe4tzung"),(0,a.kt)("th",{parentName:"tr",align:null},"Faktor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Damage"),(0,a.kt)("td",{parentName:"tr",align:null},"Bedrohung auf Nutzerdaten dieses Nutzers beschr\xe4nkt"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reproducibility"),(0,a.kt)("td",{parentName:"tr",align:null},"Komplett reproduzierbar"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Exploitability"),(0,a.kt)("td",{parentName:"tr",align:null},"Durch shared Medien (ex Onedrive)"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Affected Users"),(0,a.kt)("td",{parentName:"tr",align:null},"Ein Nutzer ist urspr\xfcnglich betroffen"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Discoverability"),(0,a.kt)("td",{parentName:"tr",align:null},"Kann je nach Methode nur schwer Bemerkt werden"),(0,a.kt)("td",{parentName:"tr",align:null},"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"DREAD-Score:"),(0,a.kt)("td",{parentName:"tr",align:null},"6.4")))),(0,a.kt)("p",null,"Angriffsvektoren:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"brutefoce auf MS-Accounts"),(0,a.kt)("li",{parentName:"ul"},"data leaked Credentials+Passwords reused for MS-Accounts"),(0,a.kt)("li",{parentName:"ul"},"keylogger auf Lokalen Maschienen"),(0,a.kt)("li",{parentName:"ul"},"phishing, social engineering, malware angriffe auf einzelne User")),(0,a.kt)("h4",{id:"zugang-zu-schulungsr\xe4umen"},"Zugang zu Schulungsr\xe4umen"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Risiko-Faktor"),(0,a.kt)("th",{parentName:"tr",align:null},"Einsch\xe4tzung"),(0,a.kt)("th",{parentName:"tr",align:null},"Faktor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Damage"),(0,a.kt)("td",{parentName:"tr",align:null},"In der Regel auf Unterrichtszeiten begrenzt"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reproducibility"),(0,a.kt)("td",{parentName:"tr",align:null},"komplett reproduzierbar"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Exploitability"),(0,a.kt)("td",{parentName:"tr",align:null},"im Regelbetrieb wenig freie Zeit f\xfcr Angriffe"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Affected Users"),(0,a.kt)("td",{parentName:"tr",align:null},"alle User im betroffenen Raum"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Discoverability"),(0,a.kt)("td",{parentName:"tr",align:null},"je nach Art der Zugangsbeschaffung sehr leicht bemerkbar"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"DREAD-Score:"),(0,a.kt)("td",{parentName:"tr",align:null},"5.6")))),(0,a.kt)("p",null,"Angriffsvektoren:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pseudo \xd6ffentlichkeit der Schulungsr\xe4ume / des geteilten B\xfcros"),(0,a.kt)("li",{parentName:"ul"},"Innerhalb der \xf6ffnungszeiten leicht zug\xe4nglich"),(0,a.kt)("li",{parentName:"ul"},"Auserhalb normaler Werktage sind destruktive-Zugangsmethoden relevant (Einbruch ...)")),(0,a.kt)("h4",{id:"zugang-zu-serverr\xe4umen"},"Zugang zu Serverr\xe4umen"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Risiko-Faktor"),(0,a.kt)("th",{parentName:"tr",align:null},"Einsch\xe4tzung"),(0,a.kt)("th",{parentName:"tr",align:null},"Faktor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Damage"),(0,a.kt)("td",{parentName:"tr",align:null},"Sehr Hoch"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reproducibility"),(0,a.kt)("td",{parentName:"tr",align:null},"nur mit gro\xdfem Wissen/Zufall m\xf6glich"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Exploitability"),(0,a.kt)("td",{parentName:"tr",align:null},"Nahezu unbegrenztes Potential"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Affected Users"),(0,a.kt)("td",{parentName:"tr",align:null},"Nicht nur auf Standort beschr\xe4nkt"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Discoverability"),(0,a.kt)("td",{parentName:"tr",align:null},"Je nach Zugriffsmethode"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"DREAD-Score:"),(0,a.kt)("td",{parentName:"tr",align:null},"9.2")))),(0,a.kt)("p",null,"Angriffsvektoren:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"zerst\xf6rungsfreie Methoden wie Lockpicking, Diebstahl, Nachl\xe4ssigkeit im Umgang mit Schl\xfcssel"),(0,a.kt)("li",{parentName:"ul"},"zerst\xf6rende Methoden wie aufbrechen der T\xfcren")),(0,a.kt)("h2",{id:"5-security-controls---ma\xdfnahmen-zur-bedrohungsabwehr"},"5. Security Controls - Ma\xdfnahmen zur Bedrohungsabwehr"),(0,a.kt)("p",null,"Liste zu treffender Gegenma\xdfnahmen:"),(0,a.kt)("h3",{id:"--bios-passwort-aller-\xf6ffentlich-zug\xe4nglichen-pcs-setzen"},"- Bios Passwort aller \xf6ffentlich zug\xe4nglichen PCs setzen"),(0,a.kt)("p",null,"Somit wird es f\xfcr einen Angreifer deutlich schwerer ohne Zugangsdaten Zugriff auf die Rechner oder Daten auf ihnen zu bekommen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"als Erweiterung k\xf6nnten auch USB Anschl\xfcsse im Bios deaktiviert werden")),(0,a.kt)("h3",{id:"--daten-auf-den-festplatten-verschl\xfcsseln"},"- Daten auf den Festplatten verschl\xfcsseln"),(0,a.kt)("p",null,"Selbst mit Zugriff auf die Rechner selbst, sind so Die Eigentlichen Daten der Nutzer(Customer/Dozenten) deutlich sicherer."),(0,a.kt)("h3",{id:"--schulungsr\xe4ume-au\xdferhalb-der-schulzeiten-verschlie\xdfen"},"- Schulungsr\xe4ume au\xdferhalb der Schulzeiten verschlie\xdfen"),(0,a.kt)("p",null,"Nur so kann durch den pseudo-\xf6ffentlichen shared office-space der Zugang f\xfcr potentielle Angreifer erschwert werden"),(0,a.kt)("h3",{id:"--schulung-von-dozenten-und-customern"},"- Schulung von Dozenten und Customern"),(0,a.kt)("p",null,"Nur so k\xf6nnen Angriffsvektoren wie social-engineering, phishing und \xfcbliche Malware angriffe die auf Unwissenheit der Endnutzer abspielen minimiert werden."),(0,a.kt)("h3",{id:"--vergabe-von-username-der-von-robotron-generiert-wurde"},"- Vergabe von username, der von Robotron generiert wurde"),(0,a.kt)("p",null,"Usernamen von robotron vergeben: Nachname+BuchstabeVorname@myrobotron (z.B. ",(0,a.kt)("a",{parentName:"p",href:"mailto:SmithE@myrobotron.de"},"SmithE@myrobotron.de"),"). Somit k\xf6nnen \xdcberschneidungen mit (eventuell geleakten) 3rd Party Accountzugangsdaten vermieden werden."),(0,a.kt)("h3",{id:"--passwort-mindestanforderungen"},"- Passwort Mindestanforderungen"),(0,a.kt)("p",null,"Festlegen von Mindestl\xe4nge, Verwendung von Sonderzeichen und Zahlen."),(0,a.kt)("h3",{id:"--ein-klares-protokoll-zum-umgang-mit-schl\xfcssel-f\xfcr-den-serverraum-definieren"},"- Ein klares Protokoll zum Umgang mit Schl\xfcssel f\xfcr den Serverraum definieren"),(0,a.kt)("p",null,"Raum sollte jederzeit abgeschlossen sein und alle Zugangsmethoden nicht \xf6ffentlich zug\xe4nglich sein"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Es muss des weiteren Sichergestellt werden, das Putzpersonal/Hausmeister soweit m\xf6glich keinen Zugang zu diesem haben.")),(0,a.kt)("h2",{id:"6-zusammenfassung"},"6. Zusammenfassung"),(0,a.kt)("p",null,"Abschlussgedanken:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Methoden zum Testen der Ma\xdfnahmen sind hierbei noch nicht ber\xfccksichtigt und sollten Teil eines erweiterten Sicherheits-Konzepts sein."),(0,a.kt)("li",{parentName:"ul"},"Gegen zerst\xf6rende Zugriffsmethoden, z.B. Aufbrechen der Serverr\xe4ume, sind Ma\xdfnahmen, wie z.B. Panzert\xfcren, mit unverh\xe4ltnism\xe4\xdfig gro\xdfen Kosten gepaart und wurden deswegen verworfen."),(0,a.kt)("li",{parentName:"ul"},"Ebenso die Kompetenz Risiken zerst\xf6rungsfreier Zugriffsmethoden wie Lockpicking, Diebstahl einzusch\xe4tzen. Hierf\xfcr m\xfcssten noch gesonderte Gutachten in Auftrag gegeben werden.")))}g.isMDXComponent=!0},9415:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/threat_modelling_bedrohung1-65b03cfa3343d5f2c531b600a212c010.svg"},2347:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/threat_modelling_diagramm-38c3b37021d56a7aaaa2178444d82bf2.svg"}}]);