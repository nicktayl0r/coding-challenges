## combinationSum 

**Difficulty**: Medium 

## Prompt 

Write a function called `combinationSum` that accepts two arguments: an array of integers (denoted using **C** from this point on) and a "target" integer. `combinationSum` should return the set of all *unique* combinations from **C** that sum up to the "target" integer. You may use a given number from **C** an unlimited number of times.

## Examples 

```js
combinationSum([2,3,6,7], 7) //=> [ [2, 2, 3], [7] ]
combinationSum([1], 3) //=> [ [1,1,1] ]
```

Another, more involved, example is:

```js
combinationSum([1,2,4], 8) 
```

Which returns: 

```js
[ 
    [1,1,1,1,1,1,1,1],
    [4,4], 
    [2,2,2,2], 
    [1,1,1,1,1,1,2], 
    [1,1,1,1,2,2],
    [1,1,2,2,2] 
    [1,1,1,1,4],
    [4,2,2], 
    [4,1,1,2] 
    [4,2,1,1] 
]
```
