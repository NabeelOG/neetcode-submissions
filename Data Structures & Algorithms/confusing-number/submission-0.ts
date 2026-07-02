class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n: number): boolean {
        const invertMap = {
            0: '0',
            1: '1',
            6: '9',
            8: '8',
            9: '6'
        };

        let rotatedNumber = '';

        for(const ch of String(n)) {
            if(!(ch in invertMap)) {
                return false
            }
            rotatedNumber += invertMap[ch]
        }

        rotatedNumber = rotatedNumber.split('').reverse().join('');
        return parseInt(rotatedNumber)!==n
    }
}