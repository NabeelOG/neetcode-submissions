func rotate(nums []int, k int) {
	n := len(nums)
	k = k % n
	nums = reverse(nums, 0, n-1)
	nums = reverse(nums, 0, k-1)
	nums = reverse(nums, k, n-1)
}

func reverse(nums []int, l, r int) []int {
	for l < r {
		nums[l], nums[r] = nums[r], nums[l]
		l++
		r--
	}
	return nums
}
