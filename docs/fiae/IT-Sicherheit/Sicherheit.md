# IT Sicherheit

## Begrifflichkeiten - Definitionen
### Security
Maßnahmen, die beabsichtige Angriffe auf Rechner, gespeicherte und übertragene Daten sowie Kommunikationsbeziehungen verhindern
### Safety
Maßnahmen, die Auswirkungen unbeabsichtigter Ereignisse, die zu einem Ausfall oder Beschädigung von Rechnern, gespeicherten oder übertragenen Daten und Kommunikationsbeziehungen führen, zu vermindern
### Datenschutz
Schutz von Daten vor unberechtigtem Zugriff
### Datensicherheit
Sicherung von Daten vor Verlust (zum Beispiel durch Sicherungskopien)
### Urheberrecht
Nachweis der Quelle von Daten
### Definition Informationen vs Wissen
Mehrere Daten sind Informationen -  mehrere Informationen sind Wissen.
### Cybercrime
- Cybercrime umfasst die Straftaten, die sich gegen das Internet, Datennetze informationstechnische Systeme oder deren Daten richten (im engeren Sinne) oder die mittels dieser Informationstechnik begangen werden.

## Sicherheitsaspekte
### Zugriffsschutz
Kontrolle des Systemzuganges und Zugriffsbeschränkungen auf Systemfunktionen und Datenbestände
### Authentizität
Nachweis der Identität des Urhebers / Autors und des Datenmaterials
### Vertraulichkeit
Verhindern, das unberechtigte auf Daten zugreifen können
### Integrität
Nachweisen, dass die Daten unverändert vorliegen
### Nachweisbarkeit
Prüfen der Authentizität der Daten auch von berechtigten Dritten, so dass die Verbindlichkeit der Kommunikation gewährleistet ist.


## Sicherheitsziele in der IT
#### Vertraulichkeit - confidentiality
Informationen dürfen nicht in die falschen Hände gelangen.
- Daten sind nicht "öffentlich"
#### Integrität - integrity
Sensible Informationen dürfen nicht verfälscht werden.
- Daten sind "korrekt"
#### Verfügbarkeit - availability
Notwendige Informationen müssen aufrufbar sein.
- Daten sind "benutzbar"

#### Erweitererte Sicherheitsziele
- Authentizität         
Nachweisen das man die "Person" ist die man vorgibt zu sein, da in z.B. Email-Protokoll ein beliebiger Absender gewählt werden kann.


### Zusammenhang Sicherheitsziele und Bedrohung
|   |Vertraulichkeit|Datenintegrität|Zurechenbarkeit|Kontrollierter Zugang|Verfügbarkeit|
|---|---|---|---|---|---|
|Maskerade      |x|x|x|x|x|
|Abhören        |x|||||
|Autorisierungs-Verletzung|x|x|x|x|x|
|Verlust oder Modifikation von Information||x|x||x|
|Fälschen von Information||x||||
|Abstreiten von Ereignissen|||x|||
|Sabotage|||||x|

### Sicherheitsziele anhand eines Beispiels
Alice -> Nachricht X -> Bob
- Integrität: War die ursprüngliche Nachricht wirklich von X
- Authentizität: Kommt X wirklich von Alice? Ist der adressierte Empfänger wirklich Bob?
- Verbindlichkeit: Kann Bob nachweisen, das X von Alice kam?
- Verfügbarkeit: Kommt die Nachricht bei Bob an? Kann Bob sie abrufen und lesen?
- Vertraulichkeit: Können nur Alice & Bob die Nachricht lesen

### Angriffsmodelle Beispiele
- Ist die Person böswillig? Handelt sie unter Zwang?
- Belauscht jemand die PAssowrteingabe
- Meldet eine SW die Nachricht an einen fernen Abhörer?
- Belauscht jemand die Übertragung? Verfälscht jemand die Übertragung? (Man in the middle)
- Hat jemand unbefugt Zugriff auf den Server?

### Technische Schutzmaßnahmen
- Authentizität: Besitz von Geheimnissen (Passwort, Signaturschlüssel)
- Vertraulichkeit: Verschlüsselung, Zugriffsschutz/Rechte
- Integrität: Entdeckung von Veränderungen.(Vershlüsselung, digitale Signatur) phys. Zugriffsschutz auf Speicher/Leitung
- Verfügbarkeit: Betriebsabsicherung, Redundanz
- Verbindlichkeit: digitale Signatur, Protokolldaten

### Vergleich physischer VS  elektronischer Schutz

- elektronischer Pförtner - Firewall und Pc-Sicherheitssysteme
- elektronischer Sicherheitstransportner - Virtual Private Networks (VPN)
- elektronisches Standesamt/Meldeamt - Publik Key Infrastructures (PKI)
- elektronischer Brief/Unterschrift - Emailsicherheit und elektronische Signaturen
- elektronische Safes - Datei- und Festplattenverschlüsselung

## Potentielle Angreifer
- Insiders - Motive: Neugierde, Frustration, Rache, Gier, Neid
- Skript-Kiddies - Angreifer ohne tiefgreifende Cybersicherheitskenntnisse, die Cyberangriffe mit Hacker-Tools starten -  Motive: Neugierde, just for fun, Angeberei
- Hacker - meist Person mit tiefgreifendem technischen Wissen - white hat, grey hat, black hat, hacktivists
- Gewönliche Kriminelle - Nutzung des Internets für z.B. organnisiertes Verbrechen - Regierungen können Interesse an Backdoors zu geschützten Systemen haben
- Geheimdienste / Spionage - bsp. Stuxnet

## Häufisten Angriffe
### DOS und DDOS - (distributed) denial of service
- Angriffe mit dem Ziel die Verfügbarkeit eines Dienstes im Internet zu stören
- DOS von nur einem Host, DDOS von mehreren zugleich.
- Am häufigsten sind TCP-SYN-Flooding, Teardrop-Angriffe, Smurf-Angriffe, Ping of Death und Botnets.

### Phishing - Spoofing
- z.B. Emails aus offenbar vertrauenswürdigen Quellen zum ziel versenden. So an persobliche Informationen gelangen oder zu bestimmten Handlungen zu verleiten.

### Abhören - sniffing and eavesdroppging
- Hier wird der Netzwerkdatenverkehr abgefangen um Zugriff auf z.B. Kenwörter, Kreditkartennummern etc. zu erhalten
- Die best Abwehrmethode gegen Abhören ist die Verschlüsselung von Daten.   
    - **sniffing** (packet-sniffing) ist eine Methode zur Netzwerkdiagnose durch abhören des gesammten Netzwerkverkehrs. Mit z.B. Wireshark.
    - **eavesdropping** ist der allgemeinere Überbegriff zum abhören von Datenpaketen auf ihrem WEg durch das Netzwerk.

### Schadsoftware (Malware - malicious software)
- Software die absichtlich entwickelt wurde um Schäden an Computern, Netzwerken etc anzurichten.
- ua. Spyware, Adware, Ransomware, Trojaner, Dropper, Würmer, Logikbomben, Stealth-Viren, Polymorphe Viren, System-/Boot-Record-Infektoren, Dateinfektoren, Makroviren(Excel) ...
    - Virus: zerstörerisches Miniprogramm, das von "infizierten Anwendungen oder Daten übertragen wird
    - Wurm: bösartige Software, die sich automatisch über offene netzwerkverbindungen verbreitet.

### Defacement
- Angriff auf eine Website/-Server mit der Absicht seinen Inhalt zu verändern. z.B. zur Eigenwerbung von Hackergruppen.

### Weitere:

#### SQL-Injection
- Mit einer erfolgreichen SQL-Einschleusung ist es möglich, sensible Daten aus der Datenbank auszulesen. Hierbei führt ein Angreifer über die Daten, die vom Client an den Server übermittelt werden, eine SQL-Abfrage der zugrundeliegenden Datenbank aus.

#### Kennwortangriffe
- Bei Brute-Force-Angriffen werden nach dem Zufallsprinzip verschiedene Kennwörter ausprobiert.
- Bei einem Wörterbuchangriff wird z.B. statistisch häufig benutzte Kennworte oder zusammensetzung von Wörter und Ziffernblöcke getestet.

#### Man-in-the-Middle-Angriffe
- Bei einem MitM-Angriff schaltet sich ein Hacker in die Kommunikation zwischen einem Client und einem Server ein.
- Am häufigsten sind Session-Hijacking, IP-Spoofing, Replay-Angriff

#### Drive-by-Downloads
- Suchen nach ungesicherten Websites und Einschleusen schädlicher Skripts in Diese.

#### Cross-Site-Scripting (XSS)
- Angreifer schleusen dabei eine Nutzlast mit (z.B.) schädlichem Javascript in eine Website ein.

## C. I. A. Prinzip - Confidentiality, Integrity, Availability Prinzip
- Vertraulichkeit, Integrität, Verfügbarkeit

### Vertraulichkeit
- nur benötigten Daten verfügbar machen, für die berechtigten Personen.
 

### Integrität
- Logging von Veränderungen, Versionskontrolle/-Management.

### Verfügbarkeit
- gröstmögliche Verfügbarkeit, backups/sicherheitskopien etc.
 

### Authentizität
In der heutigen Zeit werden täglich zahlreiche Dateien elektronisch versendet. Eine vierte Grundbedrohung stellt der Verlust von Authentizität bei Übertragungen von Daten, Dokumenten oder Urkunden dar.         
Bei besonders sensiblen Daten, wie bspw. Urkunden, muss alles Notwendige unternommen werden, um den Urheber der Daten korrekt authentifizieren zu können. Es dürfen also keine Zweifel am Urheber der Dateien entstehen, ansonsten könnten zum Beispiel in Firmen falsche Aufträge oder Anweisungen erteilt werden. Neben der Authentizität von Dateien und Dokumenten kann es in bestimmten Bereichen, wie dem elektronischen Zahlungsverkehr, auch notwendig sein, die Authentizität von Programmen und Hardware zu garantieren.
- authentification vs authorisation

## Datenschutzbeauftragter
- ab ca. 10 Beschäftigten gesetzlich benötigt
- um Personal zu schulen/aufzuklären etc...