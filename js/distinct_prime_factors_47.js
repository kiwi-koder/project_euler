const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const getPrimeFactors = (x, acc = {}) => {
    for (let i = 2; i <= x; i++) {
        if (x % i === 0) {
            return getPrimeFactors(x / i, { ...acc, [i]: 1 });
            // if (acc[i] === undefined) {
            //     return getPrimeFactors(x / i, { ...acc, [i]: 1 });
            // } else {
            //     return getPrimeFactors(x / i, { ...acc, [i]: acc[i] + 1 });
            // }
        }
    }
    return acc;
};

const getConsecPrimeFactors = maxConsec => {
    let num = 1;

    while (true) {
        num++;
        const primeFactors = Object.keys(getPrimeFactors(num)).length;
        // console.log(primeFactors);
        if (primeFactors !== maxConsec) continue;
        const startNum = num;
        let consecNum = 1;
        loop: while (true) {
            num++;
            const newPrimeFactors = Object.keys(getPrimeFactors(num)).length;
            if (newPrimeFactors !== maxConsec) break loop;
            consecNum++;
            if (consecNum === maxConsec) return startNum;
        }
    }
};

console.time("Time");
console.log(getConsecPrimeFactors(4));
console.timeEnd("Time");
