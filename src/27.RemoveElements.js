var removeElement = function(nums, val) {
    let idx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[idx] = nums[i];
            idx++;
        } 
    }
    return idx;
}

/* This solution works too
var removeElement = function(nums, val) {
    nums.sort((a, b) => a - b);
    let floor = 0;
    let ceil = nums.length - 1;    
    while (floor <= ceil) {
        let mid = Math.floor((floor + ceil) / 2);
        if (nums[mid] === val) {
            while (nums[mid] === val) {
                nums.splice(mid, 1);
            }
            while (nums[mid - 1] === val) {
                nums.splice(mid - 1, 1);
            }
        } else if (nums[mid] < val){
            floor = mid + 1;
        } else {
            ceil = mid - 1;
        }
    }   

    return nums.length;
};*/


/*
[3, 2, 2, 3], target = 3

i = 0; j = 0 nums[0] = 3 
       j = 1 nums[1] != 3
[2, 2, 2, 3] 

i = 1; j = 2 nums[2] != 3
[2, 2, 2, 3];





*/

module.exports = removeElement;