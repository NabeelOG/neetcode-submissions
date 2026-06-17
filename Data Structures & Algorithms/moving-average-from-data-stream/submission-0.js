class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.size = size
        this.queue = []
        this.windowSum = 0
        this.count = 0
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        this.count++
        this.queue.push(val)
        let tail = this.count>this.size?this.queue.shift():0
        this.windowSum = this.windowSum - tail + val;
        return this.windowSum / Math.min(this.size, this.count)
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */
