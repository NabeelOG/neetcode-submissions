class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    missingNumber(arr) {
        const n = arr.length
        const difference = Math.floor((arr[n-1]-arr[0])/n)

        let lo = 0
        let hi = n - 1

        while(lo<hi) {
            const mid = Math.floor((lo+hi)/2)

            if(arr[mid]===arr[0]+mid*difference) {
                lo = mid + 1
            } else {
                hi = mid
            }
        }
        return arr[0]+difference*lo
    }
}
