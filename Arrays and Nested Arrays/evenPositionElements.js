function evenPositionElements(input) {
    let result = [];
    for (let a = 0; a < input.length; a++) {
        if (a % 2 === 0) {
            result.push(input[a]);
        }
    }
    return result.join(` `);
}

console.log(evenPositionElements(['20', '30', '40', '50', '60']));
console.log(evenPositionElements(['5', '10']));