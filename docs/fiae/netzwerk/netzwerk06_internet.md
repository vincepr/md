# Internet

# isdn
- unterschieden zwischen Basisanschluss und Primärmultiplexanschluss.
- Der Basisanschluss hat zwei Nutzkanäle (B-Kanäle) mit je 64 kBit/s und einen Steuerkanal (D-Kanal) mit 16 kBit/s.
- Primärmultiplex war für Firmen und Institutionen die mehr als 5 Basisanschlüsse benötigten. 

# DSL - Digital Subscriber Line
- splitter trennt die niderfrequenzen Sprachsignale und hochfrequenten Datensignale.
- adsl (z.B. mehr upload als download), vdsl
- unidrektional, bidirektional,  asymmetrisch
- Vectoringverfahren

## DSLAM - Digital Subscriber Line Access Multiplexer
- Kabelverzweiger: Vermittlungsstelle an der die "Haushalte" angeschlossen sind.

## ADSL - asymmetrisch(up/down)
- ITU.G.922.1
- z.B. maximales Senden: 1Mbit/s & maximales Empfangen: 16Mbit/s

## SDSL - symmetrisch(up/down)
- z.B. maximales Senden = 5Mbit/s = maximales Empfangen: 5Mbit/s

## VDSL
- Very High Speed Digital Subscriber Line
- Benutzt Vectoring / Supervectoring oder Direkt eine Glasfaßerkabel

### Vectoring / Supervectoring
- erhöht auf Kupferleitungen die maximale Datenrate im Down/Upload
- indem es Störungen durch Übersprechen "beseitig"
- bis zu 250Mbit

## rechenbeispiel:

|DSL-Technik | down-stream| up-stream|
|---|---|---|
|isdn|1Mbit|1mbit|
|sdsl|5mbit|5mbit|
|adsl|10mbit|1mbit|
|vdsl|50mbit|10mbit|


90 Gbite sollen in 5h gesendet werden. -> 3,5h im ersten, 7h für 2nd -> nur erstes in Frage. Oder so in etwa.

# FTTH - Fiber to the Home
- Glasfaßer-Anschlüsse

## SDH - SONET
- Standart für Glasfaßerübertragung.
- Zeitmultiplexing Verfahren.

# WLAN
- ad-hoc-modus: alle Teilnehmer gleichrangig und jeder kann **direkt** mit jedem kommunizieren. (peer to peer-Verbindung)
- infrastruktur-modus: Sterntopologie Mäßig mit AcessPoint/ Wlan-Router in der Mitte. (effektiv ist der Access Point hier ein Wlan-**Switch**)
- **SSID** Service Set Identifier Netzwerkname. Frei wählbarer Name des Wlan netzwerkes.
- > Wlan Standards - **Tabelle aus Buch**.

## Wlan Verschlüsselungen
- WEP: Preshared Key, nicht wirklich sicher -> nicht verwenden
- WPA1: nicht wirklich sicher -> nicht verwenden
- WPA2: nur noch verwenden wenn WPA3 nicht verfügbar
- WPA3:am sichersten -> empfohlen

- im unternehmensbreich auch über selbstgemachte Zertifikate -> stichwort: RADIUS (z.B. WPA RADIUS), benutzt einen Radius Server statt des Wlanrouters -> Firmenstandort übergreifend überall einloggen etc.
