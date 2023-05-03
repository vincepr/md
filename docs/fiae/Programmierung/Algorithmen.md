# Algorithmentypen
Algorithmen können sequentiell, iterativ oder rekursiv formuliert werden.

In Bezug auf ihre Implementierung, also die maschinelle Umsetzung im Prozessor, werden Algorithmen praktisch immer sequentiell(oder parallel) ausgeführt.

- Sequentiell: 
	- Eine Folge nacheinander auszuführender Einzelschritte ohne zentrale Wiederholungen.
	- Implementierungssicht: Sequentielle Lösungen entsprechen der natürlichen Abarbeitungsfolge von Maschienenbefehlen durch den Prozessor.



## IHK-Prüfungsrelevante Algorithmen Sammlung:
- Sortieralgorithmen: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort
- Suchalgorithmen: Lineare Suche, Binäre Suche
- Rekursive Algorithmen: Faktorielle Funtkion, Fibonacci Folge
- Dynamische Programmierung: Rucksack-Problem, 

| Algorithmus | Beschreibung | wann angewendet|


## Divide and Conquer vs Dynamic programming (Memoisation and Tabulation)
- Divide and conquer is just splitting a problem up (ex recursively) into more easier to solve problems. No implication about speed initself.
    - In the example below`dacFib(n)`
- Dynamic Programming extends the devide and conquer principle with memoisation to speed up the problem.
    - in the example below `memFib(n)` and `tabFib(n)`


```js
/**
 *  divide and conquer implementation:
 */
function dacFib(n){
    if (n===0 || n===1){
        return n
    }
    return dacFib(n-1)+dacFib(n-2)
}

/**
 *  dynamic programming implementations: 
 */

// with Memoization (top-down cache filling)
// additionaly we persisted the mem, by moving it out of the function body
function memFib(n){
    if (mem[n] === undefined){
        let result= 0;
        if (n<2) result = n
        else result =memFib(n-2) + memFib(n-1)
        mem[n]=result
    }
    return mem[n]
}

// with Tabulation (bottom-up cache filling) 
// since we build every value up to n here it is a bit slower than memFib
function tabFib(n){
    let tab = [0,1]
    for (let i=2; i<=n; i++){
        tab[i] = tab[i-2] + tab[i-1]
    }
    return tab[n]
}


/*
*   testing values
*/ 
let max = 38;       // arround after 38*38 the returned numberws get to big for js float to handle.
let mem = {}        // our cache. We clear it after every use.

// single high value test:
test_single_run(max, dacFib)         // -> took 440ms
test_single_run(max*max, memFib)     // -> took <0ms
test_single_run(max*max, tabFib)     // -> took <0ms

mem = {}            // clearing the cache

// iterative tests going from 1 ... max
test_iterative(max, dacFib)         // -> took 1049ms
test_iterative(max*max, memFib)     // -> took <0ms
test_iterative(max*max, tabFib)     // -> took 11ms ( since no caching here is shared)


function test_single_run(n, func){
    let time = performance.now()
    let result = func(n)
    time = performance.now()-time;
    console.log(func.name+`() took ${time}ms , result is: ${result}`)
}

function test_iterative(max, func){
    let time = performance.now()
    let result = []
    for (let n=0; n<=max; n++){
        result.push(func(n))
    }
    time = performance.now()-time;
    console.log(func.name+`() took ${time}ms`)
    console.log(`result: ${result}`)
}
```
- an interesting thing we start to see is that for the way we build or test, the memoisation beats the tabulation.