class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const count = new Map()
        for(const c of s) {
            count.set(c, (count.get(c)||0)+1)
        }
        for(let i = 0;i<s.length;i++) {
            if(count.get(s[i])===1) {
                return i
            }
        }
        return -1
    }
}
