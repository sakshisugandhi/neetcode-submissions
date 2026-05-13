class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = prices.length - 1; j >= i; j--) {
                let diff = Math.max(prices[j] - prices[i]);
                max = Math.max(max, diff);
            }
        }
        return max;
    }
}
