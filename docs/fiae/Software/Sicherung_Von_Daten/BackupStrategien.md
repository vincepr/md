# Backupstrategien

## Backup strategien
- **Voll-Backup:** Momentaufnahme aller Daten auf der Geräte-Festplatte z. B. zur späteren Wiederherstellung nach Absturz, Beschädigung oder Verlust deines Geräts bzw. deiner Daten.
- **Inkrementelles Backup:** Baut auf ein vorheriges Backup auf, indem es nur neue oder geänderte Dateien sichert. Falls irgendeine der Dateien beschädigt oder verloren ist, sind alle nachfolgenden Versionen dieser Datei ungültig.
- **Differentielles Backup:** Hängt direkt mit dem Voll-Backup zusammen. Alle neuen oder geänderten Dateien werden hinzugefügt. Demzufolge beeinflusst eine zerstörte Datei nicht nicht die nachfolgenden Versionen.
- **Archivierung:** Dauerhafte Datensicherung von Kopien der Original-Dateien im Zustand zum Zeitpunkt der Speicherung. Anschließend ist keine aktive Nutzung oder Änderung der Daten mehr ohne weiteres möglich.

### Archivbit
Das Archivbit (auch Archiv-Attribut / Archiv-Flag) wird bei incrementellen oder differenziellen Sicherungen benutzt.

- Wenn der User Daten ändert wird das bit auf 1 gesetzt.
- Nutzen des Bits je nach Strategie.
    - Bei Inkrementeller-Strategie: 
        - bei inc-backup: alles mit 1 wird gesichert. Danach auf 0 gesetzt.
    - Bei Differenzieller-Strategie:    
        - bei diff-backup: alles mit 1 wird gesichert. Wert bleibt 1.
        - vollbackup: alles wird gesichert (egal ob bit 1 or 0). Danach bits aller dateien auf 0 setzen.

### Backup vs Archivierung

|**Backup**| **Archivierung**|
|---|---|
|kurz-mittelfristig| langfristige Sicherung|
|regelmäßige Sicherungskopie wichtiger Daten|Daten werden dauerhaft in Archiv verschoben|
|Sicherung im Fall von Datenverlust, Festplattenausfall, Cyberangriff...| Erfüllung gesetzlicher/brachenspezifischer Vorgaben/Regelungen|
|Daten werden in regelmäßigen Abständen überschrieben| Daten werden archiviert und danach nicht verändert|


### automatisches Backup



|automatisch|manuell|
|---|---|
|**Voreile**|**Vorteile**|
|Zuverlässigkeit|Bessere Kontrolle|
|Konsistenz|Flexibilität|
|Sicherheit|Unabhängigkeit|
|Zeitersparnis||
|**Nachteile**|**Nachteile**|
|Erhöhter Kontrollaufwand|Unzuverlässigkeit|
|Abhängigkeit der Technik|Menschliches Versagen|
|Ressourcenverbrauch||




### NAS-Backup SAN-Backup Cloud-Services-Backup




|**NAS-Backup**|**SAN-Backup**|**Cloud-Services-Backup**|
|---|---|---|
|**Vorteile**|**Vorteile**|**Vorteile**|
|Einfache Integration|hohe Performance|Unbegrenzte Skalierbarkeit|
|geringe Kosten|gute Redundanz|Sehr gute Redundanz|
|schneller Zugriff|Zentralisiert Verwaltbar|einfachere Automatisierung|
||Zentralisiert Skalierbar||
|**Nachteile**|**Nachteile**|**Nachteile**|
|Abhängigkeit von Infrastruktur|hohe Kosten|Benötigt Internetzugang|
|Einzelner Speicherort|Komplexität|Datenschutz und Sicherheit|
|Sicherheitsrisiko|Potenziell Single point of failure|Langzeitkosten|
|||Eingeschränkte Kontrolle|
|**geeignet für**|**geeignet für**|**geeignet für**|
|kleine Struckturen|Große Infrastrukturen. Sehr hohe Leistungsanforderungen|Theoretisch Alle|





## Vollsicherung / Voll Backup
Sicherung aller Daten




|Vorteile|Nachteile|
|---|---|
|alle Daten in der neusten Version|Zeitlich - Es dauert sehr lange|
|einfache Wiederherstellung|großer Ressourcenaufwand|
|Unabhängigkeit von anderen Sicherungen||
|einfacher Redundanzen zu bilden||




## Inkrementelles Backup

|Vorteile|Nachteile|
|---|---|
|reduzierter Speicherbedarf|aufwendig und komplexer bei Wiederherstellung|
|schnelles Backup|Abhängigkeit des Vorherigen Backup|
|effizientere Speichernutzung||




Eine Vollsicherung wird erstellt.
|Backup 01||
|---|---|
|Backup 01||

## Differentielles Backup




|Vorteile|Nachteile|
|---|---|
|einfache Widerherstellung|Potentieller Speicherzuwachs|
|||
|||
|||


## 3 - 2 - 1 - Backup-Regel
- 3. Es existieren drei Ausführungen Ihrer Unternehmensdaten: ein Primärsystem mit dem Sie arbeiten und zwei Backups
- 2. Die beiden Backups werden auf unterschiedlichen Speichermedien gespeichert (redundanz)
- 1. Eines der beiden Backups wird offsite gelagert. z.B. in Cloud. (vorbeugung von Katasrophen wie Feuer)
### Vorteile / Nachteile
**Vorteile:**

- Ausfälle und verlust von wichtigen Unternehmensdaten sind extrem Teuer. Dieses Risiko kann so minimiert werden
- Schutz auch vor Cyberkriminellen Aktivitäten wie z.B. Ransomware
- Datenverfügbarkeit muss gewährtleistet werden um Datenschutzverorndungen einzuhalten

**Nachteile:**

- Für die meisten Unternehmen ist ein tägliches Voll-Backup nicht durchführbar. (daher alternativen wie inkrementelle oder differentielle Backups).
    - In der Folge sind zusätzliche Schritte und Verwaltung erforderlich um sicherzustellen, dass alle verfügbaren Kopien auf dem neuesten Stand und leicht zugänglich sind.
- Falls Cloud-Speicherdienste verwendet werden, ist schwer abzuschätzen ob und wie Datenschutzprozesse eingehalten werden.
- Für große Sicherungskopien können Kosten regelrecht explodieren, da Benötigte Bandbreite und benötigte Services von Service-Providern sehr kostspielig werden können.

### Erweiterung zu 3 - 2 - 1 - 1 - 0 Regel
- **zweites 1** : Als ultimative Absicherung ein **Airgapped Backup**, an das niemand herankommt. 
- **ergänzende 0**: Backups sind nur gut, solange sie auch funktionieren. Deshalb:   
    - Tägliches Monitoring (Der Backups) um fehlerhafte Sicherungsaufgaben zu erkennen. 
    - Sowie regelmäßiges Testen und überprüfen ob Backups auch in der Lage sind die Daten erfolgreich wiederherzustellen (wielange dies dauert etc...)

## Türme von Hanoi - Backup Strategie
- nach festem Schema (angelehnt an die Türme von Hanoi-Spiel) werden verschiedene BackupFestplatten gewählt.
- So kann z.B. (mit 3 Verwendeten Ringe/Platten) 1Tag-zurückgerollt werden, 2 Tage, oder 4 Tage.
- oder mit 4 Verwendeten Ringe: 1Tag, 2Tage, 4Tage, 8Tage.

|Tage |1| 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
|RingA|x|   | x |   | x |   | x |   | x |
|RingB| | x |   |   |   | x |   |   |   |
|RingC| |   |   | x |   |   |   |   |   |
|RingD| |   |   |   |   |   |   | x |   |

## Großvater-Vater-Sohn - Backup Strategie
- Sohn Backup oft inkrementelles Backup
- Vater oft diferentielles Backup
- Großvater oft Vollbackup

z.B. 

- Rotiert alle Sohn Backups pro Tag
- Rotiert die Vater Backups pro Woche
- Rotiert die Großvater Backups pro Monat

# Kriterien Planung Backupstrategien

## RTO - Recovery Time Objectives und RPO - Recovery Point Objective
![Alt text](./RTO-RPO.excalidraw.svg)

### Kriterien für Auswahl
- Kosten (Lizenz)
- Funktionsumfang
- Skalierbarkeit
- Service
- Kompatibilität
- Zuverlässigkeit
- Datensicherheit und Datenschutz
- Zentrale Verwaltung, Schnitstellen