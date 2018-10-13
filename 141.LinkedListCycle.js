function LinkedListNode(value) {
    this.val = value;
    this.next = null;
}


function linkedListCycle(node) {
    if (!node) {
        return false;
    }
    var fast = node.next;
    var slow = node;
    while (fast !== null && fast.next !== null && slow !== null) {
        if (fast) {
            if (slow.val === fast.val) {
                return true;
            }
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
}

var test = new LinkedListNode(1);
test.next = new LinkedListNode(2);
//test.next.next.next.next = test.next;

console.log(linkedListCycle(test))