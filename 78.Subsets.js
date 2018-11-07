var subsets = function(nums) {
    var result = [];
    const helper= function(nums, subset, i) {
        if (i === nums.length) {
            result.push(subset);
        } else {
            helper(nums, subset, i + 1);
            subset = subset.concat(nums[i])
            helper(nums, subset, i + 1);
        }   
    }    
    helper(nums, [], 0);
    return result;
};

let test = [1, 2, 3];
//console.log(test);
console.log(subsets(test));