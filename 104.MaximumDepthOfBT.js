function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
	let stack = [];
	stack.push([root, 1]);
	let max = 0;

	while (stack.length > 0) {
		let current = stack.pop();
		let node = current[0];
		let currentDepth = current[1];

		if (!node.left && !node.right) {
            max = Math.max(currentDepth, max);	
        }

        if (node.left) {
	        stack.push([node.left, currentDepth + 1]);
        }
        if (node.right) {
	        stack.push([node.right, currentDepth + 1]);
        }
    }
	return max;
}

var testBT = new TreeNode(3);
testBT.left = new TreeNode(9);
testBT.right = new TreeNode(20);
testBT.right.left = new TreeNode(15);
testBT.right.right = new TreeNode(7);

console.log(maxDepth(testBT));