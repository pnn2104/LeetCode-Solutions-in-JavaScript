var permute = function(nums) {
    var result = [];
    if (nums.length <= 1) {
        return new Array(nums);
    }  
    var allNumbersExceptLast = nums.slice(0, -1);
    var lastNumber = [nums[nums.length - 1]];

    var permutationsExceptLast = permute(allNumbersExceptLast);

    permutationsExceptLast.forEach((combination) => {
        for (let position = 0; position <= combination.length; position++) {
            var newPermutation = combination.slice(0, position).concat(lastNumber).concat(combination.slice(position));
            result.push(newPermutation);
        }
    })

    return result;
};

var input = [1, 2, 3];

console.log(permute(input));