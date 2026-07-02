class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1: number[], nums2: number[]): number[] {
        const valueToPos = new Map()
        for(let i = 0; i<nums2.length; i++) {
            valueToPos.set(nums2[i], i)
        }

        const mapping = new Array(nums1.length)
        for(let i = 0; i<nums1.length; i++) {
            mapping[i] = valueToPos.get(nums1[i])
        }

        return mapping
    }
}
