## xor

**Difficulty**: Basic 

## Prompt 

Write a function called `xor` that accepts two boolean (`true` or `false`) parameters. The `xor` function should return `true` or `false` based off of the truth table for XOR. 

| XOR | 0 | 1 |
|-----|---|---|
| 0   | 0 | 1 |
| 1   | 1 | 0 |

The XOR operator is a Boolean operator. You can read more about it here: https://en.wikipedia.org/wiki/Exclusive_or.

## Examples

```js
xor(false, true) //=> true 
xor(true, false) //=> true 
xor(true, true) //=> false
xor(false, false) //=> false
```