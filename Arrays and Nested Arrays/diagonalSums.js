function diagonalSums(input) {
    let sumOne = 0;
    let sumTwo = 0;

    for (let a = 0; a < input.length; a++) {
        sumOne += Number(input[a][a]);
    }

    let p = 0
    for (let b = input.length - 1; b >= 0; b--) {

        sumTwo += Number(input[b][p]);
        p++;

    }
    return sumOne + " " + sumTwo;
}

console.log(diagonalSums([[20, 40],
    [10, 60]]));

console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));