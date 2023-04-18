# Raid - Redundant Array of Independent Disks 
## Ist Raid ein Backup?
**NEIN**, Backup helfen zwar bei der Wiederhestellung nach einem Datenverlust, RAID ist jedoch ein Werkzeug um Datenverluste von vornherein zu verhindern.

## Brutto- und Nettospeicher im Raid verbund
Brutto kapazität: Summe der KApazitäten der im RAid Verbund steckenden Platten.

Netto kapazität: Die nach Außen zur Verfügung gestellte Kapazität.

## Typen
### Raid 1
- Ist eine Spiegelung. Alles was auf Platte 1 kommt wird auf Platte 2 gespiegelt.
Speicherkapazitäten: (Bsp Platte1: 100GB, Platte2 100GB) / (P1: 250GB, P2: 150GB)
- Brutto-speicherkapazität: (200GB) / (400GB)
- Netto-speicherkapazität: (100GB) / (150GB)
Bei Raid 1 darf maximal eine Platte gleichzeitig ausfallen.
#### Vorteile Nachteile
|Vorteile |Nachteile |
|---|---|
|Vollständige Redundanz| Speicherkapazität ist maximal so groß wie Kapazität der kleinsten Festplatte|
|Datensicherheit und Geschwindigkeit lässt sich bei passendem Controller und Software optional erhöhen| Hoher Kostenfaktor|