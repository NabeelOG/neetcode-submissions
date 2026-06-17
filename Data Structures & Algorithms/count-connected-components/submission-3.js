class DSU {
    constructor(n) {
        this.parent = Array.from({length:n},(_,i)=>i)
        this.rank = Array(n).fill(1)
    }

    find(n) {
        let p = this.parent[n];
        while(p!==this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]];
            p = this.parent[p];
        }
        return p;
    }

    union(u,v) {
        let pu = this.find(u)
        let pv = this.find(v)
        
        if(pu===pv) {
            return false
        }

        if(this.rank[pv]>this.rank[pu]) {
            this.parent[pu] = pv
            this.rank[pv] += this.rank[pu]
        } else {
            this.parent[pv] = pu
            this.rank[pu] += this.rank[pv]
        }
        return true
    }
}
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const dsu = new DSU(n)
        let res = n
        for(const [u,v] of edges) {
            if(dsu.union(u,v)) {
                res--
            }
        }
        return res
    }
}
