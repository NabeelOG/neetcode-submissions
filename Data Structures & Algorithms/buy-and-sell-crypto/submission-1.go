func maxProfit(prices []int) int {
	maxProfit := 0
	minPrice := 999999;

	for _, price := range prices {
		minPrice = min(minPrice, price)
		profit := price - minPrice
		maxProfit = max(maxProfit, profit)
	}

	return maxProfit
}
