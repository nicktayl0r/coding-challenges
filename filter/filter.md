## filter

**Difficulty**: Basic 

## Prompt 

Write a function called `filter` that accepts two parameters:
1. an array
2. a callback function

`filter` should return a new array with any elements in the original that don't "pass" the callback function removed.

## Examples

```js
filter([1,2,3,4], (x) => !(x%2)); //=> [2,4]

filter(['a', 'aa', 'aaa'], function(str) { //=> ['a']
    if (str.length < 2) {
        return true;
    }
})
```
