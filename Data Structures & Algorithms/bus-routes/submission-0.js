class Solution {
    /**
     * @param {number[][]} routes
     * @param {number} source
     * @param {number} target
     * @return {number}
     */
    numBusesToDestination(routes, source, target) {
        if(source === target) return 0;
        let n = routes.length;
        let stops = new Map()
        for(let bus = 0; bus<n; bus++) {
            for(let stop of routes[bus]) {
                if(!stops.has(stop)) stops.set(stop, []);
                stops.get(stop).push(bus)
            }
        }

        let seenBus = new Set()
        let seenStop = new Set([source])
        let q = new Queue([source])
        let res = 0

        while(!q.isEmpty()) {
            let size = q.size()
            for(let k = 0;k<size;k++) {
                let stop = q.pop();
                if(stop===target) return res
                for(let bus of stops.get(stop)||[]) {
                    if(seenBus.has(bus)) continue;
                    seenBus.add(bus)
                    for(let nxtStop of routes[bus]) {
                        if(seenStop.has(nxtStop)) continue;
                        seenStop.add(nxtStop);
                        q.push(nxtStop);
                    }
                }
            }
            res++
        }
        return -1
    }
}
