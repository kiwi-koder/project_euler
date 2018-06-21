const isEightyNine = num => {
    if (num === 89) return true;
    if (num === 1) return false;
    return isEightyNine(
        num
            .toString()
            .split("")
            .map(el => parseInt(el) ** 2)
            .reduce((a, b) => a + b)
    );
};

let count = 0;

for (let i = 1; i <= 10 ** 7; i++) {
    if (isEightyNine(i)) {
        count++;
    }
}

console.log(count);
