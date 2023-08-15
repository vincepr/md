# Delegates in Csharp
- functions as values
- Reusability of code becomes really easy.
```csharp
// a bit like an Interface for functions, we first declare the shape (here void with no params)
public delegate void MoveAction();

// then we have Functions that can implement (have same signature) than our delegate
public void MoveUp() => "Moving upwards".Dump();
public void MoveDown() => "Moving upwards".Dump();
public void MoveLeft() => "Moving Leftw".Dump();
public void MoveRight() => "Moving Right".Dump();


// a queue of moves, executed on the next frame or something like that:
public void ChainMovements(MoveAction[] moves) {
    foreach(MoveAction move in moves){
        if (move is not null) move();   // we can just call it like this 
    }
    // move.Invoke() // this is just legacy syntax. sames as move() above.
}

public static void main(string[] args) {
    MoveAction[] moves = {MoveUp, MoveDown, MoveUp, MoveLeft, MoveLeft};
    ChainMovements(moves);

    // we can also create an instance like this:
    var doMoveUp = new MoveAction(MoveUp);
    doMoveUp();
    // - its basically an object wrapping nothing but the function

}
```

## Special Delegates Func and Action
- Again a generic Delegate.
- Has void as return type.
### Action
-
```csharp
Action<int> printNumber = n => n.Dump();

// and here with a tuple
Action<string, int> printAdress = (adr, nr) => Console.Writeline(addr+nr);
```
- Makes it clearer that our delegate action is void.
    - in the above example we could have used just `ChainMovements(Action[] moves)`
    - this way it is not neccessary to look up exactly what MoveAction's signature is etc...

### Func
- Basically a func is just a generic Delegate.
- Func has a Return type.
```csharp
System.Func<int, int, int> add (int x, int y) => x + y;
add(1,100).Dump();  // Prints 101
```
## Example
```csharp
# Delegates in Csharp
- Can reference both static methods and instance methods
## Basic Examples

```csharp
namespace Delegates1;

internal class Program {
    // We describe our Logger-Delegate 'blueprint', a bit like an interface
    public delegate void LogDel(string text);
    
    public static void Main(string[] args) {
        Example1();
        Example2();
        Example3();
        Example4();
    }

    public static void Example1() {
        LogDel logDel = new LogDel(TextToScreen);
        logDel("Hello World.");
        logDel.Invoke("Same as line above, in this case.");
    }

    public static void Example2() {
        Logger logger = new Logger();
        LogDel logDel = new LogDel(logger.TextToFile);
        logDel("Hello World.");
        logDel.Invoke("Same as line above, in this case.");
    }

    public static void Example3() {
        // muticasting combines multiple delegates
        LogDel logDelScreen = new LogDel(TextToScreen);
        Logger logger = new Logger();
        LogDel logDelFile = new LogDel(logger.TextToFile);
        LogDel multiLogDel = logDelScreen + logDelFile;
        // we can now call both TextToScreen and TextToFile in one call.
        multiLogDel("We log it all.");
    }
    
    public static void Example4() {
        LogDel logDel = new LogDel(TextToScreen);
        Wrapper(logDel, "We pass in a delegate at runtime. A bit like dependency injection");
    }
    
    // passing an delegate at runtime:
    public static void Wrapper(LogDel logDel, string txt) {
        logDel(txt);
    }
    
    // static reference used by our delegate
    static void TextToScreen(string text) {
        Console.WriteLine($"{DateTime.Now.ToString()}: {text}");
    }
    
    // instanced methods (also work with delegates)
    public class Logger {
         public void TextToFile(string text) {
            using (StreamWriter sw = new StreamWriter(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Log.txt"),
                       true))
                sw.WriteLine($"{DateTime.Now.ToString()}: {text}");
        }
    }
}
```
