var listToArr = function(list) {
    
    let result = [];
    let current = list;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

module.exports = listToArr;
