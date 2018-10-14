//still need to add functionality to check if an input board is valid. Otherwise, this solution works assuming 
//all input board havent violated the rules.
function sudokuSolve(board) {
    //find an empty cell
    var emptyCell = findEmptyCell(board);

    if (emptyCell === null) { //if (there's no empty cell)
        return true;
    }
    const row = emptyCell[0];
    const col = emptyCell[1];

    for (let num = 1; num < 10; num++) {
        if (checkRow(num, row, board) && checkCol(num, col, board) && checkSubSquare(num, row, col, board)) {
            board[row][col] = num + "";
            if (sudokuSolve(board)) { //if no more empty cell is found
                return true;
            } 
            board[row][col] = "."; //reset
        }   
    }
    return false;
}


function findEmptyCell(board) { //fund empty cell in the board
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                return [row, col];
            }
        }
    }
    return null;
}

function checkRow(num, row, board) { //check if num is a valid num in row 
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === num + "") {
            return false;
        }
    }
    return true;
}

function checkCol(num, col, board) { //check if num is a valid num in col
    for (let row = 0; row < 9; row++) {
        if (board[row][col] === num + "") {
            return false;
        }
    }
    return true;
}

function checkSubSquare(num, row, col, board) { //check if num is a valid num in smaller square
    for (let startRow = Math.floor(row / 3) * 3; startRow < Math.floor(row / 3) * 3 + 3 ; startRow++) {
        for (let startCol = Math.floor(col / 3) * 3; startCol < Math.floor(col / 3) * 3 + 3; startCol++) {
            if (board[startRow][startCol] === num + "") {
                return false;
            }
        }
    }
    return true;
}


var testBoard =[[".",".",".","7",".",".","3",".","1"],
                ["3",".",".","9",".",".",".",".","."],
                [".","4",".","3","1",".","2",".","."],
                [".","6",".","4",".",".","5",".","."],
                [".",".",".",".",".",".",".",".","."],
                [".",".","1",".",".","8",".","4","."],
                [".",".","6",".","2","1",".","5","."],
                [".",".",".",".",".","9",".",".","8"],
                ["8",".","5",".",".","4",".",".","."]]

var testBoard2 = [[".","8","7","6","5","4","3","2","1"],
                  ["2",".",".",".",".",".",".",".","."],
                  ["3",".",".",".",".",".",".",".","."],
                  ["4",".",".",".",".",".",".",".","."],
                  ["5",".",".",".",".",".",".",".","."],
                  ["6",".",".",".",".",".",".",".","."],
                  ["7",".",".",".",".",".",".",".","."],
                  ["8",".",".",".",".",".",".",".","."],
                  ["9",".",".",".",".",".",".",".","."]]

console.log(validSudoku(validSudoku(testBoard)));