function magicMatrices(input) {
    let rowSum = [];
    let columnSum = [];

    for (let i = 0; i < input.length; i++) {
        if (input.length === 1) {
            return true;
        }
        if (input.length === 2) {
            return false;
        }
        if (input[i].length !== input.length) {
            return false;
        }
    }

    for (let a = 0; a < input.length; a++) {

        rowSum.push(input[a].reduce((x, y) => x + Number(y), 0));
        let sum = 0;
        for (let c = 0; c < input[a].length; c++) {
            sum += Number(input[c][a])

        }
        columnSum.push(sum);
    }

    return rowSum.concat(columnSum).every((el, i, arr) => el === arr[0]);
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
