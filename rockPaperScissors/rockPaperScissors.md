## rockPaperScissors

**Difficulty**: Advanced 

## Prompt 

Write a function called `rockPaperScissors` that accepts a single, integer parameter `n` that returns all the possible results from two players playing `n` rounds of the game [Rock-paper-scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors). The result should be a an array of arrays of length `n` where each element corresponds to the winner of a round.   

## Examples

```js
rockPaperScissors(1) //=> 
rockPaperScissors(2) /* [ 
                            [ ‘rock’    , ‘rock’ ], [ ‘rock’    , ‘paper’ ], [ ‘rock’    , ‘scissors’ ],
                            [ ‘paper’   , ‘rock’ ], [ ‘paper’   , ‘paper’ ], [ ‘paper’   , ‘scissors’ ],
                            [ ‘scissors’, ‘rock’ ], [ ‘scissors’, ‘paper’ ], [ ‘scissors’, ‘scissors’ ] 
                                                                                                            ]
                    */
```
