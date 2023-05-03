# gleitkommazahlen, Float etc als datentyp

## allgemein nachkommastellen im binärsystem
bsp 13.25 als float berechnen
```
13  :2  =6  R1
6   :2  =0  R0
3   :2  =1  R1
1   :2  =0  R1
0.25*2  =0  .5  (1 stelle entspricht binär, kommawert neuer übertrag)
0.5 *2  =1  .0
0   *2  =0  .0
0   *2  =0  .0
...

-> 1101.0100
```

bsp 13.4 kann nur annäherungsweise dargestellt werden, da sie sich (im binärsystem) periodisch wiederholt
```
0.4 *2  =0.8
0.8 *2  =1.6
0.6 *2  =1.2
0.2 *2  =0.4
0.4 *2  =0.8
... widerholt sich periodisch
-> 1101.011001100110011..
```

## decimal
ex: `decimal(6,2) <- 3Byte` Mit 1 halfbyte pro nachkommastelle im decimalsystem (so lassen sich diese genau darstellen, z.B. für Währungssysteme)

## float
Float 4 Byte 32Bit
```
1Bit        8Bit        23Bit
Vorzeichen  Exponent    Mantisse
```
- Exponent gibt an wo das kommaziechen "eingerückt wird". oder der positive exponent liegt.0
    - Bias 127 ist der mittelwert. Kleiner als dieser -> komma einrücken, größer-> positiver exponent e hoch...