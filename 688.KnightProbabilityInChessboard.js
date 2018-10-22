// N is size of chessboard,
// K is number of moves it can make,
// r, c start row and column
var knightProbability = function(N, K, r, c) {
    var memo = {};
    var numOfMoves = dfs(N, K, r, c, memo);
    var allpossibilities = Math.pow(8, K);
    
    return numOfMoves / allpossibilities;
};


function dfs(N, K, r, c, memo) {
    var numOfMoves = 0;
    if (K === 0) {
        if (r >= 0 && r <= N - 1 && c >= 0 && c <= N - 1) {
            return 1;
        } else {
            return 0;
        }
    } 

    if (r < 0 || r > N - 1 || c < 0 || c > N - 1) {
        return 0;
    }

    if (memo["" + K + " " + "" + r + " " + "" + c] !== undefined) {
        return memo["" + K + " " + "" + r + " " + "" + c]
    } 

    numOfMoves += dfs(N, K - 1, r - 2, c - 1, memo);
    numOfMoves += dfs(N, K - 1, r - 1, c - 2, memo);
    numOfMoves += dfs(N, K - 1, r - 2, c + 1, memo);
    numOfMoves += dfs(N, K - 1, r - 1, c + 2, memo);
    numOfMoves += dfs(N, K - 1, r + 2, c - 1, memo);
    numOfMoves += dfs(N, K - 1, r + 1, c - 2, memo);
    numOfMoves += dfs(N, K - 1, r + 2, c + 1, memo);
    numOfMoves += dfs(N, K - 1, r + 1, c + 2, memo);

    memo["" + K + " " + "" + r + " " + "" + c] = numOfMoves;
    
    return numOfMoves;
}



console.log(knightProbability(12, 15, 8, 0 ));