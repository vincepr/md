"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[9813],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(t),g=a,k=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={},l="Werkzeuge der Softwareentwicklung",s={unversionedId:"fiae/Programmierung/Softwareentwicklung",id:"fiae/Programmierung/Softwareentwicklung",title:"Werkzeuge der Softwareentwicklung",description:"Compiler",source:"@site/docs/fiae/Programmierung/Softwareentwicklung.md",sourceDirName:"fiae/Programmierung",slug:"/fiae/Programmierung/Softwareentwicklung",permalink:"/md/fiae/Programmierung/Softwareentwicklung",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/Softwareentwicklung.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Grundlagen der Programmierung",permalink:"/md/fiae/Programmierung/Grundlagen"},next:{title:"Testarten in der Softwareentwicklung",permalink:"/md/fiae/Programmierung/Tests"}},u={},o=[{value:"Compiler",id:"compiler",level:2},{value:"Interpreter",id:"interpreter",level:2},{value:"Assembbler",id:"assembbler",level:2},{value:"Standardtypen - elementare Datentypen",id:"standardtypen---elementare-datentypen",level:2},{value:"G\xfcltigkeitsbereiche von variablen",id:"g\xfcltigkeitsbereiche-von-variablen",level:2},{value:"Modularit\xe4t",id:"modularit\xe4t",level:2},{value:"Abstraktionsprinzip",id:"abstraktionsprinzip",level:2},{value:"Methoden",id:"methoden",level:2},{value:"Vorgehensmodelle",id:"vorgehensmodelle",level:2},{value:"<strong>Whitebox-Tests</strong>",id:"whitebox-tests",level:2},{value:"<strong>Blckbox-Tests</strong>",id:"blckbox-tests",level:2},{value:"<strong>Schreibtischtest</strong>",id:"schreibtischtest",level:2}],m={toc:o};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"werkzeuge-der-softwareentwicklung"},"Werkzeuge der Softwareentwicklung"),(0,a.kt)("h1",{id:"compiler-vs-interpreter"},"Compiler vs Interpreter"),(0,a.kt)("h2",{id:"compiler"},"Compiler"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"um ein Programm schnell ausf\xfchren zu k\xf6nnen, muss es von vor der Laufzeit in Maschinencode umgewandelt werden, den der Prozessor ausf\xfchren kann."),(0,a.kt)("li",{parentName:"ul"},"Der Compiler \xfcbersetzt Code in Maschinencode, ohne jedoch die Befehle dabei schon auszuf\xfchren.")),(0,a.kt)("h2",{id:"interpreter"},"Interpreter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xfcbersetzt Programme zeilenweise, wobei erst jede Zeile einer Syntaxpr\xfcfung unterzogen wird."),(0,a.kt)("li",{parentName:"ul"},"sind die Befehle in der Zeile korrekt, werden sie vom Interpreter in Anweisungen f\xfcr den Prozessor \xfcbersetzt und ausgef\xfchrt."),(0,a.kt)("li",{parentName:"ul"},"anschlie\xdfend wird die n\xe4chste Zeile gepr\xfcft."),(0,a.kt)("li",{parentName:"ul"},"tritt ein Syntaxfehler auf, wird der \xdcbersetzungsvorgang abgebrochen und eine Fehlermeldung ausgegeben"),(0,a.kt)("li",{parentName:"ul"},"Die vorherigen Schritte wurden jedoch ausgef\xfchrt und Ver\xe4nderungen in z.B. Files sind permanent.")),(0,a.kt)("h2",{id:"assembbler"},"Assembbler"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maschinennaher Code, schwer Wartbarkeit, hohes Kontextwissen wird ben\xf6tigt."),(0,a.kt)("li",{parentName:"ul"},"assembler Sprache hat Zugang zum vollst\xe4ndigen Befehlssatz der CPU."),(0,a.kt)("li",{parentName:"ul"},"Jedoch haben verschiedene Prozessorarchitekturen grundverschiedene Assembler & Maschinensprachen")),(0,a.kt)("h1",{id:"standard-libraries"},"Standard Libraries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sammlung von bereits implementierten Funktionalit\xe4ten (DataStructures, subroutines, macro definitions, global variables, templates etc..)"),(0,a.kt)("li",{parentName:"ul"},"Interaction with the host platform, including input/output and operating system calls."),(0,a.kt)("li",{parentName:"ul"},"z.B. Math funktionen wie sqrt oder Wert f\xfcr PI")),(0,a.kt)("h1",{id:"grundlegende-sprachelemente"},"Grundlegende Sprachelemente"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Syntax     : bestimmt den Aufbau der S\xe4tze, wie Anweisungen aufgebaut sind."),(0,a.kt)("li",{parentName:"ul"},"Semantik   : Bedeutung der S\xe4tze- was bedeuten Anweisungen"),(0,a.kt)("li",{parentName:"ul"},"Bezeichner : muss (oft) mit einem Buchstaben beginnen. identifiziert variablen, Funktionen, Klassen, module etc..."),(0,a.kt)("li",{parentName:"ul"},"Zuweisung  : Besteht aus einem Bezeichner, dem Zuweisungsoperator = und einem Ausdruck"),(0,a.kt)("li",{parentName:"ul"},"Reservierte W\xf6rter : Schl\xfcsselw\xf6rter, die eine Spezielle Bedeutung haben (true, false, null...)"),(0,a.kt)("li",{parentName:"ul"},"Kommentare : Interpreter/Compiler ignoriert diese, sie werden also nicht Maschinencode umgesetzt. Dienen dazu Code f\xfcr Menschen besser verst\xe4ndlich zu machen.")),(0,a.kt)("h1",{id:"variablen"},"Variablen"),(0,a.kt)("h2",{id:"standardtypen---elementare-datentypen"},"Standardtypen - elementare Datentypen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Numerische DAten - Unterteilung in ganze Zahlen (Integer) und reelle Zahlen (z.B. Float)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Integer-Datentypen - besitzen keine Nachkommastellen. Viele Sprachen besitzen mehrere Integer-Datentypen, die sich durch Bezeichnung, Wertebereich und Speicherplatzbedarf unterscheiden."),(0,a.kt)("li",{parentName:"ul"},"Gleitkomma-Datentypen - je nach Typ lassen sich Zahlen mit einer bestimmten Genauigkeit darstellen. F\xfcr h\xf6here Genauigkeit oder Wertebereich wird mehr Speicherplatz ben\xf6tigt."))),(0,a.kt)("li",{parentName:"ul"},"Zeichen-Datentyp - k\xf6nnen beliebige Zeichen (urspr\xfcnglich ASCII, heute meist Unicode: UTF-8 Zeichensatz) enthalten.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Es sind also Buchstaben, Zahlen und Sonderzeichen wie "!%$&/(){}\xb2 zul\xe4ssig.'),(0,a.kt)("li",{parentName:"ul"},"ASCII 1 Byte pro Zeichen, UTF-8 2Byte pro Zeichen"))),(0,a.kt)("li",{parentName:"ul"},"Logischer Datentyp - Boolean - kann nur True oder False annehmen, Speichergr\xf6\xdfe 1 Byte")),(0,a.kt)("h2",{id:"g\xfcltigkeitsbereiche-von-variablen"},"G\xfcltigkeitsbereiche von variablen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lokale Variablen - nur innerhalb von Anweisungsbl\xf6cken vereinbart. Lebensdauer endet mit dem Verlassen aus dem Block"),(0,a.kt)("li",{parentName:"ul"},"Globale Variablen - gelten \xfcber die gesamte Lebensdauer der Programmausf\xfchrung. k\xf6nnen von allen Funktionen angesprochen werden."),(0,a.kt)("li",{parentName:"ul"},"Deklaration - Name, G\xfcltigkeitsbereich und Datentyp der Variable wird festgelegt"),(0,a.kt)("li",{parentName:"ul"},"Initialisierung - Wertzuweisung und gleichzeitige Deklaration"),(0,a.kt)("li",{parentName:"ul"},"Konstanten - Variablen deren Wert sich nicht mehr ver\xe4ndern kann. M\xfcssen meist mit Initialisierung deklariert werden.")),(0,a.kt)("h1",{id:"vorgegensmogelle"},"Vorgegensmogelle"),(0,a.kt)("h2",{id:"modularit\xe4t"},"Modularit\xe4t"),(0,a.kt)("p",null,"Gesamtaufgabe wird ind Teilaufgaben (Module) zerlegt."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vorteile:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Verk\xfcrzte Entwicklungszeit"),(0,a.kt)("li",{parentName:"ul"},"bessere Verteilung von Arbeiten und Ressourcen"),(0,a.kt)("li",{parentName:"ul"},"Wartbarkeit"),(0,a.kt)("li",{parentName:"ul"},"Wiederverwendbarkeit")))),(0,a.kt)("h2",{id:"abstraktionsprinzip"},"Abstraktionsprinzip"),(0,a.kt)("p",null,"eine Auswahl relevanter Informationen aus einer gr\xf6\xdferen Menge von verf\xfcgbaren Informationen.",(0,a.kt)("br",{parentName:"p"}),"\n","Unwesentliche Informationen f\xfcr gegebene Aufgabenstellung ausschlie\xdfen."),(0,a.kt)("h2",{id:"methoden"},"Methoden"),(0,a.kt)("p",null,"Eine Methode ist eine systematische Vorgehensweise, um bestimmte Aufgabe im Rahmen festgelegter Prinzipien zu l\xf6sen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Top-down-Methode - Gesamtaufgabe wird in Teilaufgaben zerlegt"),(0,a.kt)("li",{parentName:"ul"},"Bottom-up-Methode- einzelne Module werden entwickelt und dann zum Gesamtsystem zusammengesetzt."),(0,a.kt)("li",{parentName:"ul"},"Up-down-Methode(Middle-Out, Gegenstromverfahren) - test von kritischen Teilaufgaben -Gesamtaufgabe durch Top-down-Methode verfeinert und Teilaufgaben durch Bottom-Up-Methode abstrahiert.")),(0,a.kt)("h1",{id:"software-lebenszyklus"},"Software-Lebenszyklus"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Analyse")," -> ",(0,a.kt)("strong",{parentName:"p"},"Entwurf")," -> ",(0,a.kt)("strong",{parentName:"p"},"Implementierung")," -> ",(0,a.kt)("strong",{parentName:"p"},"Integration")," -> ",(0,a.kt)("strong",{parentName:"p"},"Einsatz")," -> ",(0,a.kt)("strong",{parentName:"p"},"Wartung"),"   "),(0,a.kt)("p",null,"Professionelle Software wird immer komplexer - um besser planen zu k\xf6nnen ist eine strukturierte Vorgehensweise notwendig.",(0,a.kt)("br",{parentName:"p"}),"\n","Der Software-Lebenszyklus wird in Phase eingeteilt. In jeder Phase werden bestimmte Aufgaben fertiggestellt, getestet etc...            "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Analysephase - Was soll die Software tun",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ergebnis ist das Pflichtenheft mit eindeutig beschriebenen Anforderungen"))),(0,a.kt)("li",{parentName:"ul"},"Entwurfsphase - wie ist die Software zu realisieren?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"erstellen d"),(0,a.kt)("li",{parentName:"ul"},"Festlegung von Programmiersprache, Programmierstrukturen, Anlegen der Dokumentation etc..."),(0,a.kt)("li",{parentName:"ul"},"Ergebnis ist die Beschreibung des Entwurfs, bzw. Softwarespezifikationen"))),(0,a.kt)("li",{parentName:"ul"},"Implementierungsphase- Programmcode wird erstellt und getestet",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Whitebox-Tests")," - pr\xfcfen das die innere Funktionsweise von Komponenten"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Blckbox-Tests")," - pr\xfcfen das Zusammenspiel der einzelnen Komponenten."))),(0,a.kt)("li",{parentName:"ul"},"Integrationsphase - Einzelaufgaben werden zur Gesamtaufgabe zusammengef\xfcgt.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Treten Fehler in der Integrationsphase auf, wird die Implementierungsphase nochmals durchlaufen."))),(0,a.kt)("li",{parentName:"ul"},"Einsatz und Wartung\n. Korrektur auftretender Fehler",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Anpassung an Systemumgebungen"),(0,a.kt)("li",{parentName:"ul"},"\xc4nderungen oder Erweiterungen von Funktionalit\xe4t")))),(0,a.kt)("h2",{id:"vorgehensmodelle"},"Vorgehensmodelle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wasserfallmodell"),(0,a.kt)("li",{parentName:"ul"},"V-Modell"),(0,a.kt)("li",{parentName:"ul"},"Prototyping-Modell"),(0,a.kt)("li",{parentName:"ul"},"Spiralmodell"),(0,a.kt)("li",{parentName:"ul"},"Agile Modelle")),(0,a.kt)("h1",{id:"tests"},"Tests"),(0,a.kt)("p",null,"Einfach weil Pr\xfcfungsrelevant nochmal"),(0,a.kt)("h2",{id:"whitebox-tests"},(0,a.kt)("strong",{parentName:"h2"},"Whitebox-Tests")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pr\xfcfen das die innere Funktionsweise von Komponenten")),(0,a.kt)("h2",{id:"blckbox-tests"},(0,a.kt)("strong",{parentName:"h2"},"Blckbox-Tests")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pr\xfcfen das Zusammenspiel der einzelnen Komponenten.")),(0,a.kt)("h2",{id:"schreibtischtest"},(0,a.kt)("strong",{parentName:"h2"},"Schreibtischtest")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hierbei werden f\xfcr einen deterministischen und terminierenden Programmablauf eine Eingabe- und eine m\xf6gliche Ausgabemenge festgelegt. Anschlie\xdfend wird mit jedem Element der Eingabemenge durch schrittweises Durchrechnen die Korrektheit des Programmablaufs \xfcberpr\xfcft.")))}d.isMDXComponent=!0}}]);