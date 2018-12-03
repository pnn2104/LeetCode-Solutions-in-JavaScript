function ListNode(value) {
    this.val = value;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    var carrier = 0;
    var dummy = new ListNode(-1);
    var l3 = dummy;
    while (l1 !== null || l2 !== null) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;
        var digitSum = l1Val + l2Val + carrier
        if (digitSum >= 10) {
            digitSum = digitSum % 10;
            carrier = 1;
        } else {
            carrier = 0;
        } 
        var newNode = new ListNode(digitSum);
        l3.next = newNode;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        l3 = l3.next;
        console.log("dummy: ", dummy);
    }  
    if (carrier === 1) l3.next = new ListNode(carrier); 
    return dummy.next; 
};

function reverseLinkedList(list) {
    var prev = null;
    var currentNode = list;
    while (currentNode) {
        var temp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = temp;
    }
    return prev;
}

let l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(2);

//console.log(reverseLinkedList(l1));

let l2 = new ListNode(4);
l2.next = new ListNode(6);
//l2.next.next = new ListNode(9);

console.log(JSON.stringify(addTwoNumbers(l1, l2)));