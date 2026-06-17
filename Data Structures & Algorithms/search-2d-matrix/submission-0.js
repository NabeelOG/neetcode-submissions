class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length
        let n = matrix[0].length
        let left = 0
        let right = m*n-1

        while(left<=right) {
            let mid = Math.floor((left+right)/2)
            let row = Math.floor(mid/n)
            let col = mid%n
            let midVal = matrix[row][col]

            if(target===midVal) {
                return true
            }
            else if(midVal>target){
                right = mid-1
            }
            else {
                left = mid+1
            }
        }
        return false
    }
}
