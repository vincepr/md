#  Übungsaufgabe - Security Design Principles
- Übungsaufgabe 
## Szenario
Sie sind ein Softwareentwickler, der beauftragt wurde, eine CRM (Customer 
Relationship Management)-Anwendung für ein mittelständisches Unternehmen zu 
entwickeln. Die Anwendung soll es dem Unternehmen ermöglichen, 
Kundeninformationen zu verwalten, Kontakte zu pflegen, Verkaufsaktivitäten zu 
protokollieren und Berichte zu erstellen. Da die CRM-Anwendung sensible 
Unternehmens- und Kundendaten enthält, ist es von größter Bedeutung, die Sicherheit 
der Daten zu gewährleisten. Denken Sie über die Privilegien nach, die bei der 
Entwicklung dieser CRM-Anwendung umgesetzt werden müssen, und nennen Sie 
jeweils zwei konkrete Schritte, um diese Privilegien zu realisieren.

Systeminformationen:
- • Die CRM-Anwendung wird webbasiert entwickelt und wird von Mitarbeitern über 
verschiedene Geräte wie Desktop-Computer, Laptops und mobile Endgeräte 
genutzt.
- • Die Anwendung wird auf einem internen Server des Unternehmens gehostet.
- • Es wird eine relationale Datenbank für die Speicherung der Kundendaten 
verwendet, und es werden auch Dokumente wie Verträge oder Notizen in der 
Anwendung gespeichert.
- • Die Anwendung erfordert eine nahtlose Integration mit vorhandenen 
Unternehmenssystemen wie E-Mail-Servern, Buchhaltungssoftware oder 
Kundensupport-Ticketing-Systemen.
- • Es werden verschiedene Benutzerrollen in der CRM-Anwendung benötigt, wie 
z.B. Administratoren, Vertriebsmitarbeiter, Kundendienstmitarbeiter und 
Teamleiter.
- • Die Anwendung sollte die Anforderungen an die Datenschutz-Grundverordnung 
(DSGVO) erfüllen und den Datenschutz der Kundendaten gewährleisten.
- • Es wird erwartet, dass die CRM-Anwendung regelmäßige Updates und 
Wartungsarbeiten erfährt, um Sicherheitslücken zu beheben und die Leistung zu 
optimieren.
- • Die Anwendung sollte über ein zentrales Protokollierungssystem verfügen, um 
Aktivitäten der Benutzer, Systemereignisse und Sicherheitsvorfälle zu 
überwachen und zu protokollieren.

Ihre Aufgabe besteht darin, die Umsetzung der Secure Design Principles in der CRMAnwendung zu analysieren und jeweils zwei konkrete Schritte für die Realisierung der 
folgenden Privilegien zu identifizieren:

- • Least Privilege (geringste Privilegien):
- • Defense in Depth (mehrstufige Verteidigung)
- • Fail-Safe (ausfallsichere Voreinstellungen)
- • Secure by Default (sicherheitstechnisch voreingestellt)
- • No Security by Obscurity (keine Sicherheit durch Verschleierung)


# Musterlösung
### Least Privilege
- Benutzerrollen definieren mit entsprechenden geringstnötigen Privilegien. Administratoren, Vertriebsmitarbeiter, Kundendienstmitarbeiter und 
Teamleiter.
- Zugriffskontrolle implementieren. z.B. Rollenbasierte oder Attribut-basierte Zugriffskontrolle.
- Berechtigungen für Zugriff auf Sensible Daten (z.B. Kundendaten) benötigt
- Infrastruktur: Systeme bekommen nur erforderlichen Zugriffsrechte. (z.B. DB whitelist only app-server can talk to it)

### Defense in Depth
- Netzwerksicherheit nutzen: z.B: Firewall, IDS, IPS, Anomalie-erkennungs-Systeme...
- Whitelisting, Blacklisting. (z.B. DB can only be reached from IP:port of app-server)
- Verschlüsselung von Kommunikation (SSL TLS)
- Verschlüsselung von Daten (Passwörter salted hashed)
- Inputvalidierung
- Content Security Policies
- Mitarbeiter/Developer Schulen
- Überwachung und Loging aufbauen

### Fail-Safe
- Update und Patch management regelmäßig durchführen
- Fehler und ausnahmen berücksichtigen und abfangen
- Ausfallsicherheit - durch automatisches restarten wenn prozesse/server down
- der host server ist gespiegelt und hinter einem Load-balancer
- die Datenbank hat ein Backupdatenbank, die alle Transaktionen spiegelt und bei Ausfall als Primäre DB einspringt


### Secure by Default
- Verschlüsselte Kommunikation ist standard (auto upgrade to https)
- Grundverfahren und Standards zur Absicherung von Transaktionen, Logging etc.
- Sicherheitsempfehlungen z.B. DSGVO einhalten
- Automatische Updates und ähnliche Endnutzereinstellungen sind standardmäßig aktiviert
- Benutzerkonten und Passwörter einstellungen - z.B: Benutzer benötigen ein aktives Passwort
- Standardmäßige Sensibilisierung der Nutzer - z.B. Schulungen anbieten, Benutzerhandbuch mit best-practice.
- Session Timer der inaktive Benutzer ausloggt

### No Security by Obscurity
Siegeszug der Verschlüsselung - Benutzen von Verschlüsselungen die auch noch sicher sind, wenn das Verfahren bekannt ist.

- Offene Sicherheitsarchitektur. Protrokoll Standards die open-source sind. (SSL, Sha mit mehrfach salting etc...)
- (Öffentliche) Pentests durchführen - z.B. Prämien beim finden von Sicherheitsleaks 


# Ursprüngliche Lösung (aka. meine Lösung)

### Least Privilege
- private fields and methods in classes by default
- Admin Konto, vs Vertriebsmitarbeiter etc. mit entsprechenden geringstnötigen Privilegien.

### Defense in Depth
- Hashing of passwords
- Firewall für host-server
- Multi-Factor authentication
- Password security

### Fail-Safe
- der host server ist gespiegelt und hinter einem Load-balancer
- die Datenbank hat ein Backupdatenbank, die alle Transaktionen spiegelt und bei Ausfall als Primäre DB einspringt

### Secure by Default
- Password Mindestanforderungen
- Automatische Updates sind als default aktiviert (versucht z.B. periodisch nach neuen Updates)

### No Security by Obscurity
- SSL / TLS
- password hashing mit (10x) salted sha265
- Sicherstellen das die benutzten Secrets/Keys für die 2 obigen Algorithmen sicher bleiben.

### Security by Obscurity
- Die Datenbank reagiert nur über anfragen von den 2 host-servern. (whitelist)
- Die host-server API liefert bei falscher benutzung nur generische Fehlermeldung wie access denied oder failed transaction. Ohne Hinweise auf genauere Funktionsweise und Aufbau der Datenbank, verwendeten DTO's etc. zu liefern