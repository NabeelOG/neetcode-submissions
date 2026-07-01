class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let i = 0, j = 0

        while(i<s.length && j<t.length) {
            if(s[i]===t[j]) {
                i++
                j++
            } else {
                i++
            }
        }
        return t.length-j
    }
}
