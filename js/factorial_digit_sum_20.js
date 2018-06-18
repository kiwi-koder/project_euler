const bigInt = require("big-integer");

const factorial = x => {
    if (x === 0) return 1;
    return bigInt(x)
        .times(factorial(x - 1))
        .toString();
};

const sumDigits = num => {
    return num
        .toString()
        .split("")
        .map(el => parseInt(el))
        .reduce((a, b) => a + b);
};
console.time("Time");
console.log(sumDigits(factorial(100)));
console.timeEnd("Time");
