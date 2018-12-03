function minDistance(word1, word2) {
    if (word1 === word2) {
        return 0
    } else if (word1.length === 0) {
        return word2.length;
    } else if (word2.length === 0) {
        return word1.length;
    } 
    var edits = new Array(word1.length + 1);
    for (let row = 0; row < edits.length; row++) {
        if (edits[row] === undefined) {
            edits[row] = new Array(word2.length + 1);
            edits[row][0] = row; 
        }
    }
    
    for (let col = 0; col < edits[0].length; col++) {
        edits[0][col] = col;
    }

    for (let row = 1; row < edits.length; row++) {
        const charWord1 = word1[row - 1];
        for (let col = 1; col < edits[0].length; col++) {
            const charWord2 = word2[col - 1];
            if (charWord1 === charWord2) {
                edits[row][col] = edits[row - 1][col - 1];
            } else {
                const newMin = Math.min(edits[row - 1][col - 1], edits[row][col - 1], edits[row - 1][col]) + 1;
                edits[row][col] = newMin;
            }
        }
    }
    return edits[word1.length][word2.length];
}

var test1 = "abcdef";
var test2 = "azced";
console.log(minDistance(test1, test2));




