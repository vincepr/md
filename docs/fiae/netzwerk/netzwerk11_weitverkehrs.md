# Weitverkehrsnetze (Öffentliche Netze)
- quasi alles ab Telefonanschluss(ins öffentliche Netz) - entspricht **WAN**

## Internet
- alles was öffentlich zugänglich ist. (öffentliche IPs)
## Intranet
- Nutzt private IP-Adresse
- "innerhalb" von Unternehmen/ Behörden implementieren. Standortübergreifend. -> herkömmlich durch Standortleitungen -> mitlerweile nur noch virtuelle Leitungen von Providern.
- im gegensatz zu LAN/WAN/GAN nicht die örtliche Abgrenzung, sondern die Abgrenzung des Benutzerkreises.
    - Protokolle IPsec sichern Kommunikation über unsichere öffentliche IP-Netze
- (**Vom Internet aus nicht sehbar**). Kein ungeregelter Übergang in öffentliche Zweige möglich. Firewalls kontrollieren logische Schnittstellen zum Internet. 

## Extranet
- Erweiterung des Intranets um eine Komponente, die nur von einer festgelegten Gruppe externer Benutzer verwendet werden kann.
- Bereitstellung von Informationen über z.B. Unternehmensgrenzen hinweg. (Zulieferer Portal etc.)


# Arten von Netzen
- PstN
- ISDN
- kabel (tv)
- Unterseekabel
- Mobilfunk- /Satellitennetz

||lokales Netz|Weitverkehrsnetz|
|---|---|---|
|Konzept|Übertragung von Daten/Audio/Video... in einem begrenzten Bereich | Übertragung von Daten/Audio/Video... in einem weit begrenzten Bereich (EU, weltweit etc)|
|Übertragungsarten|100Mbit/s bis 10Gbit/s|2Mbit/s (z.BTelefon) bis 100Gbit/s (Glasfaßer)|
|Eigentum|im Besitz des Benutzers|Im Besitz öffentlicher oder privater Betriebe|


# Dienste
- Internetdienste - Server-Applikationen
- Quality of Service:
    - Dauer des Verbindungsaufbaus
    - Ausfallwahrscheinlichkeit
    - Durchsatzraten
    - Priorisierung von Protokollen

# Verbindungsarten

- Festverbindung: Standleitung/Mietleitung

# Vermittlungsprinzip
|Paketvermittlung|Leitungsvermittlung|
|---|---|
|Keine dedizierte Verbindung|physikalische(Standleitung) oder virtuelle Verbindung|
|Daten werden an verschiedenen Stationen zwischengespeichert|entsprechende/zugesicherte Kapazität und Qualität|
|Eine Garantie für Datendurchsatz kann nicht gegeben werden (z.B. eine Zwischenstation hat keine Kapazität mehr -> Packetloss)|Beispiel: ein Telefongespräch|

|Kennzeichen|Paketvermittlung|Leitungsvermittlung|
|---|---|---|
|Verbindungsaufbau|nicht benötigt|muss zuerst stattfinden|
|Dedizierte Leitung|nicht benötigt|wird benötigt|
|haben Pakete immer die gleiche Route|Nein|Ja|
|Verfügbare Bandbreite|dynamisch|fix/garantiert|
|Zwischenspeicherung|Ja|Nein|
|Abrechnung/Kosten|Datenmenge/Datenvolumen|Zeiteinheit|

# Netzneutralität
gleichberechtigte neutrale Übertragung von Daten im Internet. Ohne Bevorzugung/Diskriminierung von z.B. Gaming/Video Paketen.

# Duplex

## Simplex
Es kann nur in einer Richtung gesendet werden.
## Halbduplex
Es kann in beide Richtung gesendet/empfangen werden. Jedoch nur in eine Richtung zu einem Zeitpunkt.
## Vollduplex
Es kann in beide Richtungen übertragen werden. Die Kommunikation erfolgt über zwei getrennte eigenständige Kanäle. (gleichzeitiges Hören(Downstream) und Sprechen(Upstream))
## Multiplexing
- Unterschied Multiplexing und Multiple Access:
Im Zusammenhang mit Multiplexverfahren wird von Multiplexing und auch von Multiple Access gesprochen. Die Verfahren bei Multiplexing und Multiple Access dienen zur gemeinsamen Nutzung des Übertragungsmediums und sind im wesentlichen gleich.
- **Multiplexing**
    - Bei Multiplexing handelt es sich um Verfahren, bei denen ein Multiplexer am Anfang eines Übertragungswegs mehrere Signale bündelt. Am Ende des Übertragungswegs teilt ein Demultiplexer sie wieder in einzelne Signale auf.
- Multiple Access:
    - Bei Multiple Access geht es darum, dass sich Teilnehmer das Übertragungsmedium teilen und der Zugriff darauf selbständig geregelt wird. Hierbei gibt es zwei Möglichkeiten. Entweder entscheidet eine zentrale Komponente über die Zuteilung der Zugriffsrechte oder die Teilnehmer arbeiten mit einer Kollisionserkennung, die dann wirksam wird, wenn zwei Teilnehmer gleichzeitig senden.

# Modulation
![](./excalidraw/modulation.svg)
## Modem (analog)
- Wandelt digitale Signale von der Computerschnittstelle in analoge Signale per Modulation um. (Fürs Telefonnetz)
- Modulation um das übertragende Signal in eine Form zu bekommen die sich für Übertragung über weite Strecken eignet 
    - digitale Signale Eignen sich nicht, da sie schon nach kurzer Strecke verfälscht sind
- Beim Modem im Telefonnetz Speziell im Frequenzbereichen zwischen 300 un 3400 Herz
### Modem-Steuerung
- AT-Befehle steuern Modem. Beim Wählprogramm wird dies automatisch erledigt. -> Übertragungsparameter werden abgestimmt:
    - Übertragungsgeschwindigkeit, Fehlerkorrektur, Datenkompression, Protokolle
    - dann beginnt die eigentliche Datenübertragung

# PPP - Point to Point Protokoll
- Auf Layer 2
- Verkapselt Packete von höheren Schichten
- Protokoll für Einwahl ins Internet über leitungsvermittelnde Netze.
## PPPtP - Point to Point Tunneling Protocol
- z.B. für VPNs
- Unsicher aber wird noch benutzt
## SSTP - Secure socket Tunneling Protocol
- MS nachfolger zu PPPtP. Nutzt verschlüsseltes HTTP auf Port 443.

# Bluetooth

## Anwendungszwecke
- Multimedia
- Musik
- Headset/Kopfhörer etc.

## Verbindungsablauf
1.  Geräteverbindung: Die beteiligten Geräte müssen eine Verbindung herstellen, indem sie ihre Bluetooth-Adressen austauschen und eine sichere Verbindung aufbauen.
2.	Dienstsuche: Das Empfängergerät nutzt SDP, um zu ermitteln, welche Dienste auf dem Sendergerät verfügbar sind.
3.	Kanalaufbau: Über L2CAP wird ein logischer Kanal für die Datenübertragung eingerichtet.
4.	Übertragung: Die eigentliche Übertragung der Daten erfolgt über RFCOMM.
5.	Überprüfung: Während der Übertragung werden die Daten überprüft, um sicherzustellen, dass keine Daten verloren gehen.
6.	Fertigstellung: Nach erfolgreicher Übertragung werden die Verbindung und der logische Kanal geschlossen.


## Datenübertragungsrate:
- Bluetooth 1.0 und 1.1: 721 Kbps
- Bluetooth 2.0 + EDR: 2 Mbps
- Bluetooth 3.0 + HS: 24 Mbps
- Bluetooth 4.0 (Low Energy): 1 Mbps
- Bluetooth 5.0: 2 Mbps (Low Energy), maximal 2 Mbps (Classic)

## Reichweite:
- Bluetooth 1.0 und 1.1: 10 Meter
- Bluetooth 2.0 + EDR: 10 Meter
- Bluetooth 3.0 + HS: 50 Meter
- Bluetooth 4.0 (Low Energy): bis zu 50 Meter
- Bluetooth 5.0: bis zu 400 Meter (Low Energy), bis zu 100 Meter (Classic)


# DECT
- Digital Enhanced Cordless Telecommunications
- EU internationaler Standard für Funktechnik
-	verbindungsortientiert
-	Die Übertragung basiert auf folgenden Verfahren:
    -	Time-Division-Duplex
    -	Time-Division-Multiple-Access
    -	Frequency-Division-Multiple-Access

## Vorteile:
-	Reichweite 30 - 50m innerhalb Gebäuden, bis 300 m im Freien
-	Hohe Abhörsicherheit
-	Sehr energiesparend
-	Eigener, vom WLAN unabhängiger     Frequenzbereich
-	Bessere Tonqualität als     vorhergehende Standards
-	Vielseitiger Einsatz
-	Gleichzeitige Nutzung mehrerer   Mobilteile möglich
-	Kostenlose interne Gespräche
-	Mobilteile sind an mehreren Basisstationen nutzbar

# VoIP - Voice over IP 
- Internet-Telefonie
- Layer 3 OSI
- IP Adresse Sender - Empfänger
- SiP (Session Inititiation Protokoll) 
    - SiP-Identifier: 123562435@Test.com

# Mobilfunknetz

## GSM/GRPS - 2G
- bis max. 50Kbit/s
- SMS und MMS eingeführt

## 3G - UMTS
- WCDMA = 384 Kbps
- HSPA 7,2 Mbps
- HSPA+ 21,6 Mbps

## LTE - 4G
- Mindestgeschwindigkeit 100Mbps bis 1 Gbps
- Ausreichend für HD-TV, HD-VOD, Spiele etc#
- 10-15km Entfernung

## WiMAX (4G)
- (in Deutschland gescheiterte) "alternative" zu LTE
- bis zu 40km Entfernung 
- geringere Latenzzeiten (wie 5G)
- Funktioniert gut in langläufigen Ländischen Gebieten USA, Afrika, Russland ...

## 5G
- erwartete Geschwindigkeit von 20 Gbit/s bis 10Gbit/s