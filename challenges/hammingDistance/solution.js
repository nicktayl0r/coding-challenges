function hammingDistance(num1, num2) { 
    return (num1 ^ num2).toString(2).split("").reduce((a,b) => (parseInt(a) + parseInt(b)), 0)
}