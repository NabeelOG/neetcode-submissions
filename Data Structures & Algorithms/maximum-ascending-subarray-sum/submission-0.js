class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let res = nums[0], curSum = nums[0]

        for(let i = 1;i<nums.length;i++) {
            if(nums[i]<=nums[i-1]) {
                curSum = 0
            }
            curSum += nums[i]
            res = Math.max(res, curSum);
        }
        return res
    }
}
