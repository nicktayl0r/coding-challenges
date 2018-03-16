/*==========================
   Utility stack function below
  ==========================*/

class Stack {

    constructor() { 
        this.stack = [];
    }

    pop() { 
        return this.stack.pop();
    }

    push(value) {
        this.stack.push(value);
        return this.stack;
    }

    getStack() {
        return this.stack;
    }

    empty() { 
        return !this.stack.length;
    }

    top() { 
        return this.stack[this.stack.length-1];
    }

    stackToWord() { 
        return this.stack.map(obj => obj.value).join("");
    }
};

/*==========================
   DFS validBoggleMove function
  ==========================*/

const possibleNextPositions = (x,y) => [ [x+1, y+1], [x+1, y], [x, y+1], [x-1, y], [x, y-1], [x+1, y-1], [x-1, y+1], [x-1, y-1] ];

function validBoggleMove(board, word, startingPosition) {
    // Initialize the stack & our word
    let stack = new Stack(); 
    let currentCharIdx = 1;
    stack.push(board[startingPosition[0]][startingPosition[1]]);
    board[startingPosition[0]][startingPosition[1]].visited = true;
    

    while (stack.top()) {

        let nextMove = possibleNextPositions(stack.top().x, stack.top().y)
                                .find(pos => ( (board[pos[1]] && board[pos[1]][pos[0]]) && board[pos[1]][pos[0]].value === word[currentCharIdx]) && board[pos[1]][pos[0]].visited);
        

        if (nextMove === undefined) {
            stack.pop();
            currentCharIdx--;
        } else { 
            stack.push(board[nextMove[1]][nextMove[0]]);
            currentCharIdx++;
        } 

        console.log(stack.getStack());
        console.log(nextMove); 


    }


}


/*==========================
    TESTS BELOW 
  ==========================*/

// x (left to right) & y (top to bottom) sampleBoard[y][x] 
const sampleBoard = [ 
    [{ x: 0, y: 0, value: "m", visited: false }, { x: 1, y: 0, value: "i", visited: false }, { x: 2, y: 0, value: "z", visited: false }, { x: 3, y: 0, value: "t", visited: false }], 
    [{ x: 0, y: 1, value: "i", visited: false }, { x: 1, y: 1, value: "r", visited: false }, { x: 2, y: 1, value: "v", visited: false }, { x: 3, y: 1, value: "x", visited: false }], 
    [{ x: 0, y: 2, value: "d", visited: false }, { x: 1, y: 2, value: "q", visited: false }, { x: 2, y: 2, value: "i", visited: false }, { x: 3, y: 2, value: "m", visited: false }], 
    [{ x: 0, y: 3, value: "o", visited: false }, { x: 1, y: 3, value: "s", visited: false }, { x: 2, y: 3, value: "n", visited: false }, { x: 3, y: 3, value: "d", visited: false }], 
];

console.log(validBoggleMove(sampleBoard, "midqri", [0,0]))
