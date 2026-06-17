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
        const rows = image.length,cols = image[0].length

        function dfs(r,c) {
            if(r<0 || r>=rows || c<0 || c>=cols || image[r][c]!==orig) return

            image[r][c] = color
            dfs(r+1,c)
            dfs(r,c+1)
            dfs(r-1,c)
            dfs(r,c-1)
        }
        dfs(sr,sc)
        return image
    }
}
