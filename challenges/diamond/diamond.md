## diamond

**Difficulty**: Medium 

## Prompt 

Write a function called `diamond` that accepts an integer as input and return a string that displays a diamond shape on the screen using asterisk (`*`) characters.

The shape that will be returned should resemble a diamond, where the number provided as input represents the number of `*`’s logged out on the middle line. The line above and below will be centered and will have 2 less `*`’s than the middle line. This reduction by 2 `*`’s for each line continues until a line with a single `*` is printed at the top and bottom of the figure. Lines should be separated by newline characters (`\n`).

Return `null` if the input is even number or negative (as it is not possible to print a diamond with  an even number or a negative number).

## Examples

```js
diamond(3); //=>  "*\n***\n *\n"
diamond(5); //=> "*\n***\n*****\n***\n*"
```