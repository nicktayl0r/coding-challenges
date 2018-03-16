function filter(arr, cb) {
    let filtered = [];
    arr.forEach(function(elem) {
        if (cb(elem)) {
            filtered.push(elem);
        }
    })
    return filtered;
}

console.log(filter(['a', 'aa', 'aaa'], function(str) {
    if (str.length < 2) {
        return true;
    }
}))
