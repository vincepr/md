"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=m(n),g=r,c=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},i="Grundlagen in C`#`",o={unversionedId:"fiae/Programmierung/CSharp/basics",id:"fiae/Programmierung/CSharp/basics",title:"Grundlagen in C`#`",description:"`",source:"@site/docs/fiae/Programmierung/CSharp/basics.md",sourceDirName:"fiae/Programmierung/CSharp",slug:"/fiae/Programmierung/CSharp/basics",permalink:"/md/fiae/Programmierung/CSharp/basics",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/CSharp/basics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Algorithmentypen",permalink:"/md/fiae/Programmierung/Algorithmen"},next:{title:"Beispiel Tabelle in C`#`",permalink:"/md/fiae/Programmierung/CSharp/examples/BeispielHotel"}},s={},m=[{value:"Abgrenzung prozedurale Programmierung",id:"abgrenzung-prozedurale-programmierung",level:2},{value:"Objektorientierte Programmierung",id:"objektorientierte-programmierung",level:2},{value:"Default entrypoint for a (terminal) C# Program:",id:"default-entrypoint-for-a-terminal-c-program",level:2},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Basics",id:"basics",level:2},{value:"Comments",id:"comments",level:3},{value:"Formatierte Ausgabe (von Zahlen)",id:"formatierte-ausgabe-von-zahlen",level:3},{value:"Datentypen",id:"datentypen",level:3},{value:"Strings",id:"strings",level:3},{value:"Character Constants",id:"character-constants",level:4},{value:"Type conversions",id:"type-conversions",level:3},{value:"Objects",id:"objects",level:2},{value:"Modifiers",id:"modifiers",level:3},{value:"Exception Handling",id:"exception-handling",level:2},{value:"Handling Files",id:"handling-files",level:2},{value:"Reference Type",id:"reference-type",level:2},{value:"Pointer Type",id:"pointer-type",level:3},{value:"Functional methods",id:"functional-methods",level:2},{value:"Operators",id:"operators",level:2},{value:"Class vs Struct",id:"class-vs-struct",level:2},{value:"Beispiele zu Klassen",id:"beispiele-zu-klassen",level:3},{value:"Casting",id:"casting",level:2}],u={toc:m};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grundlagen-in-c"},"Grundlagen in C",(0,r.kt)("inlineCode",{parentName:"h1"},"#")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/de-de/dotnet/api/"},"https://learn.microsoft.com/de-de/dotnet/api/"))),(0,r.kt)("h2",{id:"abgrenzung-prozedurale-programmierung"},"Abgrenzung prozedurale Programmierung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unter anderem: Variablen f\xfcr Speicherung von Daten."),(0,r.kt)("li",{parentName:"ul"},"Kontrollstrukturen f\xfcr die Erstellung eines Programmablaufs: if, while, for..."),(0,r.kt)("li",{parentName:"ul"},"Bibliotheken, Unterprogramme, Prozeduren fassen Variablen und Kontrollstrukturen zusammen.")),(0,r.kt)("h2",{id:"objektorientierte-programmierung"},"Objektorientierte Programmierung"),(0,r.kt)("p",null,"Variablen und Prozeduren (hier genannt Methoden) werden in Klassen zusammengefasst."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Variablen, Eigenschaften bilden die Datens\xe4tze ab\n- Methoden sind die Klassenspezifischen Funktionen/Prozeduren\n")),(0,r.kt)("h2",{id:"default-entrypoint-for-a-terminal-c-program"},"Default entrypoint for a (terminal) C# Program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'namespace tag01_erstes_projekt\n{\n    internal class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Running from Main()");\n            while (true)\n            {\n                Console.Write(">");\n                String input = Console.ReadLine();\n                bool isNumber = Int32.TryParse(input, out int value);\n                if (isNumber){\n                    Console.WriteLine("Quadriertes Ergebniss: " + value*value + " !");\n                }\n            }\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"StudenClass")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"GetMarks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Local variable"),(0,r.kt)("td",{parentName:"tr",align:null},"firstName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private variable"),(0,r.kt)("td",{parentName:"tr",align:null},"avgMarks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Constants"),(0,r.kt)("td",{parentName:"tr",align:null},"Percentile")))),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("h3",{id:"comments"},"Comments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// Single-line comment\n\n/* Multi-line \n   comment */\n\n// TODO: Adds comment to a task list in Visual Studio\n\n/// Single-line comment used for documentation\n\n/** Multi-line comment \n    used for documentation **/\n")),(0,r.kt)("h3",{id:"formatierte-ausgabe-von-zahlen"},"Formatierte Ausgabe (von Zahlen)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'Console.WriteLine(zahl.ToString("00000"));      // 00123\nConsole.WriteLine(zahl.ToString("#.##"));       // 12.34\nConsole.WriteLine(zahl.ToString("#0.##E+0"));   // 12.35 E+2\nConsole.WriteLine(zahl.ToString("#.##%"));      // 2.5%  <- 0.025 \n// Escapebezeichnung (um z.B. # anzuzeigen):\nConsole.WriteLine(zahl.ToString("\\\\#00.#E+0\\\\#")) // #12.35 E+2#\n')),(0,r.kt)("h3",{id:"datentypen"},"Datentypen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,r.kt)("th",{parentName:"tr",align:null},"Speicherplatz in Byte"),(0,r.kt)("th",{parentName:"tr",align:null},"Wertebrereich"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"TRUE, FALSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0-255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"32Bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"64Bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ushort"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"8Bit-0-65535")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uint"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"32Bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ulong"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"64Bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Dezimalzahl ca. -7.9228E+28 ca. 7.928E+28")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Gleitkommazahl ca.-3.4E+28 ca.3.4E+38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Gleitkommazahl ca. -1.99E+308 ca.1.79E+308")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"2-4"),(0,r.kt)("td",{parentName:"tr",align:null},"utf16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"Zeichenkette")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get size, get type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sizeof()")," returns size of the data type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typeof()")," returns type of object (ex. string, integer, bool ...)")),(0,r.kt)("h3",{id:"strings"},"Strings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"Length      // returns length of string\nCompare()   // compares two strings\nContains()  // true if contains a substring\nEquals()    // checks if two strings have same character data\nFormat()    // Formats a string via the {0} notation by using other primitives.\nTrim()      //remove whitespace from end & start\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other notable Operations:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Clone, CompareTo, EndsWith, GetHashCode, GetTypeCode, IndexOf, ToLower, ToUpper, Insert, IsNormalized, LastIndexOf, Remove, Replace, Split, StartsWith, Substring, ToCharArray")))),(0,r.kt)("h4",{id:"character-constants"},"Character Constants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the following symbosy need to be escaped with a ",(0,r.kt)("inlineCode",{parentName:"li"},"\\")," inside of strings to be used:\n|escape sequence| Meaning|\n|---|---|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\\\"),"|",(0,r.kt)("inlineCode",{parentName:"li"},"\\"),"|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\'"),"|",(0,r.kt)("inlineCode",{parentName:"li"},"'"),"|\n|",(0,r.kt)("inlineCode",{parentName:"li"},'\\"'),"|",(0,r.kt)("inlineCode",{parentName:"li"},'"'),"|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\?"),"|",(0,r.kt)("inlineCode",{parentName:"li"},"?"),"|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\n"),"|Newline|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\t"),"|Tab|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\a"),"|Alert or Bell|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\b"),"|Backspace|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\f"),"|From feed|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\r"),"|Carriage return|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\v"),"|Vertical Tab|\n|",(0,r.kt)("inlineCode",{parentName:"li"},"\\xhh"),"|Hexadecimal number of one or more digits|")),(0,r.kt)("h3",{id:"type-conversions"},"Type conversions"),(0,r.kt)("p",null,"-implicit type conversions: Werden automatisch wo Typsicher von C# vorgenommen (von i32->i63 usw)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"explicit type conversions: M\xfcssen explizit geschrieben werden, da hier nicht garantiert werden kann, dass daten verloren gehen."),(0,r.kt)("li",{parentName:"ul"},"Type conversion, Type checking",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AsInt()")," String into integer. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsInt()")," Check if input is a String."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AsDateTime()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsDatetime()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ToString()")))),(0,r.kt)("li",{parentName:"ul"},"ToConversions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ToChar()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ToByte()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ToDecimal()")," ..."))),(0,r.kt)("li",{parentName:"ul"},"example of where it could go wrong")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'// nach Eingabe eines Radius soll das Programm das Volumen ausgeben\n        public static void Beispiel1()\n        {\n            double radius = 0, volumen = 0;\n\n            Console.Write("Radius eingeben: ");\n            String input = Console.ReadLine();\n            bool isNumber = double.TryParse(input, out radius);\n            while (!isNumber)\n            {\n                Console.Write("ERROR ung\xfcltige Eingabe, Radius erneut eingeben:");\n                input = Console.ReadLine();\n                isNumber = double.TryParse(input, out radius);\n            }\n\n            // volumen =  4 / 3 * Math.PI* Math.Pow(radius,2);  // WILL USE I32 for 4/3 -> 4/3=1\n            // volumen = Math.PI *4/3 would also work since the compiler will go from left to right, inferring the type.\n            volumen =  4.0 / 3.0 * Math.PI* Math.Pow(radius,2);\n\n            Console.WriteLine("Volumen: " + volumen.ToString("#.###"));\n        }\n')),(0,r.kt)("h2",{id:"objects"},"Objects"),(0,r.kt)("h3",{id:"modifiers"},"Modifiers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description+"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public"),(0,r.kt)("td",{parentName:"tr",align:null},"accessible by any other code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"private"),(0,r.kt)("td",{parentName:"tr",align:null},"only accessible from within the same class or struct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protected"),(0,r.kt)("td",{parentName:"tr",align:null},"only accessible from within the same class or struct or derived class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"internal"),(0,r.kt)("td",{parentName:"tr",align:null},"accessible by any code in the same assembly, but not from another assembly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protected internal"),(0,r.kt)("td",{parentName:"tr",align:null},"accessible by any code in the same assembly, or by any derived class in another assembly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abstract"),(0,r.kt)("td",{parentName:"tr",align:null},"class can only be used as base of other classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"async"),(0,r.kt)("td",{parentName:"tr",align:null},"asynchronous method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"const"),(0,r.kt)("td",{parentName:"tr",align:null},"the field can not be modified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"declares an event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extern"),(0,r.kt)("td",{parentName:"tr",align:null},"indicates that the method is implemented externally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"explicitly hides a member inherited from a base class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"override"),(0,r.kt)("td",{parentName:"tr",align:null},"provides a new implementation of a virtual member inherited from a base class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partial"),(0,r.kt)("td",{parentName:"tr",align:null},"define a partial class, strut or method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"field can only be assigned in declaration or in constructor (when creating an instance)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sealed"),(0,r.kt)("td",{parentName:"tr",align:null},"This class can not be inherited")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"static"),(0,r.kt)("td",{parentName:"tr",align:null},"no instances/objects for this class need to be crated. It already exists by itself (singleton ish etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unsafe"),(0,r.kt)("td",{parentName:"tr",align:null},"declares unsafe context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"virtual"),(0,r.kt)("td",{parentName:"tr",align:null},"Declares a method or an accessor whose implementation can be changed by an overriding member in a derived class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volatile"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that a field can be modified in the program by something such as the operating system, the hardware, or a concurrently executing thread")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'namespace tag01_erstes_projekt\n{\n    internal class Programm{\n        static void Main(){\n            Artikel a1 = new Artikel();\n            a1.Bezeichung = "Hose";\n            a1.Preis = 23.45;\n            a1.Menge = 10;\n\n            Artikel a2 = new Artikel { Bezeichung="Jacke", Preis = 19.99, Menge = 3};\n        }\n    }\n    internal class Artikel\n    {\n        public string Bezeichung;\n        public double Preis;\n        public int Menge;\n    }\n}\n\n')),(0,r.kt)("h2",{id:"exception-handling"},"Exception Handling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"try{} catch (Exception e){throw;}\n")),(0,r.kt)("h2",{id:"handling-files"},"Handling Files"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File.Exists(path)"),(0,r.kt)("td",{parentName:"tr",align:null},"Check  the existence of the file in the path"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File.ReadAllLines(path)"),(0,r.kt)("td",{parentName:"tr",align:null},"Read all the lines from the file in the path"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File.ReadAllText(path)"),(0,r.kt)("td",{parentName:"tr",align:null},"Read all the text from the file and return a string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File.Copy(path1, destPath))"),(0,r.kt)("td",{parentName:"tr",align:null},"Copy content from one file to antoher"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File.Delte"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete an existing file from the path"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"reference-type"},"Reference Type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"point to memory location (heap) instead of direct value (stack)."),(0,r.kt)("li",{parentName:"ul"},"examples: object, dynamic, string.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// when a value type is converted to object type this is called boxing (vs unboxing):\nobject obj;\nobj = 100;  // this is boxing\n\n// you can stoire any type of value in the dynamic data type variable:\n// type checking for those happens at runtime:\ndynamic variable_name = 20;\n")),(0,r.kt)("h3",{id:"pointer-type"},"Pointer Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"char* some_pointer;\nint* another_pointer;\n")),(0,r.kt)("h2",{id:"functional-methods"},"Functional methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"// map() is Select\nEnumerable.Range(1, 10).Select(x => x + 2);\n\n// reduce() is Aggregate\nEnumerable.Range(1, 10).Aggregate(0, (acc, x) => acc + x);\n\n// filter() is Where\nEnumerable.Range(1, 10).Where(x => x % 2 == 0);\n")),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"&&")),(0,r.kt)("td",{parentName:"tr",align:null},"Logical AND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"`"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!")),(0,r.kt)("td",{parentName:"tr",align:null},"Logical NOT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"&")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary AND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"`"),(0,r.kt)("td",{parentName:"tr",align:null},"`")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"^")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary XOR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary Bitflipping")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<<")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary Left Shift")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">>")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary Right Shift")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"&")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the memory adress of an variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*a"),"Creates a pointer name a to a variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?:")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"c ? x:y"),"if condition c is true ? then x otherwise y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"if (Ford is Car)")," checks if Ford is an obj of class Car")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"as")),(0,r.kt)("td",{parentName:"tr",align:null},"Cast without raising an exception if it fails")))),(0,r.kt)("h2",{id:"class-vs-struct"},"Class vs Struct"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strukturen als ",(0,r.kt)("strong",{parentName:"li"},"Werttypen")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"werden im Stack gespeichert"),(0,r.kt)("li",{parentName:"ul"},"lassen sich z.B. nicht direkt mit ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," vergleichen")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'internal struct MitarbeiterStruct{\n    // Felder (Member) eines Objekts:\n    private  string _name;\n    double _gehalt;     // implicit private by default\n    // Konstruktor um Werte Initial festzulegen:\n    public MitarbeiterStruct(string name, double gehalt){\n        _name = name;\n        _gehalt = gehalt;\n    }\n    // Properties - Accessoren:\n    public string Name { \n        get { return _name; }\n    }\n    public double Gehalt{\n        get { return _gehalt; }\n        set { _gehalt = value; }\n    }\n}\ninternal class Program{\n    static void Main(string[] args){\n        MitarbeiterStruct ma1 = new MitarbeiterStruct("Meier", 2000);\n        // ma1.Name= "Meier";   // keine set Berechtigung\n        Console.WriteLine("Name:" + ma1.Name);\n        ma1.Gehalt = 2456;\n        Console.WriteLine("Gehalt: " + ma1.Gehalt);\n        \n        // Structs lassen sich nit mit == vergleichen\n        // (ma1 == ma2) ist NICHT zul\xe4ssig\n        Console.WriteLine("they are equal:" + ma1.Equals(ma2));\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Klassen sind ",(0,r.kt)("strong",{parentName:"li"},"Referenztypen"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"werden im Heap gespeichert."),(0,r.kt)("li",{parentName:"ul"},"Referenzen lassen sich mit ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," auf identit\xe4t vergleichen."),(0,r.kt)("li",{parentName:"ul"},"lassen sich Null setzen.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'internal class MitarbeiterClass{\n    // ausf\xfchrlich (feld + accessoren)\n    private string _name;\n    public string Name{\n        get { return _name; }\n    }\n    // alternativ hier als kurzform m\xf6glich:\n    public double Gehalt { get; set; }\n    // Konstruktor-overloading:\n    public MitarbeiterClass() {\n        _name = "unbekannt";\n        Gehalt = 0.1;\n    }\n    // Mit :this() haben wir zugriff auf den ersten Constructor\n    public MitarbeiterClass(string name):this()\n    {\n        _name = name;\n    }\n    public MitarbeiterClass(string name, double gehalt){\n        _name = name;\n        Gehalt = gehalt;\n    }\n}\ninternal class Program{\n    static void Main(string[] args){\n        /* Class */\n        MitarbeiterClass ma3 = new MitarbeiterClass();\n        MitarbeiterClass ma4 = new MitarbeiterClass("John");\n        MitarbeiterClass ma5 = new MitarbeiterClass("Meier", 2000);\n        Console.WriteLine("Name: " + ma3.Name + " | Gehalt: " + ma3.Gehalt);\n        Console.WriteLine("Name: " + ma4.Name + " | Gehalt: " + ma4.Gehalt);\n        Console.WriteLine("Name: " + ma5.Name +" | Gehalt: "+ma5.Gehalt);\n\n        // Bei Klassen lassen sich die Objektreferenzen vergleichen\n        Console.WriteLine("Die Speicheradressen sind nat\xfcrlich unterschiedlich:" + (ma3==ma4));\n\n        // Objekte lassen sich null setzten:\n        ma3 = null;\n        Console.WriteLine("trying to acess "+ma3.Name)\n            // -> NullReferenceExecption\n    }\n}\n')),(0,r.kt)("h3",{id:"beispiele-zu-klassen"},"Beispiele zu Klassen"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KlassenDiagramm",src:n(7059).Z,width:"838",height:"380"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'internal class Taxi\n{\n    // Alle Taxen haben den gleichen Typ, kann nicht ge\xe4ndert werden.\n    public const string TYP = "Mercedes";\n    // Alle Taxen haben die gleiche Farbe, kann ge\xe4ndert werden.\n    public static string Farbe = "beige";\n    // Objekteigenschaften - individuell:\n    public string Nummer { get; set; }\n    public uint Baujahr { get; set; }\n    public double Km { get; set; }\n\n    // Implementierung einer Auto-Inkrement Funktion:\n    private static uint count = 0;\n    public static uint Count { get { return count; } }  // getter-anzahl, wieviele Taxen wurden Instanziert.\n    public Taxi(){\n        count++;\n        Nummer = "T-" + count ;\n    }\n\n    // constructor-chaining:\n    public Taxi(uint baujahr) : this(){\n        Baujahr = baujahr ;\n    }\n    public Taxi(uint baujahr, double km):this(baujahr){\n        Km = km;\n    }\n    public String GetInfo(){\n        return "Nummer: " + Nummer + " | Baujahr: " + Baujahr + " | Km: " + Km + " | TYP:" + TYP + " Farbe:" + Farbe; \n    }\n\n    // Override the ToString and Equals Method as needed\n    override\n    public  String ToString(){\n        return GetInfo();\n    }\n\n    // because of our Autoincrement we have to ignore Taxi.Nummer while doing .Equals() so we override it\n    public override Boolean Equals(object other)\n    {\n        if (other is Taxi){\n            return this.Baujahr == ((Taxi)other).Baujahr && this.Km == ((Taxi)other).Km;\n        }\n        return base.Equals(other);          // Way to access the Original .Equals() as failback.\n    }\n}\n\nstatic void Main(string[] args)\n{\n    // Zugriff auf Klasseneigenschaften \xfcber Objektname.\n    Console.WriteLine(Taxi.Farbe);\n    Taxi.Farbe = "Gr\xfcn";\n    Console.WriteLine(Taxi.Farbe);\n    Console.WriteLine(Taxi.TYP); \n\n    // Objekte instanzieren:\n    Taxi t1 = new Taxi();\n    Taxi t2 = new Taxi(2022);\n    Taxi t3 = new Taxi(2013, 123456.99);\n    Taxi t4 = new Taxi(2013, 123456.99);\n\n    // Zugriff auf Objekteigenschaften immer \xdcber instanziertes-Objekt.\n    Console.WriteLine(t1.Nummer + "<nr|km>" + t1.Km);\n\n    Console.WriteLine(t1.GetInfo());\n    Console.WriteLine(t2.GetInfo());\n    Console.WriteLine(t3.GetInfo());\n\n    Console.WriteLine("Es gibt: "+Taxi.Count +" Taxen");\n\n    // Standard Methoden von objekt und overwritten ToString()\n    Console.WriteLine("GetType() " + t1.GetType());\n    Console.WriteLine("GetHashCode() " + t2.GetHashCode());\n    Console.WriteLine("ToString() " + t3.ToString());       // ToString() manuell aufrufen\n    Console.WriteLine("ToString() " + t4);                  // ToString() wird automatisch/implizit aufrufen\n    \n    Console.WriteLine("t3==t4" + (t3 == t4) + " because different Pointers!");\n    Console.WriteLine("t3.Equals(t4)" + t3.Equals(t4)  +" because of our autoincrement we have to override .Equals()");\n}\n')),(0,r.kt)("h2",{id:"casting"},"Casting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for nullable objects like classes we can:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"Animal d = new Dog();\nCat cast = d as Cat;\n\nif (cast != null){\n    Console.WriteLine(cast.SOUND)\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for not nullable objects like structs we have to:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'Animal d = new Dog();\ntry{\n    Cat cast = (Cat)d\n} catch(Exception e){\n    Console.WriteLine("Casting Error:" + e);\n}\n')))}p.isMDXComponent=!0},7059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/classdiagramm_taxi-8be504aa9066b7bdc630a2c769e36753.svg"}}]);