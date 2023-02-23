# UML - unified modeling language

- Objektorientierte Analyse (OOA) - Analyse der Objekte und ihrer Beziehungen

- Objektorientierte Design (OOD) - Konzeption der entsprechenden Klassen und deren Benutzeroberfläche aus den Vorgaben der Analyse

- Objektorientierte Programmierung (OOP) - Implementierung der Klassen in der entsprechenden Programmiersprache

## Beispiele an Diagrammen
|Strukturdiagramme|Verhaltensdiagramme|
|---|---|
|**Klassendiagramm**|**Anwendungsfalldiagramm**|
|**Objektdiagramm**|**Sequenzdiagramm**|
|Kompositionsstrukturdiagramm|**Aktivitätsdiagramm**|
|Komponentendiagramm|Zustandsdiagramm|
|Verteilungsdiagramm|Kommunikationsdiagramm|

## Anwendungsfalldiagramm
- Use-Case-Diagramme beschreiben Funktionalität eines Systems
- Sie zeigen mögliche Anwendungsfälle und die Beziehungen zwischen diesen Fällen und beteiligten Akteuren
- dienen als Grundlage für Identifizierung der beteiligten Klassen

### Anwendungsfall - use case
- Ein Anwendungsfall beschreibt eine Funktionalität eines Systems -es wird nicht beschrieben in welcher Form das System die Funktion realisiert
- Darstellung
    - Anwendungsfälle werden in Ellipsen dargestellt
    - 4-Eck als Systemgrenze
    - ist der Akteur ein Mensch -> Menschsymbol
    - Ist der Akteur eine Maschine -> Rechteck
    - Der Akteur steht mit dem Anwendungsfall in Beziehung =  Assoziation in Beziehung -> Linien
    - Beziehungen können gereichtet(Pfeil) oder ungerichtet(durchgezogene Linie)
    - Multiplizitäten - geben an wie viele Akteure mit wie vielen Anwendungsfällen in Beziehung stehen.
        - 0 - keins
        - \* - beliebig viele
        - 0 . . \* - keins oder beliebig viele
        - 1.. 99 - eins bis 99
        - 2,4,6 - zwei, 4 oder 6
    - Beziehung zwischen Anwendungsfällen 
        - Anwendungsfall1 -> einfacheLinie mit offener Pfeilspitze (dreieck) -> Anwendungsfall2. 2 erbt von 1-> kann was 1 kann und mehr
        - Doppelter Pfeil in beide Richtungen -> gegenseitiges vererben
    - include Beziehung - ein Anwendungsfall schließt zwingend einen anderen mit ein. gestrichelte Linie mit Endpfeil auf dem inkludierten. Es wird ```<<include>>``` dazugeschrieben.
    - extend Beziehung - nur unter einer bestimmten Bedingung schließt ein Anwendungsfall einen anderen ein. - Der erweitertet Anwendungsfall ist selbstständig und kann auch alleine aufgerufen werden. Es wird ```<<extend>> ``` dazugeschrieben.