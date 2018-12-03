function ListNode(value) {
    this.val = value;
    this.next = null;
}

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    let interval = 1;
    while (interval < lists.length) {
        for (let i = 0; i <= lists.length - interval; i += 2) {
            if (i + interval <= lists.length - 1) {
                lists[i] = merge2Lists(lists[i], lists[i + interval]);    
            }     
        }
        interval *= 2;
    }
    
    return lists[0];
    //console.log(JSON.stringify(lists));
    //console.log("------------------")
    /* //Recursion
    if (lists.length === 0) {
        return null;
    } else if (lists.length === 1) {
        return lists[0];
    } else if (lists.length === 2) {
        return merge2Lists(lists[0], lists[1]);
    } else {
        let leftHalf = mergeKLists(lists.slice(0, Math.floor(lists.length /2)));
        let rightHalf = mergeKLists(lists.slice(Math.floor(lists.length /2)));
        return merge2Lists(rightHalf, leftHalf);
    }*/
}

//simply iterating throu and merge 2 together
var mergeKLists1 = function(lists) {
    let lastMerge = lists[0];
    
    for (let i = 1; i < lists.length; i++) {
        lastMerge = merge2Lists(lastMerge, lists[i]);
        
    }
    return lastMerge;
};

function merge2Lists(l1, l2) {
    //console.log("l1: ", JSON.stringify(l1));
    //console.log("l2: ", JSON.stringify(l2));
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }else if (l1.val <= l2.val) {
        var s = l1;
        l1 = l1.next;
    } else if (l1.val > l2.val) {
        var s = l2;
        l2 = l2.next;
    }

    let dummy = s;
    //console.log(l1, l2)
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

let l4 = new ListNode(4);
l4.next = new ListNode(7);
console.log(JSON.stringify(mergeKLists([l1, l2, l3, l4])));