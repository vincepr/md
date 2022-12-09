# Switches

## Eigenschaften 
### halfduplex - vollduplex:      
Nur in eine Richtung vs gleichzeitiges Senden und Empfangen.
### netloadclass: 
3 am höchsten
### IEEE 802.1X
Standard zur Authentifizierung in Rechnernetzen.^
- Am Netzwerkzugang, einem physischen Port im LAN, einem logischen VLAN oder einem WLAN 
- erfolgt die Authentifizierung eines Teilnehmers durch den RADIUS -Server
- der die benötigten Zertifikate verwaltet.
### Port mirroring
Alles was einen Port gesendet wird wird geklont an einen anderen gesendet. -> Überwachung/Fehleranalyse
### quality of service
priorisierung von Packeten, z.B. VoIP.
### network switching parameters:
1. Switching-Speed: Wie schnell zwischen Modi umgeschalten werden können. Wie schnell store-forward berechnungen intern dauern...
2. Switching-Kapazität: wieviele Packete können pro port zwischengespeichert werden.
3. Switching-Memory: wieviele Packete zwischenzeitlich gespeichert werden können.

## unmanaged -managed

||unmanaged|managed|
|---|---|---|
|Kosten|billig|teuer|
|Steuerung|kann konfiguriert werden, Fernzugriff (hat also IP-adresse)| keine Konfigurationsschnittstelle, Plug-and-Play|
|Sicherheit|Keine Sicherheit abgesehen von Zubehör|802.1X-Authentifizierung, Schutz der Datenebene, Steuerungsebene und Managementebene|
|Funktionen|keine extra Features|Vlan, Port-Spiegelung, Trunk-Ports, StP-unterstützung|
|Funktionen|genau 1 Broadcast-domäne||
|Funktio

## 3 Betriebsmodi
1. **Cut-trough** Switching -> schnell
2. **Fragment-Free** Switching -> mittel
3. **Store and Forward** Switching -> langsam

---|
direkt weiterleiten, kopie im Speicher|
keine Fehlerkorrektur aber Counter der im Nachhinein Fehler zählt|


|cut-trough|error-free-cut-trough|fragment-free|store-forward|
|---|---|---|---|
|wertet nur die ersten Bytes aus, die die MAC-Adresse enthalten|direkt weiterleiten, aber Kopie im Speicher -> Fehlercounter|64Bytes ->fängt meisten Kollisionen ab|Komplett empfangen->vollständige Kollisionserkennung|
|keine Fehlerkorrektur|keine Fehlerkorrektur|keine Fehlerkorrektur|Prüfsumme->Fehlererkennung/-Korrektur|
|geringe Latenzzeit|wechselt Dynamisch den Modus wenn Fehlercounter zu groß wird|etwas langsammer|langsam|

- gute Switches können dynamisch umschalten. Wenn viele Fehler -> umschalten auf store-forward (error-free-cut-trough)
- wenn verschieden Übertragungsmedien aufeinandertreffen (z.B. Kupfer auf Glaßfaser) kann nur store-forward switching betrieben werden.

## Kaskadierung
- Verkettung von Switches

## Uplink -Downlink
- downlink: normaler port
- uplink: schnelleren port mit langsameren (downlink) verbinden

## StP - Spanning Tree Protocol
Außgangspunkt: Ausfallsicherheit ist wichtig -> Redundanzen im Netzwerk -> loops sind schlecht -> StP       
Verhindert loops / parallele Verbindungen in Netzwerken mit mehreren Switches.
- erzeugt eine Baumtopologie mit eindeutigen Verbindungspfaden -> keine doppelten Verbindungen zwischen Quelle und Ziel mehr vorhanden. -> jeder vernetzte Punkt ist über die bestmögliche Verbindung zu erreichen
- nicht benötigte Switches werden "deaktiviert" und sind im standby-mode ("Blocking")
- reorganisiert sich Regelmäßig -> reagiert auf Unterbrechungen/Ausfälle 

Außerdem
- höchster Switch heißt Root-Bridge
- Funktioniert in beliebig vermaschten Netzstrukturen
- in der **IEEE-Norm 802.1D** standardisiert

Gefahren bei Nichtverwendung
- Braodcast-Stürme
- instabile MAC-Adress-Tabellen
- hohe Auslastung der Leitung

Algorithmus Ablauf:
0. Switch mit der Niedrigsten Id wird zum Root. (bei gleicher ID entscheidet niedrigste MAC-Adresse)
1. Root-Switch hat alle Ports auf forward
2. Jeder nicht-Root-Switch öffnet Ports mit dem niedrigsten kosten zum Root-Switch. Blockt rest.
3. mehrere Switche kommen in Frage -> Vergleichen der Ports -> niedrigste Kosten- > forward -> designierter Switch am designierten Port.

Benutzt insgesamt fünf verschiedene Portzustände:
- Forwarding
- Blocking 
- Disabled

|Charakteristik der Ports|StP Zustand|Beschreibung|
|---|---|---|
|Alle Ports d Root-Switches|Forwarding|Root-Switch ist immer der designierte Switch|
|RootPorts aller nicht Root-Switches|Forwarding|Port mit den niedrigsten administrativen Kosten zum Root-Switch (=entsprechen direktem Weg zum Root-Switch)|
|Designated-Port aller Segmente |Forwarding|niedrigste Kosten vom Segment zum Root-SW |
|alle anderen Ports|Blocking|sollen zur Weiterleitung momentan nicht benutzt werden|
|vom admin deaktiviert oder ohne Kabel|Disabled|stehen nicht zur Verfügung|

# STP-Timer - Selbstregulation des Netztes
- Alle 2 Sekunden sendet Root ein Hello-Signal. -> so kann auf Veränderungen reagiert werden
- Sollte das Signal ausbleiben -> nach hello-Intervall (2sek) * 10 wird das StP mit einem neuen Root aufgebaut
- Jeder Sendet ein Hello-Signal aus mit der Station von der ich annehme, das sie mein (neuer) Root ist -> neues StP wird gebildet

# RSTP (Rapid-) und MSTP
Ürsprüngliche StP besitzt lange Konvergenzzeiten 
- RSTP ist Weiterentwicklung und benutzt bei Neuberechnung den alten Tree weiter bis der neue fertig ist
- MSTP erweiterung von RSTP für VLANS.

# Switch Stacking
2+ Switche werden zu einer logischen Einheit Kombiniert -> mehr zu verfügung stehende Ports

# Switch trunking


# Switch uplink
