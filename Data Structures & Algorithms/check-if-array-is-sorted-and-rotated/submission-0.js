class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        const N = nums.length
        let count = 1

        for(let i = 1;i<2*N;i++) {
            if(nums[(i-1)%N]<=nums[i%N]) {
                count++
            } else {
                count = 1
            }
            if(count===N) {
                return true
            }
        }
        return N===1
    }
}
