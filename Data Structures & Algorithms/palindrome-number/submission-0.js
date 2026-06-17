class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if(x<0) return false
        let rev = 0, num = x
        while(x>0) {
            rev = rev * 10 + (x%10)
            x = Math.floor(x/10)
        }
        return rev === num
    }
}
