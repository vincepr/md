# Werkzeuge der Softwareentwicklung

# Compiler vs Interpreter

##  Compiler
- um ein Programm schnell ausführen zu können, muss es von vor der Laufzeit in Maschinencode umgewandelt werden, den der Prozessor ausführen kann.
- Der Compiler übersetzt Code in Maschinencode, ohne jedoch die Befehle dabei schon auszuführen.

## Interpreter
- übersetzt Programme zeilenweise, wobei erst jede Zeile einer Syntaxprüfung unterzogen wird.
- sind die Befehle in der Zeile korrekt, werden sie vom Interpreter in Anweisungen für den Prozessor übersetzt und ausgeführt.
- anschließend wird die nächste Zeile geprüft.
- tritt ein Syntaxfehler auf, wird der Übersetzungsvorgang abgebrochen und eine Fehlermeldung ausgegeben
- Die vorherigen Schritte wurden jedoch ausgeführt und Veränderungen in z.B. Files sind permanent.

## Assembbler
- Maschinennaher Code, schwer Wartbarkeit, hohes Kontextwissen wird benötigt.
- assembler Sprache hat Zugang zum vollständigen Befehlssatz der CPU.
- Jedoch haben verschiedene Prozessorarchitekturen grundverschiedene Assembler & Maschinensprachen

# Standard Libraries 
- Sammlung von bereits implementierten Funktionalitäten (DataStructures, subroutines, macro definitions, global variables, templates etc..)
- Interaction with the host platform, including input/output and operating system calls.
- z.B. Math funktionen wie sqrt oder Wert für PI


# Grundlegende Sprachelemente
- Syntax     : bestimmt den Aufbau der Sätze, wie Anweisungen aufgebaut sind.
- Semantik   : Bedeutung der Sätze- was bedeuten Anweisungen
- Bezeichner : muss (oft) mit einem Buchstaben beginnen. identifiziert variablen, Funktionen, Klassen, module etc...
- Zuweisung  : Besteht aus einem Bezeichner, dem Zuweisungsoperator = und einem Ausdruck
- Reservierte Wörter : Schlüsselwörter, die eine Spezielle Bedeutung haben (true, false, null...)
- Kommentare : Interpreter/Compiler ignoriert diese, sie werden also nicht Maschinencode umgesetzt. Dienen dazu Code für Menschen besser verständlich zu machen.

# Variablen

## Standardtypen - elementare Datentypen
- Numerische DAten - Unterteilung in ganze Zahlen (Integer) und reelle Zahlen (z.B. Float)
    - Integer-Datentypen - besitzen keine Nachkommastellen. Viele Sprachen besitzen mehrere Integer-Datentypen, die sich durch Bezeichnung, Wertebereich und Speicherplatzbedarf unterscheiden.
    - Gleitkomma-Datentypen - je nach Typ lassen sich Zahlen mit einer bestimmten Genauigkeit darstellen. Für höhere Genauigkeit oder Wertebereich wird mehr Speicherplatz benötigt.
- Zeichen-Datentyp - können beliebige Zeichen (ursprünglich ASCII, heute meist Unicode: UTF-8 Zeichensatz) enthalten.
    - Es sind also Buchstaben, Zahlen und Sonderzeichen wie "!%$&/(){}² zulässig.
    - ASCII 1 Byte pro Zeichen, UTF-8 2Byte pro Zeichen
- Logischer Datentyp - Boolean - kann nur True oder False annehmen, Speichergröße 1 Byte

## Gültigkeitsbereiche von variablen
- Lokale Variablen - nur innerhalb von Anweisungsblöcken vereinbart. Lebensdauer endet mit dem Verlassen aus dem Block
- Globale Variablen - gelten über die gesamte Lebensdauer der Programmausführung. können von allen Funktionen angesprochen werden.
- Deklaration - Name, Gültigkeitsbereich und Datentyp der Variable wird festgelegt
- Initialisierung - Wertzuweisung und gleichzeitige Deklaration
- Konstanten - Variablen deren Wert sich nicht mehr verändern kann. Müssen meist mit Initialisierung deklariert werden.

# Vorgegensmogelle

## Modularität
Gesamtaufgabe wird ind Teilaufgaben (Module) zerlegt.
- Vorteile:
    - Verkürzte Entwicklungszeit
    - bessere Verteilung von Arbeiten und Ressourcen
    - Wartbarkeit
    - Wiederverwendbarkeit

## Abstraktionsprinzip
eine Auswahl relevanter Informationen aus einer größeren Menge von verfügbaren Informationen.           
Unwesentliche Informationen für gegebene Aufgabenstellung ausschließen.

## Methoden
Eine Methode ist eine systematische Vorgehensweise, um bestimmte Aufgabe im Rahmen festgelegter Prinzipien zu lösen.
- Top-down-Methode - Gesamtaufgabe wird in Teilaufgaben zerlegt
- Bottom-up-Methode- einzelne Module werden entwickelt und dann zum Gesamtsystem zusammengesetzt.
- Up-down-Methode(Middle-Out, Gegenstromverfahren) - test von kritischen Teilaufgaben -Gesamtaufgabe durch Top-down-Methode verfeinert und Teilaufgaben durch Bottom-Up-Methode abstrahiert.

# Software-Lebenszyklus
**Analyse** -> **Entwurf** -> **Implementierung** -> **Integration** -> **Einsatz** -> **Wartung**   

Professionelle Software wird immer komplexer - um besser planen zu können ist eine strukturierte Vorgehensweise notwendig.          
Der Software-Lebenszyklus wird in Phase eingeteilt. In jeder Phase werden bestimmte Aufgaben fertiggestellt, getestet etc...            
- Analysephase - Was soll die Software tun
    - Ergebnis ist das Pflichtenheft mit eindeutig beschriebenen Anforderungen
- Entwurfsphase - wie ist die Software zu realisieren?
    - erstellen d
    - Festlegung von Programmiersprache, Programmierstrukturen, Anlegen der Dokumentation etc...
    - Ergebnis ist die Beschreibung des Entwurfs, bzw. Softwarespezifikationen
- Implementierungsphase- Programmcode wird erstellt und getestet
    - **Whitebox-Tests** - prüfen das die innere Funktionsweise von Komponenten
    - **Blckbox-Tests** - prüfen das Zusammenspiel der einzelnen Komponenten.
- Integrationsphase - Einzelaufgaben werden zur Gesamtaufgabe zusammengefügt.
    - Treten Fehler in der Integrationsphase auf, wird die Implementierungsphase nochmals durchlaufen.
- Einsatz und Wartung 
    . Korrektur auftretender Fehler
    - Anpassung an Systemumgebungen
    - Änderungen oder Erweiterungen von Funktionalität

## Vorgehensmodelle
- Wasserfallmodell
- V-Modell
- Prototyping-Modell
- Spiralmodell
- Agile Modelle