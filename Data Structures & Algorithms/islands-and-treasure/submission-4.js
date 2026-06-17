class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let ROWS = grid.length,COLS = grid[0].length
        let visit = new Set()
        let q = []

        function addCell(r,c) {
            if(r<0||c<0||r>=ROWS||c>=COLS||visit.has(r+','+c)||grid[r][c]===-1) return
            visit.add(r+','+c)
            q.push([r,c])
        }

        for(let r = 0;r<ROWS;r++) {
            for(let c = 0;c<COLS;c++) {
                if(grid[r][c]===0){
                    visit.add(r+','+c)
                    q.push([r,c])
                }
            }
        }
        let dist = 0
        while(q.length>0) {
            for(let i = q.length;i>0;i--) {
                let [r,c] = q.shift()
                grid[r][c]=dist
                addCell(r+1,c)
                addCell(r,c+1)
                addCell(r-1,c)
                addCell(r,c-1)
            }
            dist++
        }
    }
}
