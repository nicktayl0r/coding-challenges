## map

**Difficulty**: Basic 

## Prompt

Write a function called `map` that accepts two parameters: a collection (a **collection** is either an array *or* an object in this context) and a callback function. The callback function should itself accept two parameters: 

    1. The **first** parameter should correspond to each *element* or each *value* in the aforementioned collection
    2. The **second** parameter should correspond to the **index** or **key** of each element, depending on whether the collection passed to `map` is an array or object

Here is a description of `map`s [function signature](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function) as well as its callback's function signature. 

```js
map(arr, cb) //=> should return an Array

/* AND */

cb(elem or value, index OR key) //=> should return a single value (any data type in JS)
```

The callback function provided to `map` should be *applied* to each element in the array or each value in the object and should return a new array of the resulting "transformed" values.

This function is based off of Underscore's [map](http://underscorejs.org/#map) function.

## Examples

```js 
map([1,2,3], x => x + 1); //=> [2,3,4]
map(["cat", "dog", "bird"], function(animal, index) { //=> ['I like cute cats', 'I like cute dogs', 'I like cute birds']
    return `I like cute ${animal}s`;
});
map({ a: 1, b: 2, c: 4}, function(value, key) { //=> [2, 3, 5]
    return value + 1;
});
```
