class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestBridge(grid) {
        const N = grid.length
        const directions = [
            [1,0],[-1,0],[0,1],[0,-1]
        ]
        const visited = Array.from({length:N},()=>Array(N).fill(false))
        const q = new Queue()

        const dfs = (r,c) => {
            if(r<0||c<0||r>=N||c>=N||grid[r][c]===0||visited[r][c]) return
            visited[r][c] = true
            q.enqueue([r, c])
            for(const [dr,dc] of directions) {
                dfs(r+dr,c+dc)
            }
        };

        const bfs = () => {
            let res = 0
            while(!q.isEmpty()) {
                for(let i = q.size();i>0;i--) {
                    const [r,c] = q.dequeue()
                    for(const [dr,dc] of directions) {
                        const curR = r+dr, curC = c+dc;
                        if(curR<0||curC<0||curR>=N||curC>=N||visited[curR][curC]) continue
                        if(grid[curR][curC]===1) return res;
                        q.push([curR, curC])
                        visited[curR][curC] = true
                    }
                }
                res++
            }
        }

        for(let r = 0;r<N;r++) {
            for(let c = 0;c<N;c++) {
                if(grid[r][c]===1) {
                    dfs(r,c)
                    return bfs()
                }
            }
        }
    }
}
