"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[18],{3905:(e,t,n)=>{n.d(t,{Zo:()=>E,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},E=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,E=d(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,N=s["".concat(p,".").concat(u)]||s[u]||o[u]||l;return n?a.createElement(N,i(i({ref:t},E),{},{components:n})):a.createElement(N,i({ref:t},E))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},i=void 0,d={unversionedId:"fiae/sql/sql",id:"fiae/sql/sql",title:"sql",description:"https://excalidraw.com/",source:"@site/docs/fiae/sql/sql.md",sourceDirName:"fiae/sql",slug:"/fiae/sql/",permalink:"/md/fiae/sql/",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/sql/sql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pr\xe4sentation - IGRP",permalink:"/md/fiae/netzwerk/IGRP/"},next:{title:"Aufgabenstellung",permalink:"/md/fiae/sql/proj_db_krankenhaus/"}},p={},m=[{value:"SQL - Mitschrift - robotron 2022",id:"sql---mitschrift---robotron-2022",level:2},{value:"ACID",id:"acid",level:2},{value:"Isolationsebenen:",id:"isolationsebenen",level:2},{value:"Kundenw\xfcnsche:",id:"kundenw\xfcnsche",level:2},{value:"SQL Befehle:",id:"sql-befehle",level:2}],E={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://excalidraw.com/"},"https://excalidraw.com/")),(0,r.kt)("h2",{id:"sql---mitschrift---robotron-2022"},"SQL - Mitschrift - robotron 2022"),(0,r.kt)("h1",{id:"mysql-with-mariadb"},"mySQL with MariaDB"),(0,r.kt)("p",null,"mysql -u root -p"),(0,r.kt)("h1",{id:"manage-databases--tables"},"Manage Databases & Tables"),(0,r.kt)("p",null,"CREATE DATABASE ","[IF NOT EXISTS]"," d1;",(0,r.kt)("br",{parentName:"p"}),"\n","SHOW DATABASES;",(0,r.kt)("br",{parentName:"p"}),"\n","USE d1;",(0,r.kt)("br",{parentName:"p"}),"\n","SHOW TABLES ",'[FROM d1][LIKE "A%"]',";",(0,r.kt)("br",{parentName:"p"}),"\n","DESCRIBE t1;",(0,r.kt)("br",{parentName:"p"}),"\n","CREATE TABLE t1 ( f1 type ","[DEFAULT defvalue]"," | NULL < NOT NULL) ","[AUTO_INCREMENT][PRIMARY KEY]",", ... ","[PRIMARY KEY(f1)]",");",(0,r.kt)("br",{parentName:"p"}),"\n","DROP DATABASE ","[IF EXISTS d1]",";\nDROP TABLE t1;  "),(0,r.kt)("h1",{id:"change-tables"},"CHANGE TABLES"),(0,r.kt)("p",null,"ALTER TABLE t1 CHANGE c1 c2 VARCHAR(10);",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE t1 ADD c1 VARCHAR(99);",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE t1 DROP c1;",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE t1 ADD newField int AFTER Artikelname;  FIRST for first one;",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE t1 MODIFY ","[COLUMN]"," c1 column_definition ","[FIRST | AFTER col_name]",";",(0,r.kt)("br",{parentName:"p"}),"\n","INSERT INTO table(c1, c2, c3) VALUES('wert1', 'w2', 'w3'),('w4', 'w5', 'w6');",(0,r.kt)("br",{parentName:"p"}),"\n",'UPDATE t1 SET c1 = wert1, ... , c3="wert3" ',"[WHERE bedingung]",";",(0,r.kt)("br",{parentName:"p"}),"\n","DELETE FROM t1 WHERE ort='Stuttgart';",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE table_name AUTO_INCREMENT = 1; (start next autro_increment form value)  "),(0,r.kt)("h1",{id:"data-types"},"Data-types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"wertebereich"),(0,r.kt)("th",{parentName:"tr",align:null},"dezimalstellen"),(0,r.kt)("th",{parentName:"tr",align:null},"bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BYTE"),(0,r.kt)("td",{parentName:"tr",align:null},"0 bis 255"),(0,r.kt)("td",{parentName:"tr",align:null},"keine"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IINTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"-32767 bis 32767"),(0,r.kt)("td",{parentName:"tr",align:null},"keine"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONGINTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"+-2.14*10E9"),(0,r.kt)("td",{parentName:"tr",align:null},"keine"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SINGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"+-3,4*10E38"),(0,r.kt)("td",{parentName:"tr",align:null},"7Stellen"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},"+-1.7*10E308"),(0,r.kt)("td",{parentName:"tr",align:null},"15Stellen"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.0100 bis 31.12.999"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MONEY"),(0,r.kt)("td",{parentName:"tr",align:null},"+-92.233.337.203.685.477.5808"),(0,r.kt)("td",{parentName:"tr",align:null},"4Stellen"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"bis 256 Zeichen"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"variabel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR(20)"),(0,r.kt)("td",{parentName:"tr",align:null},"20 Zeichen"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"variabel")))),(0,r.kt)("h1",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"CREATE TABLE t1 feld1 INT PRIMARY KEY....",(0,r.kt)("br",{parentName:"p"}),"\n","CREATE TABLE t1 feld1 INT NOT NULL, feld2 VARCHAR NOT NULL..., PRIMARY KEY(feld1, feld2);",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE t1 ADD PRIMARY KEY (datenfeldname1);",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE t1 DROP PRIMARY KEY;",(0,r.kt)("br",{parentName:"p"}),"\n","ALTER TABLE t1 ADD feld1 UNIQUE;  "),(0,r.kt)("h1",{id:"foreign-keys"},"Foreign Keys"),(0,r.kt)("p",null,"CEATE/ALTER TABLE t1 ADD FOREIGN KEY (key_name) REFERENCES parent_table(column_name)","[ON DELETE refenceoption][ON UPDATE referenceoption]",";",(0,r.kt)("br",{parentName:"p"}),"\n","Referenceoptions: CASCADE, SET NULL, NO ACTION, RESTRICT, SET DEFAULT;  "),(0,r.kt)("h1",{id:"select"},"Select"),(0,r.kt)("p",null,"SELECT ","[DESTINCT]"," datenfeld1, datenfeld2 FROM t1 WHERE\nGROUP BY datendfeld1, datenfeld2 ","[HAVING]","\nORDER BY datenffeld1, datenfeld2 ","[ASC DESC]","\nLIMIT ","[Start, ]"," Anzahl;",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT ",(0,r.kt)("em",{parentName:"p"}," from t1 WHERE age IN (10,12,14,16,18);",(0,r.kt)("br",{parentName:"em"}),"// Gruppieren macht nur sinn in kombination mit Aggregatsfunktion: SUM, AVG, MIN, MAX, COUNT",(0,r.kt)("br",{parentName:"em"}),"SELECT ort, count("),") as Anzahl FROM t_ma GROUP BY ort ","[HAVING Anzahl >10]",";",(0,r.kt)("br",{parentName:"p"}),"\n","// Wenn suche nach null, dann SELECT * FROM t1 WHERE ruhestand IS Null !! benutzen  "),(0,r.kt)("h1",{id:"more-select"},"more Select"),(0,r.kt)("p",null,"SELECT ",(0,r.kt)("em",{parentName:"p"}," from t1 WHERE value BETWEEN 10 AND 20;",(0,r.kt)("br",{parentName:"em"}),"SELECT "),", CAST(preis",(0,r.kt)("em",{parentName:"p"},"1.19 AS DECIMAL(10,2)) AS Bruttopreis FROM t_lager;",(0,r.kt)("br",{parentName:"em"}),"SELECT "),", ROUND(preis*1.19, 1) AS Bruttopreis FROM t_lager;",(0,r.kt)("br",{parentName:"p"}),"\n","LENGTH(string);",(0,r.kt)("br",{parentName:"p"}),"\n","LOWER(string);",(0,r.kt)("br",{parentName:"p"}),"\n","UPPER(string);",(0,r.kt)("br",{parentName:"p"}),"\n",'CHAR(wert);  select CHAR("84") -> String "84" wird Zahl',(0,r.kt)("br",{parentName:"p"}),"\n",'LTRIM("     Freitag     "); -> "Freitag    "',(0,r.kt)("br",{parentName:"p"}),"\n",'RTRIM("    Freitag     "); -> "     Freitag"  '),(0,r.kt)("h1",{id:"join"},"JOIN"),(0,r.kt)("p",null,"SELECT ",(0,r.kt)("em",{parentName:"p"}," FROM t1 INNER JOIN t2 USING(column_name)\t"),"// if same culumn_name=column_name",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("br",{parentName:"em"}),"SELECT ")," FROM t1 INNER JOIN t2 ON t1.id = t2.id;",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT ",(0,r.kt)("em",{parentName:"p"}," FROM t1 CROSS JOIN t2;",(0,r.kt)("br",{parentName:"em"}),"SELECT ")," FROM t1 LEFT ","[OUTER]"," JOIN t2 ON t1.id = t2.id;\t\t\t",(0,r.kt)("em",{parentName:"p"},"//outer keyword changes nothing"),(0,r.kt)("br",{parentName:"p"}),"\n","SELECT ",(0,r.kt)("em",{parentName:"p"}," FROM t1 RIGHT ","[OUTER]"," JOIN t2 ON t1.id = t2.id;\t\t"),"//outer keyword changes nothing",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("br",{parentName:"em"}),"// there is no FULL OUTER JOIN in mysql (rereate using unions of left and right)",(0,r.kt)("br",{parentName:"em"}),"like t1.column_name = t2.column_name",(0,r.kt)("br",{parentName:"em"}),"//multiple joins->",(0,r.kt)("br",{parentName:"em"}),"SELECT "),(0,r.kt)("br",{parentName:"p"}),"\n","FROM t1 INNER JOIN t2 ON t1.id=t2.ma_id",(0,r.kt)("br",{parentName:"p"}),"\n","INNER JOIN t3 ON t2.proj_id=t3.name\nINNER JOIN t4 ON t3.proj_id=4.id;",(0,r.kt)("br",{parentName:"p"}),"\n","//other joins, mostly useless:",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT ",(0,r.kt)("em",{parentName:"p"}," FROM t1 NATURAL JOIN t2; \t\t//mit namensgleiche Spalten wird ein inner join gemacht",(0,r.kt)("br",{parentName:"em"}),"SELECT ")," FROM team as t1 INNER JOIN team as t2 ON t1.name>t2.name; \t//THETA JOIN-> jedes (Fusball-)Team spielt gegen jedes andere Team genau 1 mal",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT ",(0,r.kt)("em",{parentName:"p"}," FROM Mitarbeiter UNION JOIN Projekte;\t\t\t//Genau tabelle1+tabelle2 Eintr\xe4ge. Es wird einfach NULL angef\xfcgt f\xfcr fremdwerte. selbst da wo es inner joins g\xe4be.",(0,r.kt)("br",{parentName:"em"}),"SELECT ")," FROM Mitarbeiter as m1 INNER JOIN Mitarbeiter as m2 ON m1.name = m2.boss\t\t//self join von Tabelle mit sich selbst  "),(0,r.kt)("h1",{id:"union"},"Union"),(0,r.kt)("p",null,"SELECT name, ort from t1 UNION SELECT name, ort from t2;",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT name, ort from t1 EXCEPT SELECT name, ort from t2;",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT name, ort from t1 INTERSECT SELECT name, ort from t2;",(0,r.kt)("br",{parentName:"p"}),"\n",'SELECT vname, name, ort FROM t_ma WHERE abtnr={select id from t_abt WHERE name="controling");  '),(0,r.kt)("h1",{id:"views"},"Views"),(0,r.kt)("p",null,"CREATE VIEW view AS",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT abtnr, vname, name FROM t_ma WHERE abtr=1;",(0,r.kt)("br",{parentName:"p"}),"\n","WITH CHECK OPTION;",(0,r.kt)("br",{parentName:"p"}),"\n","SELECT * FROM view1",(0,r.kt)("br",{parentName:"p"}),"\n","SHOW FULL TABLES IN uebungen WHERE TABLE_TYPE LIKE 'VIEW'",(0,r.kt)("br",{parentName:"p"}),"\n","// dont use order by group by union in views!  "),(0,r.kt)("h1",{id:"zugriffsrechte"},"Zugriffsrechte"),(0,r.kt)("p",null,"// marida-db uses table user in mysql to mange users -> change there in table or:",(0,r.kt)("br",{parentName:"p"}),"\n","CREATE USER, GRANT",(0,r.kt)("br",{parentName:"p"}),"\n","select user, password from mysql.user;",(0,r.kt)("br",{parentName:"p"}),"\n","DROP USER 'user';",(0,r.kt)("br",{parentName:"p"}),"\n","CREATE USER 'user'@'host' IDENTIFIED BY 'passwort; //with host: % Alle Computer in Netzwerk | localhost Lokaler Computer | server Computer nit dem netzwerknamen Server",(0,r.kt)("br",{parentName:"p"}),"\n","// new users have no default permissions",(0,r.kt)("br",{parentName:"p"}),"\n","GRANT rechteliste ON datenbankobjekt to benutzername;",(0,r.kt)("br",{parentName:"p"}),"\n","// ALL ","[PRIVILEGES]"," :  DELETE | EXECUTE | INSERT | SELECT | UPDATE",(0,r.kt)("br",{parentName:"p"}),"\n","GRANT SELECT, UPDATE ON t1 TO username",(0,r.kt)("br",{parentName:"p"}),"\n","GRANT INSERT(name, nachname) ON t1 TO username\nSHOW GRANTS;",(0,r.kt)("br",{parentName:"p"}),"\n","SHOW GRANTS for username;",(0,r.kt)("br",{parentName:"p"}),"\n","REVOKE ALL on t_ma from username;  "),(0,r.kt)("h1",{id:"konsistente-datenbest\xe4nde-und-transaktionen"},"Konsistente Datenbest\xe4nde und Transaktionen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nBEGIN;\nUPDATE t1 SET c1=c1*0.8 WHERE c2>200;\nUPDATE t2 SET ...\nCOMMIT;\n\nBEGINN;\nUPDATE t1 SET c1=c1 WHERE c2="WRONG"\nROLLBACK;\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Datenbanken erlauben gleichzeitigen Datenzugriff mehrerer Benutzer. Beim ausschlie\xdflich lesenden Zugriff ergibt dies kein Problem. Wenn jedoch mehrere Benutzer "gleichzeitig" auf Daten zugreifen und/oder bearbeiten, muss f\xfcr Konsistenz der Daten gesorgt werden.  '),(0,r.kt)("li",{parentName:"ul"},"Ausserdem muss Datenkonsistenz bei Hardware oder Programmfehlern erhalten bleiben."),(0,r.kt)("li",{parentName:"ul"},"Das Datenbanksystem ist daher in der Lage in jedem Fall die betroffenen Daten in den letzten konsistenten Zustand zur\xfcckzuf\xfchren  "),(0,r.kt)("li",{parentName:"ul"},"Hierzu dient die sogenannte Transaktionsverwaltung"),(0,r.kt)("li",{parentName:"ul"},"Transaktionen sind eine Gruppe von logisch zusammenh\xe4ngenden Datenbank- (SQL-)operationen, die nur gemeinsam ausgef\xfchrt werden sollen."),(0,r.kt)("li",{parentName:"ul"},"Kann aufgrund eines Fehlers, z.B. einer Zugriffsverletzung eine Operation nicht ausgef\xfchrt werden, dann wird ",(0,r.kt)("strong",{parentName:"li"},"keine")," der Operationen in der Transaktion ausgef\xfchrt.  ")),(0,r.kt)("h2",{id:"acid"},"ACID"),(0,r.kt)("p",null,"vier Grundlegende Eigenschaften, die bei Ausf\xfchrung einer Transaktionen eingehalten werden m\xfcssen."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Atomicity - Atomarit\xe4t: "Alles oder Nichts", Transaktion wird vollst\xe4ndig oder gar nicht ausgef\xfchrt.  '),(0,r.kt)("li",{parentName:"ul"},"Consistency - Konsistenz: ist die Transaktion durchgef\xfchrt, befindet sich die DB in einem konsistenten Zustand.  "),(0,r.kt)("li",{parentName:"ul"},"Isolation - Isolation: Transaktionen laufen isoliert ab, mehrere gleichzeitig ablaufende Transaktionen st\xf6ren oder beeintr\xe4chtigen sich nicht.  "),(0,r.kt)("li",{parentName:"ul"},"Durability - Dauerhaftigkeit: Das Ergebnis einer erfolgreichen Transaktkion ist dauerhaft/persistent.")),(0,r.kt)("h2",{id:"isolationsebenen"},"Isolationsebenen:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0: READ UNCOMMITTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Bei dieser Isolationsebene ignorieren Leseoperationen jegliche Sperren, deshalb k\xf6nnen die Anomalien Lost Update, Dirty Read, Non-Repeatable Read und das Phantom-Problem auftreten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1: READ COMMITTED"),(0,r.kt)("td",{parentName:"tr",align:null},"Diese Isolationsebene setzt f\xfcr die gesamte Transaktion Schreibsperren auf Objekten, die ver\xe4ndert werden sollen, setzt Lesesperren aber nur kurzzeitig beim tats\xe4chlichen Lesen der Daten ein. Daher k\xf6nnen Non-Repeatable Read und Phantom Read auftreten, wenn w\xe4hrend wiederholten Leseoperationen auf dieselben Daten, zwischen der ersten und der zweiten Leseoperation, eine Schreiboperation einer anderen Transaktion die Daten ver\xe4ndert und committed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2: REPEATABLE READ"),(0,r.kt)("td",{parentName:"tr",align:null},"Bei dieser Isolationsebene ist sichergestellt, dass wiederholte Leseoperationen mit den gleichen Parametern auch dieselben Ergebnisse haben. Sowohl bei Lese- als auch bei Schreiboperationen werden f\xfcr die gesamte Dauer der Transaktion Sperren gesetzt. Dies f\xfchrt dazu, dass bis auf Phantom Reads keine Anomalien auftreten k\xf6nnen.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3: SERIALIZABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"Die h\xf6chste Isolationsebene garantiert, dass die Wirkung parallel ablaufender Transaktionen exakt dieselbe ist wie sie die entsprechenden Transaktionen zeigen w\xfcrden, liefen sie nacheinander in Folge ab. Auf diese Weise ist sichergestellt, dass keine Transaktion verloren geht und dass sich keine zwei Transaktionen gegenseitig beeinflussen. Da die meisten Datenbanksysteme allerdings nur eine Illusion von sequentieller Ausf\xfchrung aufrechterhalten, ohne tats\xe4chlich alle Transaktionen nacheinander einzeln abzuarbeiten, kann es hier vorkommen, dass eine Transaktion von der Seite der Datenbank aus abgebrochen werden muss. Eine Anwendung, die mit einer Datenbank arbeitet, bei der die Isolationsebene Serializable gew\xe4hlt wurde, muss daher mit Serialisationsfehlern umgehen k\xf6nnen und die entsprechende Transaktion gegebenenfalls neu beginnen.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"isolationsebene"),(0,r.kt)("th",{parentName:"tr",align:null},"dirty read"),(0,r.kt)("th",{parentName:"tr",align:null},"lost update"),(0,r.kt)("th",{parentName:"tr",align:null},"non-rep"),(0,r.kt)("th",{parentName:"tr",align:null},"phantom"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READ UNCOMMITTED"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READ COMMITTED"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REPEATABLE READ"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERIALIZABLE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h1",{id:"beispiele"},"Beispiele"),(0,r.kt)("p",null,"Lieferant und Bearbeiter die 20 oder mehr Produkte anbieten:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SELECT Lieferant, Bearbeiter",(0,r.kt)("br",{parentName:"p"}),"\n","FROM lieferant INNER JOIN produkt",(0,r.kt)("br",{parentName:"p"}),"\n","ON lieferant.LieferantID = produkt.produkt_lieferant_LieferantID",(0,r.kt)("br",{parentName:"p"}),"\n","GROUP BY LieferantID, Bearbeiter",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"HAVING COUNT(*)>=20"),";")),(0,r.kt)("h1",{id:"uebung-flugzeugepdf"},"Uebung Flugzeuge.pdf"),(0,r.kt)("h2",{id:"kundenw\xfcnsche"},"Kundenw\xfcnsche:"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"Die durchgef\xfchrten Fl\xfcge sollen in einem relationalen Datenbanksystem erfasst werden.\nF\xfcr die Entwicklung des Datenbanksystems liegt folgende Beschreibung vor:\n"))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"- Auf einem Frachtflug werden Frachten, die von einem oder mehreren Kunden\nstammen, transportiert.\n- Die Fracht eines Kunden kann auf einen oder mehrere Fl\xfcge verteilt werden.\n- Ein Flug wird mit einem Flugzeug ausgef\xfchrt.\n- Ein Flugzeug wird f\xfcr viele Fl\xfcge eingesetzt.\n- Ein Flugzeug wird von verschiedenen Piloten geflogen.\n- Piloten k\xf6nnen auf verschiedenen Flugzeugen eingesetzt werden.\n- Ein Pilot f\xfchrt viele Fl\xfcge durch.\n- Ein Flug wird von zwei Piloten ausgef\xfchrt.  \n"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Erstellen Sie ein entsprechendes ER-Diagramm ohne Attribute.\n\xdcberf\xfchren Sie das ER-Diagramm in das relationale Modell.\nErstellen Sie die entsprechende SQL-Datenbank.\n\xdcberlegen sie sich passende Abfragen.")),(0,r.kt)("h2",{id:"sql-befehle"},"SQL Befehle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'--- Create DATABASE ---\nDROP DATABASE IF EXISTS flug;\nCREATE DATABASE flug;\nUSE flug;\n\n--- CREATE TABLES ---\nCREATE TABLE \n    kunde(id INT AUTO_INCREMENT PRIMARY KEY, \n        firmenname VARCHAR(60), adresse VARCHAR(60), kundeSeit DATE \n);\n\nCREATE TABLE\n    fracht(id INT AUTO_INCREMENT PRIMARY KEY\n\n);\n\nCREATE TABLE\n    fracht_kunde(id INT AUTO_INCREMENT PRIMARY KEY, kunde_id INT, fracht_id INT,\n        FOREIGN KEY (kunde_id) REFERENCES kunde(id),\n        FOREIGN KEY (fracht_id) REFERENCES fracht(id)\n);\n\nCREATE TABLE\n    flugzeug(id INT AUTO_INCREMENT PRIMARY KEY\n);\n\nCREATE TABLE\n    flug(id INT AUTO_INCREMENT PRIMARY KEY, flugzeug_id INT, \n        FOREIGN KEY (flugzeug_id) REFERENCES flugzeug(id)\n);\n\nCREATE TABLE\n    flug_fracht(id INT AUTO_INCREMENT PRIMARY KEY, flug_id INT, fracht_id INT,\n        FOREIGN KEY (flug_id) REFERENCES flug(id),\n        FOREIGN KEY (fracht_id) REFERENCES fracht(id)\n);\n\nCREATE TABLE\n    pilot(id INT AUTO_INCREMENT PRIMARY KEY\n);\n\nCREATE TABLE\n    flug_pilot(id INT AUTO_INCREMENT PRIMARY KEY, flug_id INT, pilot_id INT,\n        FOREIGN KEY (flug_id) REFERENCES kunde(id),\n        FOREIGN KEY (pilot_id) REFERENCES pilot(id)\n);\n\nCREATE TABLE\n    flugzeug_pilot(id INT AUTO_INCREMENT PRIMARY KEY, flugzeug_id INT, pilot_id INT,\n        FOREIGN KEY (flugzeug_id) REFERENCES kunde(id),\n        FOREIGN KEY (pilot_id) REFERENCES pilot(id)\n);\n\n\n--- CREATE SELECTS ---\n\n--- alle (erstellten Tabellen) zeigen:\nSHOW TABLES;\n--- alle Kunden die am 1.1.2023 seit 10 Jahre Kunde sind:\nSELECT * \n    FROM kunde\n    WHERE kundeSeit<"2013-01-01"\n;\n\n--- alle Piloten die mehr als 10 Fl\xfcge gefolgen sind:\nSELECT pilot.id, COUNT(*) AS AnzahlFluege\n    FROM pilot\n    INNER JOIN flug_pilot ON flug.id = flug_pilot.flug_id\n    INNER JOIN pilot ON pilot.id= flug_pilod.pilot_id\n    GROUP BY pilot.id HAVING COUNT(*)>9\n;\n\n--- Liste aller m\xf6glichen Piloten-Paare:\nSELECT pilot.id, p.id\n    FROM pilot, pilot AS p\n    WHERE pilot.id>p.id\n;\n\n\n')))}s.isMDXComponent=!0}}]);