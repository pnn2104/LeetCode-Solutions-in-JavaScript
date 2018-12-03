/*

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, 
and contain the following methods:

set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, 
then it should also remove the least recently used item.
get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.
*/
var ListNode = function(value) {
    this.val = value;
    this.next = null;
}
var LRUCache = function(capacity) {
    this.size = capacity;
    this.hash = new Map();
    this.list = new ListNode();
}

//if the key is not in the cache return -1
//if the key is in the cache, makes it the last recently accessed entry
LRUCache.prototype.get = function(key) {
    let result = -1;
    //getting from a hashmap is O(1)
    if (!this.hash.has(key)) {
        return -1;
    } else {
        result = this.hash.get;
    }
    let current = this.list;//but this process traversing down the linkedList will be O(N) at worst
    let prev = null;
    while (current.val !== key) {
        prev = current;
        current = current.next;
    }
    if (current.next) {
        let temp = current.next;
        temp.next = new ListNode(key);
        prev.next = temp;
    } else {
        prev.next = new ListNode(key);
    }
    return result
}

//if the size of the cache is not full, add 
//if the cache is full, removed the oldest key, val and add
LRUCache.prototype.put = function(key, value) {
    if (this.hash.size() < this.size) {
        this.hash.put(key, val);
        this.list.addToTail();
    } else if (this.hash.size() > this.size) {
        //deleat the lease recently used from hash
        //delete the head node
    }
}

let test = new LRUCache(5);

console.log(test);