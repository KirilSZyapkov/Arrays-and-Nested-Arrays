function sumFirstLast(input){
    let firstNum = Number([...input].shift());
    let secondNum = Number([...input].pop());
    return firstNum + secondNum;

}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
console.log(sumFirstLast(['20']));