function biggerHalf(input) {
    input.sort((a, b) => a - b);
    let breakPoint = Math.floor(input.length / 2);
    if (input.length % 2 === 0) {
        return input.splice(breakPoint);
    } else {
        return input.splice(breakPoint);
    }
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));