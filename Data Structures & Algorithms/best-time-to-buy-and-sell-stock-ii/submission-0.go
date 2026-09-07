func maxProfit(prices []int) int {
	n:= len(prices)
	if n<2 {
		return 0
	}

	leftBuy, rightSell := 0, 1
	profit := 0

	for rightSell < n {
		currPrice := prices[leftBuy]
		futurePrice := prices[rightSell]

		if currPrice < futurePrice {
			profit += futurePrice - currPrice
		}

		leftBuy = rightSell
		rightSell++
	}
	return profit
}
