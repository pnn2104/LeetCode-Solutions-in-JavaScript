var largestNumber = function(nums) {
    if (nums.every(num => num === 0)) {
        return "0"
    }
    nums.sort(function(a, b) {
        var str1 = new String(a);
        var str2 = new String(b);
        var first = str1 + str2;
        var second = str2 + str1;
        if (first > second) return -1
        else if (second > first) return 1
        else return 0
    })
    return nums.join("")
};