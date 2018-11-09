var findWords = function(board, words) {
    var result = [];
    for (let word of words) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                
            }
        }
        let truncated = word.substring(1);
        if (searchAdjacent(board, startPoint, truncated)) {
            result.push(word);
        }
    }
    return result;
}


function findStartingPoint(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0]) {
                return [row, col]
            }
        }
    }
    return -1;
}

function searchAdjacent(board, startPoint, word) {
    let startRow = startPoint[0];
    let startCol = startPoint[1];

    if (word.length === 0) {
        return true
    }
    //check up
    if (startRow - 1 >= 0) {
        if (board[startRow - 1][startCol] === word[0]) {
            searchAdjacent(board, [startRow - 1, startCol], word.substring(1));
        } 
    }
    //check down
    else if (startRow + 1 <= board.length - 1) {
        if (board[startRow + 1][startCol] === word[0]) {
            searchAdjacent(board, [startRow + 1, startCol], word.substring(1));
        } 
    }
    //check left
    else if (startCol - 1 >= 0) {
        if (board[startRow][startCol - 1] === word[0]) {
            searchAdjacent(board, [startRow, startCol - 1], word.substring(1));
        } 
    }
    //check right
    else if (startCol + 1 <= board[0].length - 1) {
        if (board[startRow][startCol + 1] === word[0]) {
            searchAdjacent(board, [startRow, startCol + 1], word.substring(1));
        } 
    } else {
        return false
    }
}


let board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
  ];
let words = ["oath","pea","eat","rain"];

console.log(findWords(board, words));