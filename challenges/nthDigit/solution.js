function nthDigit(x, n) {
    let str = (x).toString();
    return parseInt((x).toString()[str.length - 1 - n])
}