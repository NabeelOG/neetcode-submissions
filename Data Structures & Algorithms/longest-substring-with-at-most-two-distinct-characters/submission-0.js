class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let n = s.length
        let count = new Map()
        let j = 0
        let maxLen = 0

        for(let i = 0;i<n;i++) {
            count.set(s[i],(count.get(s[i])||0)+1)

            while(count.size>2) {
                count.set(s[j],count.get(s[j])-1)
                if(count.get(s[j])===0) count.delete(s[j])
                j++
            }
            maxLen = Math.max(maxLen,i-j+1)
        }
        return maxLen
    }
}
