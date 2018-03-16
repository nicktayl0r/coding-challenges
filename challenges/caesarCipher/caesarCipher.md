## caesarCipher

**Difficulty**: Basic 

## Prompt 

Write a function called `caesarCipher` that has two parameters: 

1. A **plaintext** message in string form
2. A **shift**, which will be a number 

A cipher is a method of encrypting a plaintext message

The goal of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places down the **alphabet**. 

![Caesar cipher](./caesar.png)

Use the following alphabet: 

```js
let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
```

You can read more about the Caesar cipher [here](https://en.wikipedia.org/wiki/Caesar_cipher).

**Assume all characters in the plaintext message will be an uppercase letter or a space.**

Here is how the Caesar cipher works: 

```
plaintext = 'CAT'
shift = 1
alphabet = A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,<space>

If we shift all the letters of 'CAT' by 1 we get: 

C -> D   A -> B   T -> U     

encrypted message = 'DBU'
```

## Examples

```js
caesarCipher('HELLO', 7); //=> 'OLSSV'
caesarCipher('MEET ME TONIGHT AT THE PARK', 2); //=>'OGGVBOGBVQPKIJVBCVBVJGBRCTM'
caesarCipher('ABC', 9); //=> 'JKL'
```