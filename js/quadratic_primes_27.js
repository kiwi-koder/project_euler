const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const quadratic = (a, b, n) => n ** 2 + a * n + b;

let maxA = 0;
let maxB = 0;
let maxN = 0;
for (let a = -999; a < 999; a++) {
    for (let b = -999; b < 999; b++) {
        let n = 0;
        while (isPrime(quadratic(a, b, n))) {
            n++;
        }
        if (n > maxN) {
            maxA = a;
            maxB = b;
            maxN = n;
        }
    }
}

console.log({ maxA, maxB, maxN, AtimesB: maxA * maxB });
