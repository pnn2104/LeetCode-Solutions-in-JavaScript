var twoSum = function(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (hash[nums[i]] !== undefined) {
            return [hash[nums[i]], i];
        }
        hash[diff] = i;
    }
    return [];
};


