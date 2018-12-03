var backspaceCompare = function(S, T) {
    const process = function(str) {
        console.log("calling process with: ", str);
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "#") {
                return process(str.substring(1));
            } else if (str[i + 1] === "#") {
                return process(str.substring(0, i) + str.substring(i + 2));
            } 
        }
        return str;
    }

    let processedS = process(S);
    let processedT = process(T);

    if (processedS === processedT) {
        return true;
    }
    return false;
};


let testS = "ab#b#c";
let testT = "#####a#c";
console.log(backspaceCompare(testS, testT));

