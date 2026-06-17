class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        let res = 0

        function helper(r,c,visit,res) {
            if(Math.min(r,c)<0 ||
            r === ROWS ||
            c === COLS ||
            visit.has(`${r}-${c}`) ||
            grid[r][c] === 1) {
                return 0
            }
            if(r===ROWS-1 && c===COLS-1) {
                return 1
            }

            visit.add(`${r}-${c}`)
            res = 0
            res += helper(r+1,c,visit,res)
            res += helper(r-1,c,visit,res)
            res += helper(r,c+1,visit,res)
            res += helper(r,c-1,visit,res)

            visit.delete(`${r}-${c}`)
            return res
        }

        return helper(0,0,new Set(),res)
    }
}
