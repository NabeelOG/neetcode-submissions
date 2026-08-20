import "slices"

func groupAnagrams(strs []string) [][]string {
	groups := make(map[string][]string, len(strs))

	for _, s := range strs {
		key := []byte(s)
		slices.Sort(key)
		groups[string(key)] = append(groups[string(key)], s)
	}

	res := make([][]string, 0, len(groups))
	for _, group := range groups {
		res = append(res, group)
	}
	return res
}
