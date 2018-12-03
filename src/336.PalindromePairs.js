var palindromePairs = function(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j !== i) {
                let word = words[i] + words[j]
                if (isPalindrome(word)) {
                    result.push([i, j]);
                };
            }
        }
    }
    return result;
};

function isPalindrome(word) {
    let p1 = 0;
    let p2 = word.length - 1;
    while (p1 < p2) {
        if (word[p1] !== word[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;
}

let test = ["abcd", "dcba", "lls", "s", "sssll"];
console.log(isPalindrome("civic"))
console.log(palindromePairs(test));

