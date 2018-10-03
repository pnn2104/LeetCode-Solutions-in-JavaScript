
//O(N) space and time complexity;
var firstMissingPositive = function(arr) {
    var set = new Set(arr);
    var num = 1;
    while (set.has(num)) {
        num += 1;
    }
    return num;    
};


//we dont care about number that is negative and that greater than legth - 1
//improved space complexity O(N) --> O(1) by modifying the array input inplace
var firstMissing = function(arr) {
    if (arr.length === 0) {
        return 1;
    }
    for (var i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        var valueIndex = arr[i];
        //console.log(valueIndex)
        while (valueIndex >= 0 && valueIndex <= arr.length) {
            var temp = arr[valueIndex];
            [arr[valueIndex], arr[i]] = [arr[i], arr[valueIndex]];
            valueIndex = temp;
            //console.log(arr, valueIndex);
            if (arr[valueIndex] === arr[i]) {
                break;
            }
        }
    }
    for (var j = 1; j < arr.length; j++) {
        if (arr[j] !== j) {
            return j;
        }
    }
    return arr.length;
}

var arr = [3, 4, -1, 1];
var arr1 = [1, 2, 0];
var arr3 = [1];
console.log(firstMissing(arr3));