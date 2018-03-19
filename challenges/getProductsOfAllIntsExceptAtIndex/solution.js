function getProductsOfAllIntsExceptAtIndex(arr) {
    let forward = 1;
    let backward = 1;
    let productsOfAllIntsBeforeIndex= [];
    
    arr.forEach(function(elem, index) {
        productsOfAllIntsBeforeIndex[index] = forward;
        productsOfAllIntsBeforeIndex[arr.length-index-1] = backward;
        forward *= arr[index];
        backward *= arr[arr.length-index-1];
    })

    return productsOfAllIntsBeforeIndex;
}

console.log(getProductsOfAllIntsExceptAtIndex([2,6,5,9]));