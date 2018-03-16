## objToString

**Difficulty**: Basic 

## Prompt 

Write a function called `objToString` that accepts a single parameter: an object with a `name`, `age` and `favoriteFood` property. This object will look something like this: 

```js
{ 
    name: "Jon", 
    age: 24, 
    favoriteFood: "Plov"
}
```
Your `objToString` function should return a string that says: 

"Hello, my name is <name> and I am <age> years-old and my favorite food is <favoriteFood>", 

where has the <name> is the value of the `name` property, <age> is the value of the `age` property and `favoriteFood` is the value of the `favoriteFood`  property from the object that is passed to `objToString`.

## Examples

```js
objToString({ name: "Jon", age: 24, favoriteFood: "Plov" }) //=> "Hello, my name is Jon and I am 24 years-old and my favorite food is Plov"
```