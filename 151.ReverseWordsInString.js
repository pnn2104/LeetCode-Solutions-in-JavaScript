var reverseWords = function(str) {
    var arr = str.split(" ");
    var withoutSpace = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            withoutSpace.push(arr[i])
        }
    }
    return reverse(withoutSpace).join(" "); 
};
var reverse = function(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}