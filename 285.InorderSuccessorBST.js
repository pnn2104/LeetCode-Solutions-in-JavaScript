function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

var inorderSuccessor = function(root, p) {
    let currentNode = root;
    let lastLeft = null;
    while (currentNode) {
        if (currentNode.val === p.val) {
            if (currentNode.right) {
                return findSmallest(currentNode.right);
            } else {
                return lastLeft;
            }
        } else if (currentNode.val > p.val){
            lastLeft = currentNode;
            currentNode = currentNode.left;
        } else if (currentNode.val < p.val) {
            currentNode = currentNode.right;
        }
    }   
}

function findSmallest(node) {
    let current = node;
    let smallest = current.val;
    while (current) {
        if (current.left) {
            smallest = current.left.val;
        }
        current = current.left;
    }
    return smallest;
}


//let test1 = new TreeNode(0);
// let test = new TreeNode(5);
// test.left = new TreeNode(3);
// test.right = new TreeNode(6);
// test.left.left = new TreeNode(2);
// test.left.right = new TreeNode(4);
// test.left.left.left = new TreeNode(1);
let test = new TreeNode(2);
test.right = new TreeNode(3);

console.log(inorderSuccessor(test, new TreeNode(2)));



