var letterCombinations = function(digits) {
    if (digits === null || digits === "") return [];
    let numToChars = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };

    //for each of the char of the first digit
    let combinations = [];
    const helper = function (combination, digits, numToChars, combinations) {
        console.log("calling helper with: ", combination);
        if (combination.length === digits.length) {
            combinations.push(combination);
            return
        }
        for (char of numToChars[digits[combination.length]]) {
            combination = combination.concat(char);
            helper(combination, digits, numToChars, combinations);
            combination = combination.substring(0, combination.length - 1);
            console.log("combination: ", combination);
        }
        return combinations;
    }
    helper("", digits, numToChars, combinations);
    return combinations
};


let test = "23";
console.log(letterCombinations(test));