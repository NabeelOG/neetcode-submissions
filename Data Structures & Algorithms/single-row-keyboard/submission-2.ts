class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard: string, word: string): number {
        const keyIndices = {}

        for(let i = 0;i<keyboard.length; i++) {
            keyIndices[keyboard[i]] = i
        }

        let prev = 0
        let result = 0

        for(const c of word) {
            result += Math.abs(prev - keyIndices[c])
            prev = keyIndices[c];
        }
        return result
    }
}
