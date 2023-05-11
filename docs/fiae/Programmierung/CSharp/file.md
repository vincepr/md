# File stream in C#
## with Encoding
- is slower because we have to Encode/Decode.
```cs
// Example using Encoding ´to encode and decode
public static void BeispielFileStream() {

    string path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "/Dateien/new.txt";
    // File Stream - WRITE:
    var stream = new FileStream(path, FileMode.Create);
    //byte[] buffer = new byte[10];
    //buffer[0] = 231;
    //buffer[1] = 77;   // Asci - c
    byte[] buffer = Encoding.UTF8.GetBytes("hallo welt");

    stream.Write(buffer, 0, buffer.Length);
    stream.Close();

    // File Stream - READ:
    var stream2 = new FileStream(path, FileMode.Open);
    long anzahl_bytes_in_file = stream2.Length;
    byte[] buff2 = new byte[anzahl_bytes_in_file];
    stream2.Read(buff2, 0, buff2.Length);
    string txt = Encoding.UTF8.GetString(buff2);
    Console.WriteLine(txt);    
}
```
## BinaryReader -BinaryWriter
Beim Konstruktor für `BinaryWriter(Stream, Encoding?, Boolean?)` 
```cs
public static void UnencodedStream()
{
    string path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "/Dateien/unencoded.txt";
    var stream = new FileStream(path, FileMode.OpenOrCreate);

    // Wir dekorieren die Basis-Operationen und verwenden den BinaryWriter:
    var writer = new BinaryWriter(stream, Encoding.UTF8);
    writer.Write("Hallo\n Welt");           // Benutzt Längenpräfix! um zu wissen wie groß der String ist.
    writer.Write(88);
    writer.Write(666.13);
    writer.Close();

    // und das Lesen:
    var reader = new BinaryReader(new FileStream(path, FileMode.Open));
    string txt = reader.ReadString();       // Benutzt Längenpräfix! um zu wissen wie groß der String ist.
    int int_zahl = reader.ReadInt32();
    double double_zahl = reader.ReadDouble();
    Console.WriteLine(txt + " | " + int_zahl + " | " + double_zahl);
}

public static void LineByLine()
{
    string path = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments) + "/Dateien/unencoded.txt";
    var writer = new StreamWriter(new FileStream(path, FileMode.Create) );
    writer.WriteLine("Hose;23,45;10");
    writer.WriteLine("Hemd;15,1;10");
    writer.Close();

    var reader = new StreamReader(new FileStream(path, FileMode.Open));
    string cur_line = reader.ReadLine();
    while (cur_line != null)
    {
        var arr =cur_line.Split(';');
        string bez = arr[0];
        double preis = Convert.ToDouble(arr[1]);
        int menge = Convert.ToInt32(arr[2]);
        Console.WriteLine($"Bezeichnung: {bez} Preis: {preis} Menge: {menge}" );
        cur_line = reader.ReadLine();
    }
}
```

## BufferedStream
- Lesen und Schreiben erfolgt Blockweise mit Zwischenpuffer. Dies Minimiert Reibung mit den IO-System Calls des Betriebssystems.
- ``stream.Flush()` leert den Puffer und erzwingt schreiben des nächsten Blockes.
```c#

```