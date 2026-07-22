class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minimizeMax(nums: number[], p: number): number {
        if(p===0) return 0

        nums.sort((a,b)=>a-b);

        let l = 0, r = nums[nums.length-1]-nums[0], res = r;

        const isValid = (threshold) => {
            let i = 0, cnt = 0;
            while(i < nums.length - 1) {
                if(Math.abs(nums[i]-nums[i+1]) <= threshold) {
                    cnt++
                    i += 2;
                } else {
                    i++
                }
                if(cnt===p) return true;
            }
            return false
        }

        while(l<=r) {
            let m = Math.floor(l+(r-l)/2);
            if(isValid(m)) {
                res = m
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return res
    }
}
