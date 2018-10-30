function TreeNode(value) {
    this.val = value;
    this.right = null;
    this.left = null;
}
var closestValue = function(root, target) {
    let floor = Math.floor(target);
    let minDiff = Math.abs(root.val - target);
    let closest = root.val;
    let currentNode = root;
    while (currentNode) {
        let newDiff = Math.abs(currentNode.val - target);
        if (newDiff < minDiff) {
            closest = currentNode.val;
            minDiff = Math.min(minDiff, newDiff);
        }
        if (floor < currentNode.val) {
            currentNode = currentNode.left;
        } else if (floor >= currentNode.val) {
            currentNode = currentNode.right;
        }
    }

    return closest;
}


let test = new TreeNode(4);
test.left = new TreeNode(2);
test.right = new TreeNode(5);
test.left.left = new TreeNode(1);
test.left.right = new TreeNode(3);

console.log(closestValue(test, 0));