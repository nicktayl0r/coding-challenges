function getMaxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];

    for (let index=1; index<prices.length; index++) {

        let currentPrice = prices[index];
        let potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(potentialProfit, maxProfit);

        minPrice = Math.min(currentPrice, minPrice);

    }
    return maxProfit;
}



