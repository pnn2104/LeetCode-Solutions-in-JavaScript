var flipAndInvertImage = function(A) {
    let len = A.length;
    for (let row = 0; row < A.length; row++) {
        for (let col = 0; col < Math.floor((len + 1)/2); col++) {
            let temp = A[row][col] ^ 1;
            A[row][col] = A[row][len - 1 - col] ^ 1;
            A[row][len - 1 - col] = temp;
        }
    }    
    return A;
};

let test = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(test));