var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.v1 = v1;
    this.v2 = v2;
    this.current = 1;
};


ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.v1.length > 0 || this.v2.length > 0;
};

ZigzagIterator.prototype.next = function next() {
    this.current = (this.current + 1) % 2;
    if ((this.current === 0 && this.v1.length) || !this.v2.length) {
        return this.v1.shift();
    }    
    return this.v2.shift();
};

let v1 = [];
let v2 = [];

let test = new ZigzagIterator(v1, v2);
console.log(test.hasNext());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
// console.log(test.next());
// console.log(test.next());
console.log(test.hasNext());
console.log(test.next());
//O(N)space complexity
/*var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.numbers = [];
    this.getNumbers(v1, v2);
};


ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.numbers.length
};

ZigzagIterator.prototype.next = function next() {
    let nxt = this.numbers.shift();
    return nxt;
    
};

ZigzagIterator.prototype.getNumbers = function getNumbers(v1, v2) { 
    var x = Math.min(v1.length, v2.length);
    for (let i = 0; i < x; i++) {
        if (v1[i] !== undefined) {
            this.numbers.push(v1[i]);
        }
        if (v2[i] !== undefined) {
            this.numbers.push(v2[i]);
        }
    }
    
    if (v1.length > x) {
        this.numbers = this.numbers.concat(v1.slice(x));
    } else if (v2.length > x) {
        this.numbers = this.numbers.concat(v2.slice(x));
    }
}*/