class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numDistinctIslands(grid: number[][]): number {
        const ROWS = grid.length, COLS = grid[0].length
        const uniqueIsland = new Set<string>();

        function dfs(r:number, c:number, baseR:number, baseC:number, shape:string[]) {
            grid[r][c] = 0

            const relativeR = r-baseR
            const relativeC = c-baseC
            shape.push(`${relativeR}, ${relativeC}`);

            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for(const [dr, dc] of directions) {
                const nr = r+dr, nc = c+dc
                if(nr>=0 && nr<ROWS && nc>=0 && nc<COLS && grid[nr][nc]===1) {
                    dfs(nr, nc, baseR, baseC, shape)
                }
            }
        }

        for(let r = 0; r<ROWS; r++) {
            for(let c = 0; c<COLS; c++) {
                if(grid[r][c]===1) {
                    const shape:string[]=[]
                    dfs(r, c, r, c, shape)
                    uniqueIsland.add(shape.join(':'))
                }
            }
        }
        return uniqueIsland.size
    }
}
