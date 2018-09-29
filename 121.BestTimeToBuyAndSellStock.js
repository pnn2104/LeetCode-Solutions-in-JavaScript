var maxProfit = function(prices) {
    var minPrice = prices[0];
    var maxProfit = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            var newProfit = prices[i] - minPrice;
            if (newProfit > maxProfit) {
                maxProfit = newProfit;
            }
        }
    }
    return maxProfit;
};