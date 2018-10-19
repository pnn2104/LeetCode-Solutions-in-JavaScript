var findMin = function(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    var start = 0;
    var end = nums.length - 1;

    //no rotation
    if (nums[start] < nums[end]) return nums[start];

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        console.log("mid: ", mid)
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        } else if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }else if (nums[mid] > nums[0]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 0;
}

console.log(findMin([2, 1] ))