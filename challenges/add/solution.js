function add() {
    let sum = 0;
    for (let key in arguments) {
        sum += arguments[key];
    }
    return sum;
}