func longestConsecutive(nums []int) int {
	numSet := make(map[int]bool)

	for _, num := range nums {
		numSet[num] = true
	}

	longest := 0

	for num := range numSet {
		if !numSet[num-1] {
			length := 1

			for numSet[num+length] {
				length++
			}

			if length > longest {
				longest = length
			}
		}
	}
	return longest
}
