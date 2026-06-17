class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        let ROWS = grid.length,COLS = grid[0].length
        let visit = new Set()
        let queue = []
        queue.push([0,0])
        visit.add('0,0')

        let length = 0
        while(queue.length>0) {
            let size=queue.length
            for(let i = 0;i<size;i++) {
                let [r,c] = queue.shift()
                if(r===ROWS-1 && c===COLS-1) {
                    return length
                }
                let directions = [[1,0],[-1,0],[0,1],[0,-1]]
                for(let [dr,dc] of directions) {
                    if(Math.min(dr+r,dc+c)<0 || dr+r===ROWS || dc+c===COLS || visit.has(dr+r+','+(dc+c)) || grid[r+dr][c+dc]===1) {
                        continue
                    }
                    queue.push([r+dr,c+dc])
                    visit.add(r+dr+','+(c+dc))
                }
            }
            length++
        }
        return -1
    }
}
