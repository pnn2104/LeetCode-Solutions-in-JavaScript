var myAtoi = function(str) {
    var spaceRemoved = removeWhiteSpaces(str);
    console.log(spaceRemoved, spaceRemoved.length);
    var multiplier = 1;
    var start = 0;
    var end = 0;
    if (spaceRemoved[0] === '-') {
        multiplier = -1;
        start++;
        end++;
    } else if (spaceRemoved[0] === '+') {
        multiplier = 1;
        start++;
        end++;
    }
    console.log("start, end: ", start, end)
    while (end < spaceRemoved.length) {
        if (spaceRemoved[end] < "0" || spaceRemoved[end] > "9") {
            break;
        }
        end++
    }
    const substr = spaceRemoved.substring(start, end);
    let num = 0;
    let nthDigit = 1;
    for (let j = substr.length - 1; j >= 0; j--) {
        num += nthDigit * Number(substr[j]);
        nthDigit *= 10;
    }

    if (num * multiplier >= Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (num * multiplier <= Math.pow(-2, 31) - 1) {
        return Math.pow(-2, 31);
    }
    return num * multiplier;
};

function removeWhiteSpaces(str) {
    var start = 0;
    while (start < str.length) {
        if (str[start] !== " ") break;
        start++;    
    }
    return str.substring(start);
}

var test = "+1";
console.log(myAtoi(test));

//console.log(Math.pow(-2, 31));