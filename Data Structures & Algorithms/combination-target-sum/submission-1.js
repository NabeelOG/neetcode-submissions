class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a,b)=>a-b)
        const res = []
        function dfs(nums,start,remaining,path) {
            if(remaining===0) {
                res.push([...path])
                return
            }
            for(let i = start;i<nums.length;i++) {
                const num = nums[i]
                if(remaining-num<0) break
                path.push(num)
                dfs(nums,i,remaining-num,path)
                path.pop()
            }
        }
        dfs(nums,0,target,[])
        return res
    }
}
