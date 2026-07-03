class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let res = 0
        const n = nums.length

        for(let i = 0; i<n; i++) {
            let cnt = 0
            for(let j =i; j<n; j++) {
                if(nums[j]===0) break
                cnt++
            }
            res = Math.max(res, cnt)
        }
        return res
    }
}
