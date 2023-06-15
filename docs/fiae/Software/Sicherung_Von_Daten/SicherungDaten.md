# Schutz und Sicherung von Daten

# Sicherung und Wiederherstellung

## Backup strategien
- **Voll-Backup:** Momentaufnahme aller Daten auf der Geräte-Festplatte z. B. zur späteren Wiederherstellung nach Absturz, Beschädigung oder Verlust deines Geräts bzw. deiner Daten.
- **Inkrementelles Backup:** Baut auf ein vorheriges Backup auf, indem es nur neue oder geänderte Dateien sichert. Falls irgendeine der Dateien beschädigt oder verloren ist, sind alle nachfolgenden Versionen dieser Datei ungültig.
- **Differentielles Backup:** Hängt direkt mit dem Voll-Backup zusammen. Alle neuen oder geänderten Dateien werden hinzugefügt. Demzufolge beeinflusst eine zerstörte Datei nicht nicht die nachfolgenden Versionen.
- **Archivierung:** Dauerhafte Datensicherung von Kopien der Original-Dateien im Zustand zum Zeitpunkt der Speicherung. Anschließend ist keine aktive Nutzung oder Änderung der Daten mehr ohne weiteres möglich.

### Backup vs Archivierung

|**Backup**| **Archivierung**|
|---|---|
|kurz-mittelfristig| langfristige Sicherung|
|regelmäßige Sicherungskopie wichtiger Daten|Daten werden dauerhaft in Archiv verschoben|
|Sicherung im Fall von Datenverlust, Festplattenausfall, Cyberangriff...| Erfüllung gesetzlicher/brachenspezifischer Vorgaben/Regelungen|
|Daten werden in regelmäßigen Abständen überschrieben| Daten werden archiviert und danach nicht verändert|

## Arten von Speichermedien
Beispiele für Speichermedien:
Usb-Stick, CD, DVD, SSD, HDD, Magnetbänder, SD-Karte, NAS, Cloud-Speicher...

### Kategorien
- Optisch (Cd, DVD, BluRay)
- Magnetisch (HDD, Magnetband)
- Halbleiterbasiert (SSD, Usb-Stick, SD-Karte)
- Cloud-Speicher (Onedrive, Selfhosted, AWS-Bucket)
- Netzwerkbasiert (NAS)

## Vorteile Nachteile Speichermedien
### CD, DVD, Blu-Ray
##### CD
- Geeignet für inkrementelle und differentielle Datensicherung/Archivierung
- Kapazität 650MB - 900MB
- Kosten gering
- Lebensdauer bei optimaler Lagerung 80-100Jahre
    - stabile Raumtemperatur von 25C
    - Luftfeuchtigkeit bei 40-60%
    - kein Licht, keine Kratzer
#### DVD
- wie CD
- Kapazität 4,7GB-17GB
- Kosten relativ günstig
- Lebensdauer 30 Jahre
#### Blu-Ray
- wie CD
- Kapazität: 25GB
##### Vorteile und Nachteile
- Risiken: Wärme, Feuchtigkeit, Licht, Fingerabdrücke, Kratzer, Bruch
- Voraussetzungen: PC mit geeignetem Laufwerk
- Nicht für ein Voll-Backup geeignet
- Flexibel/transportabel

### Speicherkarte
- Zwischenspeicher für Transport oder für Digital-Kameras etc.
- Kapazität bis zu 2 TB
- Kosten je nach Speichergröße ab ca 20 Euro für 64GB
- Lebensdauer 10k bis 100k Schreibzyklen
##### Vorteile und Nachteile
- Risiken: Verschmutzung, Korrosion, Beschädigung der Kontakte
- Voraussetzungen: Passender USB-Anschluss am Gerät
- Nur begrenzt wiederbeschreibbar
- Flexibel/transportabel

### USB-Speicher
- Geeignet für DAtentransport
- Kapazität: 32MB - 1TB
- Kosten: ab 5Euro aufwärts
- Lebensdauer: je nach Anzahl der Schreibzyklen bis zu 10 Jahre
##### Vorteile und Nachteile
- Risiken: Verschmutzung, Korrosion, Beschädigung der Kontakte
- Voraussetzungen: Passender USB-Anschluss am Gerät
- Nur begrenzt wiederbeschreibbar
- Flexibel/transportabel

### SSD
- Vor allem für Voll-Backup. Ungeeignet für Archivierung.
- Kapazität: bis zu 5 TB
- Kosten´: je nach Speichergröße ab ca 100Euro
- Lebensdauer: 10 Jahre / 5k bis 10k Schreibzyklen
##### Vorteile und Nachteile
- Risiken: Relativ unempfindlich, da ohne extern bewegliche Teile
- Voraussetzungen: Passender Anschluss am gerät.
- Nur begrenzt wiederbeschreibbar.
- bleibt Stromversorgung für längeren Zeitraum aus sind SSDs anfällig für Datenverlust. (ab 3 Monate ohne Strom Datenverlust möglich)
- eingeschränkt Flexibel/transportabel

### Externe Festplatte
- Geeignet für Voll-Backup und dauerhafte Datensicherung
- Kapazität: bis zu 15 TB
- Kosten: je nach Größe ab ca 70 Euro
- Lebensdauer: ca 10 Jahre
##### Vorteile und Nachteile
- Risiken: Feuchtigkeit, Stöße, magnetische Felder, Verschleiß beweglicher Teile
- Voraussetzungen: Passender Anschluss am Gerät
- eingeschränkt Flexibel/transportabel

### Magnetband
- Geeignet für Server-Backups, Archivierung.
- Kapazität: mehr als 6 TB
- Lebensdauer: 10 - 30 Jahre
- Kosten: hoch
##### Vorteile und Nachteile
- Risiken: Wärme, Feuchtigkeit, magnetische Felder
- Voraussetzungen: Spezielles Bandlaufwerk
- Verliert ihrgendwann die Magnetisierung. Ablösung der Schichten des Bandes (Haltbarkeit)
- nicht Flexibel/transportabel

### Cloud - Hybrid - NAS -Storage
- Risiken: Angreifbar während der Datenübertragung. Server Ausfall. Abhängig vom Anbieter.
- Voraussetzungen: Zugung zu Internet/Netzwerk
- Daten lagern auf fremden Server
- Kosten, Datensicherheit und mögliche Offline-Zugriffe sind abhängig vom Anbieter/Lösung
- Sehr flexiebel, da weder orts noch gerätgebunden.