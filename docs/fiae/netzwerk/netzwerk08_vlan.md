# VLAN

## Definition **LAN** allgemein:
Ein LAN umfasst alle Geräte in der selben Broadcast-Domäne

## VLAN definiton
- IEEE 802.1Q
- Virtuelle LANs werden geschaffen die auf MAC adressen-Ebene(Layer 2)
- physische LANS in voneinander isolierte, logische Teile aufteilen.

## Gründe für VLAN
1. Flexibilität: Organnisationssturen unabhängig von physischen Beschaffenheiten abbilden
2. Performace: VoIP z.B. Priorisieren / über dezidiertes VLAN abwickeln
3. Sicherheit: öffentlich zugängliche Rechner in anderes VLAN wie Systeme die vertrauliche Daten enthalten.

# VLAN Tag
VLAN-header, auch VLAN-Tag genannt,  wird angefügt.
- Tags entält unter anderem vlanId, Priorität

# VLAN trunking
per default verwirft der Switch alle Frames die zu unbekannten VLAN-Gruppen gehören     
Mit trunking lassen sich VLANs über mehrere Switches ausweiten.

# VLAN vs Subnetz
- VLAN/Lan arbeiten auf Ebene 2 OSI
- Subnetze auf Ebene 3
- also 

## ein pc kann nicht in 2 VLANs gleichzeitig sein
- benötigt wird ein Router der die beiden VLANs miteinander kombiniert
- layer 2 Switche unterstützen dies nicht,** layer 3 Switche** könnten dies jedoch out of the box.


# Statisches vs Dynamisches (static- dynamic-Vlan)

- statisch (auch port based VLANs)
    - ports get asigned a fixed VLAN
    - weniger broadcasts
    - leiche Verwaltung
    - höhere Sicherheit
    - Tags werden entfernt/nicht benötigt
- dynamic VLANs
    - Zuweisung basierend auf MAC-adresse (  VLAN to MAC-Adress Mapping  )-> reads from DB on VMPS (Vlan Membership Policy Server) -> picks what VLAN to connect it to
    - keine Bindung an bestimmten Port und Ort.
    - geringere Sicherheit da MAC-Adress-Spoofing
    - initial aufwändig einzurichten aber danach schnell/flexibel zu ändern
    - Tags werden benötigt
    - Host kann hier in mehreren VLANs sein.

