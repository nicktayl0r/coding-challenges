## map

**Difficulty**: Basic 

## Prompt

Write a function called `map` that accepts an array and callback as an argument. You should apply the callback to each element of the input array and return an array of "transformed" values. This should work in a similar fashion to JavaScript's [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Examples

```js 
map([1,2,3], x => x + 1); //=> [2,3,4]
map(["cat", "dog", "coconut"], function(animal, index) { //=> ['I like cute cats', 'I like cute dogs', 'I like cute coconuts']
    return `I like cute ${animal}s`;
});
```