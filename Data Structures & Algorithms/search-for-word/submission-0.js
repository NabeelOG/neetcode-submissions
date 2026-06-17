class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length,COLS = board[0].length

        function dfs(r,c,i) {
            if(i===word.length) return true
            if(Math.min(r,c)<0 || r>=ROWS || c>=COLS || board[r][c]!==word[i] || board[r][c]==='visited') {
                return false
            }
            board[r][c] = 'visited'
            const res = dfs(r+1,c,i+1) || dfs(r,c+1,i+1) || dfs(r-1,c,i+1) || dfs(r,c-1,i+1)
            board[r][c] = word[i]
            return res
        }

        for(let r = 0;r<ROWS;r++) {
            for(let c = 0;c<COLS;c++) {
                if(dfs(r,c,0)) return true
            }
        }
        return false
    }
}
