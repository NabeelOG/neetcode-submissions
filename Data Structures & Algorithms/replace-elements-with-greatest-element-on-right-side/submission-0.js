class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;
        for (let r = arr.length - 1; r >= 0; r--) {
            let current = arr[r];
            arr[r] = max;
            max = Math.max(current, max);
        }
        return arr;
    }
}