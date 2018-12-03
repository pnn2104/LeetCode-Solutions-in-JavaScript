var compress = function(chars) {
    var pointer1 = 0;
    var result = [];
    var counter = 0
    while (counter < chars.length) {
        var count = 1;
        while (chars[1] === chars[0]) {
            count++;
            chars.shift();
            counter++;
        }
        result.push(chars[pointer1]);
        result.push(count + "");
        count = 1;
    }
    console.log(chars);
    return result.length
};

var test = ["a","a","b","b","c","c","c"];
console.log(compress(test));
