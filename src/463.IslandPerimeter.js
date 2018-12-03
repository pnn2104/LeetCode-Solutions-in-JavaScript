var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                if (col - 1 < 0 || grid[row][col - 1] === 0) perimeter++;
                if (row - 1 < 0 || grid[row - 1][col] === 0) perimeter++;
                if (col + 1 > grid[0].length - 1 || grid[row][col + 1] === 0) perimeter++;
                if (row + 1 > grid.length - 1 || grid[row + 1][col] === 0) perimeter++;
            }
        }
    }
    return perimeter;
}

let test = [[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]

console.log(islandPerimeter(test));


/*
[[0, 1, 0, 0],
 [1, 1, 1, 0],
 [0, 1, 0, 0],
 [1, 1, 0, 0]]
*/