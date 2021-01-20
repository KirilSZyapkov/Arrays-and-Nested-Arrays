function rotateArray(arg1, arg2) {
    let myArr = arg1;
    let numRotations = Number(arg2);

    for (let a = 0; a < numRotations; a++) {
        let token = myArr.pop();
        myArr.unshift(token);
    }
    return myArr.join(` `);
}

console.log(rotateArray(['1',
        '2',
        '3',
        '4'],
    2));

console.log(rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15));