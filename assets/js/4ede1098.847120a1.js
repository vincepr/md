"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,m=c["".concat(s,".").concat(g)]||c[g]||b[g]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={},l="Beispiel Tabelle in C`#`",o={unversionedId:"fiae/Programmierung/CSharp/examples/BeispielHotel",id:"fiae/Programmierung/CSharp/examples/BeispielHotel",title:"Beispiel Tabelle in C`#`",description:"`",source:"@site/docs/fiae/Programmierung/CSharp/examples/BeispielHotel.md",sourceDirName:"fiae/Programmierung/CSharp/examples",slug:"/fiae/Programmierung/CSharp/examples/BeispielHotel",permalink:"/md/fiae/Programmierung/CSharp/examples/BeispielHotel",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/CSharp/examples/BeispielHotel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compare Interfaces in Csharp",permalink:"/md/fiae/Programmierung/CSharp/compare"},next:{title:"Beispiel Vererbung",permalink:"/md/fiae/Programmierung/CSharp/examples/BeispielVererbung"}},s={},u=[{value:"Aufgabe Kurse",id:"aufgabe-kurse",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"beispiel-tabelle-in-c"},"Beispiel Tabelle in C",(0,i.kt)("inlineCode",{parentName:"h1"},"#")),(0,i.kt)("p",null,"Dargestellt werden soll eine Tabellenartige struktur."),(0,i.kt)("p",null,"Auf diese werden verschiedene SQL-Artige abfragen gestellt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'internal struct Tabelle\n{\n    public Hotel[] Hotels;\n\n    public Tabelle(Hotel[] hotels)\n    {\n        Hotels = hotels;\n    }\n\n    //  print function using the reduce() version of c#\n    public string Print()\n    {\n        return Hotels.Aggregate("", (acc, x) =>  acc + x.Print()+"\\n") ;\n    }\n\n    /*\n        *  Solutoin using filter() called Where() and return a new Tabelle object\n        */\n\n    public Tabelle IEHotelsAlle()\n    {\n        return new Tabelle( Hotels.AsEnumerable().ToArray() );\n    }\n    public Tabelle IEHotelsBilliger(double input)\n    {\n        return new Tabelle(Hotels.Where(hotel=> hotel.Zimmerpreis < input ).ToArray() );\n    }\n    public Tabelle IEHotelsTeurer(double input)\n    {\n        return new Tabelle(Hotels.Where(hotel => hotel.Zimmerpreis > input).ToArray() );\n    }\n    public Tabelle IEHotelsMitFeature(Feature input)\n    {\n        return new Tabelle(Hotels.Where(hotel => hotel.Ausstattung.HasFlag(input) ).ToArray() );\n    }\n    public Tabelle IEHotelsStartsWithLetter(string input)\n    {\n        return new Tabelle(Hotels.Where(hotel => hotel.Namen.StartsWith(input)  ).ToArray() );\n    }\n}\ninternal struct Hotel\n{\n    public string Namen;\n    public string Land;\n    public double Zimmerpreis;\n    public Feature Ausstattung;\n\n    public Hotel(string namen, string land, double preis, Feature ausstattung)\n    {\n        Namen = namen;\n        Land = land;\n        Zimmerpreis = preis;\n        Ausstattung = ausstattung;\n    }\n\n    public string Print()\n    {\n        return Namen + "\\t" + Land + "\\t\\t" + Zimmerpreis + "\\t" + Ausstattung + "\\t" ;\n    }\n}\n\n[Flags]\ninternal enum Feature\n{\n    NIL = 0,\n    POOL= 1,\n    BAR = 2,\n    STRAND = 4,\n    MEERBLICK = 8,\n}\n\n\ninternal class Program\n{\n    static void Main(string[] args)\n    {\n        var tab = new Hotel[5];\n        tab[0] = new Hotel("Mont Blanc", "Schweiz ", 129.99, Feature.POOL | Feature.BAR);\n        tab[1] = new Hotel("Seeperle", "Germany ", 69.99, Feature.POOL | Feature.STRAND | Feature.BAR);\n        tab[2] = new Hotel("Casa Nostra", "Mexico  ", 129.89, Feature.POOL | Feature.STRAND);\n        tab[3] = new Hotel("Jump in ", "Australien", 228.78, Feature.POOL | Feature.BAR | Feature.MEERBLICK);\n        tab[4] = new Hotel("Basta Pasta", "Italien ", 99.99, Feature.BAR);\n\n        var t = new Tabelle(tab);\n        Console.WriteLine("\\n\\n\\n------ Now with filter functionality");\n\n        Console.WriteLine("\\n---Ausgabe aller Hotels:---");\n        Console.WriteLine(t.IEHotelsAlle().Print());\n\n        Console.WriteLine("\\n---Ausgabe Hotels mit Zimmerpreis keiner als eingabe:---");\n        double eingabe = Eingabe();\n        Console.WriteLine(t.IEHotelsBilliger(eingabe).Print());\n\n\n        Console.WriteLine("\\n---Ausgabe Hotels mit dem Feature POOL:---");\n        Console.WriteLine(t.IEHotelsMitFeature(Feature.POOL).Print());\n\n\n        Console.WriteLine("\\n---Ausgabe aller Hotels die mehr als 100EURO kosten:---");\n        Console.WriteLine(t.IEHotelsTeurer(100).Print());\n\n\n        // You can chain them together as you desire:\n        Console.WriteLine("\\n---Ausgabe aller Hotels die mehr als 100EURO kosten && als feature STRAND haben && mit letter \'C\' beginnen:---");\n        Console.WriteLine(t\n            .IEHotelsTeurer(100)\n            .IEHotelsMitFeature(Feature.STRAND)\n            .IEHotelsStartsWithLetter("C")\n            .Print()\n            );\n\n    }\n\n    static double Eingabe()\n    {\n        Console.Write("Bitte den Preis eingeben: ");\n        bool isDouble = false;\n        double value = 0;\n        while (!isDouble)\n        {\n            Console.Write(">");\n            String input = Console.ReadLine();\n            isDouble = double.TryParse(input, out value);\n        }\n        return value;\n    }\n}\n')),(0,i.kt)("h2",{id:"aufgabe-kurse"},"Aufgabe Kurse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'internal class Kurs{\n    // interner Enum\n    [Flags]\n    public enum Kategorien{\n        IT = 1,\n        WIRTSCHAFT = 2,\n    }\n    // Felder:\n    public string Bezeichnung { get; private set; }\n    public double Preis { get; private set; }\n    public uint AnzahlTeilnehmer { get; set; }\n    public Kategorien Kategorie { get; private set; }\n    public double Umsatz => AnzahlTeilnehmer * Preis;       // Alt. schreibweise f\xfcr public double Umsatz{get{return...}}\n    \n    // Konstruktoren:\n    public Kurs(string bezeichnung, double preis, uint anzahl, Kategorien kategorie){\n        Bezeichnung = bezeichnung;\n        Preis = preis;\n        Kategorie = kategorie;\n        AnzahlTeilnehmer = anzahl;\n    }\n    public Kurs(string bezeichnung, Kategorien kategorie) : this(bezeichnung, 500, 0, kategorie) { }\n\n    // Custom ToString Implementation\n    override\n    public String ToString(){ \n        return $"{Bezeichnung} | Peis:{Preis} | Teilnehmer: {AnzahlTeilnehmer} | {Kategorie} | Umsatz: {Umsatz} "; \n    }\n}\n\ninternal class Program{\n    static void Main(){\n        Kurs[] tab = new Kurs[3];\n        tab[0] = new Kurs("Programmierung", 899, 15, Kurs.Kategorien.IT);\n        tab[1] = new Kurs("Buchhaltung",  Kurs.Kategorien.WIRTSCHAFT);\n        tab[2] = new Kurs("Netzwerke", 699, 10, Kurs.Kategorien.IT);\n\n        Console.WriteLine("\\n1- Ausgabe Aller Kurse:");\n        foreach (Kurs kurs in tab)\n            Console.WriteLine("\\t" + kurs);\n\n        double sum = 0;\n        foreach (Kurs kurs in tab)\n            sum += kurs.Umsatz;\n        Console.WriteLine("\\n2- Summe Aller Umsaetze: "+sum);\n\n        Console.WriteLine("\\n3- Alle Kurse der Kategorie IT:");\n        foreach (Kurs kurs in tab)\n            if (kurs.Kategorie == Kurs.Kategorien.IT) \n                Console.WriteLine("\\t" + kurs);\n    }\n}\n')))}c.isMDXComponent=!0}}]);