class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let minBestBuy = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] >= minBestBuy) {
                max = Math.max(max, prices[i] - minBestBuy);
            }
            minBestBuy = Math.min(prices[i], minBestBuy);
        }
        return max;
    }
}
