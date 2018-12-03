var maxProfit = function(prices) {
    let buyP = 0;
    let sellP = 1;
    let maxProfit = 0;
    
    while (buyP < sellP && sellP < prices.length) {
        if (prices[sellP] > prices[buyP]) {
            while (prices[sellP + 1] > prices[sellP]) {
                sellP++;
            }
            maxProfit += (prices[sellP] - prices[buyP]);
            buyP = sellP + 1;
            sellP = buyP + 1;
        } else {
            buyP = sellP;
            sellP++;
        }
    }
    return maxProfit;
};

let test = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(test));