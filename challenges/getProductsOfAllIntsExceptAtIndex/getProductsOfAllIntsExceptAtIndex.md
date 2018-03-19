## getProductsOfAllIntsExceptAtIndex

**Difficulty**: Basic 

## Prompt 

Write a function `getProductsOfAllIntsExceptAtIndex` that takes an array of integers and returns an array of the products. Each product should correspond to the product of *all* elements in that array *except* the element at that position. 

## Examples 

```js
getProductsOfAllIntsExceptAtIndex([1,2,3]) //=> [ 2*3, 1*3, 2*1 ] which simplifies to [6, 3 2]
getProductsOfAllIntsExceptAtIndex([1,7,3,4]) //=> [ 7*3*4, 1*3*4, 1*7*4, 1*7*3 ] which simplifies to [84, 12, 28, 21]
```