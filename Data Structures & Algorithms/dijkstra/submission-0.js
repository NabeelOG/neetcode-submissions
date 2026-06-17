/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const adj = {}
        for(let i = 0;i<n;i++) {
            adj[i] = [];
        }
        for(const [s,d,w] of edges) {
            adj[s].push([d,w])
        }

        const shortest = {}
        const minHeap = new PriorityQueue((a,b)=>a[0]-b[0]);
        minHeap.enqueue([0,src]);

        while(!minHeap.isEmpty()) {
            const [w1,n1] = minHeap.dequeue()
            if(shortest.hasOwnProperty(n1)) {
                continue
            }
            shortest[n1] = w1;

            for(const [n2,w2] of adj[n1]) {
                if(!shortest.hasOwnProperty(n2)) {
                    minHeap.enqueue([w1+w2,n2])
                }
            }
        }
        for(let i = 0;i<n;i++) {
            if(!shortest.hasOwnProperty(i)) {
                shortest[i] = -1
            }
        }
        return shortest
    }
}
