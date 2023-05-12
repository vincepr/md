# Compare Interfaces in Csharp

## List
- dynamic size, unlike array.
```cs
// Interface IComparable<T> uses CompareTo() to compare > 2 objects.
internal class Buch : IComparable<Buch>{
    public string Titel { get; set; }
    public double Preis { get; set; }
    public uint Jahr { get; set; }

    public Buch(string titel, double preis, uint jahr){
        Titel = titel;
        Preis = preis;
        Jahr = jahr;
    }
    public override string ToString(){
        return $"Titel: {Titel}\nPreis: {Preis}\nJahr: {Jahr}\nGenre: {Genre}\n";
    }
    public override bool Equals(object other){
        if (other is Buch){
            Buch o = (Buch)other;
            return Titel == o.Titel && Preis == o.Preis && Jahr == o.Jahr && Genre == o.Genre;
        }
        return base.Equals(other);
    }

    // IComparable<T> Interface erlaubt es direkt 2 Einträge zu vergleichen und damit direkt 'list.Sort()' aufzurufen.
    /// -1  -> other vor this
    /// ==0 -> other same priority as this
    /// +1  -> this comes first then other
    public int CompareTo(Buch other){
        // Größter Preis zuerst:
        return -this.Preis.CompareTo(other.Preis);

        // Kleinster Preis zuerst:
        return this.Preis.CompareTo(other.Preis);

        // Alphabetisch sortiert:
        return this.Titel.CompareTo(other.Titel);
    }
}

// IComparer : Diese Klasse ist die zweite Möglichkeit zu vergleichen. Mithilfe einer externen Klasse vom Typ IComparer<T>
//  - hier könnte für jedes Sortierfuntkion (nachTitel, nachPreis etc) eine gesonderte Sortierfunktion erstellt werden
//  - hier wird die SortPreis klasse an die Sort Methode übergeben: 'list.Sort(new SortPreis())'
internal class SortPreis : IComparer<Buch>{
    public int Compare(Buch x, Buch y){
        return x.Preis.CompareTo(y.Preis);  // aufsteigende Sortierung nach Preis
    }
}

internal class Programm{
static void Main(){
        List<Buch> list = new List<Buch>();
            list.Add(new Buch("Der rote Luftballon", 49.99, 2020));
            list.Add(new Buch("Blumen im Sommerwind", 39.99, 2019));
            list.Add(new Buch("Und der Rabe lacht", 89.99, 2021));
            list.Add(new Buch("Von Gärtnern und Mördern", 79.89, 2018));
            list.Add(new Buch("Blumen im Sommerwind", 39.99, 2019));

        // .Remove(), .BinarySearch() ... benutzt die object.Equals() methode. Um nicht nur die objekt pointer zu vergleichen überschreiben wir sie in der Klasse Buch
        Buch vgl = new Buch("Und der Rabe lacht", 89.99, 2021);
        int idx = list.BinarySearch(vgl);
        bool succ = list.Remove(vgl);

        // .Sort() benötigt das ICompare Interface und damit die CompareTo() Methode direkt in der Klasse Buch
        list.Sort();
        foreach (Buch b in list)
            Console.WriteLine(b);

        // Alternativ übergeben wir eine Sortierer-Klasse an .Sort(new sortierer):
        list.Sort(new SortPreis());
        foreach (Buch b in list)
            Console.WriteLine(b);
    }
}
```
### SortedList
benutzt standard `IComparabler` für das sortieren:
```cs
SortedList<Buch> list = new SortedList<Buch>()
```

benutzt die classe Sort Preis als custom `IComparabler` für das sortieren:
```cs
SortedList<Buch> list = new SortedList<Buch>(new SortPreis())
```

### ArrayList
ist im Gegensatz zur normalen Liste nicht an einen Typ gebunden. Kann also zugleich verschiedene objekte oder primitve-types aufnehmen.
```cs
ArrayList list = new ArrayList()
list.Add(new Buch("Der rote Luftballon", 49.99, 2020));
list.Add(312);
list.Add("Hello World");
```

## LINQ
Suchen und Sortieren im Stiel von SQL.
- unter anderem Sortieren ohne die ursprüngliche Liste zu verändern.
- `.ForEach()` 
- `.Where()` is the filter() function in csharp.
- `.Select()` is the  map() function in csharp.
- `.Aggregate()` is the  reduce() function in csharp.

Allgemein:
```cs
var r = Enumerable.Range(1, 10);
// ForEach to loop over:
r.ForEach(x => Console.WriteLine(x) );

// map() is Select
r.Select(x => x + 2);

// reduce() is Aggregate
r.Aggregate(0, (acc, x) => acc + x);

// filter() is Where
r.Where(x => x % 2 == 0);
```

Oder anschließend an das Beispiel von Oben:
```cs
List<Buch> books = new List<Buch>();
books.Add(new Buch("Der rote Luftballon", 49.99, 2020, Kategorie.HORROR));
books.Add(new Buch("Blumen im Sommerwind", 39.99, 2019, Kategorie.ROMAN));
books.Add(new Buch("Und der Rabe lacht", 89.99, 2021, Kategorie.HORROR));
books.Add(new Buch("Von Gärtnern und Mördern", 79.89, 2018, Kategorie.KRIMI | Kategorie.HORROR));
books.Add(new Buch("Blumen im Sommerwind", 39.99, 2019, Kategorie.ROMAN));

Console.WriteLine("----- -----");
// SELECT * FROM liste
// Action<T> is an Delegate: public delegate void Action<in Buch>Buch(Buch buch){ }
books.ForEach(buch => Console.WriteLine(buch));

Console.WriteLine("----- -----");
// SELECT * FROM liste WHERE preis < 70
books
    .Where(buch => buch.Preis < 70)
    .ToList()
    .ForEach(Buch => Console.WriteLine(Buch));

Console.WriteLine("----- -----");
// SELECT titel FROM liste
books
    .Select(b => b.Titel)
    .ToList()
    .ForEach(b => Console.WriteLine(b));

Console.WriteLine("----- -----");
// SELECT DISTINCT titel FROM liste
books
    .Select(b => b.Titel)
    .Distinct()                         // filter out identical books
    .ToList() 
    .ForEach(b => Console.WriteLine(b));

Console.WriteLine("----- -----");
// SELECT DISTINCT titel FROM liste
books
    .Where(b => b.Preis>50)
    .Select(b => b.Titel)
    .Distinct()                         // filter out identical books
    .ToList()
    .ForEach(b => Console.WriteLine(b));

Console.WriteLine("----- -----");
// SELECT Count(*) FROM liste WHERE genre = "Horror"
Console.WriteLine("Anzahl Bücher der Kategorie Horror: " + 
    books.Count(b => b.Genre.HasFlag(Kategorie.HORROR)) 
);

Console.WriteLine("----- -----");
// SELECT Average(preis) FROM liste WHERE genre = "Horror"
Console.WriteLine("Durschnittlicher Preis der Kategorie Horror: " +
    books
        .Where(b => b.Genre.HasFlag(Kategorie.HORROR))
        .Average(book => book.Preis)
);

Console.WriteLine("----- -----");
// SELECT * FROM liste ORDER BY preis DESC
books
    .OrderByDescending(b => b.Preis)
    .ToList()
    .ForEach(b => Console.WriteLine(b));

Console.WriteLine("----- -----");
// Finde alle bücher mit Kategorie==Horror -> Ersetze mit Roman
books
    .FindAll(b => b.Genre == Kategorie.HORROR)
    .ForEach(b => b.Genre = Kategorie.ROMAN);
// veränderte Bücher-Liste ausgeben:
books.ForEach(buch => Console.WriteLine(buch));
```

## HashSet
HashSet prüft `mit Equals()` ob zwei Objekte identisch sind.

Jedoch **NUR WENN** die Objekte **ähnlich** sind. `GetHashCode()` liefert die grundlage für **ähnlichkeit** .

Standard implementierung: Der HashCode ist die Speicheradresse vom Objekt, somit sind alle Objekte unähnlich.
- Damit müssen wir also `GetHashCode()` für das Buch von oben ergänzen
```cs
internal class Buch : IComparable<Buch>{
    // ... snip ...
    public override int GetHashCode() {
        return (int)this.Jahr;
    }
}
internal class Program{
    static void Main(){
        books.Add(new Buch("Der rote Luftballon", 49.99, 2020));
        books.Add(new Buch("Blumen im Sommerwind", 39.99, 2019));
        books.Add(new Buch("Blumen im Sommerwind", 39.99, 2019));       // das sollte nicht mehr hinzugefügt werden.
        Console.WriteLine("Anzahl: " + books.Count);                    // -> Anzahl: 2

        HashSet<Buch> b2 = new HashSet<Buch> {
            new Buch("Der rote Luftballon", 49.99, 2020),               // schnittmenge
            new Buch("Blumen im Sommerwind", 39.99, 2019),              // schnittmenge
            new Buch("Und der Rabe lacht", 189.99, 2021),               // außerhalb
        };
        books.Intersect(b2).ToList().ForEach(b => Console.WriteLine(b));
    }
}
```
- Auf HashSet, sowie List sind Methoden wie Intersect, Union etc. möglich.