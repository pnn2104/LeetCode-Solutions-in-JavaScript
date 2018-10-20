var permute = function(nums) {
    var result = [];
    var seen = {};
    if (nums.length <= 1) {
        return [nums];
    }  
    var allNumbersExceptLast = nums.slice(0, -1);
    var lastNumber = [nums[nums.length - 1]];

    var permutationsExceptLast = permute(allNumbersExceptLast);

    permutationsExceptLast.forEach((combination) => {
        for (let position = 0; position <= combination.length; position++) {
            var newPermutation = combination.slice(0, position).concat(lastNumber).concat(combination.slice(position));
            if (seen[newPermutation.join("")] === undefined) {
                result.push(newPermutation)
            }
            seen[newPermutation.join("")] = true;
        }
    })
    return result;
};

var input = [1, 1, 2];

console.log(permute(input));