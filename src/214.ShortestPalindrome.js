//this version has terrible time complexity but it works with shorter string
var shortestPalindromeBruteForce = function(s) {
    
    const isPalindrome = function(str) {
        let start = 0; 
        let end = str.length - 1;
        
        while (start <= end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    const helper = function(s, newStr, idx) {
        if (idx === s.length) {
            return newStr;
        }
        if (isPalindrome(newStr)) {
            return newStr;        
        } 
        let s1 = "";
        let s2 = "";
        s1 = helper(s, s[idx] + newStr, idx + 1);
        s2 = helper(s, newStr, idx + 1);
        if (isPalindrome(s1) && isPalindrome(s2)) {
            if (s1.length <= s2.length) {
                return s1;
            } else {
                return s2;
            }
        } else if (isPalindrome(s1) && !isPalindrome(s2)) {
            return s1;
        } else if (!isPalindrome(s1) && isPalindrome(s2)) {
            return s2;
        } else {
            return "abc";
        }
    }
    return helper(s, s, 0);
};


var shortestPalindrome1 = function(s) {
    const isPalindrome = function(str) {
        let start = 0; 
        let end = str.length - 1;
        
        while (start < end) {
            if (str[start] !== str[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    if (isPalindrome(s)) {
        return s;
    }
    
    for (let i = s.length - 1; i >= 0; i--) {
        let word = s.slice(i).split("").reverse().join("") + s;
        if (isPalindrome(word)) {
            
            return word;
        }
    }

}


function shortestPalindrome(str) {
    let add = "";
    let p1 = 0;
    let p2 = str.length - 1;
    
    while (p1 <= p2) {
        //console.log("p1: ", p1);
        //console.log("p2: ", p2);
        if (p2 - p1 === 1 && str[p1] === str[p2]) {
            add = str[p2] + add;
            break;
        }
        if (str[p1] === str[p2]) {
            p1++;
            p2--;
        } else if (str[p1] !== str[p2]){
            add += str[p2];
            p2--;
        }
    }
    // if (Math.abs(p1 - p2) > 0) {
    //     add = str[p2 + 1] + add;
    // }
    return add + str;
}

let input = "aabba";
/*
add = "bb"
p1 = 0 -> 1;
     a    a
p2 = 4 -> 3 -> 2 -> 1;
     a    b    b    a

civic
abbbba
*/
console.log(shortestPalindrome(input))



    