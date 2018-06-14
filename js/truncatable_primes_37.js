console.time("Time");

const isPrime = num => {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isTruncatable = num => {
    if (!isPrime(num)) return false;
    const numString = num.toString();
    for (let i = 1; i < numString.length; i++) {
        const leftSlice = parseInt(numString.slice(0, numString.length - i));
        if (!isPrime(leftSlice)) return false;
        const rightSlice = parseInt(numString.slice(i, numString.length));
        if (!isPrime(rightSlice)) return false;
    }
    return true;
};

let truncatablePrimes = [];
let num = 11; // 11 is starting prime
while (truncatablePrimes.length < 11) {
    if (isTruncatable(num)) {
        truncatablePrimes.push(num);
    }
    num++;
}

console.timeEnd("Time");
console.log(truncatablePrimes.reduce((a, b) => a + b));
