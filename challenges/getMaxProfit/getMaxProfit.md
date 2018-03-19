## getMaxProfit 

**Difficulty**: Medium

## Prompt 

Write a function called `getMaxProfit` that accepts an array of integers. Suppose this array is yesterday's Apple stocks where: 

* the indices of the array are the time in minutes past trade opening time which will be 9:30 AM
* the values are the price in dollars of Apple stock at that time

Write an *efficient* algorithm that takes the array of Apple stocks and returns the best profit you could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

There is no "shorting"! **You must not buy before you sell and you may not buy and sell in the same time step**.

All prices will be positive integers.

## Examples 

```js
getMaxProfit([5,3,2,1,0]) //=>  -1
getMaxProfit([10, 7, 5, 8, 11, 9]) //=> 6
```