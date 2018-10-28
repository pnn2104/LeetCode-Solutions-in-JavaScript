function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

var isSymmetric = function(root) {
    if (!root || (!root.left && !root.right)) {
        return true;
    } else if ((!root.left && root.right) || (!root.right && root.left)) {
        return false;
    } 

    let queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
        let node1 = queue.shift();
        let node2 = queue.shift();

        if (node1.val !== node2.val) {
            return false;
        }
        if ((node1.left && !node2.right) ||
            (node1.right && !node2.left) ||
            (node2.left && !node1.right) ||
            (node2.right && !node1.left)) {
            return false;
        } 
        if (node1.left && node2.right) {
            queue.push(node1.left);
            queue.push(node2.right);
        }

        if (node1.right && node2.left) {
            queue.push(node1.right);
            queue.push(node2.left);
        }
    } 

    return true;
}


var isSymmetricRecursion = function(root) {
    if (!root) {
        return true;
    }
    const isMirror = function(p, q) {
        if (!p && !q) {
            return true;
        } else if (p.val !== q.val) {
            return false;
        } else if ((p.left && !q.right) ||
                   (p.right && !q.left) ||
                   (q.left && !p.right) ||
                   (q.right && !p.left)) {
            return false;
        }

        return isMirror(p.left, q.right) && isMirror(p.right, q.left);
    }

    return isMirror(root, root);
}

var test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(2);
test.left.left = new TreeNode(3);
test.left.right = new TreeNode(4);
test.right.left = new TreeNode(4);
test.right.right = new TreeNode(3);

console.log(isSymmetricRecursion(test));

/*
     1
    / \
   2   2
  / \ / \
 3  4 4  3

 */