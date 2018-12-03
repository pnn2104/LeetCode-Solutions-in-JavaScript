function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    var stack1 = []; //popped item's children from stack 2 is pushed here right -> left order
    var stack2 = []; //popped item's children from stack 1 is pushed here left -> right order
    var result = [];
    stack1.push(root);
    while (stack1.length) {
        var len1 = stack1.length;
        var row1 = [];
        for (let i = 0; i < len1; i++) {
            var stack1Popped = stack1.pop();
            row1.push(stack1Popped.val);
            if (stack1Popped.left) stack2.push(stack1Popped.left);
            if (stack1Popped.right) stack2.push(stack1Popped.right);
        }
        result.push(row1);
        while (stack2.length) {
            var len2 = stack2.length;
            var row2 = [];
            for (let j = 0; j < len2; j++) {
                var stack2Popped = stack2.pop();
                row2.push(stack2Popped.val);
                if (stack2Popped.right) stack1.push(stack2Popped.right);
                if (stack2Popped.left) stack1.push(stack2Popped.left);
            }
            result.push(row2);
        }
    }
    return result;
}


var test = new TreeNode(3);
test.left = new TreeNode(9);
test.right = new TreeNode(20);
test.right.left = new TreeNode(15);
test.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(test));
/*
    3
   / \
  9   20
     /  \
    15   7 

            left of prev
3 --> 20 --> 9 ----> 15 ---> 17

if tree only has root and left 
    3
   /
  9
return 3 
*/