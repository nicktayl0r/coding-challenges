## objToTuples

**Difficulty**: Basic 

## Prompt 

Write a function called `objToTuples` that accepts an object as an argument and returns an *array of 2-element arrays*, where the first element in the 2-element array is a key from the passed in object and the second element is a corresponding value.

## Examples

```js
objToTuples({ a: "cat", b: 101 }) //=> [ ["a","cat"], ["b", 101] ]
objToTuples({ blue: "sky", green: "grass" }) //=> [ ["blue", "sky"], ["green", "grass"] ]
```