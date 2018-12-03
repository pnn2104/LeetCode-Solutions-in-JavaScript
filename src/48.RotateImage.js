var rotate = function(matrix) {
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = row + 1; col < matrix.length; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }
    
    for (let r of matrix) {
        r.reverse();
    }
};


let test = [
    [1,2,3],    
    [4,5,6],
    [7,8,9],
  ];

console.log(rotate(test));




/* 
[[1]];

[[1, 2],    [[3, 1],   n = 2 ==> num of moves per el = n - 1
 [3, 4]]     [4, 2]]

[
  [1,2,3,3],    
  [4,5,6,6],
  [7,8,9,9],
  [7,8,9,9]
],


[
  [1,4,7,7],  [7, 7, 4, 1]  
  [2,5,8,8],  [8, 8, 5, 2]
  [3,6,9,9],  [9, 9, 6, 3]
  [3,6,9,9]   [9, 9, 6, 3]
]

*/
