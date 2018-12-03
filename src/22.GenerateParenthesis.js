var generateParenthesis = function(n) {
    let results = [];
    const generate = function(bracketsComb, numOfOpen, numOfClose, n) {
        if (numOfOpen === n && numOfClose === n) {
            results.push(bracketsComb);
            return
        }
        if (numOfOpen < n) {
            generate(bracketsComb + "(", numOfOpen + 1, numOfClose, n);
        }
        if (numOfOpen > numOfClose) {
            generate(bracketsComb + ")", numOfOpen, numOfClose + 1, n);
        }
    }
    generate("", 0, 0, n);
    return results;
};

console.log(generateParenthesis(3));