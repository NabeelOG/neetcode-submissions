class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words: string[]): boolean {
        let cols = 0;
        let rows = words.length;
        let newWords = [];

        for (let word of words) {
            cols = Math.max(cols, word.length);
        }
        if (cols !== rows) return false;

        for (let col = 0; col < cols; col++) {
            let newWord = "";
            for (const word of words) {
                newWord += word[col] || "";
            }
            newWords.push(newWord);
        }
        return words.every((value, i) => {
            return value === newWords[i];
        });
    }
}
