## filterOutOdds

**Difficulty**: Basic 

## Prompt 

Write a function called `filterOutOdds` that accepts an array of integers as an argument. It should return a *new* array with all of the odd integers from the input array removed.

**Hint**: Use the `Array.prototype.filter` method and the modulo (`%`) operator.

## Examples 

```js
filterOutOdds([1,2,3,4,4,5]) //=> [2,4,4]
filterOutOdds([1,3,5]) //=> []
filterOutOdds([6,8,10,11]) //=> [6,8,10]
```