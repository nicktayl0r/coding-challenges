## range 

**Difficulty**: basic 

## Prompt 

Write a function called `range` that accepts two integers as parameters and returns an array of integers that go from the first parameter to one less than the second parameter. For example, `range(1,3)` should return `[1,2]`. The first parameter **must** be less than or equal to the second parameter. If the second parameter is less than the first parameter your `range` function should return the string `"First parameter must be smaller than second."`.

## Examples

```js 
range(1,4) //=> [1,2,3]
range(1,1) //=> []
range(5,2) //=> "First parameter must be smaller than second." 
```