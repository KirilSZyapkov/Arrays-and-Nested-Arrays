function sortingNumbers(input) {
    input.sort((a, b) => a - b);
    let arr = [];
    while (input.length !== 0) {
        let x = input.shift();
        let y = input.pop()
        arr.push(x);
        arr.push(y);
    }
    return arr;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));