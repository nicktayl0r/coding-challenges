## computeRemainder 

**Difficulty**: Basic 

## Prompt

Write a function called `computeRemainder` that returns the remainder from the division of two [integers](http://whatis.techtarget.com/definition/integer). The [first argument should be the dividend and the second argument should be the divisor](http://www.amathsdictionaryforkids.com/qr/d/division.html). If a `0` is passed in as the second argument you should return the following string: `"Thou shalt not divide by zero!"`. You should also assume that you will always be passed in a dividend that is greater than your divisor. 

## Examples 

```js
computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> "Thou shalt not divide by zero!"
computeRemainder(10, 3) //=> 1
```