function diamond(n){
    if (!(n % 2) || n < 0) return null;
    let diam = ("*").repeat(n);
    for (let count=n-2; count>=0; count-=2) {
        let padding = (" ").repeat((n-count)/2);
        let newLevel = `${padding}${("*").repeat(count)}${padding}`
        diam = `${newLevel}\n${diam}\n${newLevel}`
    }
    return diam;
}