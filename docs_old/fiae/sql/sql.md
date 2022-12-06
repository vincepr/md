https://excalidraw.com/

## SQL - Mitschrift - robotron 2022
# mySQL with MariaDB
mysql -u root -p

# Manage Databases & Tables
CREATE DATABASE [IF NOT EXISTS] d1;  
SHOW DATABASES;  
USE d1;  
SHOW TABLES [FROM d1][LIKE "A%"];  
DESCRIBE t1;  
CREATE TABLE t1 ( f1 type [DEFAULT defvalue] | NULL < NOT NULL) [AUTO_INCREMENT] [PRIMARY KEY], ... [PRIMARY KEY(f1)]);  
DROP DATABASE [IF EXISTS d1]; 
DROP TABLE t1;  

# CHANGE TABLES
ALTER TABLE t1 CHANGE c1 c2 VARCHAR(10);  
ALTER TABLE t1 ADD c1 VARCHAR(99);  
ALTER TABLE t1 DROP c1;  
ALTER TABLE t1 ADD newField int AFTER Artikelname;  FIRST for first one;   
ALTER TABLE t1 MODIFY [COLUMN] c1 column_definition [FIRST | AFTER col_name];  
INSERT INTO table(c1, c2, c3) VALUES('wert1', 'w2', 'w3'),('w4', 'w5', 'w6');  
UPDATE t1 SET c1 = wert1, ... , c3="wert3" [WHERE bedingung];  
DELETE FROM t1 WHERE ort='Stuttgart';  
ALTER TABLE table_name AUTO_INCREMENT = 1; (start next autro_increment form value)  

# Data-types
|type | wertebereich |dezimalstellen | bytes |
|---|---|---|---|
|BYTE|0 bis 255|keine |1|
|IINTEGER|-32767 bis 32767|keine|2|
|LONGINTEGER|+-2.14*10E9|keine|2|
|SINGLE|+-3,4*10E38|7Stellen|4|
|DOUBLE|+-1.7*10E308|15Stellen|8|
|DATE|1.1.0100 bis 31.12.999|-|8|
|MONEY|+-92.233.337.203.685.477.5808|4Stellen|4|
|TEXT|bis 256 Zeichen||variabel|
|VARCHAR(20)|20 Zeichen||variabel|

# Primary Key
CREATE TABLE t1 feld1 INT PRIMARY KEY....  
CREATE TABLE t1 feld1 INT NOT NULL, feld2 VARCHAR NOT NULL..., PRIMARY KEY(feld1, feld2);  
ALTER TABLE t1 ADD PRIMARY KEY (datenfeldname1);  
ALTER TABLE t1 DROP PRIMARY KEY;  
ALTER TABLE t1 ADD feld1 UNIQUE;  

# Foreign Keys 
CEATE/ALTER TABLE t1 ADD FOREIGN KEY (key_name) REFERENCES parent_table(column_name)[ON DELETE refenceoption][ON UPDATE referenceoption];  
Referenceoptions: CASCADE, SET NULL, NO ACTION, RESTRICT, SET DEFAULT;  

# Select
SELECT [DESTINCT] datenfeld1, datenfeld2 FROM t1 WHERE
	GROUP BY datendfeld1, datenfeld2 [HAVING]
	ORDER BY datenffeld1, datenfeld2 [ASC DESC]
	LIMIT [Start, ] Anzahl;  
SELECT * from t1 WHERE age IN (10,12,14,16,18);    
// Gruppieren macht nur sinn in kombination mit Aggregatsfunktion: SUM, AVG, MIN, MAX, COUNT  
SELECT ort, count(*) as Anzahl FROM t_ma GROUP BY ort [HAVING Anzahl >10];  
// Wenn suche nach null, dann SELECT * FROM t1 WHERE ruhestand IS Null !! benutzen  

# more Select
SELECT * from t1 WHERE value BETWEEN 10 AND 20;  
SELECT *, CAST(preis*1.19 AS DECIMAL(10,2)) AS Bruttopreis FROM t_lager;  
SELECT *, ROUND(preis*1.19, 1) AS Bruttopreis FROM t_lager;  
LENGTH(string);  
LOWER(string);  
UPPER(string);  
CHAR(wert);  select CHAR("84") -> String "84" wird Zahl  
LTRIM("     Freitag     "); -> "Freitag    "  
RTRIM("    Freitag     "); -> "     Freitag"  

# JOIN
SELECT * FROM t1 INNER JOIN t2 USING(column_name)	*// if same culumn_name=column_name*   
SELECT * FROM t1 INNER JOIN t2 ON t1.id = t2.id;  
SELECT * FROM t1 CROSS JOIN t2;  
SELECT * FROM t1 LEFT [OUTER] JOIN t2 ON t1.id = t2.id;			*//outer keyword changes nothing*  
SELECT * FROM t1 RIGHT [OUTER] JOIN t2 ON t1.id = t2.id;		*//outer keyword changes nothing*  
// there is no FULL OUTER JOIN in mysql (rereate using unions of left and right)  
like t1.column_name = t2.column_name  
//multiple joins->  
SELECT *  
FROM t1 INNER JOIN t2 ON t1.id=t2.ma_id  
INNER JOIN t3 ON t2.proj_id=t3.name 
INNER JOIN t4 ON t3.proj_id=4.id;  
//other joins, mostly useless:  
SELECT * FROM t1 NATURAL JOIN t2; 		//mit namensgleiche Spalten wird ein inner join gemacht  
SELECT * FROM team as t1 INNER JOIN team as t2 ON t1.name>t2.name; 	//THETA JOIN-> jedes (Fusball-)Team spielt gegen jedes andere Team genau 1 mal  
SELECT * FROM Mitarbeiter UNION JOIN Projekte;			//Genau tabelle1+tabelle2 Einträge. Es wird einfach NULL angefügt für fremdwerte. selbst da wo es inner joins gäbe.  
SELECT * FROM Mitarbeiter as m1 INNER JOIN Mitarbeiter as m2 ON m1.name = m2.boss		//self join von Tabelle mit sich selbst  

# Union
SELECT name, ort from t1 UNION SELECT name, ort from t2;  
SELECT name, ort from t1 EXCEPT SELECT name, ort from t2;  
SELECT name, ort from t1 INTERSECT SELECT name, ort from t2;  
SELECT vname, name, ort FROM t_ma WHERE abtnr={select id from t_abt WHERE name="controling");  

# Views
CREATE VIEW view AS  
	SELECT abtnr, vname, name FROM t_ma WHERE abtr=1;  
	WITH CHECK OPTION;  
SELECT * FROM view1  
SHOW FULL TABLES IN uebungen WHERE TABLE_TYPE LIKE 'VIEW'  
// dont use order by group by union in views!  

# Zugriffsrechte
// marida-db uses table user in mysql to mange users -> change there in table or:  
CREATE USER, GRANT  
select user, password from mysql.user;  
DROP USER 'user';  
CREATE USER 'user'@'host' IDENTIFIED BY 'passwort; //with host: % Alle Computer in Netzwerk | localhost Lokaler Computer | server Computer nit dem netzwerknamen Server  
// new users have no default permissions  
GRANT rechteliste ON datenbankobjekt to benutzername;  
// ALL [PRIVILEGES] :  DELETE | EXECUTE | INSERT | SELECT | UPDATE  
GRANT SELECT, UPDATE ON t1 TO username  
GRANT INSERT(name, nachname) ON t1 TO username
SHOW GRANTS;  
SHOW GRANTS for username;  
REVOKE ALL on t_ma from username;  

# Konsistente Datenbestände und Transaktionen

	SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
	BEGIN;
	UPDATE t1 SET c1=c1*0.8 WHERE c2>200;
	UPDATE t2 SET ...
	COMMIT;

	BEGINN;
	UPDATE t1 SET c1=c1 WHERE c2="WRONG"
	ROLLBACK;
- Datenbanken erlauben gleichzeitigen Datenzugriff mehrerer Benutzer. Beim ausschließlich lesenden Zugriff ergibt dies kein Problem. Wenn jedoch mehrere Benutzer "gleichzeitig" auf Daten zugreifen und/oder bearbeiten, muss für Konsistenz der Daten gesorgt werden.  
- Ausserdem muss Datenkonsistenz bei Hardware oder Programmfehlern erhalten bleiben.
- Das Datenbanksystem ist daher in der Lage in jedem Fall die betroffenen Daten in den letzten konsistenten Zustand zurückzuführen  
- Hierzu dient die sogenannte Transaktionsverwaltung
- Transaktionen sind eine Gruppe von logisch zusammenhängenden Datenbank- (SQL-)operationen, die nur gemeinsam ausgeführt werden sollen.
- Kann aufgrund eines Fehlers, z.B. einer Zugriffsverletzung eine Operation nicht ausgeführt werden, dann wird **keine** der Operationen in der Transaktion ausgeführt.  

## ACID
vier Grundlegende Eigenschaften, die bei Ausführung einer Transaktionen eingehalten werden müssen.
- Atomicity - Atomarität: "Alles oder Nichts", Transaktion wird vollständig oder gar nicht ausgeführt.  
- Consistency - Konsistenz: ist die Transaktion durchgeführt, befindet sich die DB in einem konsistenten Zustand.  
- Isolation - Isolation: Transaktionen laufen isoliert ab, mehrere gleichzeitig ablaufende Transaktionen stören oder beeinträchtigen sich nicht.  
- Durability - Dauerhaftigkeit: Das Ergebnis einer erfolgreichen Transaktkion ist dauerhaft/persistent.

## Isolationsebenen:
| | |
|---|---|
| 0: READ UNCOMMITTED | Bei dieser Isolationsebene ignorieren Leseoperationen jegliche Sperren, deshalb können die Anomalien Lost Update, Dirty Read, Non-Repeatable Read und das Phantom-Problem auftreten.  |
|1: READ COMMITTED | Diese Isolationsebene setzt für die gesamte Transaktion Schreibsperren auf Objekten, die verändert werden sollen, setzt Lesesperren aber nur kurzzeitig beim tatsächlichen Lesen der Daten ein. Daher können Non-Repeatable Read und Phantom Read auftreten, wenn während wiederholten Leseoperationen auf dieselben Daten, zwischen der ersten und der zweiten Leseoperation, eine Schreiboperation einer anderen Transaktion die Daten verändert und committed. |
|2: REPEATABLE READ | Bei dieser Isolationsebene ist sichergestellt, dass wiederholte Leseoperationen mit den gleichen Parametern auch dieselben Ergebnisse haben. Sowohl bei Lese- als auch bei Schreiboperationen werden für die gesamte Dauer der Transaktion Sperren gesetzt. Dies führt dazu, dass bis auf Phantom Reads keine Anomalien auftreten können.| 
|3: SERIALIZABLE | Die höchste Isolationsebene garantiert, dass die Wirkung parallel ablaufender Transaktionen exakt dieselbe ist wie sie die entsprechenden Transaktionen zeigen würden, liefen sie nacheinander in Folge ab. Auf diese Weise ist sichergestellt, dass keine Transaktion verloren geht und dass sich keine zwei Transaktionen gegenseitig beeinflussen. Da die meisten Datenbanksysteme allerdings nur eine Illusion von sequentieller Ausführung aufrechterhalten, ohne tatsächlich alle Transaktionen nacheinander einzeln abzuarbeiten, kann es hier vorkommen, dass eine Transaktion von der Seite der Datenbank aus abgebrochen werden muss. Eine Anwendung, die mit einer Datenbank arbeitet, bei der die Isolationsebene Serializable gewählt wurde, muss daher mit Serialisationsfehlern umgehen können und die entsprechende Transaktion gegebenenfalls neu beginnen.|

|   isolationsebene| dirty read  |lost update |non-rep |phantom |
|---|---|---|---|---|
|READ UNCOMMITTED | x | x | x | x |
| READ COMMITTED |  | x | x | x |
|REPEATABLE READ |  |  |  | x |
|SERIALIZABLE     |  |  |  |  |


# Beispiele

Lieferant und Bearbeiter die 20 oder mehr Produkte anbieten:
> SELECT Lieferant, Bearbeiter  
FROM lieferant INNER JOIN produkt  
ON lieferant.LieferantID = produkt.produkt_lieferant_LieferantID  
GROUP BY LieferantID, Bearbeiter  
**HAVING COUNT(*)>=20**;

# Uebung Flugzeuge.pdf

## Kundenwünsche:

>	Die durchgeführten Flüge sollen in einem relationalen Datenbanksystem erfasst werden.
>	Für die Entwicklung des Datenbanksystems liegt folgende Beschreibung vor:

>	- Auf einem Frachtflug werden Frachten, die von einem oder mehreren Kunden
>	stammen, transportiert.
>	- Die Fracht eines Kunden kann auf einen oder mehrere Flüge verteilt werden.
>	- Ein Flug wird mit einem Flugzeug ausgeführt.
>	- Ein Flugzeug wird für viele Flüge eingesetzt.
>	- Ein Flugzeug wird von verschiedenen Piloten geflogen.
>	- Piloten können auf verschiedenen Flugzeugen eingesetzt werden.
>	- Ein Pilot führt viele Flüge durch.
>	- Ein Flug wird von zwei Piloten ausgeführt.  

> Erstellen Sie ein entsprechendes ER-Diagramm ohne Attribute.
>	Überführen Sie das ER-Diagramm in das relationale Modell.
>	Erstellen Sie die entsprechende SQL-Datenbank.
>	Überlegen sie sich passende Abfragen.

## SQL Befehle:
```
--- Create DATABASE ---
DROP DATABASE IF EXISTS flug;
CREATE DATABASE flug;
USE flug;

--- CREATE TABLES ---
CREATE TABLE 
	kunde(id INT AUTO_INCREMENT PRIMARY KEY, 
		firmenname VARCHAR(60), adresse VARCHAR(60), kundeSeit DATE 
);

CREATE TABLE
	fracht(id INT AUTO_INCREMENT PRIMARY KEY

);

CREATE TABLE
	fracht_kunde(id INT AUTO_INCREMENT PRIMARY KEY, kunde_id INT, fracht_id INT,
		FOREIGN KEY (kunde_id) REFERENCES kunde(id),
		FOREIGN KEY (fracht_id) REFERENCES fracht(id)
);

CREATE TABLE
	flugzeug(id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE
	flug(id INT AUTO_INCREMENT PRIMARY KEY, flugzeug_id INT, 
		FOREIGN KEY (flugzeug_id) REFERENCES flugzeug(id)
);

CREATE TABLE
	flug_fracht(id INT AUTO_INCREMENT PRIMARY KEY, flug_id INT, fracht_id INT,
		FOREIGN KEY (flug_id) REFERENCES flug(id),
		FOREIGN KEY (fracht_id) REFERENCES fracht(id)
);

CREATE TABLE
	pilot(id INT AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE
	flug_pilot(id INT AUTO_INCREMENT PRIMARY KEY, flug_id INT, pilot_id INT,
		FOREIGN KEY (flug_id) REFERENCES kunde(id),
		FOREIGN KEY (pilot_id) REFERENCES pilot(id)
);

CREATE TABLE
	flugzeug_pilot(id INT AUTO_INCREMENT PRIMARY KEY, flugzeug_id INT, pilot_id INT,
		FOREIGN KEY (flugzeug_id) REFERENCES kunde(id),
		FOREIGN KEY (pilot_id) REFERENCES pilot(id)
);


--- CREATE SELECTS ---

--- alle (erstellten Tabellen) zeigen:
SHOW TABLES;
--- alle Kunden die am 1.1.2023 seit 10 Jahre Kunde sind:
SELECT * 
	FROM kunde
	WHERE kundeSeit<"2013-01-01"
;

--- alle Piloten die mehr als 10 Flüge gefolgen sind:
SELECT pilot.id, COUNT(*) AS AnzahlFluege
	FROM pilot
	INNER JOIN flug_pilot ON flug.id = flug_pilot.flug_id
	INNER JOIN pilot ON pilot.id= flug_pilod.pilot_id
	GROUP BY pilot.id HAVING COUNT(*)>9
;

--- Liste aller möglichen Piloten-Paare:
SELECT pilot.id, p.id
	FROM pilot, pilot AS p
	WHERE pilot.id>p.id
;


```

