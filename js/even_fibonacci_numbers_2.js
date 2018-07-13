const fib = num => {
    if (num === 1) return 1;
    if (num === 2) return 2;
    let thisOne;
    let oneBehind = 2;
    let twoBehind = 1;

    for (let i = 3; i <= num; i++) {
        thisOne = oneBehind + twoBehind;
        twoBehind = oneBehind;
        oneBehind = thisOne;
    }
    return thisOne;
};

let i = 1;
let tot = 0;
while (fib(i) < 4000000) {
    if (fib(i) % 2 === 0) {
        tot += fib(i);
    }
    i++;
}
console.log(tot);
