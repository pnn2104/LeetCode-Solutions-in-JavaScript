function ListNode(value) {
    this.val = value;
    this.next = null;
}
var MyLinkedList = function() {
    this.size = 0;
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }

    let currentNode = this.head;
    let counter = 0;
    while (counter <= index) {
        currentNode = currentNode.next;
    }
    return currentNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    if (this.head === null) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val);
    this.size++;
    if (!this.head) {
        this.head = node;
    } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = new ListNode(val);
    this.size++;
    if (index === this.size) { //add to tail
        this.addAtTail(val);

    } else if (index > 0 && index < this.size) {
        let currentNode = this.head;
        let counter = 0;
        let prev = null;
        while (counter <= index) {
            if (counter === index) {
                let temp = currentNode;
                prev.next = node;
                node.next = temp;
                break;
            }
            prev = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }    
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    this.size--;
    if (index === 0) {
        this.head = this.head.next;
        return
    } else {
        let currentNode = this.head;
        let counter = 0;
        let prev = null;
        while(counter <= index) {
            if (counter === index) {
                prev.next = currentNode.next;

                break;
            }
            prev = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
    }
};


let test = new MyLinkedList();
test.addAtHead(1);
test.addAtTail(3);
test.addAtIndex(1, 2);
console.log("test: ", test);
return
console.log(test.get(1));
test.deleteAtIndex(1);
console.log(test);
console.log(test.get(1));