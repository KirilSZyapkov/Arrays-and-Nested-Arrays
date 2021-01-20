function SortAnArrayByTwoCriteria(input) {

    input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    return input.join('\n');
}

console.log(SortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(SortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(SortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']));