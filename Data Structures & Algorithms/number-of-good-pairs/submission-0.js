class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        const count = {}
        let res = 0
        for(const num of nums) {
            res += count[num] || 0
            count[num] = (count[num]||0)+1
        }
        return res
    }
}
