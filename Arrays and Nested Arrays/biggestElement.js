function biggestElement(input) {
    let biggest = -99999999999;
    for (let a = 0; a < input.length; a++) {
        for (let b = 0; b < input[a].length; b++) {
            let el = Number(input[a][b]);
            if (el > biggest) {
                biggest = el;
            }
        }
    }
    return biggest;
}

console.log(biggestElement([[-20, -50, -10], [-8, -33, -145]]));
console.log(biggestElement([[3, 5, 7, 33], [-1, 4, 33, 2], [8, 3, 0, 4]]));
console.log(biggestElement([]));
