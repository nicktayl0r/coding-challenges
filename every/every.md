## every

**Difficulty**: Basic 

## Prompt 

Write a function called `every` that accepts two parameters: 

    1. An array 
    2. A callback function 
    
The `every` function should return `true` if all elements in the array "pass" the test implemented by the callback function and `false` otherwise.

## Examples

```js
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

const array1 = [1, 30, 39, 29, 10, 13];

array1.every(isBelowThreshold); //=> true
```
