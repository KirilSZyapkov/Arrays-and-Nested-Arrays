function printEveryN_thElementFromAnArray(arg1, arg2) {
    let arr = arg1;
    let step = Number(arg2);
    let result = [];
    for (let a = 0; a < arr.length; a += step) {
        result.push(arr[a]);
    }
    return result;
}

console.log(printEveryN_thElementFromAnArray(['5',
        '20',
        '31',
        '4',
        '20'],
    2));

console.log(printEveryN_thElementFromAnArray(['dsa',
        'asd',
        'test',
        'tset'],
    2));

console.log(printEveryN_thElementFromAnArray(['1',
        '2',
        '3',
        '4',
        '5'],
    6));