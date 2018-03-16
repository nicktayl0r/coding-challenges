## pipe

**Difficulty**: Medium 

## Prompt 

In Bash there exists the idea of taking the *output* of one program and providing it as the *input* to another program. This general process is called [piping](https://en.wikipedia.org/wiki/Pipeline_(Unix)). You could write the following in Bash: 

```bash
$ ls -l | grep wdi
```

The `ls -l` command lists all directories and files within your current directory, `|` is the pipe operator in Bash and `grep` is a way of searching text using [regular expressions](https://en.wikipedia.org/wiki/Regular_expression).
Basically, a **pipe** is a form of redirection that is used to send the output of one program to another program for further processing. 

Write a function called `pipe` that takes as input `n` single argument JavaScript functions - where `n` is some positive integer. It should return a function that applies all of the aforementioned functions in the order in which they were provided to the `pipe` function.

**Hint**: `Array.prototype.reduce` is a useful array method for this problem.

## Examples 

```js
function addOne(a) {
    return a +1;
}

function divideBy2(n){
    return n/2;
}

const addOneAndDivideBy2 = pipe(addOne, divideBy2) //=> returns [Function]
addOneAndDivideBy2(3) //=> returns 2
```



