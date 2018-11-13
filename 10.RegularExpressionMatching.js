//dp bottom - up
var isMatch = function(s, p) {
    let dp = new Array(s.length + 1).fill(false).map(() => new Array(p.length + 1));
    dp[0][0] = true;

    for (let col = 1; col < dp[0].length; col++) { //take care of special pattern such as a*b* which can be equal to ""
        if (p[col - 1] === "*") {
            dp[0][col] = col - 2 >= 0 ? dp[0][col - 2] : false;
        } else {
            dp[0][col] = false;
        }
    }
    for (let row = 1; row < dp.length; row++) { //comparing empty string to characters in string
        dp[row][0] = false;
    }
    console.log(dp);

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            let isFirstMatch = s[i - 1] === p[j - 1] || p[j - 1] === "." ? true : false;
            console.log(s[i - 1], p[j - 1], isFirstMatch)
            if (p[j - 1] === "*") {
                dp[i][j] = dp[i][j - 2] || isFirstMatch && dp[i - 1][j];
            } else {
                dp[i][j] = isFirstMatch && dp[i - 1][j - 1];
            }
            console.log(dp)
        }
    }
    //console.log(dp);
    return dp[s.length][p.length];
}


var isMatchRecursion = function(s, p) {
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

let testS = "xaabyc";
let testP = "xa*b.c";
console.log(isMatch(testS, testP));