function longestPalindrome(str) {
    let strArray = str.split("");
    let maxLength = 0;
    let longest = false;

    strArray.forEach(function(elem, idx) {
        for (let index=idx+1; index<=strArray.length; index++) {
            let substring = str.slice(idx, index);
            let revSubString = substring.split("").reverse().join("");
            if ( (substring === revSubString) && (substring.length > maxLength) ) {
                longest = substring;
                maxLength = substring.length;
            }
        }
    })
    return longest;
}