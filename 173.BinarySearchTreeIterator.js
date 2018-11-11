function TreeNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

var BSTIterator = function(root) {
    this.numbers = [];
    this.allLeft(root);     
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    if (this.numbers.length) {
        return true;
    } else {
        return false;
    }
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    node = this.numbers.pop();
    this.allLeft(node.right);
    console.log("numbers: ", this.numbers)
    return node.val;    
};

BSTIterator.prototype.allLeft = function(root) {
    while (root) {
        this.numbers.push(root);
        root = root.left;
    }
}

let test = new TreeNode(20);
test.left = new TreeNode(10);
test.right = new TreeNode(25);
test.left.left = new TreeNode(5);
test.left.left.right = new TreeNode(7);
test.left.right = new TreeNode(15);
test.right.right = new TreeNode(30);

let iterator = new BSTIterator(test);

//console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());