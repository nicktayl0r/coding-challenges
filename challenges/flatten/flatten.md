## flatten

**Difficulty**: Medium 

## Prompt 

Write a function called `flatten` that takes a **single** multi-dimensional array as an argument and returns the "flattened" array. A flattened array is an array with no sub-arrays inside of it.

## Examples 

```js
flatten([ 1, [2, [3, [4]], 5] ]); //=> [1, 2, 3, 4, 5]
flatten([ [1,2,3], [4,5,6] ]); //=> [1, 2, 3, 4, 5, 6]
flatten([ [], [4,5,6] ]); //=> [4, 5, 6]
flatten([ [[[5]]], [100, 2]]); //=> [ 5, 100, 2 ]
```
