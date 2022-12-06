# IGRP - Interior Gateway Routing Protocol

## Klassifizierung

- in 1980ern von Cisco entwickeltes proprietäres **Distance-Vector-Routingprotocoll**.        
- Wird innerhalb eines autonomen Systems (z.B. Internet-Provider Telekom?) eingesetzt und hebt sich gegenüber RIP durch die Metrik hervor. (ermöglicht >15 hops)      

## Funktionsweise

- Bei IGRP werden die besten Wege zu einem Ziel über die berechnete Metrik bestimmt.      
- Die Metrik einer Verbindung setzt sich aus Verzögerung, Bandbreite, Leistungszuverlässigkeit und Leistungsauslastung zusammen:

https://wikimedia.org/api/rest_v1/media/math/render/svg/8e126457ef4379d9452d92a74f9455ceb694cac5

- Ergebniss des Protokolls: Die gewichteten Eigenschaften der Verbindungsmerkmale "lenken" den traffic durch das Netz.
- Zur Vermeidung von Routingschleifen kommen Split-Horizon-Verfahren, Holddown Timer, Route Poisoning und Triggered Updates zum Einsatz
- IGRP wird nicht weiterentwickelt und ab CISCO v12.3 nicht mehr unterstützt. Das EIGRP-Protokoll as Nachfolger.

### Aufbau Routingtabellen
- IGRP verschickt regelmäßig in kurzen Zeitabständen (alle 90 Sekunden) Routing-Tabellen und deren Updates an alle benachbarten Router.

## Vorteile
- 15 "HOPS" grenze und die damit gegebene maximale Reichweite von RIP werden überwunden und auf 255 gehoben.
- Hohe Stabilität. Da keine Routingschleifen auftreten sollten.
- Dynamische Anpassung⁠. Die sich an veränderte Topologien anpassen kann.
- Geringer Overhead⁠. IGRP braucht also nicht mehr Bandbreite als tatsächlich benötigt.
- Metrik⁠

## Nachteile
- **Aktualisierung nur alle 90 Sekunden**⁠
- Nicht für sehr große Netzwerke empfohlen⁠
- nicht mehr unterstützt da Nachfolger EIGRP es abgelöst hat



_____

Das IGRP oder auch Interior Gateway Routing Protocol ist ein in den 1980er Jahren von Cisco entwickeltes proprietäres Distance-Vector-Routingprotokoll, das von Routern eingesetzt wird, um innerhalb eines autonomen Systems Routing-Informationen auszutauschen.
Die Ziele bei der Entwicklung von IGRP waren vor allem eine Verbesserung der Skalierbarkeit sowie ein Überwinden der von RIP (Routing Information Protocol) vorgegebenen maximalen Anzahl von 15 Netzwerkknoten, die ein Zielnetzwerk entfernt sein darf, bis das Netz als nicht erreichbar gilt. Die maximale Anzahl an Routern zwischen Start- und Zielpunkt ("Hops") bei IGRP beträgt 255.
Weitere Ziele:
Stabiles Routing auch in sehr großen oder komplexen Netzwerken. Es sollten keine Routingschleifen auftreten.
Schnelle Reaktion auf Änderungen in der Netzwerktopologie.
Geringer Overhead. Das heißt, IGRP selbst sollte nicht mehr Bandbreite verwenden, als tatsächlich benötigt wird.
Aufteilung des Traffic auf mehrere parallele Routen, wenn sie ungefähr schnell sind.
Das IGRP-Protokoll ermöglicht es einer Reihe von Gateways, ihr Routing zu koordinieren.
Interior Gateway Routing Protocol (IGRP) addiert gewichtete Werte verschiedener Eigenschaften der Verbindung zum betreffenden Netzwerk zusammen, um eine Metrik zu berechnen. Die Verbindungsmerkmale, aus denen das IGRP eine zusammengesetzte Metrik berechnet, sind Bandbreite, Verzögerung, Last, Zuverlässigkeit und maximale Übertragungseinheit (Maximum Transmission Unit, MTU). Standardmäßig wählt das IGRP eine Route basierend auf Bandbreite und Verzögerung aus.
Es wurde weitgehend durch die neuere und bessere Enhanced-IGRP, besser bekannt als EIGRP, seit 1993 ersetzt.
