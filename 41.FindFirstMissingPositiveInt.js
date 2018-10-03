
//O(N) space and time complexity;
var firstMissingPositive = function(arr) {
    var set = new Set(arr);
    var num = 1;
    while (set.has(num)) {
        num += 1;
    }
    return num;    
};