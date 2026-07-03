class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber: number): string {
        let res = [];
        while(columnNumber>0) {
            columnNumber--
            const offset = columnNumber % 26;
            res.push(String.fromCharCode('A'.charCodeAt(0)+offset));
            columnNumber = Math.floor(columnNumber/26)
        }
        return res.reverse().join('');
    }
}
