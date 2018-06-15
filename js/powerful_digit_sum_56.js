const bigInt = require("big-integer");

let maxSum = 0;
let maxA = 0;
let maxB = 0;
let maxNum = "0";

for (let a = 1; a < 100; a++) {
    for (let b = 1; b < 100; b++) {
        const num = bigInt(a)
            .pow(b)
            .toString();
        const sum = num
            .split("")
            .map(el => parseInt(el))
            .reduce((x, y) => x + y);
        if (sum > maxSum) {
            maxSum = sum;
            maxA = a;
            maxB = b;
            maxNum = num;
        }
    }
}
console.time("Time");
console.log({ maxSum, maxA, maxB, maxNum });
console.timeEnd("Time");
