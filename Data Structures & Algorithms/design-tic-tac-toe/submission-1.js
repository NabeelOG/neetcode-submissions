class TicTacToe {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.board = Array.from({length:n},()=>Array(n).fill(0))
        this.n = n
    }

    /**
     * @param {number} row
     * @param {number} col
     * @param {number} player
     * @return {number}
     */
    move(row, col, player) {
        this.board[row][col] = player
        if (
            this.checkRow(row, player) ||
            this.checkCol(col, player) ||
            (row===col && this.checkDia(player)) ||
            (col===this.n-row-1 && this.checkAntiDia(player))
        ) {
            return player;
        }
        return 0
    }

    checkAntiDia(player) {
        for(let row = 0;row<this.n;row++) {
            if(this.board[row][this.n-row-1]!==player) {
                return false
            }
        }
        return true
    }

    checkDia(player) {
        for(let row = 0;row<this.n;row++) {
            if(this.board[row][row]!==player) {
                return false
            }
        }
        return true
    }

    checkRow(row, player) {
        for(let col = 0;col<this.n;col++) {
            if(this.board[row][col]!==player) {
                return false
            }
        }
        return true
    }

    checkCol(col, player) {
        for(let row = 0;row<this.n;row++) {
            if(this.board[row][col]!==player) {
                return false
            }
        }
        return true
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row, col, player)
 */
