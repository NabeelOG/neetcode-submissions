func twoSum(nums []int, target int) []int {
    preMap := make(map[int]int)

    for i, num := range nums {
        diff := target - num
        if j, found := preMap[diff]; found {
            return []int{j, i}
        }
        preMap[num] = i
    }
    return []int{}
}
