// FINISH solution

function grayCode(n) {
    let seed = ["0", "1"]
    let round = 1;

    if (n === 1) return seed;

    while (round < n) {
        seed = [...seed, ...seed.slice().reverse()];

        for (let index=0; index<round; index++) {
            seed[index] = `0${seed[index]}`
        }

        for (let index=round; index<seed.length; index++) {
            seed[index] = `1${seed[index]}`
        }
        round++;

    }

    return seed;
}

console.log(grayCode(3))