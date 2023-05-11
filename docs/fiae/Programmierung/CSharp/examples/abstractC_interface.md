# Abstract Class - Interface
- Klassen.cs
```c#
//internal abstract class Form
//{
//    public abstract double Flaeche { get;  }
//    public abstract double Umfang { get;  }
//}

internal interface Form{
    double Flaeche{ get; }
    double Umfang { get; }
}

internal class Kreis : Form{
    public double Radius { get; set; }
    public Kreis(double radius) { 
        this.Radius = radius; 
    }
    public double Flaeche => Math.PI * Radius;
    public double Umfang  => Math.PI * Radius * Radius;
}

internal class Rechteck : Form{
    public double Laenge { get; set; }
    public double Hoehe { get; set; }
    public Rechteck(double width, double height){
        Laenge = width;
        Hoehe = height;
    }
    public double Flaeche  => Laenge * Hoehe;
    public double Umfang   => 2 * Laenge + 2 * Hoehe;
}

internal class Tabelle{
    private List<Form> tab;

    public double GesamtUmfang(){
        double sum = 0;
        foreach (Form f in tab)
            sum += f.Umfang;
        return sum;
    }

    public double GesamtFlaeche(){
        double sum = 0;
        foreach (Form f in tab)
            sum += f.Flaeche;
        return sum;
    }

    public Tabelle(params Form[] forms){
        Console.WriteLine(forms.Length);
        tab = new List<Form>();
        foreach(Form form in forms)
            tab.Add(form);
    }

    public string Print()
    {
        string str = "|Typ\t|Radius\t|Laenge\t|Breite\t|Umfang\t|Fläche\t|\n";
        foreach (Form form in tab){
            // checking for types
            if (form is Rechteck){
                Rechteck cast = form as Rechteck;
                str += $"|Eck\t| \t|{cast.Laenge}\t|{cast.Hoehe}\t|";

            } else if (form is Kreis){
                Kreis cast = form as Kreis;
                str += $"|Kreis\t|{cast.Radius} \t| \t| \t|";
            }
            double umfang = Math.Round(form.Umfang,2);
            double flache = Math.Round(form.Flaeche,2);
            str += $"{umfang}\t|{flache}\t|\n";
        }
        return str;
    }
}
```
- Programm.cs
```c#
internal class Program
    {
        static void Main(string[] args)
        {
            Tabelle tab = new Tabelle(
                new Kreis(5.25), 
                new Rechteck(10, 5.6), 
                new Kreis(3.75),
                new Rechteck(25.45, 10.34)
            );
            Console.Write(tab.Print());
            Console.WriteLine("\nGesamt Flaeche: " + Math.Round(tab.GesamtFlaeche()), 2);
            Console.WriteLine("Gesamt Umfang: " + Math.Round(tab.GesamtUmfang(), 2));
        }
    }
```