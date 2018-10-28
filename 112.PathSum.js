function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


var hasPathSum = function(root, sum) {
    let stack = [];
    stack.push([root, root.val]);
    
    while (stack.length > 0) {
        var current  = stack.pop();
        var node = current[0];
        var currentSum = current[1];
        if (!node.right && !node.left) {//if it's leaf node 
            //check for sum === given sum
            if (currentSum === sum) {
                return true;
            }
        }

        if (node.right) {
            stack.push([node.right, currentSum + node.right.val]);
        }

        if (node.left) {
            stack.push([node.left, currentSum + node.left.val]);
        }
    }

    return false;
};


var test = new TreeNode(5);
test.left = new TreeNode(4);
test.right = new TreeNode(8);
test.left.left = new TreeNode(11);
test.left.left.left = new TreeNode(7);
test.left.left.right = new TreeNode(2);
test.right.left = new TreeNode(13);
test.right.right = new TreeNode(4);
test.right.right.right = new TreeNode(1);

console.log(hasPathSum(test, 22));
