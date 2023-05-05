"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6907],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),b=i,g=p["".concat(u,".").concat(b)]||p[b]||m[b]||l;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=b;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const l={},a="Beispiel Tabelle in C`#`",o={unversionedId:"fiae/Programmierung/C/BeispielHotel",id:"fiae/Programmierung/C/BeispielHotel",title:"Beispiel Tabelle in C`#`",description:"`",source:"@site/docs/fiae/Programmierung/C/BeispielHotel.md",sourceDirName:"fiae/Programmierung/C",slug:"/fiae/Programmierung/C/BeispielHotel",permalink:"/md/fiae/Programmierung/C/BeispielHotel",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/C/BeispielHotel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Algorithmentypen",permalink:"/md/fiae/Programmierung/Algorithmen"},next:{title:"Grundlagen der Programmierung",permalink:"/md/fiae/Programmierung/Grundlagen/"}},u={},s=[],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"beispiel-tabelle-in-c"},"Beispiel Tabelle in C",(0,i.kt)("inlineCode",{parentName:"h1"},"#")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C#"},'internal struct Tabelle\n{\n    public Hotel[] Hotels;\n\n    public Tabelle(Hotel[] hotels)\n    {\n        Hotels = hotels;\n    }\n\n    //  print function using the reduce() version of c#\n    public string Print()\n    {\n        return Hotels.Aggregate("", (acc, x) =>  acc + x.Print()+"\\n") ;\n    }\n\n    /*\n        *  Solutoin using filter() called Where() and return a new Tabelle object\n        */\n\n    public Tabelle IEHotelsAlle()\n    {\n        return new Tabelle( Hotels.AsEnumerable().ToArray() );\n    }\n    public Tabelle IEHotelsBilliger(double input)\n    {\n        return new Tabelle(Hotels.Where(hotel=> hotel.Zimmerpreis < input ).ToArray() );\n    }\n    public Tabelle IEHotelsTeurer(double input)\n    {\n        return new Tabelle(Hotels.Where(hotel => hotel.Zimmerpreis > input).ToArray() );\n    }\n    public Tabelle IEHotelsMitFeature(Feature input)\n    {\n        return new Tabelle(Hotels.Where(hotel => hotel.Ausstattung.HasFlag(input) ).ToArray() );\n    }\n    public Tabelle IEHotelsStartsWithLetter(string input)\n    {\n        return new Tabelle(Hotels.Where(hotel => hotel.Namen.StartsWith(input)  ).ToArray() );\n    }\n}\ninternal struct Hotel\n{\n    public string Namen;\n    public string Land;\n    public double Zimmerpreis;\n    public Feature Ausstattung;\n\n    public Hotel(string namen, string land, double preis, Feature ausstattung)\n    {\n        Namen = namen;\n        Land = land;\n        Zimmerpreis = preis;\n        Ausstattung = ausstattung;\n    }\n\n    public string Print()\n    {\n        return Namen + "\\t" + Land + "\\t\\t" + Zimmerpreis + "\\t" + Ausstattung + "\\t" ;\n    }\n}\n\n[Flags]\ninternal enum Feature\n{\n    NIL = 0,\n    POOL= 1,\n    BAR = 2,\n    STRAND = 4,\n    MEERBLICK = 8,\n}\n\n\ninternal class Program\n{\n    static void Main(string[] args)\n    {\n        var tab = new Hotel[5];\n        tab[0] = new Hotel("Mont Blanc", "Schweiz ", 129.99, Feature.POOL | Feature.BAR);\n        tab[1] = new Hotel("Seeperle", "Germany ", 69.99, Feature.POOL | Feature.STRAND | Feature.BAR);\n        tab[2] = new Hotel("Casa Nostra", "Mexico  ", 129.89, Feature.POOL | Feature.STRAND);\n        tab[3] = new Hotel("Jump in ", "Australien", 228.78, Feature.POOL | Feature.BAR | Feature.MEERBLICK);\n        tab[4] = new Hotel("Basta Pasta", "Italien ", 99.99, Feature.BAR);\n\n        var t = new Tabelle(tab);\n        Console.WriteLine("\\n\\n\\n------ Now with filter functionality");\n\n        Console.WriteLine("\\n---Ausgabe aller Hotels:---");\n        Console.WriteLine(t.IEHotelsAlle().Print());\n\n        Console.WriteLine("\\n---Ausgabe Hotels mit Zimmerpreis keiner als eingabe:---");\n        double eingabe = Eingabe();\n        Console.WriteLine(t.IEHotelsBilliger(eingabe).Print());\n\n\n        Console.WriteLine("\\n---Ausgabe Hotels mit dem Feature POOL:---");\n        Console.WriteLine(t.IEHotelsMitFeature(Feature.POOL).Print());\n\n\n        Console.WriteLine("\\n---Ausgabe aller Hotels die mehr als 100EURO kosten:---");\n        Console.WriteLine(t.IEHotelsTeurer(100).Print());\n\n\n        // You can chain them together as you desire:\n        Console.WriteLine("\\n---Ausgabe aller Hotels die mehr als 100EURO kosten && als feature STRAND haben && mit letter \'C\' beginnen:---");\n        Console.WriteLine(t\n            .IEHotelsTeurer(100)\n            .IEHotelsMitFeature(Feature.STRAND)\n            .IEHotelsStartsWithLetter("C")\n            .Print()\n            );\n\n    }\n\n    static double Eingabe()\n    {\n        Console.Write("Bitte den Preis eingeben: ");\n        bool isDouble = false;\n        double value = 0;\n        while (!isDouble)\n        {\n            Console.Write(">");\n            String input = Console.ReadLine();\n            isDouble = double.TryParse(input, out value);\n        }\n        return value;\n    }\n}\n')))}p.isMDXComponent=!0}}]);