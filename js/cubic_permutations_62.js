const getCube = numberOfPerms => {
    let cubes = {};
    let i = 1;
    while (true) {
        const cube = i ** 3;
        const sorted = cube
            .toString()
            .split("")
            .sort()
            .join("");
        cubes[sorted] =
            cubes[sorted] === undefined ? [cube] : [...cubes[sorted], cube];
        if (cubes[sorted].length === numberOfPerms) {
            return cubes[sorted][0];
        }
        i++;
    }
};

console.time("Time");
console.log(getCube(5));
console.timeEnd("Time");
