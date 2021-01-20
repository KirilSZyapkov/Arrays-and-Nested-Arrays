function equalNeighbors(input) {
    let pairs = 0;

    for (let a = 0; a < input.length; a++) {
        let x = '';
        let y = '';
        for (let b = 0; b < input[a].length; b++) {
            x = input[a][b];
            y = input[a][b + 1];
            if (x === y) {
                pairs++;
            }
        }
    }
    for (let c = 0; c < input.length - 1; c++) {
        let p = '';
        let n = '';
        for (let d = 0; d < input[c].length; d++) {
            p = input[c][d];
            n = input[c + 1][d];
            if (p === n) {
                pairs++;
            }
        }
    }
    return pairs;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]));

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]));