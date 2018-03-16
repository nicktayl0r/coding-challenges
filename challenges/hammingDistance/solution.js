function hammingDistance(num1, num2) { 
    let count = 0;
    let [x, y] = [(num1).toString(2), (num2).toString(2)];
    let bitStringLength = x.length < y.length ? y.length : x.length;
    [x, y] = [x.padStart(bitStringLength, "0"), y.padStart(bitStringLength, "0")];

    for (let i=0; i<bitStringLength; i++) { 
        if (x[i] !== y[i]) { 
            count+=1;
        }
    }

    return count;
}
