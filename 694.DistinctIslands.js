var numDistinctIslands = function(grid) {
    let setOfUniqueShapes = new Set();

    const explore = function(row, col, grid, shiftX, shiftY, shape) {
        if (row >= 0 && row < grid.length && col >=0 && col < grid[0].length) {
            if (grid[row][col] === 1) {
                grid[row][col] = -1;
                let returnedShape = shape.concat(JSON.stringify([row - shiftX, col - shiftY])) +
                                    explore(row - 1, col, grid, shiftX, shiftY, shape) + 
                                    explore(row + 1, col, grid, shiftX, shiftY, shape) +
                                    explore(row, col - 1, grid, shiftX, shiftY, shape) + 
                                    explore(row, col + 1, grid, shiftX, shiftY, shape); //right
                console.log("calling explore with: ", returnedShape);
                return returnedShape;
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let shape = explore(i, j, grid, i, j, "");
                if (!setOfUniqueShapes.has(shape)) {
                    setOfUniqueShapes.add(shape);
                };
            }
        }
    }
    return setOfUniqueShapes.size;
};

let test = [[1,1,0,0,0],
            [1,1,0,0,0],
            [0,0,0,1,1],
            [0,0,0,1,1]]

console.log(numDistinctIslands(test));


/*
An iterative break down

var numDistinctIslands = function(grid) {
    let setOfUniqueShapes = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = -1;
                let shape = "";
                let queue = [];
                queue.push([i, j]);
                while (queue.length) {
                    let current = queue.shift();
                    shape += JSON.stringify([current[0] - i, current[1] - j]);
                    if (checkUp(current[0], current[1], grid)) {
                        queue.push([current[0] - 1, current[1]]);
                    }
                    if (checkDown(current[0], current[1], grid)) {
                        queue.push([current[0] + 1, current[1]]);
                    }
                    if (checkLeft(current[0], current[1], grid)) {
                        queue.push([current[0], current[1] - 1]);
                    }
                    if (checkRight(current[0], current[1], grid)) {
                        queue.push([current[0], current[1] + 1]);
                    }    
                }
                if (!setOfUniqueShapes.has(shape)) {
                    setOfUniqueShapes.add(shape);
                }        
            }
        }
    }
    return setOfUniqueShapes.size;
};

function checkUp(i, j, grid) {
    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        grid[i - 1][j] = -1;
        return true;
    }
    return false;
}

function checkDown(i, j, grid) {
    if (i + 1 < grid.length && grid[i + 1][j] === 1) {
        grid[i + 1][j] = -1;
        return true;
    }
    return false;
}

function checkLeft(i, j, grid) {
    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1] = -1
        return true;
    }
    return false;
}

function checkRight(i, j, grid) {
    if (j + 1 >= 0 && grid[i][j + 1] === 1) {
        grid[i][j + 1] = -1;
        return true;
    }
    return false;
}
*/