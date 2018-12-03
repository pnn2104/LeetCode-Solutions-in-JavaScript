function ListNode (val) {
    this.val = val;
    this.next = null;
}
function mergeTwoLists(l1, l2) {
    if(l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    
    if (l1.val <= l2.val) {
        var s = l1;
        l1 = s.next;
    } else {
        var s = l2;
        l2 = s.next;
    }
    
    var newHead = s;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            s.next = l1;
            s = l1;
            l1 = s.next;
        } else if (l2.val < l1.val) {
            s.next = l2;
            s = l2;
            l2 = s.next;
        }
    }
    if (l1 === null) {
        s.next = l2;
    } else if (l2 === null) {
        s.next = l1;
    }
    return newHead
}

/*
 l1 -> 1 -> 2 -> 4 -> null
 
 l2 -> 1 -> 3 -> 4 -> null
 
 sorting pointer s --> pointer at a lesser or equal node
 
    s                              l1                           l2
 1 -> 2 -> 4 -> null        2 -> 4 -> null         1 -> 3 -> 4 -> null  (l2 < l1)
 1 -> 1 -> 3 -> 4 -> null   2 -> 4 -> null         3 -> 4 -> null (l1 < l2)
 1 -> 1 -> 2-> 4 -> null    4 -> null              3 -> 4 -> null (l2 < l1)
 1 -> 1 -> 2 -> 3 -> 4- null 4 -> null              
 
*/


var list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

var list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(JSON.stringify(mergeTwoLists(list1, list2)));