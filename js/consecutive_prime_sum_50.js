const isPrime = num => {
    if (num === 1) return false;
    if (num % 2 === 0) return false;
    for (let i = 2; i <= Math.sqrt(num); i = i + 2) {
        if (num % i === 0) return false;
    }
    return true;
};

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

const consecutivePrimeSum = maxSum => {
    let array;
    while (t)
}