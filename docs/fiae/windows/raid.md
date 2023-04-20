# Raid - Redundant Array of Independent Disks 
## Ist Raid ein Backup?
**NEIN**, Backup helfen zwar bei der Wiederhestellung nach einem Datenverlust, RAID ist jedoch ein Werkzeug um Datenverluste von vornherein zu verhindern.

## Brutto- und Nettospeicher im Raid verbund
Brutto kapazität: Summe der KApazitäten der im RAid Verbund steckenden Platten.

Netto kapazität: Die nach Außen zur Verfügung gestellte Kapazität.

## Typen

#### Vorteile Nachteile
|Vorteile |Nachteile |
|---|---|
|Vollständige Redundanz| Speicherkapazität ist maximal so groß wie Kapazität der kleinsten Festplatte|
|Datensicherheit und Geschwindigkeit lässt sich bei passendem Controller und Software optional erhöhen| Hoher Kostenfaktor|

### JBOD
- Es wird erst eine Festplatte vollgeschrieben, dann nächste etc.

### Raid 0 - Stripped Disk
- Daten werden auf 2 Festplatten aufgeteilt
- Kapazitätsnutzung, 100% aller Festplatten (da keine redundanz)
- Es wird sektorenweise zwischen den Festplatten gewechselt
    - daraus höhere Lesegeschwindigkeit
    - höhere Schreibgeschwindigkeit
Bei Raid 0 darf maximal 0 Platten ausfallen.

### Raid 1 - Spiegelung
- Ist eine Spiegelung. Alles was auf Platte 1 kommt wird auf Platte 2 gespiegelt.
Speicherkapazitäten: (Bsp Platte1: 100GB, Platte2 100GB) / (P1: 250GB, P2: 150GB)
- Brutto-speicherkapazität: (200GB) / (400GB)
- Netto-speicherkapazität: (100GB) / (150GB)
Bei Raid 1 darf maximal eine Platte gleichzeitig ausfallen.

### Raid 10 - kombination von 1 und 0

### Raid 5
- mindestens 3 Platten
- Paritätsfestplatte: 1
    - Solange Paritätsplatte und eine Weitere Platte (oder 2 nicht Paritätsplatten) da sind, können vollständige Informationen wiederhergestellt werden.

Bei Raid 5 darf 1 Platte ausfallen

### Raid 6
- mindestens 4 Festplatten
- 2 Paritätsplatten
Bei Raid 6 dürfen 2 Platten ausfallen

