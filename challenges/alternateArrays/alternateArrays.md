## alternateArrays

**Difficulty**: Basic 

## Prompt 

Write a function named `alternateArrays` that accepts three arrays and returns a single array with the elements interleaved. 

More formally, given three arrays of length n -  lets call these arrays `a`, `b` and `c` - the resulting array should be in the form: 

```js
[ a[0], b[0], c[0], a[1], b[1], c[1], a[2], b[2], c[2], ..., a[n], b[n], c[n] ]
```

**Note**: The three input arrays will *ALL* be the same length.

## Examples 

```js
alternateArrays([ [0,3,6], [1,4,7], [2,5,8] ]) //=> [0,1,2,3,4,5,6,7,8]
alternateArrays([ ["cats", "i"], ["are", "like"], ["cool","coconuts"] ]) //=> ["cats", "are", "cool", "i", "like", "coconuts"]
```