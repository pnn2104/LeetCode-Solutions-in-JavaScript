//Brute force solution - checking every possible permutations with isPalindrome
//compare length;
//time limit exceeded for test input that are very large string

var longestPalindrome = function(s) {
    if (s === null || s.length < 2) {
        return s;
    }
    let left = 0;
    let right = 0;
    let dp = new Array(s.length).fill(0).map(each => new Array(s.length).fill(false));
    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            isInnerPalindrome = dp[i + 1][j - 1] || j - i <= 2;
            if (s[i] === s[j] && isInnerPalindrome) {
                dp[i][j] = true;
                if (j - i > right - left) {
                    left = i;
                    right = j;
                }
            }    
        }
    }
    return s.substring(left, right + 1);
};

let test = "ababs";
console.log(longestPalindrome(test));
