var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    return countNum(countAndSay(n - 1));
}

function countNum(str) {
    let strCount = "";
    let count = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            strCount += "" + count + str[i];
            count = 1;
        }
    }
    return strCount;
}
// var countAndSay = function(n) {
//     if (n === 1) {
//         return "1";
//     }
//     let current = "1";
//     let counter = 1;
//     while (counter < n) {
//         let start = 0;
//         let newString = "";
//         while (start <= current.length - 1) {
//             let end = start + 1;
//             let count = 1;
//             while (end < current.length && current[end] === current[start]) {
//                 end++;
//                 count++;
//             }
//             newString = newString.concat(count).concat(current[start]);
//             start = end;
//         }
//         current = newString;
//         counter++;
//     }

//     return current;
// }


console.log(countAndSay(5));