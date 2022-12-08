# Switches

||unmanaged|managed|
|---|---|---|
|Kosten|billig|teuer|
|Steuerung|kann konfiguriert werden, Fernzugriff (hat also IP-adresse)| keine Konfigurationsschnittstelle, Plug-and-Play|
|Sicherheit|Keine Sicherheit abgesehen von Zubehör|802.1X-Authentifizierung, Schutz der Datenebene, Steuerungsebene und Managementebene|
|Funktionen|keine extra Features|Vlan, Port-Spiegelung, Trunk-Ports, StP-unterstützung|
|Funktionen|genau 1 Broadcast-domäne||
|Funktionen|pro Port 1 Kollisionsdomäne||


## 3 Betriebsmodi


1. **Cut-trough** Switching -> schnell
2. **Fragment-Free** Switching -> mittel
3. **Store and Forward** Switching -> langsam


|cut-trough|fragment-free|store-forward|
|---|---|---|
|wertet nur die ersten Bytes aus, die die MAC-Adresse enthalten|64Bytes ->fängt meisten Kollisionen ab|Komplett empfangen->vollständige Kollisionserkennung|
|keine Fehlerkorrektur|keine Fehlerkorrektur|Prüfsumme->Fehlererkennung/-Korrektur|
|geringe Latenzzeit|etwas langsammer|langsam|

- gute Switches können dynamisch umschalten. Wenn viele Fehler -> umschalten auf store-forward.


## StP - Spanning Tree Protocol
Verhindert loops / parallele Verbindungen in Netzwerken mit mehreren Switches.
- erzeugt eine Baumtopologie mit eindeutigen Verbindungspfaden -> keine doppelten Verbindungen zwischen Quelle und Ziel mehr vorhanden.
- jeder vernetzte Punkt ist über die bestmögliche Verbindung zu erreichen
- reorganisiert sich bei Unterbrechungen/Ausfälle 
- Funktioniert in beliebig vermaschten Netzstrukturen
- in der IEEE-Norm 802.1D standardisiert

Benutzt insgesamt fünf verschiedene Portzustände:
- Forwarding
- Blocking 
- Learning
- Listening
- Disabled

# IEEE 802.1X
Standard zur Authentifizierung in Rechnernetzen.^
- Am Netzwerkzugang, einem physischen Port im LAN, einem logischen VLAN oder einem WLAN 
- erfolgt die Authentifizierung eines Teilnehmers durch den RADIUS -Server
- der die benötigten Zertifikate verwaltet.
