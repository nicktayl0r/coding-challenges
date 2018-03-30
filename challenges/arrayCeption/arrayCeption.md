## arrayCeption

**Difficulty**: Medium

## Prompt 

Write a function called `arrayCeption` that given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains an integer value.

## Examples 

```js
arrayCeption([ [ 5 ], [ [ ] ] ]) //=> 2
arrayCeption([ 10, 20, 30, 40 ]) //=> 1
arrayCeption([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]) //=> 4
arrayCeption([ ]) //=> 0
```