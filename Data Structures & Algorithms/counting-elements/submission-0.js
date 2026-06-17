class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        const hashSet = new Set(arr)
        let count = 0
        for(const x of arr) {
            if(hashSet.has(x+1)) {
                count++
            }
        }
        return count
    }
}
