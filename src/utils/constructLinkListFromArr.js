var SinglyLinkedList = require('../Data Structure/SinglyLinkedList');

var constructLinkedListFromArr = function (arr) {
    let list = new SinglyLinkedList();
    for (let val of arr) {
        list.addToTail(val);
    }
    return list.list;
}


module.exports = constructLinkedListFromArr;