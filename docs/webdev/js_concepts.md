# Js Concepts

## map, filter, find
- especially useful to quickly render data with react/jsx

```js
let users = [
  { firstName: "James", lastName: "Doe", age: 23, hobby: "Fishing" },
  { firstName: "Paula", lastName: "Diaz", age: 26, hobby: "Reading" },
  { firstName: "Jake", lastName: "Black", age: 40, hobby: "Music" },
]

// map() to create a new array with the same ammount of entires
let usersInnerHTML = users.map(user => {
    return `<h3 class="name">${user.firstName+" "+user.LastName}<h3/>`
})

// filter() to get an array with equal or less entries
let youngUsers = users.filter(person => person.age <30)

// find() to get the FIRST entry that matches the description
let search = users.find(person => person.FirstName === "James")
```

## Destructuring Arrays and Objects
- faster and simpler access to unpacking variables from arrays and objects

```js
let flavors = ["coffee", "vanilla", "spicy", "exotic", "tropical",]

// instead of:
let flavor_1 = flavor[1]
let flavor_2 = flavor[2]
// we can simply:
let [flavor1, flavor2, flavor3] = flavors 
// to skipp data:
let [flav1,,,,flav5] = flavors
let [,fla2,,fla4,] = flavors

```

```js
const user = {
  firstName: "James",
  lastName: "Cameron",
  age: 36,
  hobbies: {
    hobby1: "money",
    hobby2: "cinema",
  },
}

// instead of:
const FirstName = user.firstName
const Age = user.age
const Hobby1 = user.hobbies.hobby1
console.log(FirstName, Age, Hobby1)
// we can simply:
const {firstName, age, hobbies:{hobby1}} = user
console.log(firstName, age, hobby1)
// we can also do this in a function (example passing down props in jsx)
function whoIsUser({firstName, age, hobbies:{hobby1}}){
    console.log(firstName, age, hobby1)
}
whoIsUser(user)
```

## Rest and Spread Operators (...)

```js
// with arrays
let flavors = ["coffee", "vanilla", "spicy", "exotic", "tropical",]

let [firstFlavor, secondFlavor, ...rest] = flavors

console.log(firstFlavor, secondFlavor, rest)
    // "coffee" "vanilla" ["spicy", "exotic", "tropical",]

// with objects
const user = {
  firstName: "James",
  lastName: "Cameron",
  age: 36,
  hobbies: {
    hobby1: "money",
    hobby2: "cinema",
  },
}

const {firstName, lastName, ...rest} = user
const fullname = firstName+" "+lastName
console.log(fullname, rest)
/*
    "JamesCameron", {
        age: 36,
        hobbies: {
            hobby1: "money",
            hobby2: "cinema"
        }
    }
*/
```

```js
let pets= ["cat", "dog" , "rabbits"]
let carnivorous = ["cat", "lion", "wolf", "leopard", "tiger"]

let wrongAnimals = [pets, carnivorous]
console.log(wrongAnimals) 
    //[["cat", "dog" , "rabbits"], ["cat", "lion", "wolf", "leopard", "tiger"]]

let animals = [...pets, ...carnivorous]
console.log(animals)
    //["cat", "dog" , "rabbits", "cat", "lion", "wolf", "leopard", "tiger"]

let name = {firstName:"John", lastName:"Doe"}
let hobbies = {firstName:"NEVER USED", hobby1: "singing", hobby2: "dancing" }
let myInfo = {...name, ...hobbies}

console.log(myInfo)
    //{firstName:"John", lastName:"Doe", hobby1: "singing", hobby2: "dancing"}
```
- careful of getting duplicates while spreading arrays like this(cat)
- with objects the firstName:"NEVER USED" will never be reached like this, since firstName:"John" is found first and every subsequent firstName is discarded.

## Set() - unique value
- immagine we need all unique categories of the below data of animals
```js
let animals = [
  {
    name:'Lion',
    category: 'carnivore',
  },
  {
    name:'dog',
    category:'pet',
  },
  {
    name:'cat',
    category:'pet',
  },
  {
    name:'wolf',
    category:'carnivore',
  },
]

// map will create duplicates
function getCategories(input){
    return input.map(animal => animal.category)
}
console.log(getCategories(animals))
    //["carnivore", "pet", "pet", "carnivore"]
// a Set will only allow unique properties, we can use this to create a Set then use ...Spread syntax to get an array again

console.log( [... new Set(getCategories(animals)) ] )
    //["carnivore", "pet"]
```

## dynamic object keys
- in case of "-" in the key obj.user-data will fail. -> use \["user-data"\]
- this also allows conditional object keys or the ? operator

```js
function createData(name, number, gavebirth){
    let data = {
        "name" : name,
        [gavebirth && "birthed-babies"]: number,
    }
    return data
}
console.log(createData("Paul", 2 ,false))
    //{ name: "Paul", false: 2}

console.log(createData("PaulsWife", 2, true))
    //{ name: "PaulsWife", birthed-babies: 2}

```

## reduce()
- reduce(function (accumulator, currentValue, currentIndex, array)
```js
let staff = [
  { name: "Adam", age: 22, salary: 90 },
  { name: "Eve", age: 42, salary: 120 },
  { name: "Bob", age: 33, salary: 400 },
  { name: "Dillan", age: 44, salary: 600 },
  { name: "James", age: 55, salary: 1000 },
  { name: "Ken", age: 66, salary: 222 },
]

// total salary:
const initialValue = 0
const totalSalary = staff.reduce((total, currentPerson)=>{
    return total+currentPerson.salary
},initialValue)
console.log(totalSalary)    
    //2432

// + Rentenversicherung von 10%
const modifiedSalary = staff.reduce(
    (kosten, person) =>{
        let kassenKosten = person.salary*0.1
        kosten.allgemein += person.salary
        kosten.kasse += kassenKosten
        kosten.ges += person.salary + kassenKosten
        return kosten
    }, {allgemein:0, kasse:0, ges:0}
)
console.log(modifiedSalary)
    //Object { allgemein: 2432, kasse: 243.2, ges: 2675.2 }
```

## optional chaining
- save way to access nested object properties, rather than having multiple null checks

```js
let users = [
{
    name: "Sam",
    age: 64,
    hobby: "cooking",
    hobbies: {
      hobb1: "cooking",
      hobby2: "sleeping"
    }
  },
  { name: "Bruno", age: 56 },
  { name: "Dave", age: 56, hobby: "Football" },
  {
    name: "Jacob",
    age: 65,
    hobbies: {
      hobb1: "driving",
      hobby2: "sleeping"
    }
  }
]

// naive approach throws an error:
try{
    users.forEach((user) =>console.log(user.hobbies.hobby2))
} catch (err) {
    console.error(err)
}
    //"sleeping"
    //TypeError: Cannot read properties of undefined (reading 'hobby2')

//null checking:
users.forEach(user => console.log(user.hobbies && user.hobbies.hobby2))
    //"sleeping"
    // undefined
    // undefined
    // "sleeping"

// optional chaning
users.forEach(user => console.log(user ?.hobbies ?.hobby2))
    //"sleeping"
    // undefined
    // undefined
    // "sleeping"
```