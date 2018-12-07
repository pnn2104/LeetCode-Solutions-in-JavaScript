var isHappy = function(n) {
    if (n === 0) return false;

    let hash = {};
    let newNum = n;
    while (newNum !== 1) {
        newNum = getNewSum(newNum);
        //return
        if (hash[newNum]) {
            return false;
        } else if (!hash[newNum]){
            hash[newNum] = 1;
        }
    }
    return true;
}

function getNewSum(n) {
    let newNum = 0;
    while (n > 0) {
        newNum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
    }
    return newNum;
}

// var test = 3;
// console.log(isHappy(test));

module.exports = isHappy;

/*
19 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 36 + 64 = 100;
1^2 + 0^2 + 0^2 = 1


0 -> not a happy number


2 
2^2 = 4;
4^2 = 16
1^2 + 6^2 = 37
3^2 + 7^2 = 9 + 49 = 58
5^2 + 8^2 = 25 + 64 = 89
8^2 + 9^2 = 64 + 81 = 145;
1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 26 + 16 = 42;
4^2 + 2^2 = 16 + 4 = 20;
2^2 = 4;


3
3^2 = 9
9^2 = 81;
8^2 + 1^2 = 64 + 1 = 65
6^2 + 5^2 = 36 + 25 = 61
6^2 + 1^2 = 37
3^2 + 7^2 = 9 + 49 = 58
5^2 + 8^2 = 25 + 64 = 89
8^2 + 9^2 = 64 + 81 = 145
1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 26 + 16 = 42
4^2 + 2^2 = 16 + 4 = 20;


*/