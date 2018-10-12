function minDistance(word1, word2) {
    if (word1 === word2) {
        return 0
    } else if (word1.length === 0) {
        return word2.length;
    } else if (word2.length === 0) {
        return word1.length;
    } 
    var edits = new Array(word1.length + 1).fill(new Array(word2.length + 1));
    for (let row = 0; row < edits.length; row++) {
        console.log("row: ", row);
        edits[row][0] = row;
        console.log("here: ", edits)
    }
    
    for (let col = 0; col < edits[0].length; col++) {
        edits[0][col] = col;
    }

    console.log(edits);
}

var test1 = "abcdef";
var test2 = "azced";
console.log(minDistance(test1, test2));




