var repeatedStringMatch = function(A, B) {
    var toBeRepeated = A
    var hash = {};
    let count = 0;
    
    for (let i = 0; i < A.length; i++) { //created a hash of chars from A
        hash[A[i]] = A[i];
    }
    
    for (let j = 0 ; j < B.length; j++) {
        if (hash[B[j]] === undefined) {
            return -1;
        }
    }
    
    while (!toBeRepeated.includes(B)) {
        toBeRepeated = toBeRepeated.concat(A);
        count++;
        console.log(toBeRepeated, count)
    }
    return count + 1;
};

// "abcabcabcabc"
// "abac"


let A = "aaaaaaaaaaaaaaaaaaaaaab";
let B = "ba";
console.log(repeatedStringMatch(A, B));