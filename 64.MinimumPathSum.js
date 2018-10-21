var minPathSum = function(grid) {
    // var dp = new Array(grid.length);
    // dp.forEach(function(row) {
    //     if (row === undefined) {
    //         row = [];
    //     }
    // }) 
    // dp[0][0] = grid[0][0];
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) continue
            
                const left = j - 1 >= 0 ? grid[i][j - 1] : Infinity;
                const up = i - 1 >= 0 ? grid[i - 1][j] : Infinity;
                console.log(i, j, left, up);
                grid[i][j] = Math.min(left + grid[i][j], up + grid[i][j]);
                console.log(grid);
        }
    }

    return grid[grid.length - 1][grid[0].length - 1];
};


var input = [[1, 3, 1],
             [1, 5, 1],
             [4, 2, 1]];
console.log(minPathSum(input));

/* 
var input = [[1, 3, 1],
             [1, 5, 1],
             [4, 2, 1]];

arr[i][j] = Min(arr[i - 1][j] + arr[i][j] || arr[i][j - 1] + arr[i][j])
if (arr[i - 1][j] || arr[i][j - 1] === undefined) -> set to infinity
[[1, 4, 5],  
 [2, 7, 6],
 [6, 8, 7]];

 
going right: 1 -> 3
going down: 1 -> 1 
min 2
going down: 1 -> 1 -> 4

origin = [0][0]
destination = [2][2]
*/