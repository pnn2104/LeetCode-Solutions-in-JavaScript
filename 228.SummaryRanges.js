var summaryRanges = function(nums) {
    let result = [];
    let start = 0;
    while (start < nums.length) {
        let end = start + 1;
        let prev = nums[start];
        while (nums[end] === prev + 1) {
            prev = nums[end];
            end++;
        }
        if (nums[start] === nums[end - 1]) {
            result.push(nums[start] + "");
        } else {
            result.push(nums[start] + '->' + nums[end - 1]);
        }
        
        start = end;
    }
    
    return result; 
};

let test = [0,2,3,4,6,8,9];

console.log(summaryRanges(test));