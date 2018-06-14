const factorial = num => {
    if (num === 0) return 1;
    return num * factorial(num - 1);
};

const sumDigits = num => {
    return num
        .toString()
        .split("")
        .map(el => factorial(parseInt(el)))
        .reduce((a, b) => {
            return a + b;
        });
};
let i = 3;
let sum = 0;
while (true) {
    if (sumDigits(i) === i) {
        console.log(i);
    }
    i++;
}
console.log(sumDigits(612));
