func numRescueBoats(people []int, limit int) int {
	sort.Ints(people)
	res, l, r := 0, 0, len(people)-1
	for l <= r {
		remain := limit - people[r]
		res++
		r--
		if l <= r && remain>=people[l] {
			l++
		}
	}
	return res
}
