let num = 10;

const powerDigit = (num, power) => {
    return num
        .toString()
        .split("")
        .map(el => parseInt(el) ** power)
        .reduce((a, b) => a + b);
};
while (true) {
    if (powerDigit(num, 6) === num) {
        console.log(num);
    }
    num++;
}
