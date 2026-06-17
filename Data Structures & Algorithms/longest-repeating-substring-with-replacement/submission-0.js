class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map()
        let L = 0, res = 0
        let maxFreq = 0

        for(let R = 0;R<s.length;R++) {
            count.set(s[R],(count.get(s[R])||0)+1)
            maxFreq = Math.max(maxFreq,count.get(s[R]))

            if((R-L+1)-maxFreq>k) {
                count.set(s[L],count.get(s[L])-1)
                L++
            }
            res = Math.max(res,R-L+1)
        }
        return res
    }
}