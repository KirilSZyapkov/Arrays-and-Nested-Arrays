function ticTacToe(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let curPlayer = '';
    let move = 1;
    let end = false;

    while (true) {
        if (move % 2 === 0) {
            curPlayer = 'O';
        } else {
            curPlayer = 'X';
        }

        let [row, column] = input.shift().split(' ');
        let dashRow = dashboard[row];
        let dashCol = dashRow[column];

        if (dashCol === 'X' || dashCol === 'O') {
            console.log('This place is already taken. Please choose another!');
        } else {
            dashboard[row][column] = curPlayer;
            move++
        }
        for (let a = 0; a < dashboard.length; a++) {
            let token = dashboard[a];

            if (token.every((el) => el === 'X') || token.every((el) => el === 'O')) {
                console.log(`Player ${curPlayer} wins!`);
                dashboard.forEach(line => {
                    console.log(line.join('\t'));
                });
                end = true;
                break;
            }
            let curCol = [];
            for (let b = 0; b < dashboard[a].length; b++) {
                let tokenTwo = dashboard[b][a];
                curCol.push(tokenTwo);
            }

            if (curCol.every((ele) => ele === 'X') || curCol.every((ele) => ele === 'O')) {
                console.log(`Player ${curPlayer} wins!`);
                dashboard.forEach(line => {
                    console.log(line.join('\t'));
                });
                end = true;
                break;
            }
        }
        if(end){
            break;
        }
        let diagonalOne = []
        for (let c = 0; c < dashboard.length; c++) {
            let index = dashboard[c][c];
            diagonalOne.push(index);
        }

        if (diagonalOne.every((el) => el === 'X') || diagonalOne.every((el) => el === 'O')) {
            console.log(`Player ${curPlayer} wins!`);
            dashboard.forEach(line => {
                console.log(line.join('\t'));
            });
            break;
        }
        let diagonalTwo = [];
        let i = 0;
        for (let d = dashboard.length - 1; d >= 0; d--) {
            let indexTwo = dashboard[d][i];
            diagonalTwo.push(indexTwo);
            i++;
        }

        if (diagonalTwo.every((el) => el === 'X') || diagonalTwo.every((el) => el === 'O')) {
            console.log(`Player ${curPlayer} wins!`);
            dashboard.forEach(line => {
                console.log(line.join('\t'));
            });
            break;
        }
        if (dashboard[0].includes(false) || dashboard[1].includes(false) || dashboard[2].includes(false)) {

        } else {
            console.log("The game ended! Nobody wins :(");
            dashboard.forEach(line => {
                console.log(line.join('\t'));
            });
            break;
        }
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])
