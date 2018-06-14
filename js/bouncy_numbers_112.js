const isBouncy = num => {
    const numString = num.toString();
    let up = false;
    let down = false;
    for (let i = 0; i < numString.length - 1; i++) {
        const thisEl = parseInt(numString[i]);
        const nextEl = parseInt(numString[i + 1]);
        // console.log(thisEl, nextEl);
        if (thisEl > nextEl) down = true;
        if (thisEl < nextEl) up = true;
        if (down && up) return true;
    }
    return false;
};

let i = 1;
let bouncyCount = 0;
while (true) {
    if (isBouncy(i)) bouncyCount++;
    const ratio = bouncyCount / i;
    if (ratio >= 0.99) {
        console.log(i);
        break;
    }

    i++;
}
