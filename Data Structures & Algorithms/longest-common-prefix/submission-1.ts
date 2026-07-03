class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(strs.length===0) return ''
        let result = ''
        strs.sort()
        let first = strs[0], last = strs[strs.length-1]
        for(let i = 0; i<first.length; i++) {
            if(first[i]===last[i]) {
                result += first[i]
            } else {
                break
            }
        }
        return result
    }
}
