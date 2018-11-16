var removeDuplicateLetters = function(s) {
    let set = new Set();
    let sorted = s.split("").sort().join("");
    if (sorted === s) {
        return sorted[0];
    }
    let result = "";
    for (char of sorted) {
        if (!set.has(char)) {
            result = result.concat(char);
        }
        set.add(char);
    }
    return result;
};

var test = "aaaaaa";
console.log(removeDuplicateLetters(test));