"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[9620],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),m=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=m(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),p=i,f=c["".concat(s,".").concat(p)]||c[p]||d[p]||a;return n?t.createElement(f,l(l({ref:r},u),{},{components:n})):t.createElement(f,l({ref:r},u))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6618:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var t=n(7462),i=(n(7294),n(3905));const a={},l="File stream in C",o={unversionedId:"fiae/Programmierung/CSharp/examples/file",id:"fiae/Programmierung/CSharp/examples/file",title:"File stream in C",description:"with Encoding",source:"@site/docs/fiae/Programmierung/CSharp/examples/file.md",sourceDirName:"fiae/Programmierung/CSharp/examples",slug:"/fiae/Programmierung/CSharp/examples/file",permalink:"/md/fiae/Programmierung/CSharp/examples/file",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/CSharp/examples/file.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Abstract Class - Interface",permalink:"/md/fiae/Programmierung/CSharp/examples/abstractC_interface"},next:{title:"Event-driven Design with WinForms",permalink:"/md/fiae/Programmierung/CSharp/winforms"}},s={},m=[{value:"with Encoding",id:"with-encoding",level:2},{value:"BinaryReader -BinaryWriter",id:"binaryreader--binarywriter",level:2},{value:"BufferedStream",id:"bufferedstream",level:2}],u={toc:m};function c(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-stream-in-c"},"File stream in C#"),(0,i.kt)("h2",{id:"with-encoding"},"with Encoding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is slower because we have to Encode/Decode.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// Example using Encoding \xb4to encode and decode\npublic static void BeispielFileStream() {\n\n    string path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "/Dateien/new.txt";\n    // File Stream - WRITE:\n    var stream = new FileStream(path, FileMode.Create);\n    //byte[] buffer = new byte[10];\n    //buffer[0] = 231;\n    //buffer[1] = 77;   // Asci - c\n    byte[] buffer = Encoding.UTF8.GetBytes("hallo welt");\n\n    stream.Write(buffer, 0, buffer.Length);\n    stream.Close();\n\n    // File Stream - READ:\n    var stream2 = new FileStream(path, FileMode.Open);\n    long anzahl_bytes_in_file = stream2.Length;\n    byte[] buff2 = new byte[anzahl_bytes_in_file];\n    stream2.Read(buff2, 0, buff2.Length);\n    string txt = Encoding.UTF8.GetString(buff2);\n    Console.WriteLine(txt);    \n}\n')),(0,i.kt)("h2",{id:"binaryreader--binarywriter"},"BinaryReader -BinaryWriter"),(0,i.kt)("p",null,"Beim Konstruktor f\xfcr ",(0,i.kt)("inlineCode",{parentName:"p"},"BinaryWriter(Stream, Encoding?, Boolean?)")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public static void UnencodedStream()\n{\n    string path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "/Dateien/unencoded.txt";\n    var stream = new FileStream(path, FileMode.OpenOrCreate);\n\n    // Wir dekorieren die Basis-Operationen und verwenden den BinaryWriter:\n    var writer = new BinaryWriter(stream, Encoding.UTF8);\n    writer.Write("Hallo\\n Welt");           // Benutzt L\xe4ngenpr\xe4fix! um zu wissen wie gro\xdf der String ist.\n    writer.Write(88);\n    writer.Write(666.13);\n    writer.Close();\n\n    // und das Lesen:\n    var reader = new BinaryReader(new FileStream(path, FileMode.Open));\n    string txt = reader.ReadString();       // Benutzt L\xe4ngenpr\xe4fix! um zu wissen wie gro\xdf der String ist.\n    int int_zahl = reader.ReadInt32();\n    double double_zahl = reader.ReadDouble();\n    Console.WriteLine(txt + " | " + int_zahl + " | " + double_zahl);\n}\n\npublic static void LineByLine()\n{\n    string path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "/Dateien/unencoded.txt";\n    var writer = new StreamWriter(new FileStream(path, FileMode.Create) );\n    writer.WriteLine("Hose;23,45;10");\n    writer.WriteLine("Hemd;15,1;10");\n    writer.Close();\n\n    var reader = new StreamReader(new FileStream(path, FileMode.Open));\n    string cur_line = reader.ReadLine();\n    while (cur_line != null)\n    {\n        var arr =cur_line.Split(\';\');\n        string bez = arr[0];\n        double preis = Convert.ToDouble(arr[1]);\n        int menge = Convert.ToInt32(arr[2]);\n        Console.WriteLine($"Bezeichnung: {bez} Preis: {preis} Menge: {menge}" );\n        cur_line = reader.ReadLine();\n    }\n}\n')),(0,i.kt)("h2",{id:"bufferedstream"},"BufferedStream"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lesen und Schreiben erfolgt Blockweise mit Zwischenpuffer. Dies Minimiert Reibung mit den IO-System Calls des Betriebssystems."),(0,i.kt)("li",{parentName:"ul"},"`",(0,i.kt)("inlineCode",{parentName:"li"},"stream.Flush()")," leert den Puffer und erzwingt schreiben des n\xe4chsten Blockes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"")))}c.isMDXComponent=!0}}]);