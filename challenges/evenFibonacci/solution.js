function evenFibonacci() {
    let [i, j] = [1, 2];
    let sum = 2;

    while (j < 4000000) {
        let temp = i;
        i = j;
        j = temp + i;

        if (j % 2 === 0) {
            sum += j;
        }
    }
    return sum;
}

console.log(evenFibonacci() === 4613732);