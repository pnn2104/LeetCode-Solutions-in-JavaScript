var canPartitionKSubsets = function(nums, k) { //we're sorting the array, in order to be able to fail early on
    let sorted = nums.sort((a, b) => a - b);
    let total = 0;
    for (let num of sorted) { //get total
        total += num;
    }    
    
    if (total % k !== 0) { //if the total is not divisible by k, operation is not possible 
        return false; // return false;
    } 

    const helper = function(partitions, targetSum, nums, idx) {
        //console.log("calling helper with: ", partitions, idx);
        if (idx < 0) return true; 
        for (let i = 0; i < partitions.length; i++) { //for k partitions, starting with 0
            if (partitions[i] + nums[idx] <= targetSum) { //if the petition + number <= target sum
                partitions[i] += nums[idx];               //add
                if (helper(partitions, targetSum, nums, idx - 1)) { //try next number with updated parttitions, if everything workds
                    return true;       //return true;
                }
                partitions[i] -= nums[idx]; //otherwise, backtrack
            }  
            if (partition[i] === 0) {  
                break;
            }  
        }
        return false;
    }
    
    let targetSum = total / k;
    if (sorted[sorted.length - 1] > targetSum) return false;
    let partitions = new Array(k).fill(0); //array representing k- partitions
    return helper(partitions, targetSum, sorted, sorted.length - 1);
}

var canPartitionKSubsetsBruteForce = function(nums, k) {
    if (k === 1) return true;
    let total = 0;
    for (let num of nums) { //get total
        total += num;
    }    
    
    if (total % k !== 0) { //if the total is not divisible by k, operation is not possible 
        return false; // return false;
    } 

    const helper = function(partitions, targetSum, nums, idx) { 
        console.log("calling helper with: ", partitions, idx);
        if (idx === nums.length) return true; 
        for (let i = 0; i < partitions.length; i++) { //for k partitions, starting with 0
            if (partitions[i] + nums[idx] <= targetSum) { //if the petition + number <= target sum
                partitions[i] += nums[idx];               //add
                if (helper(partitions, targetSum, nums, idx + 1)) { //try next number with updated parttitions, if everything workds
                    return true;       //return true;
                }
                partitions[i] -= nums[idx]; //otherwise, backtrack
            }    
        }
        return false;
    }
    
    let targetSum = total / k;  //target sum
    let partitions = new Array(k).fill(0); //array representing k- partitions
    return helper(partitions, targetSum, nums, 0);
};

let nums = [4,3,2,3,5,2,1];
console.log(canPartitionKSubsets(nums, 4));



