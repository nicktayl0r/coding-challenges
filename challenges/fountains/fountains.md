## fountains

**Difficulty**: lol idk

## Prompt 

You are given two inputs:

An array of heights
An array of fountain placements, where 1s are fountains and 0s are empty.
Your job is to compute the flooded areas.

Output: An array of flooded areas, where 1 means it is flooded and 0 means it is dry.
Each entry in the height array differs by at most 1 from the adjacent entries. Both arrays are the same size.

A rough example corresponding to the above would be

[Original Problem](https://github.com/cwbriones/interview-practice/tree/master/fountains)


## Examples

```js
area      = [0, 1, 2, 3, 2, 1, 2, 1, 0, 1, 0, 1, 1, 1, 2]
fountains = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]

=>

flooded   = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0]
```