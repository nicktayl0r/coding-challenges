## longestPalindrome

**Difficulty**: Medium 

## Prompt 

Write a function called `longestPalindrome` that takes in a string of lowercase letters (no uppercase letters, no repeats). Consider the *substrings* of the string: consecutive sequences of letters contained inside the string.

Given a string, `longestPalindrome` should return the longest substring of letters that is a palindrome.

## Examples

```js
longestPalindrome("abcbd") //=> "bcb"
longestPalindrome("abba") //=> "abba"
longestPalindrome("abcbdeffe") //=> "effe"
```