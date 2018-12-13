function ListNode(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.size = 0;
    this.head = null;
    this.tail = null;    
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size) {
        return -1;
        //throw new Error("index exceeded");
    }
    let i = 0;
    let current = this.head;
    while (i < index) {
        current = current.next;  
        i++  
    }

    return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.size++;
    let node = new ListNode(val);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
        return;
    } 
    this.head.prev = node;
    node.next = this.head;
    this.head = node;   
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.size++;
    let node = new ListNode(val);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
        return;
    }    
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
        //throw new Error("not a valid index");
    } 
    
    let node = new ListNode(val);
    if (index === 0) {
        this.addAtHead(val); 
        return;
    } else if (index === this.size) {
        this.addAtTail(val);
        return;
    } else {
        let current = this.head;
        let i = 0;
        while (i < index - 1) {
            //console.log("i: ", i);
            current = current.next;
            i++;
        }

        let temp = current.next;
        current.next = node;
        node.prev = current;
        temp.prev = node;
        node.next = temp;
    }
    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) {
        return;
        //throw new Error ("not a valid index");
    } else if (index === 0) { //delete head
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.size > 1) {
            this.head = this.head.next;
            this.head.prev = null;
        }
    } else if (index === this.size - 1) { //delete tail
        this.tail = this.tail.prev;
        this.tail.next = null;
    } else {
        let i = 0;
        let current = this.head;
        while (i < index) {
            current = current.next;
            i++;
        }
        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;
        
    }
    this.size--;
};