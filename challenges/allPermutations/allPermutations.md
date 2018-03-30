## allPermutations

**Difficulty**: Advanced 

## Prompt 

Write a function called `allPermutations` that when given a string returns an array of all possible permutations of that string.

A string of length n has n! permutations. For example, consider the permutations of the string `"abc"`: 

* `"abc"`
* `"acb"`
* `"bac"`
* `"bca"`
* `"cab"`
* `"cba"`

Note how there are 6 - or 3! - permutations. Their are 3 characters in the string `"abc"`.

## Examples 

```js
allPermutations("a") //=> ["a"]
allPermutations("xy") //=> ["xy", "yz"]
allPermutations("xyz") //=> ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]
```

