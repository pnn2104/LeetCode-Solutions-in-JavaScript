// N is size of chessboard,
// K is number of moves it can make,
// r, c start row and column

//DP approach
var knightProbability= function(N, K, r, c) {
    var dp = [...new Array(N)].map(() => new Array(N).fill(0));
    dp[r][c] = 1;
    var allMoves = [[-2, -1], [-1, -2], [-2, 1], [-1, 2], [2, -1], [1, -2], [2, 1], [1, 2]];

    for (let numOfMove = 0; numOfMove < K; numOfMove++) {
        var dp1 = [...new Array(N)].map(() => new Array(N).fill(0));
        for (let row = 0; row < dp.length; row++) {
            for (let col = 0; col < dp[row].length; col++) {
                for (let move of allMoves) {
                    if (row + move[0] >= 0 && row + move[0] <= N - 1 && col + move[1] >= 0 && col + move[1] <= N - 1) {
                        dp1[row + move[0]][col + move[1]] += dp[row][col] / 8;
                    }
                }
                
            }
        }
        dp = dp1;
    }
    var result = dp.reduce(function(row, acc) {
        return acc = acc.concat(row)
    }, []).reduce(function(num, acc) {
        return acc += num
    })

    return result;
}

//DFS with memoization
var knightProbabilityDFS = function(N, K, r, c) {
    var memo = {};
    var numOfMoves = dfs(N, K, r, c, memo);
    var allpossibilities = Math.pow(8, K);
    
    var queue
    
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





console.log(knightProbability(3, 2, 0, 0 ));