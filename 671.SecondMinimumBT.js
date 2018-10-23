function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
} 

var findSecondMinimumValue = function(root) {  
    var min = root.val;
    var max = Number.POSITIVE_INFINITY;
    const recurse = function(root) {
        if (root === null) {
            return
        }  
        if (root.val > min && root.val < max) {
            max = root.val;
            console.log("max: ", max);
        } else {
            recurse(root.left);
            recurse(root.right);
        }
    }
    recurse(root);
    return max === Number.POSITIVE_INFINITY ? -1 : max;
};

var test = new TreeNode(2);
test.left = new TreeNode(2);
test.right = new TreeNode(5);
test.right.left = new TreeNode(5);
test.right.right = new TreeNode(7);

console.log("resukt: ", findSecondMinimumValue(test));




//takes O(N) time and space complexity
var findSecondMinimumValueSpace = function(root) {
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