function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}
var treeToDoublyList = function(root) {
    //console.log("calling function with: ", root);
    const recurse = function(root) {

    }
    if (!root) {
        return;
    }

    let left = root.left;
    let right = root.right;

    treeToDoublyList(left);
    treeToDoublyList(right);

    let currentLeft = left;

    while (currentLeft !== null && currentLeft.right !== null) {
        currentLeft = currentLeft.right;
    }
    if (currentLeft) {
        currentLeft.right = root;
    }

    let currentRight = right;
    while (currentRight !== null && currentRight.left !== null) {
        currentRight = currentRight.left;
    }
    if (currentRight) {
        currentRight.left = root;
    }
    
    let current = root;
    while (current.left) {
        current = current.left;
    }
    root = current;

    // let tail = root;
    // while (tail && tail.right) {
    //     tail = tail.right;
    // }

    // root.left = tail;
    // tail.right = root;
    console.log("root: ", root);
    //console.log("current")
    //console.log("root.right: ", root.right ? root.right.right.right: null);
}

let test = new TreeNode(4);
test.left = new TreeNode(2);
test.right = new TreeNode(5);
test.left.left = new TreeNode(1);
test.left.right = new TreeNode(3);

console.log(treeToDoublyList(test));