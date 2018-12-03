var ListNode = require('./ListNode');


class SinglyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    addToTail(value) {
        let node = new ListNode(value);
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
    }


    remove() {

    }
}


module.exports = SinglyLinkedList;