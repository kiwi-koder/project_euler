function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i)
            // if char was used already
            continue; // skip it this time

        var remainingString =
            string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation);
    }
    return permutations;
}

const allPanDigital = permut("0123456789");

let sum = 0;

for (panDigital of allPanDigital) {
    if (parseInt(panDigital.slice(1, 4)) % 2 !== 0) continue;
    if (parseInt(panDigital.slice(2, 5)) % 3 !== 0) continue;
    if (parseInt(panDigital.slice(3, 6)) % 5 !== 0) continue;
    if (parseInt(panDigital.slice(4, 7)) % 7 !== 0) continue;
    if (parseInt(panDigital.slice(5, 8)) % 11 !== 0) continue;
    if (parseInt(panDigital.slice(6, 9)) % 13 !== 0) continue;
    if (parseInt(panDigital.slice(7, 10)) % 17 !== 0) continue;

    sum += parseInt(panDigital);
}

console.log(sum);
