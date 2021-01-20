function pieceOfPie(arg1, arg2, arg3) {
    let list = arg1;
    let start = list.indexOf(arg2);
    let end = list.indexOf(arg3);

    return list.splice(start, end);

}

console.log(pieceOfPie(['Pumpkin Pie',

        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
