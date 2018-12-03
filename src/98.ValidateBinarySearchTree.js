//method using inorder traversal
var isValidBST = function(root) {
    var stack = [];
    var currentNode = root;
    var isInOrder = true;
    var prev = null;
    while (isInOrder) {
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        if (stack.length === 0) {
            break;
        }

        currentNode = stack.pop();
        if (prev === null || currentNode.val > prev) {
            prev = currentNode.val
        } else {
            isInOrder = false;
            break;
        }  
        currentNode = currentNode.right;
    }
    return isInOrder;
}


//reassigning boundary methods 
var isValidBST = function(root) {
    if (!root) {
        return true;
    }
    var toBeSearched = [];
    toBeSearched.push({
        node: root,
        lowerBound: -Infinity,
        upperBound: +Infinity
    });
    
    while (toBeSearched.length > 0) {
        var current = toBeSearched.shift();
         //console.log("current: ", current);
         //console.log("*************************************")
        var currentNode = current.node;
        if (currentNode.val <= current.lowerBound || currentNode.val >= current.upperBound) {
            return false;
        }

        if (currentNode.right) {
            var newLowerBound = currentNode.val;
            var newUpperBound = current.upperBound;
            toBeSearched.push({
                node: currentNode.right,
                lowerBound: newLowerBound,
                upperBound: newUpperBound
            })
        }

        if (currentNode.left) {
            var newUpperBound = currentNode.val;
            var newLowerBound = current.lowerBound;
            toBeSearched.push({
                node: currentNode.left,
                upperBound: newUpperBound,
                lowerBound: newLowerBound
            })
        }

         //console.log("my queue: ", JSON.stringify(toBeSearched));
         //console.log("----------------------------------------------")
    }
    return true;
}