var maxProduct = function(nums) { 
    var globalMax = nums[0];
    var prevMax = nums[0];
    var prevMin = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var currentMax = Math.max(prevMax * nums[i], prevMin * nums[i], nums[i]);
        var currentMin = Math.min(prevMin * nums[i], prevMax * nums[i], nums[i]);
        if (currentMax > globalMax) {
            globalMax = currentMax;
        }
        prevMax = currentMax;
        prevMin = currentMin;
    }
    return globalMax;
};