function negativePositiveNumbers(input) {
    let result = [];
    for (let a = 0; a < input.length; a++) {
        let num = input[a];
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result.join('\n');
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));
console.log(negativePositiveNumbers([3, -2, 0, -1]));