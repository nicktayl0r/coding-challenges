function multiplesOfThreeAndFive() {
    let sum = 0;
    for (let i=1; i<1000; i++) {
        if ( !(i % 3) || !(i % 5) ) sum += i;
    }
    return sum;
}

console.log(multiplesOfThreeAndFive());