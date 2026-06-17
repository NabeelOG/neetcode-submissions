class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights), r = weights.reduce((a,b)=>a+b,0)
        while(l<r) {
            let mid = Math.floor((l+r)/2)
            if(this.canShip(weights, mid, days)) {
                r = mid
            } else {
                l = mid + 1
            }
        }
        return l
    }
    canShip(weights, capacity, days) {
        let ship = 1, cap = capacity
        for(let w of weights) {
            if(cap-w<0) {
                ship++
                cap = capacity
            }
            cap = cap - w
        }
        return ship<=days
    }
}
