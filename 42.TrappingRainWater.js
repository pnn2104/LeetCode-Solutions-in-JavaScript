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

var test = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(test));