function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


var hasPathSum = function(root, sum) {
    if (!root) return false;
    let stack = [];
    stack.push([root, root.val]);
    
    while (stack.length > 0) {
        var current  = stack.pop();
        var node = current[0];
        var currentSum = current[1];
        if (!node.right && !node.left) {//if it's leaf node 
            //check for sum === given sum
            if (currentSum === sum) {
                return true;
            }
        }

        if (node.right) {
            stack.push([node.right, currentSum + node.right.val]);
        }

        if (node.left) {
            stack.push([node.left, currentSum + node.left.val]);
        }
    }

    return false;
};

var hasPathSumRecursion = function(root, sum) {
    //console.log("sum: ", sum)
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return root.val === sum;
    }

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

//one other way to do this
var hasPathSumRecursion1 = function(root, sum) {
    if (!root) {
        return false;
    }
    var has = false;
    const recurse = function(node, total) {
        
        if (!node.right && !node.left) {
            console.log("total: ", total);
            if (total === sum) {
                has = true;
                return 
            }
        }

        if (node.right) {
            recurse(node.right, total + node.right.val);
        }
        if (node.left) {
            recurse(node.left, total + node.left.val);
        }
    }

    recurse(root, root.val);
    return has;
}

var test = new TreeNode(5);
test.left = new TreeNode(4);
test.right = new TreeNode(8);
test.left.left = new TreeNode(11);
test.left.left.left = new TreeNode(7);
test.left.left.right = new TreeNode(2);
test.right.left = new TreeNode(13);
test.right.right = new TreeNode(4);
test.right.right.right = new TreeNode(1);

console.log(hasPathSumRecursion(test, 22));


/* 
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
*/