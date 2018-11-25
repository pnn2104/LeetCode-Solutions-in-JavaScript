var canPermutePalindrome = function(s) {
    let set = new Set ();
    for (let char of s) {
        if (set.has(char)) {
            set.delete(char);
        } else {
            set.add(char);
        }
    }
    return set.size <= 1;
}