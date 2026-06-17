/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    constructor() {
        this.count = 0
    }
    dfs(node) {
        if(node===null) return true
        
        let left = this.dfs(node.left)
        let right = this.dfs(node.right)

        if(left&&right) {
            if(node.left!=null && node.left.val!=node.val) {
                return false
            }
            if(node.right!=null && node.right.val!=node.val) {
                return false
            }
            this.count++
            return true
        }
    }
    countUnivalSubtrees(root) {
        this.count = 0
        this.dfs(root)
        return this.count
    }
}
