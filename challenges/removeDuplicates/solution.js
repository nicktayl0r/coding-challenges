function removeDuplicates(arr) {
    let noDups = [];
    arr.forEach(function(elem) {
        if ( !noDups.includes(elem) ) {
            noDups.push(elem);
        }
    })
    return noDups;
}