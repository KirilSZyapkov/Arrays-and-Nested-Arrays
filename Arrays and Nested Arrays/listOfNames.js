function listOfNames(input) {
    input.sort((a, b) => {
        return a.localeCompare(b);
    })
    let myArr = []
    for (let a = 0; a < input.length; a++) {
        let token = `${a+1}.${input[a]}`;
        myArr.push(token);
    }
    return myArr.join('\n');
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));