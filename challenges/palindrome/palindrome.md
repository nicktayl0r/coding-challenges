## palindrome

**Difficulty**: Basic 

## Prompt 

Write a function called `palindrome` that returns `true` if a string is a palindrome or `false` if its not. A **palindrome** is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Here is a palindrome: "abba".

You'll need to remove the following characters from the strings in order to check for palindromes: 

* `!`, `+`, `-`, `?`
* spaces 
* turn everything lower case

For example the following strings are all palindromes of one another: 

* `"racecar"`
* `"RaceCar"`
* `"race CAR"`

## Examples

```js
palindrome("RaceCar") //=> true
palindrome("abba") //=> true 
palindrome("a +B !ba") //=> true
palindrome("fregin wadda") //=> false 
palindrome("nan!i") //=> false
```
