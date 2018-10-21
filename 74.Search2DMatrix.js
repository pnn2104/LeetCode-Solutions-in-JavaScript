var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false;
    var startRow = 0;
    var startCol = matrix[0].length - 1;
    
    while(startRow <= matrix.length - 1 && startCol >= 0) {
        var num = matrix[startRow][startCol];
        if (num === target) {
            return true;
        } else if (num < target) {
            startRow++;
        } else {
            startCol--;
        }
    }
    return false;
};