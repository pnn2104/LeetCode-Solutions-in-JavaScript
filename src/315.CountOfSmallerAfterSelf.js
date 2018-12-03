var countSmaller = function(nums) {
    let maxIdx = nums.length - 1;
    let minIdx = nums.length - 1;
    let result = new Array(nums.length).fill(0);

    for (let current = maxIdx - 1; current >= 0; current--) {
        if (nums[current] > nums[maxIdx]) {
            result[current] = result[maxIdx] + maxIdx - current;
            maxIdx = current;
        } else if (nums[current] === nums[maxIdx]) {
            result[current] = result[maxIdx] + maxIdx - current - 1;
        }
        
    }
    return result;
}
var countSmaller1 = function(nums) {
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

let test = [4, 20, 0, 1, 15, 7, 9, 5, 8, 2, 9];

console.log(countSmaller(test));

/*
{4: [],
20: []}
[2, 0, 1]
[4, 20, 0, 1, 15, 7, 8, 2, 9];

          4
      /      \  
    0          20 
     \         / 
      1       15
       \      /
        2    7
             \
              8 
               \
                9

//result;
[0,  0, 0, 0, 0 , 0, 0, 0, 0]
//keep track of the max
//if the current number is greater than max
    //count = result[max] + max - current


[4, 20, 0, 1, 15, 7, 5, 8, 2, 9]

[0, 3, 4, 2, 1]
[0, 2, 2, 1, 0]
*/