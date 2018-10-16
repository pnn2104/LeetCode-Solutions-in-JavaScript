var fractionAddition = function(expression) {
    //separate the numerators;
    //separate the denominators;
    var numerators = [];
    var denominators = [];
    var hashDenominators = new Set();
    var commonDenominator = 1;
    
    for (let idx = 0; idx < expression.length; idx++) {
        if (expression[idx] === "/") {
            const denominator = getDenominators(expression, idx + 1);
            denominators.push(denominator);
            const numerator = getNumerators(expression, idx)
            numerators.push(numerator);
        }
    }

    denominators.forEach(function(denom) { //get common denominator
        if (!hashDenominators.has(denom)) {
            commonDenominator *= denom;
            hashDenominators.add(denom);
        }
    })

    numerators = numerators.map(function(num, i) { //calculate numerators based on common denominator
        var denominator = denominators[i];
        return commonDenominator / denominator * num;
    })

    var numerator = numerators.reduce(function(num, acc) { //total numerator
        return acc+= num;
    }, 0)

    //reduce to an irreducible fraction
    if (numerator === 0) {
        commonDenominator = 1;    
    } 

    for (let number = 10; number >= 2; number--) {
        while (numerator % number === 0 && commonDenominator % number === 0) {
            commonDenominator = commonDenominator / number;
            numerator = numerator / number;
        }
    }
    var result = numerator + "/" + commonDenominator;
    return result;
};


function getNumerators(expression, end) {
    let numerator = "";
    let start = end;
    while (start >= 0) {
        if (expression[start] === "+" || expression[start] === "-") break;
        start--;
    }
    numerator = expression.substring(start , end);
    return parseInt(numerator);
}

function getDenominators(expression, start) {
    let denominator = "";
    let end = start;
    while (end <= expression.length - 1) {
        if (expression[end] === '+' || expression[end] === '-') break;
        end++;    
    }
    denominator = expression.substring(start, end);
    return parseInt(denominator);
}

var exp = "7/3+5/2-3/10";
console.log("result: ", fractionAddition(exp));

//console.log("-1".toString());
/*
valid operation is + -
-1/2 + 1/2 + 1/3

numerators = -1, 1, 1
denominators = 2, 2, 3
find the common denominator --> 6
(6/2) * -1 + (6/2) * 1 + (6/3) * 1 = 2
2/6 -> 1/3
*/