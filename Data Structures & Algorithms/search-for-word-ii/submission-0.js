class TrieNode {
    constructor() {
        this.children = new Map()
        this.word = null
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    buildTrie(words) {
        const root = new TrieNode()
        for(const word of words) {
            let node = root
            for(const char of word) {
                if(!node.children.has(char)) {
                    node.children.set(char, new TrieNode())
                }
                node = node.children.get(char)
            }
            node.word = word
        }
        return root
    }


    findWords(board, words) {
        const result = []
        const root = this.buildTrie(words)
        const rows = board.length,cols = board[0].length

        function dfs(r,c,node) {
            const char = board[r][c]
            const childNode = node.children.get(char)
            if(!childNode) return

            if(childNode.word!==null) {
                result.push(childNode.word)
                childNode.word = null
            }

            board[r][c] = '#'

            const directions = [
                [1,0],[0,1],[-1,0],[0,-1]
            ]

            for(const [dr,dc] of directions) {
                const nr = r+dr,nc = c+dc
                if(nr>=0&&nc>=0&&nr<rows&&nc<cols&&board[nr][nc]!=='#') {
                    dfs(nr,nc,childNode)
                }
            }

            board[r][c] = char
        }

        for(let r = 0;r<rows;r++) {
            for(let c = 0;c<cols;c++) {
                if(root.children.has(board[r][c])) {
                    dfs(r,c,root)
                }
            }
        }
        return result
    }
}
