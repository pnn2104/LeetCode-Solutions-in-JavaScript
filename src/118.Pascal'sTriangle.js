var generate = function(numRows) {
    if (!numRows) return [];
    else if (numRows === 1) return [[1]];
    var pascal = [[1]];
    for (let row = 1; row < numRows; row++) {
        let newRow = [1]
        for (let col = 1; col < pascal[row - 1].length; col++) {
            const num = pascal[row - 1][col - 1] + pascal[row - 1][col];
            newRow.push(num);
        }
        newRow.push(1);

        pascal.push(newRow);
    }
    return pascal
};

console.log(generate(5))