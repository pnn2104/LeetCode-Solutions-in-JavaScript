function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/*Iterative solution BFS*/
var serialize = function(root) {
    if (!root) {
        return JSON.stringify([]);
    }
    let result = [];
    let q = [];
    q.push(root);
    while (q.length) {
        let current = q.shift();
        if (current) {
            result.push(current.val);
        } else {
            result.push(null);
        }
        if (current) {
            q.push(current.left);
            q.push(current.right);
        }
    }
    return JSON.stringify(result);
};

var deserialize = function(data) {
    let parsed = JSON.parse(data);
    if (parsed.length < 1) {
        return null;
    }
    let root = new TreeNode(parsed.shift());
    let parents = [root];
    while (parents.length) {
        let children = []; // [2, 3]
        let parentsLen = parents.length;
        for (let i = 0; i < parentsLen * 2; i++) {
            children.push(parsed.shift());
        }
        for (let j = 0; j < parentsLen; j++) {
            let currentParent = parents.shift(); // 1
            currentParent.left = children[0] !== null ? new TreeNode(children.shift()) : null;
            if (currentParent.left !== null) {
                parents.push(currentParent.left);
            } else {
                children.shift();
            }
            currentParent.right = children[0] !== null ? new TreeNode(children.shift()) : null;
            if (currentParent.right !== null) {
                parents.push(currentParent.right);
            } else {
                children.shift();
            }
        }
    }
    return root;
};


/*Recursive preorder traversal */
var serializePreorder = function(root) {
    let result = [];
    const helper = function(node) {
        if (!node) {
            result.push(null);
            return;
        }
        result.push(node.val);
        helper(node.left);
        helper(node.right);
    } 
    helper(root);
    return JSON.stringify(result);
}


var deserializePreorder = function(data) {
    const helper = function(data) {
        if (!data[0])  {
            data.shift();
            return null;
        }
        let root = new TreeNode(data[0]);
        data.shift();
        root.left = helper(data);
        root.right = helper(data);
        return root;
    }
    return helper(JSON.parse(data));
}

/*root = 1; [null,3,4,null,null,5,null,null]
1.left = helper(data); -> return null [3,4,null,null,5,null,null];
1.right = helper([3,4,null,null,5,null,null]); = 3;
3.left = helper([4,null,null,5,null,null]); = 4;
4.left = helper([null,null,5,null,null]); = null
4.right = helper([null,5,null,null]); = null;

3.right = helper()*/




let test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(3);
test.right.left = new TreeNode(4);
test.right.right = new TreeNode(5);

//let data = serialize(test);
//console.log(deserialize(data));

let data = serializePreorder(test);
console.log(deserializePreorder(data));
