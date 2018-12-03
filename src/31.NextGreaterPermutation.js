var nextPermutation = function(nums) {
    let pivot = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i + 1;
            break;
        }    
    }
    if (pivot === -1) {
        return rev(nums, 0, nums.length - 1);
    }

    for (let j = nums.length - 1; j >= pivot; j--) {
        if (nums[j] > nums[pivot - 1]) {
            [nums[j], nums[pivot - 1]] = [nums[pivot - 1], nums[j]];
            break;
        }
    }

    return rev(nums, pivot, nums.length - 1);
};


function rev(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

let test = [3, 2, 1];
console.log(nextPermutation(test));