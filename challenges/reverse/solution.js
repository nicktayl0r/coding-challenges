function reverse(forward) {
    let reverse = "";
    for (let index=forward.length-1; index>-1; index--) {
        reverse += forward[index];
    }
    return reverse;
}