var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false;
    var startRow = 0;
    var startCol = matrix[startRow].length - 1;

    while (startRow <= matrix.length - 1 && startCol >= 0) {
        const currentNum = matrix[startRow][startCol]
        if (currentNum === target) {
            return true;
        } else if (currentNum > target) {
            startCol--;
        } else {
            startRow++;
        }
    }
    return false;
}


/*
//this method, perform a binary search on each row, works but not that great
var searchMatrixBruteForce = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (binarySearch(matrix[i], 0, matrix[i].length, target)) {
            return true;
        } else {
            continue;
        }
    }  
    return false;
};
function binarySearch(arr, start, end, num) {
    while (start <= end) {
        var mid = Math.floor((start + end)/2);
        if (arr[mid] === num) {
            return true;
        } else if (arr[mid] < num) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return false;
}*/


var matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
//console.log(matrix);
console.log(searchMatrix(matrix, 5));