//another way to do this 
var longestConsecutive = function(nums) {
    let hash = {};
    for (let num of nums) {
        hash[num] = true;
    } 
    let maxSequence = 0;

    for (let number of nums) {
        if (hash[number - 1] === undefined) {
            let currentLength = 1;
            let currentNum = number;
            while (hash[currentNum + 1] !== undefined) {
                currentLength++;
                currentNum++;
            }
            maxSequence = Math.max(maxSequence, currentLength);
        }
    }
    return maxSequence;
}

var longestConsecutive1 = function(nums) {
    let hash = {};
    for (let num of nums) {
        hash[num] = true;
    }    
    let maxSequence = 0;
    for (let number of nums) {
        let numL = number;
        let numR = number;
        let leftCount = 1;
        let rightCount = 0; //already take in account of the number in left count
        while (hash[numL - 1] !== undefined) {
            leftCount++;
            delete hash[numL - 1]; //no need to recheck numbers that's already in a sequence
            numL = numL - 1;
        }

        while (hash[numR + 1] !== undefined) {
            rightCount++;
            delete hash[numR + 1]; //no need to recheck numbers that's already in a sequence
            numR = numR + 1;
        }
        
        if (leftCount + rightCount > maxSequence) {
            maxSequence = leftCount + rightCount;
        }
    }
    return maxSequence;
};

let test = [100, 4, 200, 1, 2, 3];
console.log(longestConsecutive(test));