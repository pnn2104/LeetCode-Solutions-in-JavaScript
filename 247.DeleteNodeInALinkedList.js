function ListNode(value) {
    this.val = value;
    this.next = null;
}

var deleteNode = function(node) { //delete node withou head reference
    const nextNode = node.next;
    if (nextNode) {
        node.val = nextNode.val;
        node.next = nextNode.next;
    } else {
        throw Error("can't delete last node")
    }
};

//delete a node given the head
var deleteNodeWithHead = function(root, node) {
    if (root.val === node.val) {
        return root.next;
    }
    let prev = null;
    let current = root;
    while (current) {
        if (current.val === node.val) {
            var temp = current.next;
            prev.next = temp;
            return root;
        }
        prev = current;
        current = current.next;
    }
    return "node is not in list"
}

let head = new ListNode(4);
head.next = new ListNode(5);
//head.next.next = new ListNode(1);
//head.next.next.next = new ListNode(9);

console.log(deleteNode(head, new ListNode(3)));
