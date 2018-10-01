//Brute force solution - checking every possible permutations with isPalindrome
//compare length;
//time limit exceeded for test input that are very large string

var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }
    var maxLen = 0;
    var maxPalin = s[0];
    for (var i = 0; i < s.length; i++) {
        var subStr = s[i];
        for (var j = i + 1; j < s.length; j++) {
            subStr = subStr.concat(s[j]);
            if (isPalindrome(subStr) && subStr.length > maxLen) {
                maxLen = subStr.length
                maxPalin = subStr;
            }
        }
    } 
    return maxPalin;
};


var isPalindrome = function(str) {
    var headPointer = 0;
    var tailPointer = str.length - 1;
    while (headPointer < tailPointer) {
        //console.log(str[headPointer], str[tailPointer])
        if (str[headPointer] !== str[tailPointer]) {
            //console.log("here");
            return false;
        }
        headPointer++;
        tailPointer--;
    }
    return true;
}