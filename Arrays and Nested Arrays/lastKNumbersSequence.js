function lastKNumbersSequence(arg1, arg2) {
    let n = Number(arg1);
    let k = Number(arg2);
    let toPrint = [1];

    for (let a = 1; a < n; a++) {
        let sum = toPrint.slice(-k);
        sum = sum.reduce((x, y) => x + y, 0);
        toPrint.push(sum);
        // if (toPrint.length === n) {
        //     break;
        // }
    }
    return toPrint;
}

console.log(lastKNumbersSequence(8, 2));
