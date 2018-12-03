var ListNode = require('./Data Structure/ListNode');
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(0);
    let pre = dummy;
    
    dummy.next = head;
    pre.next = head;

    for (let i = 0; i < m - 1; i++) {
        pre = pre.next;
    }

    s = pre.next;

    for (let j = 0; j < n - m; j++) {
        let temp = s.next;
        s.next = temp.next; // prev is changed at this step;
        temp.next = pre.next; 
        pre.next = temp;
    }
    return dummy.next;
}


// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// console.log(JSON.stringify(reverseBetween(head, 2, 4)));


module.exports = reverseBetween;


/*
prev = points to the node before the sublist
s = points to the beginning of the sublist
temp = always points to s.next
temp

1 -> | 2 -> 3 -> 4 | -> 5 -> null 
m = 2, n = 4



*/


