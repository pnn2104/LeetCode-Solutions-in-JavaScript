var searchMatrix = function(matrix, target) {
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
}