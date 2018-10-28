function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    } else if (!p && q) {
        return false;
    } else if (!q && p) {
        return false
    }
    var queue = [];
    queue.push(p);
    queue.push(q);

    while (queue.length > 0) {
        const currentPNode = queue.shift();
        const currentQNode = queue.shift();
        if (currentPNode.val !== currentQNode.val) {
            return false;
        }
        if ((currentPNode.left && !currentQNode.left) || 
            (currentPNode.right && !currentQNode.right) ||
            (currentQNode.left && !currentPNode.left) ||
            (currentQNode.right && !currentPNode.right)) {
            return false 
        }

        if (currentPNode.left && currentQNode.left) {
            queue.push(currentPNode.left);
            queue.push(currentQNode.left);
        }

        if (currentPNode.right && currentQNode.right) {
            queue.push(currentPNode.right);
            queue.push(currentQNode.right);
        }
    }
    return true;
};




let testP = new TreeNode(1);
testP.left = new TreeNode(1);
//testP.right = new TreeNode(1)

let testQ = new TreeNode(1);
//testQ.left = new TreeNode(2);
testQ.right = new TreeNode(1)
//testQ.right.left = new TreeNode(4)

console.log(isSameTree(testP, testQ));