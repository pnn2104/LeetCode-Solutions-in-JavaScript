var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        console.log("iteration: ", i);
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                console.log("coin: ", coin, "dp: ", dp);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}


let denom = [3, 2, 5];
console.log(coinChange(denom, 17));

module.exports = coinChange;