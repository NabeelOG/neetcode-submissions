class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums: number[]): number {
        let inc = 1, dec = 1, res = 1
        for(let i = 1; i<nums.length; i++) {
            if(nums[i]===nums[i-1]) {
                inc = dec = 1
            } else if(nums[i]>nums[i-1]) {
                inc++
                dec = 1
            } else {
                dec++
                inc = 1
            }
            res = Math.max(res, inc, dec)
        }
        return res
    }
}
