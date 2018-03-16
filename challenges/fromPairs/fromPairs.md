## fromPairs

**Difficulty**: Basic

## Prompt 

Write a function called `fromPairs` that creates a new object from a list of key-value pairs. If a key appears in multiple pairs, the rightmost pair is included in the object.

## Examples

```js
fromPairs([ ["a", 1], ["b", 2], ["c", 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ["name", "Jon"], ["age", 24], ["name", "Paul"] ]) //=> { name: "Paul", age: 24 }
```