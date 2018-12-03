var dailyTemperatures = function(T) {
    let result = [];
    for (let i = 0; i < T.length; i++) {
        let j = i + 1;
        let count = 1;
        while (j < T.length && T[j] <= T[i]) {
            count++;
            j++;
        }
        if (T[j] > T[i]) {
            result[i] = count;
        } else {
            result[i] = 0;
        }
    }    
    return result;
};

test = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(test))