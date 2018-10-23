var minSubArrayLen = function(s, nums) {
    if (!nums.length) return 0;
    let head = 0;;
    let sum = 0;
    let minLen = 0
    for (let tail = 0; tail < nums.length; tail++) {
        sum += nums[tail];
        while (sum >= s) {
            if (minLen === 0 || tail - head + 1 < minLen) {
                minLen = tail - head + 1 ;
            }
            sum -= nums[head];
            head++;
        }
    }  
    return minLen;  
};


var test = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(7, test));
// 2, 3, 1 -> movehead -> 3, 1 --> move tail
// 3, 1, 2 -> movehead -> 1, 2 --> move tail
// 1, 2, 4 -> movehead -> 2, 4 --> move tail
// 2, 4, 3 -> movehead -> 4, 3