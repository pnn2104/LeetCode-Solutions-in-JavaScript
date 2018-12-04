var isPalindrome = function(x) {
    if (x < 0 || x !== 0 && (x % 10 === 0)) {
        return false;
    }

    let reverted = x % 10;
    x = Math.floor(x / 10);

    while (reverted < x) {
        reverted = reverted * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverted === x || Math.floor(reverted / 10) === x;
};

module.exports = isPalindrome;

/*

Negative number -353 -> "353-"


Non-negative 198891 --> "198891" 

reverted number > Number.MAX_INT

"abba" -->reverted half = ab


123  --> 321

reverted = 123 % 10 = 3

num = 12 

reverted * 10 + (num % 10) = 32

num = 1

reverted * 10 + (num % 10) = 321


12321 --> true

1241 --> false
*/

