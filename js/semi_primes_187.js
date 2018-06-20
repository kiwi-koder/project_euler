const isPrime = num => {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const generatePrimes = x => {
    let primes = [];
    for (let i = 2; i <= x; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
};

const hasTwoPrimeFactors = num => {
    const primesArray = Object.keys(primes);
    let i = 0;
    while (true) {
        const prime = primesArray[i];
        if (prime > Math.sqrt(num)) return false;
        if (num % prime === 0) {
            const otherNum = num / prime;
            if (primes[otherNum] === 1) return true;
            return false;
        }
        i++;
    }
};
// console.time("Time");
// const maxNum = 3 * 10 ** 5;
// const primes = generatePrimes(maxNum / 2);
// let semiPrimeCount = 0;
// console.time("Loop");
// for (i in primes) {
//     const prime = primes[i];
//     for (j of primes.slice(i)) {
//         if (prime * j < maxNum) {
//             semiPrimeCount++;
//         } else {
//             break;
//         }
//     }
// }
// console.timeEnd("Loop");

// console.log(primes[0]);
// console.timeEnd("Time");

const makeObject = num => {
    const thing = {};
    for (let i = 2; i <= num; i++) {
        thing[i] = 0;
    }
    return thing;
};

const markObject = obj => {
    for ([key, value] of Object.entries(obj)) {
        if (value === 0) {
            obj[key] = 1;
            let m = 2;
            while (true) {
                if (obj[key * m] !== undefined) {
                    obj[key * m] = "x";
                    m++;
                } else {
                    break;
                }
            }
            return markObject(obj);
        }
    }

    return Object.entries(obj)
        .filter(([key, value]) => value === 1)
        .map(([key, value]) => parseInt(key));
};

// const getPrimes = num => {
//     let arr = new Array(num);
// };

const getPrimes = n => {
    let arr = new Array(n).fill(true);
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (arr[i]) {
            let j = i ** 2;
            while (j < n) {
                arr[j] = false;
                j += i;
            }
        }
    }
    let primes = [];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i]) primes.push(i);
    }
    return primes;
};

console.time("Time");
const maxNum = 10 ** 8;
const primes = getPrimes(maxNum / 2);
let semiCount = 0;
let front = 0;
let back = primes.length - 1;

while (front <= back) {
    if (primes[front] * primes[back] < maxNum) {
        semiCount += back - front + 1;
        front++;
    } else {
        back--;
    }
}

console.log(semiCount);
console.timeEnd("Time");
// const num = 10 ** 8;
// console.time("Fast");
// getPrimes(num);
// console.timeEnd("Fast");
// console.time("Slow");
// generatePrimes(num);
// console.timeEnd("Slow");
