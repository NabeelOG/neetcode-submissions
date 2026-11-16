class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0, r = 0, max = 0

        let set = new Set()

        while(r<s.length) {
            if(!set.has(s[r])) {
                set.add(s[r++])
                max = Math.max(max, set.size)
            } else {
                set.delete(s[l++])
            }
        }
        return max
    }
}
