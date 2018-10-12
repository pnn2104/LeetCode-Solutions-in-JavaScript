var compress = function(chars) {
    var pointer1 = 0;
    var result = [];
    while (pointer1 < chars.length) {
        var pointer2 = pointer1 + 1;
        var count = 1;
        while (chars[pointer2] === chars[pointer2]) {
            count++;
            pointer2++;
        }
        result.push(chars[pointer1]);
        result.push(count + "");
        pointer1 = pointer2;
    }
    //console.log(result)
    return result.length
};

var test = ["a","a","b","b","c","c","c"];
console.log(compress(test));
