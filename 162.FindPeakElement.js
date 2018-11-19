var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < nums[mid - 1]) {
            end = mid - 1;
        } else if (nums[mid] < nums[mid + 1]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
};

let test = [3, 2, 1];
console.log(findPeakElement(test));