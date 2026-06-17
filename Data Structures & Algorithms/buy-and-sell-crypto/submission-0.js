class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let minPrice = Infinity

        for(let sell of prices) {
            minPrice = Math.min(minPrice, sell)
            let profit = sell - minPrice
            maxProfit = Math.max(maxProfit, profit)
        }
        return maxProfit
    }
}
