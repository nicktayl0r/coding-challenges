function asyncMap(arr, asyncIterator, cb) {
    let mapped = new Array(arr.length);
    let count = 0;
    arr.forEach(function(url, index) {
        asyncIterator(url, function(err, html){
            count++;
            mapped[index] = html;
            if (count === mapped.length) {
                cb(mapped);
            }
        });
    });
}

function iterator(url, cb) {
    get(url, function(err, html) {
        cb(err, html);
    })
}

asyncMap(["www.jtamsut.com", "www.cnn.com"], iterator, cb);