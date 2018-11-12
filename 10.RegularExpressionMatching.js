var isMatch = function(s, p) {
    if (!p.length) {
        return s.length === 0;
    }

    let isFirstMatch = false;
    if (s.length && (s[0] === p[0] || p[0] === ".")) {
        isFirstMatch = true;
    }

    if (p.length >= 2 && p[1] === "*") {
        return isMatch(s, p.substring(2)) || (isFirstMatch && isMatch(s.substring(1), p))
        // if (!isFirstMatch) {//first not match, move forward in pattern
        //     return isMatch(s, p.substring(2));
        // } else if (isFirstMatch) { //if match, move forward in s
        //     return isMatch(s.substring(1), p);
        // }
    } else {
        return isFirstMatch && isMatch(s.substring(1), p.substring(1));
    }
};

let testS = "aaa";
let testP = "a*a";
console.log(isMatch(testS, testP));