function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var sortedArrayToBST = function(nums) {
    //find root, midIndex of nums

    const recurse = function(nums, start, end) {
        if (start > end) {
            return null;
        }
        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(nums[mid]);

        root.left = recurse(nums, start, mid - 1);
        root.right = recurse(nums, mid + 1, end);
        return root;
    }

    return recurse(nums, 0, nums.length - 1);
}

var test = [-10, -3, -2, -1, 0, 5, 6, 7, 9];

console.log(JSON.stringify(sortedArrayToBST(test)));

/*
[-10, -3, -2, -1, 0, 5, 6, 7, 9]
--> root - 0
        0
      /   \
   -10      5
      \      \
      -3      6
        \      \
        -2      7
          \      \
           -1     9

*/