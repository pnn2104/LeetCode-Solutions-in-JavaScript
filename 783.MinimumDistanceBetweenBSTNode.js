function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

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
        console.log(currentNode)
        let diff1 = Math.abs(currentNode.node.val - currentNode.lowerBound);
        console.log("diff1: ", diff1);
        let diff2 = Math.abs(currentNode.node.val - currentNode.upperBound);
        console.log("diff2: ", diff2);
        minDiff = minDiff === 0 ? diff1: Math.min(minDiff, diff1);
        console.log("minDIff: ", minDiff);
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


var test = new TreeNode(90);
test.left = new TreeNode(69);
test.left.right = new TreeNode(89);
test.left.left = new TreeNode(49);
test.left.left.right = new TreeNode(52);

console.log(minDiffInBST(test))
/*
        4
      /  \
     2    6 
    /  \
    1   3 
*/