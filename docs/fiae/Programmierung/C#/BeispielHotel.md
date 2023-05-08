# Beispiel Tabelle in C`#`
Dargestellt werden soll eine Tabellenartige struktur.

Auf diese werden verschiedene SQL-Artige abfragen gestellt.
```C#
internal struct Tabelle
{
    public Hotel[] Hotels;

    public Tabelle(Hotel[] hotels)
    {
        Hotels = hotels;
    }

    //  print function using the reduce() version of c#
    public string Print()
    {
        return Hotels.Aggregate("", (acc, x) =>  acc + x.Print()+"\n") ;
    }

    /*
        *  Solutoin using filter() called Where() and return a new Tabelle object
        */

    public Tabelle IEHotelsAlle()
    {
        return new Tabelle( Hotels.AsEnumerable().ToArray() );
    }
    public Tabelle IEHotelsBilliger(double input)
    {
        return new Tabelle(Hotels.Where(hotel=> hotel.Zimmerpreis < input ).ToArray() );
    }
    public Tabelle IEHotelsTeurer(double input)
    {
        return new Tabelle(Hotels.Where(hotel => hotel.Zimmerpreis > input).ToArray() );
    }
    public Tabelle IEHotelsMitFeature(Feature input)
    {
        return new Tabelle(Hotels.Where(hotel => hotel.Ausstattung.HasFlag(input) ).ToArray() );
    }
    public Tabelle IEHotelsStartsWithLetter(string input)
    {
        return new Tabelle(Hotels.Where(hotel => hotel.Namen.StartsWith(input)  ).ToArray() );
    }
}
internal struct Hotel
{
    public string Namen;
    public string Land;
    public double Zimmerpreis;
    public Feature Ausstattung;

    public Hotel(string namen, string land, double preis, Feature ausstattung)
    {
        Namen = namen;
        Land = land;
        Zimmerpreis = preis;
        Ausstattung = ausstattung;
    }

    public string Print()
    {
        return Namen + "\t" + Land + "\t\t" + Zimmerpreis + "\t" + Ausstattung + "\t" ;
    }
}

[Flags]
internal enum Feature
{
    NIL = 0,
    POOL= 1,
    BAR = 2,
    STRAND = 4,
    MEERBLICK = 8,
}


internal class Program
{
    static void Main(string[] args)
    {
        var tab = new Hotel[5];
        tab[0] = new Hotel("Mont Blanc", "Schweiz ", 129.99, Feature.POOL | Feature.BAR);
        tab[1] = new Hotel("Seeperle", "Germany ", 69.99, Feature.POOL | Feature.STRAND | Feature.BAR);
        tab[2] = new Hotel("Casa Nostra", "Mexico  ", 129.89, Feature.POOL | Feature.STRAND);
        tab[3] = new Hotel("Jump in ", "Australien", 228.78, Feature.POOL | Feature.BAR | Feature.MEERBLICK);
        tab[4] = new Hotel("Basta Pasta", "Italien ", 99.99, Feature.BAR);

        var t = new Tabelle(tab);
        Console.WriteLine("\n\n\n------ Now with filter functionality");

        Console.WriteLine("\n---Ausgabe aller Hotels:---");
        Console.WriteLine(t.IEHotelsAlle().Print());

        Console.WriteLine("\n---Ausgabe Hotels mit Zimmerpreis keiner als eingabe:---");
        double eingabe = Eingabe();
        Console.WriteLine(t.IEHotelsBilliger(eingabe).Print());


        Console.WriteLine("\n---Ausgabe Hotels mit dem Feature POOL:---");
        Console.WriteLine(t.IEHotelsMitFeature(Feature.POOL).Print());


        Console.WriteLine("\n---Ausgabe aller Hotels die mehr als 100EURO kosten:---");
        Console.WriteLine(t.IEHotelsTeurer(100).Print());


        // You can chain them together as you desire:
        Console.WriteLine("\n---Ausgabe aller Hotels die mehr als 100EURO kosten && als feature STRAND haben && mit letter 'C' beginnen:---");
        Console.WriteLine(t
            .IEHotelsTeurer(100)
            .IEHotelsMitFeature(Feature.STRAND)
            .IEHotelsStartsWithLetter("C")
            .Print()
            );

    }

    static double Eingabe()
    {
        Console.Write("Bitte den Preis eingeben: ");
        bool isDouble = false;
        double value = 0;
        while (!isDouble)
        {
            Console.Write(">");
            String input = Console.ReadLine();
            isDouble = double.TryParse(input, out value);
        }
        return value;
    }
}
```

## Aufgabe Kurse
```c#
internal class Kurs{
    // interner Enum
    [Flags]
    public enum Kategorien{
        IT = 1,
        WIRTSCHAFT = 2,
    }
    // Felder:
    public string Bezeichnung { get; private set; }
    public double Preis { get; private set; }
    public uint AnzahlTeilnehmer { get; set; }
    public Kategorien Kategorie { get; private set; }
    public double Umsatz => AnzahlTeilnehmer * Preis;       // Alt. schreibweise für public double Umsatz{get{return...}}
    
    // Konstruktoren:
    public Kurs(string bezeichnung, double preis, uint anzahl, Kategorien kategorie){
        Bezeichnung = bezeichnung;
        Preis = preis;
        Kategorie = kategorie;
        AnzahlTeilnehmer = anzahl;
    }
    public Kurs(string bezeichnung, Kategorien kategorie) : this(bezeichnung, 500, 0, kategorie) { }

    // Custom ToString Implementation
    override
    public String ToString(){ 
        return $"{Bezeichnung} | Peis:{Preis} | Teilnehmer: {AnzahlTeilnehmer} | {Kategorie} | Umsatz: {Umsatz} "; 
    }
}

internal class Program{
    static void Main(){
        Kurs[] tab = new Kurs[3];
        tab[0] = new Kurs("Programmierung", 899, 15, Kurs.Kategorien.IT);
        tab[1] = new Kurs("Buchhaltung",  Kurs.Kategorien.WIRTSCHAFT);
        tab[2] = new Kurs("Netzwerke", 699, 10, Kurs.Kategorien.IT);

        Console.WriteLine("\n1- Ausgabe Aller Kurse:");
        foreach (Kurs kurs in tab)
            Console.WriteLine("\t" + kurs);

        double sum = 0;
        foreach (Kurs kurs in tab)
            sum += kurs.Umsatz;
        Console.WriteLine("\n2- Summe Aller Umsaetze: "+sum);

        Console.WriteLine("\n3- Alle Kurse der Kategorie IT:");
        foreach (Kurs kurs in tab)
            if (kurs.Kategorie == Kurs.Kategorien.IT) 
                Console.WriteLine("\t" + kurs);
    }
}
```