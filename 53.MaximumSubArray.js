var maxSubArray = function(nums) {
    var prevMax = nums[0];
    var currentMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i]);
        if (currentMax > prevMax) {
            prevMax = currentMax;    
        }
    }
    return prevMax;
};