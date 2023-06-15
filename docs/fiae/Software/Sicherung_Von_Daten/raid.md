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

### JBOD - Just a bunch of disks
- Es wird erst eine Festplatte vollgeschrieben, dann nächste etc.

### Raid 0 - Stripped Disk
- Daten werden auf 2 Festplatten aufgeteilt
- Kapazitätsnutzung, 100% aller Festplatten (da keine redundanz)
- Es wird sektorenweise zwischen den Festplatten gewechselt
    - daraus höhere Lesegeschwindigkeit
    - höhere Schreibgeschwindigkeit
Bei Raid 0 darf maximal 0 Platten ausfallen.

### Raid 1 - Spiegelung
- Ist eine Spiegelung. Alles was auf Platte 1 kommt wird auf Platte 2 gespiegelt. (und bei weiteren mehrfach gespiegelt. bsp 1 Festplatte 4 mal identisch bei 5-Platten in Raid1 )
Speicherkapazitäten: (Bsp Platte1: 100GB, Platte2 100GB) / (P1: 250GB, P2: 150GB)
- Brutto-speicherkapazität: (200GB) / (400GB)
- Netto-speicherkapazität: (100GB) / (150GB)
Bei Raid 1 darf maximal eine Platte gleichzeitig ausfallen.

#### Berechnung:
- `PlatteA: 10TB, PlatteB: 20TB -> Kapazität: (Min)=10TB`

### Raid 10 / 0+1 - kombination von 1 und 0
- Raid 10 und Raid01 (auch Raid0+1) sind in ihrem effekt ähnlich. Kapazität/Speichereffizienz sind identisch.
    - Nur was toplevel ist wird jeweils getauscht

Durch Kombination von Raid1 und Raid0 werden z.B. 2 Raid1 Systeme mit Raid0 kombiniert:
1. `Raid1-Nr1 - PlatteA=10TB + PlatteB=20TB -> Kapazität:10TB `
2. `Raid1-Nr2 - PlatteC=30TB + PlatteD=20TB -> Kapazität:20TB `
3. `Gesamte Kapazität = kap.Raid1-Nr1 + kap.Raid2-Nr2 = 10TB + 20TB = 30TB`

### Raid 5
- mindestens 3 Platten
- Paritätsfestplatte: 1
    - Solange Paritätsplatte und eine Weitere Platte (oder 2 nicht Paritätsplatten) da sind, können vollständige Informationen wiederhergestellt werden.

Bei Raid 5 darf 1 Platte ausfallen
#### Berechnung:
- `PlatteA: 10TB, PlatteB: 20TB, PlatteD: 40TB -> Kapazität: (Min)*(Anz-1)=(10TB)*(3-1)=20TB`
- `PlatteA: 20TB, PlatteB: 20TB, PlatteC: 40TB, PlatteD 20TB -> Kapazität: (Min)*(Anz-1)=(20TB)*(4-1)=90TB`

### Raid 6
- mindestens 4 Festplatten
- 2 Paritätsplatten
Bei Raid 6 dürfen 2 Platten ausfallen
#### Berechnung:
- `PlatteA: 10TB, PlatteB: 20TB, PlatteC: 20TB, PlatteD: 40TB -> Kapazität: (Min)*(Anz-2)=(10TB)*(4-2)=20TB`
- `PlatteA: 30TB, PlatteB: 30TB, PlatteC: 40TB, PlatteD: 40TB, PlatteE: 50TB -> Kapazität: (Min)*(Anz-2)=(30TB)*(5-2)=20TB`

## Hot-spare-Festplatte
- Eingebaute Festplatte die zuerst inaktiv bleibt. 
- Sollte eine Festplatte ausfallen, z.B. im Raid Betrieb, springt diese Swap-Festplatte automatisch ein und `ersetzt` die ausgefallene Festplatte.

## Hot-swap-Festplatte
- Bei Festplatten die z.B. im Raidverbund sind, kann im laufenden Betrieb eine herausgenommen und oder ausgetauscht werden.

