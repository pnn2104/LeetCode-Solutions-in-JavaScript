function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null
}
var isSubtree = function(s, t) {
    const isSame = function(s, t) {
        if (!s && !t) {
            return true;
        }
        if (s === null || t === null) {
            return false;
        }
        if (s.val !== t.val) {
            return false;
        }
        return isSame(s.left, t.left) && isSame(s.right, t.right)
    }
    if (!s) {
        return false;
    } 
    if (isSame(s,t)) {
        return true;
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

//iterative BFS method using 2 queue
var isSubtree1 = function(s, t) {
    let queue1 = [];
    queue1.push(s);
    while (queue1.length > 0) {
        let currentNode = queue1.shift();
        if (currentNode.val === t.val) {
            let isST = true
            let queue2 = [];
            queue2.push(currentNode);
            queue2.push(t);
            while (queue2.length > 0) {
                let node1 = queue2.shift();
                let node2 = queue2.shift();
                if ((node1.val !== node2.val) ||
                    (node1.left && !node2.left) ||
                    (node1.right && !node2.right) ||
                    (node2.left && !node1.left) ||
                    (node2.right && !node1.right)) {
                    isST = false;
                    break;
                }
                
                if (node1.left && node2.left) {
                    queue2.push(node1.left);
                    queue2.push(node2.left);
                }

                if (node1.right && node2.right) {
                    queue2.push(node1.right);
                    queue2.push(node2.right);
                }
            }
            if (isST === true) {
                return true;
            }
        }
        if (currentNode.left) {
            queue1.push(currentNode.left);
        }
        if (currentNode.right) {
            queue1.push(currentNode.right);
        }
    }
    return false;
};




var testS = new TreeNode(3)
testS.left = new TreeNode(4);
testS.right = new TreeNode(5);
testS.left.left = new TreeNode(1);
testS.left.right = new TreeNode(2);

var testT = new TreeNode(4);
testT.left = new TreeNode(1);
testT.right = new TreeNode(2);

console.log(isSubtree(testS, testT));

