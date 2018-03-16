function map(collection, cb) {
    let mapped = [];
    if (Array.isArray(collection)) { 
        collection.forEach(function(elem) {
            mapped.push(cb(elem));
        })
    } else { 
        for (let key in collection) {
            mapped.push(cb(collection[key]));
        }
    }
    return mapped;
}

let a = map([1,2,3], x => x + 1); //=> [2,3,4]
let b = map(["cat", "dog", "bird"], function(animal, index) { //=> ['I like cute cats', 'I like cute dogs', 'I like cute birds']
    return `I like cute ${animal}s`;
});
let c = map({ a: 1, b: 2, c: 4}, function(value, key) { //=> [2, 3, 5]
    return value + 1;
});
