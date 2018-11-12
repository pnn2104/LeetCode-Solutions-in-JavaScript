var gameOfLife = function(board) {
    let result = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let count = 0;
                if (checkLeft(board, i, j)) count++; 
                if (checkRight(board, i, j)) count++; 
                if (checkUp(board, i, j)) count++;     
                if (checkDown(board, i, j)) count++; 
                if (checkDiagLeftUp(board, i, j)) count++;      
                if (checkDiagLeftDown(board, i, j)) count++;     
                if (checkDiagRightUp(board, i, j)) count++;    
                if (checkDiagRightDown(board, i, j)) count++;   
            if (board[i][j] === 1 ) {//if a live cell
                if (count > 3 || count < 2) {
                    result[i][j] = 0;
                } else {
                    result[i][j] = 1;
                }     
            } else if (board[i][j] === 0) {
                if (count === 3) {
                    result[i][j] = 1;
                }
            }
            //if a dead cell
        }
    }
    return result;
};

function checkLeft(board, i, j) {
    if (j - 1 >= 0 && board[i][j - 1] === 1) {
        return true;
    }
    return false;
}

function checkRight(board, i, j) {
    if (j + 1 < board[0].length && board[i][j + 1] === 1) {
        return true;
    }
    return false;
}

function checkUp(board, i, j) {
    if (i - 1 >= 0 && board[i - 1][j] === 1) {
        return true;
    }
    return false;
}

function checkDown(board, i, j) {
    if (i + 1 < board.length && board[i + 1][j] === 1) {
        return true;
    }
    return false;
}

function checkDiagLeftUp(board, i, j) {
    if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] === 1) {
        return true;
    }
    return false;
}

function checkDiagLeftDown(board, i, j) {
    if (i + 1 < board.length && j - 1 >= 0 && board[i + 1][j - 1] === 1) {
        return true;
    }
    return false;
}

function checkDiagRightUp(board, i, j) {
    if (i - 1 >= 0 && j + 1 < board[0].length && board[i - 1][j + 1] === 1) {
        return true;
    }
    return false;
}

function checkDiagRightDown(board, i, j) {
    if (i + 1 < board.length && j + 1 < board[0].length && board[i + 1][j + 1] === 1) {
        return true;
    }
    return false;
}



let test = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log("result: ", gameOfLife(test));