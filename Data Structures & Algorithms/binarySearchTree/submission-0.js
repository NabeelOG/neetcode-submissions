class TreeNode {
    constructor(key,val) {
        this.key = key
        this.val = val
        this.left = null
        this.right = null
    }
}
class TreeMap {
    constructor() {
        this.root = null
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        let newNode = new TreeNode(key,val)
        if(this.root===null) {
            this.root = newNode
            return
        }
        let current = this.root
        while(true) {
            if(key<current.key) {
                if(current.left === null) {
                    current.left = newNode;
                    return
                }
                current = current.left
            } else if(key>current.key) {
                if(current.right===null) {
                    current.right = newNode
                    return
                }
                current = current.right
            } else {
                current.val = val
                return
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let current = this.root
        while(current!==null) {
            if(key<current.key) {
                current = current.left
            } else if(key>current.key) {
                current = current.right
            } else {
                return current.val
            }
        }
        return -1
    }

    /**
     * @returns {number}
     */
    getMin() {
        let current = this.findMin(this.root)
        return current!==null?current.val:-1;
    }

    findMin(node) {
        while(node && node.left!==null) {
            node = node.left
        }
        return node
    }

    /**
     * @returns {number}
     */
    getMax() {
        let current = this.root
        while(current !==null && current.right!==null) {
            current = current.right
        }
        return current!==null?current.val:-1;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this.removeHelper(this.root,key)
    }

    removeHelper(curr,key) {
        if(curr===null) {
            return null
        }
        if(key>curr.key) {
            curr.right = this.removeHelper(curr.right,key)
        } else if(key<curr.key) {
            curr.left = this.removeHelper(curr.left,key)
        } else {
            if(curr.left===null) {
                return curr.right
            } else if(curr.right===null) {
                return curr.left
            } else {
                let minNode = this.findMin(curr.right)
                curr.key = minNode.key
                curr.val = minNode.val
                curr.right = this.removeHelper(curr.right,minNode.key)
            }
        }
        return curr
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        let result = []
        this.inorderTraversal(this.root,result)
        return result
    }

    inorderTraversal(root,result) {
        if(root!==null) {
            this.inorderTraversal(root.left,result)
            result.push(root.key)
            this.inorderTraversal(root.right,result)
        }
    }
}
