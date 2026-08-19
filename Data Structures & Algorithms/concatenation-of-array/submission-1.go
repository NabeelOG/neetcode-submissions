func getConcatenation(nums []int) []int {
    n := len(nums)
    ans := make([]int, 2*n)
    for i, num := range nums {
        ans[i] = num
        ans[i+n] = num
    }
    return ans
}
