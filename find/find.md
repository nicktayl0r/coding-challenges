## find

**Difficulty**: Basic 

## Prompt 

Write a method called `find` that takes two parameters:

1. an array 
2. a callback function.

The `find` method returns the value of the first element in the array that satisfies the provided testing function. Otherwise `undefined` is returned.

## Examples

```js
find([5, 12, 8, 130, 44], function(element) { //=> 12
  return element > 10;
})

find([0,1,0,1], (elem) => elem); //=> 1
```