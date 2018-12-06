var SinglyLinkedList = require('../Data Structure/SinglyLinkedList');

var constructLinkedListFromArr = function (arr) {
    let list = new SinglyLinkedList();
    for (let val of arr) {
        list.addToTail(val);
    }
    return list.head;
}

let test = [1, 2, 3];

module.exports = constructLinkedListFromArr;