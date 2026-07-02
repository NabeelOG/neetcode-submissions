class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(
        sentence1: string[],
        sentence2: string[],
        similarPairs: string[][],
    ) {
        if(sentence1.length!==sentence2.length) return false

        const wordToSimilarWords = new Map()
        for(const pair of similarPairs) {
            if(!wordToSimilarWords.has(pair[0])) {
                wordToSimilarWords.set(pair[0], new Set())
            }
            wordToSimilarWords.get(pair[0]).add(pair[1]);

            if(!wordToSimilarWords.has(pair[1])) {
                wordToSimilarWords.set(pair[1], new Set())
            }
            wordToSimilarWords.get(pair[1]).add(pair[0]);
        }

        for(let i = 0; i<sentence1.length; i++) {
            if(sentence1[i]===sentence2[i]) {
                continue
            }

            if(wordToSimilarWords.has(sentence1[i]) && wordToSimilarWords.get(sentence1[i]).has(sentence2[i])) {
                continue
            }
            return false
        }
        return true
    }
}
