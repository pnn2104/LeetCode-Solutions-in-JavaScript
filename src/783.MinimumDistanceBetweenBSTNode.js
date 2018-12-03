function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//DFS iterative solution
var minDiffInBST = function(root) {
    let stack = [];
    stack.push({
        node: root,
        lowerBound: root.val,
        upperBound: root.val
    });
    let minDiff = null;

    while (stack.length > 0) {
        var currentNode = stack.pop();
        let diff1 = Math.abs(currentNode.node.val - currentNode.lowerBound);
        let diff2 = Math.abs(currentNode.node.val - currentNode.upperBound);
        minDiff = minDiff === 0 ? diff1: Math.min(minDiff, diff1);
        minDiff = Math.min(diff2, minDiff);
        if (currentNode.node.left) {
            stack.push({
                node: currentNode.node.left,
                lowerBound: currentNode.lowerBound,
                upperBound: currentNode.node.val
            });
        } 

        if (currentNode.node.right) {
            stack.push({
                node: currentNode.node.right,
                lowerBound: currentNode.node.val,
                upperBound: currentNode.upperBound
            });
        }
    }
    return minDiff;
};



var minDiffInBSTRecursive = function(root) {
    var globalMin = 0

    const dfs = function(node, lowerBound, upperBound) {
        let diff1 = Math.abs(node.val - lowerBound);
        let diff2 = Math.abs(node.val - upperBound);
        globalMin = globalMin === 0 ? diff1 : Math.min(globalMin, diff1);
        globalMin = Math.min(globalMin, diff2);

        if (!node) {
            return 
        }

        if (node.left) {
            dfs(node.left, lowerBound, node.val);
        }

        if (node.right) {
            dfs(node.right, node.val, upperBound);
        }
    }

    dfs(root, root.val, root.val);
    return globalMin;
}

var test = new TreeNode(90);
test.left = new TreeNode(69);
test.left.right = new TreeNode(89);
test.left.left = new TreeNode(49);
test.left.left.right = new TreeNode(52);

console.log(minDiffInBSTRecursive(test))
/*
        4
      /  \
     2    6 
    /  \
    1   3 
*/