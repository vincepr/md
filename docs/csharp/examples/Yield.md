# Yield in csharp
- lets a **stateful** method be called mutiple times. "pausing" between each call.


```csharp
Console.WriteLine("returning a list");
var people = DataAccess.GetPeople();
foreach(var p in people)
    Console.WriteLine($"Read {p.FirstName} {p.LastName}");


Console.WriteLine("\nreturning with yield");
var ypeople = DataAccess.GetYieldedPeople();
foreach(var p in ypeople)
    Console.WriteLine($"Read {p.FirstName} {p.LastName}");

public static class DataAccess {

    // we first create all objects, then hold them in memory for the whole duration
    // and pass down a pointer to that whole object
    public static IEnumerable<PersonModel> GetPeople() {
        List<PersonModel> output = new();
        output.Add(new PersonModel("Tim", "Hernandez"));
        output.Add(new PersonModel("Adam", "Ondra"));
        output.Add(new PersonModel("James", "Bod"));
        return output;
    }


    // with yield we are able to only execute till the yield and return that 
    public static IEnumerable<PersonModel> GetYieldedPeople() {
        yield return new PersonModel("Tim", "Hernandez");   // the program only runs this line on the first .next() call
        yield return new PersonModel("Adam", "Ondra");      // and only this line on the 2nd call
        yield return new PersonModel("James", "Bod");       // and only this line on the last call
    }
}

public class PersonModel
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public  PersonModel(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
        System.Console.WriteLine($"Initialized user {FirstName} {LastName}");
    }
}
```

- in our logs we can see that we really only created the objects before returning in the 2nd case. While in the first example creating all 3 at once, before any return happens.

## benefits of yield
- yield does add a bit of overhead. (the state of the method/closure it is run in)
- memory wise it often can be much more efficient. And allocations, especially on the heap or those long lived gc-objects. If those can be avoided it is always a big benefit
- Calls of `.Take(2)` or `.FirstOrDefault()` or `.TakeLast(1)` can be used, that do not collect the whole Iterator.
    - `Take(2)` will only try to take 2 of the iterator (and cast it as an IEnumerable again)
    - while `Last()`, `First()`, `LastOrDefault()` will directly return the object (if it exists)
- when working with real **databases** this is a great tool to use together with pagination.

### example of the consumer declaring how many to take 
```csharp
// nrs 1-50
var primeNumbers = Generators.GetPrimes();
var firstNumbers = primeNumbers.Take(50);
Console.WriteLine(String.Join("\n", firstNumbers));

// if we want the next 50-100 we must be explicit like this:
var secondNubers = primeNumbers.Skip(50).Take(50); 
foreach (var nr in secondNubers) 
    Console.WriteLine(nr);



public class Generators
{
    public static IEnumerable<int> GetPrimes()
    {
        int counter = 0;
        
        while (true)
        {
            if (IsPrime(counter))
            {
                yield return counter;
            }
            counter ++;
        }
    }

    private static bool IsPrime(int value)
    {
        bool output = true;

        for (int i = 2; i <= value / 2; i++)
        {
            if (value % i == 0)
            {
                output = false;
                break;
            }
        }
        return output;
    }
}
```

## underlying enumerator
- This is the Iterator that gets used.
- this unlike the IEnumerable "saves it's state"
```csharp
// the underlying Enumerator
var iterator = primeNumbers.GetEnumerator();
for (int i=0; i<10; i++) {
    if(iterator.MoveNext()) {
        Console.WriteLine(iterator.Current);
    } else {
        Console.WriteLine("no more elements in Iterator");
    }
}

// the iterator unlike the IEnumerable will remember it's state
iterator.MoveNext();
Console.WriteLine('the 11th number: ' + iterator.Current);
```