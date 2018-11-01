var maxProfit = function(prices) {
    var minPrice = prices[0];
    var maxProfit = 0;
    for (var i = 1; i < prices.length; i++) {
        var newProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, newProfit);
        minPrice = Math.min(minPrice, prices[i]); 
    }
    return maxProfit;
};