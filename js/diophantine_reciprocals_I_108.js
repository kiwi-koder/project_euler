const countFactors = num => {
    let factorCount = 2; // 1 and itself
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i === Math.sqrt(num)) {
                factorCount++;
            } else {
                factorCount += 2;
            }
        }
    }
    return factorCount;
};

// let num = 100000;
// const num = 2 ** 1 * 3 ** 1 * 5 ** 1;
// console.log(countFactors(num), num);
const getPrimeFactors = (x, acc = {}) => {
    for (let i = 2; i <= x; i++) {
        if (x % i === 0) {
            if (acc[i] === undefined) {
                return getPrimeFactors(x / i, { ...acc, [i]: 1 });
            } else {
                return getPrimeFactors(x / i, { ...acc, [i]: acc[i] + 1 });
            }
        }
    }
    return acc;
};

// let num = 2;
// let maxFactor = 0;
// while (true) {
//     const factorCount = countFactors(num);
//     if (factorCount > maxFactor) {
//         maxFactor = factorCount;
//         console.log(getPrimeFactors(num), num, factorCount);
//     }
//     num++;
// }
const num = 2 ** 6 * 3 ** 2 * 5 ** 1 * 7 ** 1 * 11 * 1 * 13 ** 1 * 17;
console.log(countFactors(num), num);
// console.log(num);

// console.log(2 ** 10);
