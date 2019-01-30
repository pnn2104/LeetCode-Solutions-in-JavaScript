var solveNQueens = function(n) {
    var board = new Board(n);

    var count = 0;
    var output = [];

    const solve = function(board, row, n) {
        //console.log("row: ", row, "calling solve with board: ", board.board);
        if (row === n) {
            //console.log("got here: ");
            let solution = board.printBoard();
            console.log("solution: ", solution);
            output = output.concat(solution);
            return
        }

        for (let col = 0; col < n; col++) {
            if (board.isValidMove(row, col)) {
                //console.log("validMove: ", row, col);
                board.addQueen(row, col);
                solve(board, row + 1, n)
                board.removeQueen(row, col)
            }
        }
    }

    solve(board, 0, n);
    console.log("here: ", output);
    return output;
};

class Board {
    constructor(n) {
        this.board = new Array(n).fill(".").map(() => new Array(n).fill("."));
        this.n = n;    
    }

    isValidMove(r, c) {
        let left_diag =  c - 1;
        let right_diag = c + 1;
        for (let i = r - 1; i >= 0; i--) {
            if (this.board[i][c] === "Q") {
                return false;
            }
            if (left_diag >= 0 && this.board[i][left_diag] === "Q") {
                return false;
            }
            if (right_diag < this.n && this.board[i][right_diag] === "Q") {
                return false;
            }
            left_diag -= 1;
            right_diag += 1;
        }
        return true;
    }

    addQueen(r, c) {
        this.board[r][c] = "Q";
    }

    removeQueen(r, c) {
        this.board[r][c] = ".";
    }

    printBoard() {
        console.log(this.board);
        return this.board;
    }
}
console.log(solveNQueens(4));
/*
Queen can attach in all eight directions

      \ | / 
      - Q -
      / | \

n = 4;


*/