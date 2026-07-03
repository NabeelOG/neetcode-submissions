class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let res = 0
        for(let d of details) {
            if(parseInt(d.slice(11, 13))>60) {
                res++
            }
        }
        return res
    }
}
