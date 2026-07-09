class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        if(numRows===0) return []

        let res = [[1]]

        for(let i = 0; i<numRows-1; i++) {
            let temp = [0, ...res[res.length-1], 0];
            let row = []
            for(let j = 0; j<res[res.length-1].length+1; j++) {
                row.push(temp[j]+temp[j+1])
            }
            res.push(row)
        }
        return res
    }
}
