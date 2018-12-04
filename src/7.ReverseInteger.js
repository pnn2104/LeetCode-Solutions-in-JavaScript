var reverse = function(x) {
    let num = Math.abs(x);
    var reverted = 0;
    while (num > 0) {
        reverted = reverted * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    if (reverted > Math.pow(2, 31) - 1 || reverted < Math.pow(-2, 31)) return 0
    return x < 0 ? -1 * reverted : reverted;
}


module.exports = reverse;