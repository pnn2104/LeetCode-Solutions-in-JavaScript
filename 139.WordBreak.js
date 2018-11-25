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
                console.log("np dp: ", isWordBreak);
                continue;
            }
            if (dict[s.substring(j, i)]) {
                isWordBreak[i] = true;
                console.log("dp: ", isWordBreak)
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
        console.log("calling recurse with: ", start);
        console.log("memo: ", memo);
        if (start === str.length) {
            return true;
        }
        if (memo[start]) {
            return memo[start];
        }
        for (let end = start + 1; end <= str.length; end++) {
            console.log("end: ", end, str.substring(start, end));
            let substr = str.substring(start, end);
            if (dict[substr] && recurse(dict, str, end, memo)) {
                return memo[start] = true;;
            } 
        }
        
        return memo[start] = false;
    }

    return recurse(dict, s, 0, memo);
    
};

let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];

console.log(wordBreak(s, wordDict));


