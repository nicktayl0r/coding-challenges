function isogram(str) {
    let count = {};
    str = str.replace(/ /g, "").replace(/-/g, "");;
    str.split("").forEach(elem => count[elem] = 0);
    str.split("").forEach(elem => count[elem] += 1);

    for (let key in count) { 
        if (count[key] > 1) {
            return false;
        }
    }
    return true;
}