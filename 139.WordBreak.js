var wordBreak = function(s, wordDict) {
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

let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];

console.log(wordBreak(s, wordDict));