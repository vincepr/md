# Internet

# isdn
- unterschieden zwischen Basisanschluss und Primärmultiplexanschluss.
- Der Basisanschluss hat zwei Nutzkanäle (B-Kanäle) mit je 64 kBit/s und einen Steuerkanal (D-Kanal) mit 16 kBit/s.
- Primärmultiplex war für Firmen und Institutionen die mehr als 5 Basisanschlüsse benötigten. 

# dsl 
- splitter trennt die niderfrequenzen Sprachsignale und hochfrequenten Datensignale
- adsl (z.B. mehr upload als download), vdsl
- unidrektional, bidirektional,  asymmetrisch
- Vectoringverfahren

## rechenbeispiel:

| | up| down|
|---|---|---|
|adsl|10mbit|10mbit|
|vdsl|50mbit|5mbit|
|isdn|1Mbit|1mbit|

90 Gbite sollen in 5h gesendet werden. -> 3,5h im ersten, 7h für 2nd -> nur erstes in Frage. Oder so in etwa.

# WLAN
- ad-hoc-modus: alle Teilnehmer gleichrangig und jeder kann **direkt** mit jedem kommunizieren. (peer to peer-Verbindung)
- infrastruktur-modus: Sterntopologie Mäßig mit AcessPoint/ Wlan-Router in der Mitte. (effektiv ist der Access Point hier ein Wlan-**Switch**)
- **SSID** Service Set Identifier Netzwerkname. Frei wählbarer Name des Wlan netzwerkes.


- > Wlan Standards - Tabelle aus Buch.

## Wlan Verschlüsselungen
- WEP: Preshared Key, nicht wirklich sicher -> nicht verwenden
- WPA1: nicht wirklich sicher -> nicht verwenden
- WPA2: nur noch verwenden wenn WPA3 nicht verfügbar
- WPA3:am sichersten -> empfohlen

- im unternehmensbreich auch über selbstgemachte Zertifikate -> stichwort: RADIUS (z.B. WPA RADIUS), benutzt einen Radius Server statt des Wlanrouters -> Firmenstandort übergreifend überall einloggen etc.
