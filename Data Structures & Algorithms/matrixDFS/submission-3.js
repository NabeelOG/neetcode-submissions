class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length

        function helper(r, c, visited) {
            if (
                Math.min(r, c) < 0 ||
                r === ROWS ||
                c === COLS ||
                visited.has(`${r}-${c}`) ||
                grid[r][c] === 1
            ) {
                return 0
            }

            if (r === ROWS-1 && c === COLS-1) return 1

            visited.add(`${r}-${c}`)

            let count = 0
            count += helper(r+1,c,visited)
            count += helper(r-1,c,visited)
            count += helper(r,c+1,visited)
            count += helper(r,c-1,visited)

            visited.delete(`${r}-${c}`)
            return count
        }

        return helper(0, 0, new Set())
    }
}
