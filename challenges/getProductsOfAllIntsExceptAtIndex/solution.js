function getProductsOfAllIntsExceptAtIndex(arr) {
    let product = arr.reduce(function(a,b) {
      if (a !== 0 && b !== 0) {
          return a * b;
      }  
      return a || b
    })
    return arr.map(x => x ? (arr.reduce((a,b) => a *b)/x) : product);
}