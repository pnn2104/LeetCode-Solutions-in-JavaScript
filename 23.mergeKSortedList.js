function ListNode(value) {
    this.val = value;
    this.next = null;
}
var mergeKLists = function(lists) {
    let lastMerge = lists[0];
    
    for (let i = 1; i < lists.length; i++) {
        lastMerge = merge2Lists(lastMerge, lists[i]);
        
    }
    return lastMerge;
};

function merge2Lists(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    if (l1.val <= l2.val) {
        var s = l1;
        l1 = l1.next;
    } else if (l1.val > l2.val) {
        var s = l2;
        l2 = l2.next;
    }

    let dummy = s;

    while (l1 !== null && l2 !== null) {
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

    if (l1 !== null) {
        s.next = l1
    } else if (l2 !== null) {
        s.next = l2;
    }

    return dummy;
}

let l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let l3 = new ListNode(2);
l3.next = new ListNode(6);
console.log(JSON.stringify(mergeKLists([l1, l2, l3])));