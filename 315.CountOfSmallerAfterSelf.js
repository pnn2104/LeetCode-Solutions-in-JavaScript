var countSmaller = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = nums.length - 1; j >= i + 1; j--) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        result[i] = count;
    }
    return result;
}

let test = [5, 2, 6, 1];
console.log(countSmaller(test));