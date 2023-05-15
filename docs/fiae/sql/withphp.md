# PHP mit SQL zusammen

```
in der MySQL-Datenbank
----------------------

in XAMPP Shell starten und einloggen:
	--> mysql -u root

zunächst erzeugen wir eine neue Datenbank:
	--> CREATE DATABASE Loginsystem;
	
danach erzeugen wir unsere Tabelle für die Benutzer:
	--> CREATE TABLE User 
			( 
				ID INT AUTO_INCREMENT NOT NULL, Autologin VARCHAR(32) NULL, IP VARCHAR(15) NULL, SessionID VARCHAR(32) NULL,
				Nickname VARCHAR(30) NOT NULL, Passwort VARCHAR(128) NOT NULL, Email VARCHAR(70) NOT NULL, Show_Email BOOL NULL,
				Registrierungsdatum DATE NULL, Letzter_Login INT NOT NULL DEFAULT 0, Letzte_Aktion INT NOT NULL DEFAULT 0,
				PRIMARY KEY ( ID ),
				UNIQUE ( Nickname, Email )
			);
			
dann erzeugen wir eine Tabelle für die Userrechte:
	--> CREATE TABLE User_Rechte 
		(
			ID INT AUTO_INCREMENT NOT NULL, UserID INT NOT NULL, Recht VARCHAR(100) NOT NULL, 
			PRIMARY KEY ( ID )
		);			

dann fügen wir einen Administrator ein:
	--> INSERT INTO User ( Nickname, Email, Show_Email, Passwort, Registrierungsdatum )
		VALUES ( 'admin', 'satan@hell.de', '1', SHA2( 'admin', 512 ), CURDATE() );

nun brauchen wir noch die ID des Administrators:
	--> SELECT LAST_INSERT_ID(); ==> ADMINID
	
dann geben wir ihm die Rechte zum Betreten des Administratorbereichs:
	--> INSERT INTO User_Rechte ( UserID, Recht ) VALUES ( ADMINID, 'Adminbereich' );
	
und zum Editieren von Benutzern:
	--> INSERT INTO User_Rechte ( UserID, Recht ) VALUES ( ADMINID, 'User administrieren' );
	
wir fügen weitere Benutzer ein:
	--> INSERT INTO User ( Nickname, Email, Show_Email, Passwort, Registrierungsdatum )
		VALUES ( 'Chris', 'chris@halle.de', '1', SHA2( '12345678', 512 ), CURDATE() );

	--> INSERT INTO User ( Nickname, Email, Show_Email, Passwort, Registrierungsdatum )
		VALUES ( 'Rene', 'rene@helbra.de', '1', SHA2( '123', 512 ), CURDATE() );

nun brauchen wir zuerst mal noch einen Standartbenutzer:
	--> CREATE USER 'standartuser'@'localhost' IDENTIFIED BY 'geheim';
	--> GRANT SELECT ON loginsystem.* TO 'standartuser'@'localhost';

und einen Administrator zum Ändern der User und User_Rechte:
	--> CREATE USER 'administrator'@'localhost' IDENTIFIED BY 'ultrageheim';
	--> GRANT SELECT, DELETE, INSERT, UPDATE ON loginsystem.* TO 'administrator'@'localhost';
	
in der php.ini
--------------
zum Schluss müssen wir noch PHP richtig konfigurieren, damit die Passwörter nicht im PHP-Skript 
auftauchen

die richtige! php.ini suchen
findet man unter Benutzung der localhost/dashboard/phpinfo.php im ersten Abschnitt unter "Loaded Configuration File"

in dieser Datei suchen wir nach dem Eintrag "mysqli.default_user" und ergänzen ihn mit "standartuser"
der nächste Eintrag den wir brauchen ist "mysqli.default_pw" und ergänzen ihn mit admin

```