class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    expand(s) {
        const storeFirstOptions = (startPos, firstOptions) => {
            if(s[startPos]!=='{') {
                firstOptions.push(s[startPos])
            } else {
                while(s[startPos]!=='}') {
                    if(s[startPos] >= 'a' && s[startPos] <= 'z') {
                        firstOptions.push(s[startPos]);
                    }
                    startPos++
                }
                firstOptions.sort();
            }
            return startPos+1;
        }

        let expandedWords = ['']
        let startPos = 0
        while(startPos<s.length) {
            const firstOptions = []
            const remStringStartPos = storeFirstOptions(startPos, firstOptions)
            const currWords = []
            for(const word of expandedWords) {
                for(const c of firstOptions) {
                    currWords.push(word+c)
                }
            }

            expandedWords = currWords;
            startPos = remStringStartPos
        }
        return expandedWords
    }
}
