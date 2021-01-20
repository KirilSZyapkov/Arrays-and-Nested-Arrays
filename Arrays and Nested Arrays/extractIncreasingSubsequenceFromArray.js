function extractIncreasingSubsequenceFromArray(input) {
    let curBigestNum = -9999999999;
    let myArr = [];

    for (let a = 0; a < input.length; a++) {
        let num = input[a];
        if (num >= curBigestNum) {
            curBigestNum = num;
            myArr.push(curBigestNum);
        }
    }
    return myArr;
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));

console.log(extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]));

console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]));