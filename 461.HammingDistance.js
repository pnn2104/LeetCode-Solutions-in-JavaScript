var hammingDistance = function(x, y) {
    var count = 0;
    while (x > 0 || y > 0) {
        count += (x % 2) ^ (y % 2);
        x >>= 1;
        y >>= 1;
    }
    return count;
};

function convertToBinaryStr(num) {
    var str = "";
    while (num > 0) {
        str += num % 2 + "";
        num = Math.floor(num / 2);
    }
    return str;
}


console.log(hammingDistance(1, 4));