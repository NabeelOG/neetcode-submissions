func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    countS, countT := make(map[rune]int), make(map[rune]int)
    for i, ch := range s {
        countT[ch]++
        countS[rune(t[i])]++
    }

    for k, v := range countT {
        if countS[k] != v {
            return false
        }
    }
    return true
}
