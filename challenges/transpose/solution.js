function transpose(arr) {
    let [transpose, n] = [ [], arr.length ];

    for (let index=0; index<n; index++) {
        transpose.push([]);
    }

    for (let row=0; row<n; row++) {
        for (let col=0; col<n; col++) {
            transpose[col].push(arr[row][col]);
        }
    }
    return transpose;
}