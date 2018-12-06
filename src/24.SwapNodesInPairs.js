var ListNode = require('./Data Structure/ListNode');

var swapPairs = function(head) {
    let x1 = head;
    if (x1.next === null) return x1;
    let newHead = x1.next;
    while (true) {
        let x2 = x1.next;
        let temp = x2.next;
        x2.next = x1;

        if (temp === null || temp.next === null) {
            x1.next = temp;
            break;
        }

        x1.next = temp.next;
        x1 = temp;
    }
    return newHead;
}

/* swapping values
var swapPairs = function(head) {
    let current = head;

    while (current && current.next) {
        let currentVal = current.val;
        current.val = current.next.val;
        current.next.val = currentVal;
        current = current.next.next;
    }
    
    return head;
}*/


let test = new ListNode(1);
// test.next = new ListNode(2);
// test.next.next = new ListNode(3);
// test.next.next.next = new ListNode(4);

console.log(JSON.stringify(swapPairs(test)));



/*

1 -> 2 -> null

x = 1 --> null
current -> 2 -> null
2 -> 1 -> null;

1 --> 2 --> 3 --> 4 --> 5 --> null

2 --> 1 --> 4 --> 3 --> 5 -- null
*/
module.exports = swapPairs;