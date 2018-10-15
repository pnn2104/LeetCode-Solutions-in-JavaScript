//brute force O(n^2);
var trap = function(arr) {
    var maxLeft = 0;
    var maxRight = Math.max(...arr.slice(1));
    var amountOfWater = 0;
    for (let i = 0; i < arr.length; i++) {
        const amount = Math.min(maxLeft, maxRight) - arr[i];
        if (amount > 0) {
            amountOfWater += amount;
        } 
        if (arr[i] > maxLeft) {
            maxLeft = arr[i];
        }
        maxRight = Math.max(...arr.slice(i + 1));
    }
    return amountOfWater;
}

var trapDP = function(arr) {
    var maxLeft = 0;
    var maxRight = 0;
    var dp = new Array(arr.length);
    //var fromRight = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxLeft) {
            maxLeft = arr[i];
        }
        dp[i] = maxLeft - arr[i];   
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxRight) {
            maxRight = arr[i];
        }
        dp[i] = Math.min(dp[i], maxRight - arr[i]);
    }

    return dp.reduce(function(num, acc) {
        return num += acc;
    }, 0)
}

var test = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trapDP(test));