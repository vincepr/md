# Windows Grundlagen

## Installationsverfahren (von Windows)
- automatisch vs manuell

Wieviel Muss individuall Hand angelegt werden:
- Zero Touch - voll automatisch. Server befehl `->` wake on lan `->` installation
- Low Touch - sehr wenige Eingriffe notwendig (z.B. Passwört und Username eingeben)
- High Touch -  manuelle Installation per Hand

Image(.iso) Strategien:
- Thick- - Ein Image (.iso) die alles beinhält. (Alles an Word/Excel/Access/Vscode...)
- Thin-  - Betriebsystem mit evtl noch Treibern aber nicht mehr
- Hybridimage - z.B. jede Abteilung bekommt ein eigenes Image.

Partitionieren der Festplatte 
- und konfigurieren notwendiger Raid-Level

Gegen Ende der Installation sind Datenschutz und Diensttechnische Regelungen vorzunehmen.

## Deaktivierte Konten und Gesperrte Konten
Wenn ein Benutzer nicht mehr auf sein Konto zugreifen kann, kann dies folgende Gründe haben.
- Benutzername oder Kennwort wurde falsch geschrieben.
- Benutzer verfügt über kein Konto an dem Anmeldeort/Domänenkonto
- Das Konto wurde von einem Admin deaktiviert
- Das Konto wurde vom System gesperrt, weil z.B. ein Verstoß gegen Sicherheitsrichtlinen vorliegt (zu oft versucht falsch einzuloggen)