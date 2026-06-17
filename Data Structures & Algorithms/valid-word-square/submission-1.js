class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        let cols = 0
        let rows = words.length
        let newWords = []

        for(let word of words) {
            cols = Math.max(cols, word.length)
        }

        if(cols!=rows) return false

        for(let col = 0; col < cols; col++) {
            let newWord = ''
            for(let row = 0; row<rows; row++) {
                if(col<words[row].length) {
                    newWord += words[row][col];
                }
            }
            newWords.push(newWord)
        }
        return words.every((value, index) => value===newWords[index])
    }
}
