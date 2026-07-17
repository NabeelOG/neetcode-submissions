class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s: string): number {
        const count = new Array(26).fill(0);
        for(const c of s) {
            count[c.charCodeAt(0)-'a'.charCodeAt(0)]++
        }

        let minEven = Infinity, maxOdd = 0
        for(let c of count) {
            if(c===0) continue
            if(c%2===0) {
                minEven = Math.min(minEven, c)
            } else {
                maxOdd = Math.max(maxOdd, c)
            }
        }
        return maxOdd - minEven
    }
}
