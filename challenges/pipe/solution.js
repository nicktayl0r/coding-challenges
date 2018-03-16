const pipe = (...ops) => ops.reduce((op1, op2) => arg => op2(op1(arg)))
