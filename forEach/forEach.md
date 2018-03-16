## forEach

**Difficulty**: Basic 

## Prompt 

Write a function called `forEach` that accepts two parameters: 

1. A collection - an array or object 
2. A callback function 

The callback function should be applied to each element in the array or each key in the object.

## Examples

The code below,

```js
forEach([1,2,3], function(elem) {
    console.log(elem);
})
```

should log out `1` then `2` then `3`.

Also, the code below,

```js
forEach({ a: "cat", b: "dog"}, function(key) {
    console.log(key);
})
```

should log out `a` then `b`.



