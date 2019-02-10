function ListNode(val) {
    this.val = val;
    this.next = null;
}
var insert = function(head, insertVal) {
    let node = new ListNode(insertVal);
    
    if (!head) {
        node.next = node;
        return node;
    }
    
    let prev = head;
    let current = head.next;

    while (current != head) {
        if (prev.val > current.val) {
            if (insertVal >= prev.val || inserVal <= current.val) break;
        }

        if (prev.val < insertVal && current.val > insertVal) break;

        prev = current;
        current = current.next;
    }

    prev.next = node;
    node.next = current;
    return head;
    
};


var insertVersion2 = function(head, insertVal) {
    let node = new ListNode(insertVal);
    if (!head) {
        node.next = node;
        return node;
    }

    let min = head;
    let max = head;
    let current = head.next;
    while (current !== head) {
        if (current.val <= min.val) {
            min = current;
        } 

        if (current.val >= max.val) {
            max = current;
        }
        current = current.next;
    }

    
}

let test = new ListNode(3);
test.next = new ListNode(4);
test.next.next = new ListNode(1);
test.next.next.next = test;

console.log(insert(test));

/*
{"$id":"1",
 "next":{"$id":"2",
         "next":{"$id":"3",
                 "next":{"$ref":"1"},
                 "val":1},
         "val":4},
 "val":3}

    c
     1 -->    
     |     |    
     4 <-- 3
   p c       p
2


{"$id":"1",
 "next": {"$id":"2",
          "next":{"$id":"3",
                  "next":{"$ref":"1"},
                  "val":1},
          "val":4},
 "val":3}


 head 3 --> 4
      |     |
       <-- 1

{"$id":"1",
 "next":{"$id":"2",
         "next":{"$id":"3",
                 "next":{"$id":"4",
                         "next":{"$ref":"1"},
                         "val":1},
                 "val":2},
         "val":4},
 "val":3}


 {"$id":"1",
  "next":{"$id":"2",
          "next":{"$id":"3",
                  "next":{"$id":"4",
                          "next":{"$ref":"1"},
                          "val":2},
                  "val":1},
          "val":4},
  "val":3}

2*/