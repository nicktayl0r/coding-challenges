## hammingDistance

**Difficulty**: Basic 

## Prompt 

The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two strings of equal length is the number of positions in which the two strings are different. Write a function called `hammingDistance` that accepts two non-negative, integers in [decimal](https://en.wikipedia.org/wiki/Decimal) format and returns the Hamming distance of the [binary](https://en.wikipedia.org/wiki/Binary_number) representations of these numbers. When the numbers are converted to binary strings they should be strings of the same length. All strings should be left-padded with zeroes so they equal the length of the longer string. For example, 

The Hamming distance is the number of bits that are different between two binary numbers.

```js
hammingDistance(1,4)
/*
    The 1 should be converted "001"
    The 4 should be converted to "100"
*/
```

**Hint**: Look into the `toString` method. Note that the `toString` method takes an optional radix argument. 

```js
(3).toString(2) //=> "11" ('11' is 3 in binary)
(5).toStrign(5) //=> "101" ('101' is 5 in binary) 
``` 

## Examples

```js
hammingDistance(1,4) //=> 2
hammingDistance(5,6) //=> 2
hammingDistance(3,3) //=> 0
```