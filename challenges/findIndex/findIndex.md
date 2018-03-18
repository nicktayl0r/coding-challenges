## findIndex

**Difficulty**: Basic 

## Prompt 

Write a function called `findIndex` that accepts two parameters: 

1. An array 
2. A callback function 

`findIndex` should return the **index** of the first element in the array that satisfies the callback function passed to it. If no element satisfies the callback function `findIndex` should return `-1`. 

## Examples

```js
findIndex([5, 12, 8, 130, 44], function(num) { //=> 3
    return num > 13;
})

findIndex([5, 12, 8, 130, 44], function(num) { //=> -1
    return num === 100;
})
```
