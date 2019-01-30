/*

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, 
and contain the following methods:

set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, 
then it should also remove the least recently used item.
get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.
*/
function ListNode(key, val) {
    this.key = key
    this.val = val;
    this.next = null;
    this.prev = null;
}

var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
}

DoublyLinkedList.prototype.addNode = function(node) {
    if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
}

DoublyLinkedList.prototype.removeNode = function(node) {
    if (node.val === this.tail.val) {
        this.removeTail();
    } else {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }
}

DoublyLinkedList.prototype.removeTail = function() {
    let tail = this.tail;
    this.tail = tail.prev;
    this.tail.next = null;
    return tail;
}


var LRUCache = function(capacity) {
    this.size = capacity;
    this.currentSize = 0;
    this.hash = new Map();
    this.list = new DoublyLinkedList();    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hash.has(key)) {
        let result = this.hash.get(key);
        if (result.key === this.list.head.key) {
            return result.val;
        }
        this.list.removeNode(result);//move the node to front of list;
        this.list.addNode(result);
        return result.val;
    }   
    return -1; 
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.hash.get(key);

    if (!node) { //there's no key exist in cache
        node = new ListNode(key, value);
        this.list.addNode(node);//add to head of list
        this.hash.set(key, node)//add to cache
        this.currentSize++;//increase count
        
        if (this.currentSize > this.size) {//if count > capacity
            console.log("before removing tail: ", this.list);
            var tail = this.list.removeTail()//remove tail node
            //console.log("oversize tail: ", tail);
            this.hash.delete(tail.key);//remove from cache
            this.currentSize--;//decrease count
        }
            
    } else {
        console.log("gothere: ")
        node.val = value;//update value;
        this.list.removeNode(node);
        this.list.addNode(node);//move to head 
    }
};


let test = new LRUCache(2);
test.put(1,1);
test.put(2,2);
console.log(test.get(1));

test.put(3,3);
//console.log(test);
console.log(test.get(2));
test.put(4, 4);
console.log(test);
console.log(test.get(1));
console.log(test.get(3));
console.log(test.get(4));