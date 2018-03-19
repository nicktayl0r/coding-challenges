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

console.log(getMaxProfit([5,3,2,1,0])) //=>  -1
console.log(getMaxProfit([10, 7, 5, 8, 11, 9])) //=> 6
console.log(getMaxProfit([-1, 3, 4, 0, 11, 9])) //=> 6

