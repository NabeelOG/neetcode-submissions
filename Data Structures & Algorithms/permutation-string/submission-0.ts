class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length>s2.length) return false
        let cntS1 = new Array(26).fill(0)
        let cntS2 = new Array(26).fill(0)

        for(let i = 0; i<s1.length; i++) {
            cntS1[s1.charCodeAt(i)-97]++
            cntS2[s2.charCodeAt(i)-97]++
        }

        if(cntS1.join()===cntS2.join()) {
            return true
        }

        for(let i = s1.length; i<s2.length; i++) {
            cntS2[s2.charCodeAt(i)-97]++
            cntS2[s2.charCodeAt(i-s1.length)-97]--
        
            if(cntS1.join()===cntS2.join()) return true
        }
        return false
    }
}
