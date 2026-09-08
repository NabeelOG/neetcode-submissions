func subarraySum(nums []int, k int) int {
	res := 0
	curSum := 0

	count := make(map[int]int)
	count[0] = 1

	for _, num := range nums {
		curSum += num
		diff := curSum - k

		res += count[diff]
		count[curSum]++
	}
	return res
}
