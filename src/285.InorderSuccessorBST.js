function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

var inorderSuccessor = function(root, p) {
    if (!root || !p) {
        return null;
    }
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

function findSmallest(root) {
    let current = root;
    
    while (current.left) {
        current = current.left;
    }
    
    return current;
}


let test = new TreeNode(2);
test.left = new TreeNode(1);
test.right = new TreeNode(3);

console.log(inorderSuccessor(test, test.left));



