function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

var flatten = function(root) {
    if (!root) {
        return;
    }

    let left = root.left;
    let right = root.right;

    flatten(left);
    flatten(right);

    root.left = null;
    root.right = left;

    let currentNode = root;
    while (currentNode.right) {
        currentNode = currentNode.right;
    }

    currentNode.right = right;
}

/* Recrusion
var flatten = function(root) {
    console.log("calling recurse with : ", node)
    const recurse = function(node) {
        console.log("calling recurse with : ", JSON.stringify(node));
        if (!node.left && !node.right) {//no left && no right
            return node;
        } else if (node.left && !node.right) { //left but not right
            let left = recurse(node.left);
            node.right = node.left;
            node.left = null;
            return left;
        } else if (node.right && !node.left) {//right but not left
            return recurse(node.right)
        } else if (node.right && node.left) {//both left and right
            let right = recurse(node.right);
            let left = recurse(node.left);
            console.log("node: ", JSON.stringify(node));
            left.right = node.right;
            console.log("node here: ", JSON.stringify(node));
            node.right = node.left;
            node.left = null;
            return right;
        }
    }

    recurse(root);
    console.log("root: ", JSON.stringify(root));
};
*/

let test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(5);
test.left.left = new TreeNode(3);
test.left.right = new TreeNode(4);
test.left.left.left = new TreeNode(7);
test.left.right.right = new TreeNode(6);
test.right.left = new TreeNode(9);
test.right.right = new TreeNode(6);

console.log(JSON.stringify(flatten(test)));

// let a = 25;
// let b = a;
// b = b * 5;
// console.log(a);

/*
For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6*/