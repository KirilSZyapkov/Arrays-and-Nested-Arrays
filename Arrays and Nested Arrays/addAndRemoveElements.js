function addAndRemoveElements(input) {
    let myArr = [];
    let token = 0;

    for (let a = 0; a < input.length; a++) {

        if (input[a] === 'add') {
            token++;
            myArr.push(token);
        } else if (input[a] === 'remove') {
            token++;
            let x = myArr.pop();

        }

    }
    return myArr.length === 0 ? 'Empty' : myArr.join('\n');
}

// console.log(addAndRemoveElements(['add',
//     'add',
//     'add',
//     'add']
// ));

console.log(addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']));
//
// console.log(addAndRemoveElements(['remove',
//     'remove',
//     'remove']));