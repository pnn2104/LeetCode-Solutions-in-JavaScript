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



/*Backtrack solution from a Vu*/
var permuteUnique = function(nums) {
    let result = [];
    let trace = [];
    
    nums.sort();
    
    let backTrack = function(nums, arr) {
        console.log("arr: ", arr);
        
        let prev = -1;
        for (let i = 0; i < nums.length; i++) {
            console.log("i: ", i)
            if (i > 0 && prev > - 1 && nums[prev] == nums[i]) continue;
            if (!trace[i]) {
                arr.push(nums[i]);
                trace[i] = true;
                backTrack(nums, arr);
                trace[i] = false;
                arr.pop();
                
                prev = i;
            }
        }
        
        if (arr.length == nums.length) {
            result.push(arr.slice());
        }
    }
    
    backTrack(nums, []);
    
    return result;
};

console.log(permuteUnique(input));