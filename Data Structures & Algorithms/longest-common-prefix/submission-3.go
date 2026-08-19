func longestCommonPrefix(strs []string) string {
    sort.Strings(strs)
    first := strs[0]
    last := strs[len(strs)-1]
    res := ""
    for i:=0; i<len(first) && i<len(last); i++ {
        if first[i]!=last[i] {
            return res
        }
        res += string(first[i])
    }
    return res
}
