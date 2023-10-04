# Generics in csharp
Types as values.

As usual a way to branch over Types themselfes instead of Instances/Variables.
Gets all the benefits of compile time type checking etc...

- syntax to return a instance of one of the Types used
```csharp
public static T Do<T>(T i)
    where T : class, new() // new() is one way to make this return a class instance
{
    Console.WriteLine(i);
    return Activator.CreateInstance<T>();
    // the other way to return a new instance without the new() in the where clause is with an Activator
}
```

- some basic example
```csharp
public static void Main(string[] args) {
    new Pig().Eat(Scraps, Barn);
}

public abstract class Animal<F, L>
    where F : Food
    where L : Location
{
    public void Eat(F food){
        Console.WriteLine($"{this.GetType().Name} is eating {typeof(F)} in the {typeof(F)}");
    }
}

// here we 'decide' what our pigs eat and where they live.
public class Pig : Animal<Bread, Barn> {}

public interface Food {}
public interface Location {}

public class Bread  : Food {}
public class Scraps : Food {}
public class Barn   : Location {}
public class Yard   : Location {}
```

- a bit more convoluted:
```csharp
public static void Main(string[] args) {
    new AnimalFeedingcontext<Pig, Bread, Barn>(new Pig())
        .Arrive()
        .Feed(new Bread());
}

public class AnimalFeedingContext<A, F, L>
    where A : Animal<F, L>
    where F : Food
    where L : Location
{
    private Animal<F, L> _animal;

    public AnimalFeedingContext(A animal)
    {
        _animal = animal;
    }

    public AnimalFeedingContext<A, F, L> Arrive()
    {
        Console.WriteLine($"{typeof(L).Name}");
        return this;
    }

    public void Feed(F food)
    {
        _animal.Eat(food);
    }
}
```