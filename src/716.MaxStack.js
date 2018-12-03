var MaxStack = function() {
    this.stack = [];
    this.max = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    let max = this.peekMax();
    this.stack.push(x);
    if (x >= max || max === undefined) {
        this.max.push(x);
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    let val = this.stack.pop();
    let max = this.peekMax();
    if (val === max) {
        this.max.pop();
    }
    return val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];    
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.max[this.max.length - 1];    
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let val = this.max.pop();    
    return val;
};


var test = new MaxStack();

test.push(5);
test.push(1);
test.push(5);
console.log("top: ", test.top());
console.log("popmax: ", test.popMax());
console.log("top: ", test.top());
console.log(test);
