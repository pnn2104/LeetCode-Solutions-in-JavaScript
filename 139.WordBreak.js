var wordBreak = function(s, wordDict) {
    let dict = {};
    for (let word of wordDict) {
        dict[word] = true;    
    } 
    let isWordBreak = new Array(s.length + 1).fill(false);
    isWordBreak[0] = true; //empty string;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (!isWordBreak[j]) {
                continue;
            }
            if (dict[s.substring(j, i)]) {
                isWordBreak[i] = true;
                break;
            }
        }
    }
    return isWordBreak[s.length];
}



var wordBreakRecursion = function(s, wordDict) {
    let dict = {};
    for (let word of wordDict) {
        dict[word] = true;    
    }   
    let memo = {};
    const recurse = function(dict, str, start, memo) {
        if (start === str.length) {
            return true;
        }
        if (memo[start]) {
            return memo[start];
        }
        for (let end = start + 1; end <= str.length; end++) {
            let substr = str.substring(start, end);
            if (dict[substr] && recurse(dict, str, end, memo)) {
                memo[start] = true;
                return true;
            } 
        }
        memo[start] = false;
        return false;
    }

    return recurse(dict, s, 0, memo);
    
};

let s = "catsanddog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];

console.log(wordBreak(s, wordDict));


