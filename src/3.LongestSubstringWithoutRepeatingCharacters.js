var slidingWindow = function(s) {
    //if (s.length === 1) return 1;
    let maxLen = 0;
    let hash = {};
    let headIdx = 0;
    for (let tailIdx = 0; tailIdx < s.length; tailIdx++) { 
        const tailChar = s[tailIdx];
        if (hash[tailChar] !== undefined) {
            headIdx = Math.max(headIdx, hash[tailChar] + 1);
        } 
        hash[tailChar] = tailIdx;
        maxLen = Math.max(maxLen, tailIdx - headIdx + 1);   
    }
    return maxLen;
}

var test = "aaaaaaaa";
console.log(slidingWindow(test));





//this  brute force approach will take O(N^2) at worst
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        const newLen = helper(s, i);
        maxLen = Math.max(newLen, maxLen)
    }    
    return maxLen;
};

function helper (s, startIndex) {
    let hash = {};
    let count = 0;
    for (let tailIndex = startIndex; tailIndex < s.length; tailIndex++) {
        const tailChar = s[tailIndex];
        if (hash[tailChar]) break;
        hash[tailChar] = 1;
        count++;
    }
    return count;
}

//var test = "abba";
//console.log(slidingWindow(test));

/*
"abcabcbb"
at 0: maxlength = 1;
at 1: maxlength = Math.max(1, 1 + 1) = 2;
at 2: maxLength = Math.max(1. 2 + 1) = 3;  {a, b, c}
at 3: a already in hash --> len = 3;
at 4: b already in hash --> len = 3;
at 5: 


"helloworld"
h: maxLen = 1;
e: mexLen = Math.max(1, 2) = 2;
l: maxLen = max(2, 2 + 1);
l: maxLen = 
*/