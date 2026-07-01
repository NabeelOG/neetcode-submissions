class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let counter = 0
        for(let i = 0; i<t.length; i++) {
            if(s[counter]===t[i]) counter++
        }
        return counter===s.length
    }
}
