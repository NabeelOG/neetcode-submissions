func groupAnagrams(strs []string) [][]string {
	res := make(map[string][]string)

	for _, s := range strs {
		sortedS := sortString(s)
		res[sortedS] = append(res[sortedS], s)
	}

	var result [][]string
	for _, group := range res {
		result = append(result, group)
	}
	return result
}

func sortString(s string) string {
	char := []rune(s)
	sort.Slice(char, func(i, j int) bool { return char[i] < char[j] })
	return string(char)
}