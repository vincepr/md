# Firewall

## Basics - (hardware) Firewall
- System aus Software und Hardwarekomponenten
- Ip basierte NEtze koppeln
- Zugriff überwachen und Einschränken
- Der gesamte Netzwerkverkehr nach und von außen geht durch die Firewall

### Wann macht eine hardware Firewall Sinn
z.B. Intranet, Sensible Daten (mehr Sicherheit als Softwarefirewall). Oder bei großem Volumen, z.B. Provider einer API oder eines großen Onlinestores.

## Angrifsfäche einer Firewall
- DDOS. Begrenzte Kapazität/Durchfluss-Rate der Firewall kann überwältigt werden.
- Konfigurationsfehler
- Umgehung von Firewall-regeln.

## Firewallarten
- Packetfilternde Firewalls - verifies IPs, Ports and Protocols.
- Circuit Level Gateway - verifies TCP handshakes and session fulfilment rules. Consumes low resources.
- Stateful Inspection FW - packetfilternd und circuit-level
- Next gen FW - adds features like SSL and SSH inspection, deep-packet inspection, anti malware features.
- Application level FW - advanced features against things like SQL-injections, cross-site-scripting, cookie-tempering.
- Unifed Thread management