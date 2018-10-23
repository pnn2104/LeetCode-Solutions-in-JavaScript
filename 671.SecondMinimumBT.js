function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
} 
var findSecondMinimumValue = function(root) {
    if (!root) {
        return -1;
    }    
    //inorder traversal get all the elements;
    var values = inorderTraversal(root).sort((a, b) => a - b);
    var min = values[0];
    for (let val of values) {
        if (val > min) return val;
    }
    return -1;
};

function inorderTraversal(root) {
    var storage = [];
    const recurse = function(root, result) {
        if (!root) {
            return 
        }
        recurse(root.left, result);
        result.push(root.val);
        recurse(root.right, result);
    }
    recurse(root, storage);
    return storage;
}