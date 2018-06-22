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
const lotsOfPrimes = getPrimes(10 ** 7);

console.log(lotsOfPrimes[10000]);

console.timeEnd("Time");
