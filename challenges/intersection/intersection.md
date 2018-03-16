## intersection 

**Difficulty**: basic

## Prompt 

Write a function called `intersection` that accepts two parameters. Each parameter will be an array of strings or integers. `intersection` should return an single array that has the common elements in both arrays if there are any. You should assume that the two input arrays have no repeated integers in them (i.e., each integer in the input array appears only once in that array).

## Examples

```js
intersection([1,2,3], [4,5,6]) //=> []
intersection(["cat", "dog", "bird"], ["bird"]) //=> ["bird"]
intersection([101, 203], [101]) //=> [101]
```