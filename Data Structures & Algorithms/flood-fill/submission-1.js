class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const orig = image[sr][sc]
        if(orig===color) return image
        const m = image.length,n = image[0].length
        const q = new Queue([[sr,sc]]);
        image[sr][sc] = color
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]]

        while(!q.isEmpty()) {
            const [r,c] = q.pop()
            for(const [dr,dc] of dirs) {
                const nr = r+dr,nc = c+dc
                if(nr>=0 && nr<m && nc>=0 && nc<n && image[nr][nc]===orig) {
                    image[nr][nc] = color
                    q.push([nr,nc])
                }
            }
        }
        return image
    }
}
