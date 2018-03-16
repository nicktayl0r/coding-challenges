## transpose

**Difficulty**: Medium 

## Prompt 

Write a function called `transpose` that accepts an array of arrays as an argument. An example of such argument is:

```
[ 
    [1, 2, 3], 
    [8, 9, 34], 
    [-1, 2, 5]
]
```

Please note that the length of the input array will equal the length of any given sub-array. This is supposed to represent a [square matrix](https://en.wikipedia.org/wiki/Square_matrix). The `transpose` function should return the [transpose](https://en.wikipedia.org/wiki/Transpose) of the input "square matrix" meaning that the *rows* of the input matrix should become the *columms* of the output "matrix" and vice versa.

## Examples 

```js
transpose([ [1,2], [3,4] ]) //=> [ [1,3], [2,4] ]
transpose([ [3,4,5], [0,1,9], [2,6,7] ]) //=> [ [ 3,0,2], [4,1,6], [5,9,7] ]
```