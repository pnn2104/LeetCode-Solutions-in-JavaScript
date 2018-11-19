var canPartitionKSubsets = function(nums, k) {
    if (k === 1) return true;
    let total = 0;
    for (let num of nums) {
        total += num;
    }    
    
    if (total % k !== 0) { //if the total is not divisible by k
        return false; // return false;
    } 

    const helper = function(partitions, targetSum, nums, idx) {
        console.log("calling helper with: ", partitions, idx);
        if (idx === nums.length) return true;
        for (let i = 0; i < partitions.length; i++) {
            if (partitions[i] + nums[idx] <= targetSum) {
                partitions[i] += nums[idx];
                if (helper(partitions, targetSum, nums, idx + 1)) {
                    return true;
                }
                partitions[i] -= nums[idx];
            }    
        }
        return false;
    }
    
    let targetSum = total / k;
    let partitions = new Array(k).fill(0);
    return helper(partitions, targetSum, nums, 0);
};

let nums = [4, 3, 2, 3, 5, 2, 1];
console.log(canPartitionKSubsets(nums, 5));
/*
nums = [4, 3, 2, 3, 5, 2, 1], k = 4
can we divide nums into 4 subsets that has equal sum?
sum of nums = 20
20 / 4 = 5
1, 2, 2, 3, 3, 4, 5

if the array has only 1 element, and it's not equal the target sum



[4, 3, 2, 3, 5, 2, 1]

target sum = 5
{1, 15}
{10, 4, 1, 1}
{11, 3, 1, 1}

                    {}
                  /     \
4            {4}              {}
              |             /    \
3            {4}          {3}      {}
              |         /    \       /     \
2            {4}      {3, 2}  {3}    {2}   {}
              |                 |      |
3            {4}               {3}   {3}    
       



*/


