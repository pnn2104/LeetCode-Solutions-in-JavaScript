var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;
    const helper = function(node) {
        if (!node) {
            return 0;
        }
        let leftGain = Math.max(helper(node.left), 0);
        let rightGain = Math.max(helper(node.right), 0);
        let newPath = node.val + leftGain + rightGain;
        
        max = Math.max(newPath, max);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    helper(root);
    return max;
};