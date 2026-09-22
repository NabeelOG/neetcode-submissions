func mergeAlternately(word1 string, word2 string) string {
	n, m := len(word1), len(word2)
	var res strings.Builder
	i, j := 0, 0

	for i < n || j < m {
		if i < n {
			res.WriteByte(word1[i])
			i++
		}
		if j < m {
			res.WriteByte(word2[j])
			j++
		}
	}

	return res.String()
}
