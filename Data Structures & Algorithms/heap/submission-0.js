class MinHeap {
    constructor() {
        this.heap = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val)
        this.bubbleUp(this.heap.length-1)
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.heap.length===0) return -1
        if(this.heap.length===1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)

        return root
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap.length>0?this.heap[0]:-1
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = [...nums]
        for(let i = Math.floor(this.heap.length/2)-1;i>=0;i--) {
            this.bubbleDown(i)
        }
    }

    bubbleUp(index) {
        let parent = Math.floor((index-1)/2)
        while(index>0 && this.heap[parent]>this.heap[index]) {
            [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]
            index = parent
            parent = Math.floor((index-1)/2)
        }
    }

    bubbleDown(index) {
        let child = (index * 2)+1
        while(child < this.heap.length) {
            if(child+1<this.heap.length && this.heap[child]>this.heap[child+1]) {
                child++
            }
            if(this.heap[child] >= this.heap[index]) {
                break
            }

            [this.heap[child],this.heap[index]] = [this.heap[index],this.heap[child]];
            index = child
            child = 2 * index + 1
        }
    }
}
