var groupAnagrams = function(strs) {
    var hash = {};
    for (let str of strs) {
        var key = [...str].sort().join("");
        if (hash[key] === undefined) {
            hash[key] = [];
        }
        hash[key].push(str);
    }

    return Object.values(hash);
}


//brute force - ouput limit exceed for large input
var groupAnagramsBruteForce = function(strs) {
    var result = [];
    var seen = {};
    if (strs.length === 1 && strs[0] === "") {
        return [[""]];
    }
    
    for (let i = 0; i < strs.length; i++) {
        const word1 = strs[i];
        //console.log(word1, seen[word1]);
        if (seen[word1] === undefined) {
            seen[word1] = true
            //console.log(seen)
            var group = [strs[i]];
            for (let j = i + 1; j < strs.length; j++) {
                const word2 = strs[j];
                if (isPermutation(word1, word2)) {
                    group.push(strs[j]);
                    seen[word2] = true;
                }
            }
            result.push(group);
        }
        
    }
    return result;
};

function isPermutation(word1, word2) {
    if (word2.length !== word1.length) return false;
    var hash = {};
    for (let i = 0; i < word1.length && word1.length; i++) {
        const char = word1[i];
        if (hash[char] === undefined) hash[char] = 1;
        else hash[char]++;
    }

    for (let j = 0; j < word2.length; j++) {
        const char2 = word2[j];
        hash[char2]--;
    }

    for (var key in hash) {
        if (hash[key] !== 0) return false;
    }
    return true;
}

var test = ["eat", "tea", "tan", "ate", "nat", "bat", "yup", "pup"]
//var test = ["ray","cod","abe","ned","arc","jar","owl","pop","paw","sky","yup","fed","jul","woo","ado","why","ben","mys","den","dem","fat","you","eon","sui","oct","asp","ago","lea","sow","hus","fee","yup","eve","red","flo","ids","tic","pup","hag","ito","zoo"];
console.log(groupAnagrams(test));