class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(value) {
        this.heap.push(value);
        if (this.heap.length > 2) {
            var currentIdx = this.heap.length - 1;
            while (this.heap[Math.floor(currentIdx/2)] > this.heap[currentIdx] && currentIdx > 1) {
                [this.heap[Math.floor(currentIdx/2)], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[Math.floor(currentIdx/2)]]
                if (Math.floor(currentIdx/2) >= 1) {
                    currentIdx = Math.floor(currentIdx/2);
                } else {
                    break;
                }
            }
        }
    }

    remove() {
        var smallest = this.heap[1];
        if (this.heap.length === 2) {
            this.heap.splice(1, 1);    
        } else if (this.heap.length > 2) { // if there are only 2 numbers in the heap
            this.heap[1] = this.heap[this.heap.length - 1]; //switching first and last item in heap
            this.heap.splice(this.heap.length - 1); // discarding the item to shorten the array
            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            } 
            var currentIdx = 1;
            var left = currentIdx * 2;
            var right = currentIdx * 2 + 1;
            while(this.heap[currentIdx] >= this.heap[left] || this.heap[currentIdx] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[currentIdx], this.heap[left]] = [this.heap[left], this.heap[currentIdx]];
                    currentIdx = currentIdx * 2;
                } else if (this.heap[right] < this.heap[left]) {
                    [this.heap[currentIdx], this.heap[right]] = [this.heap[right], this.heap[currentIdx]]; 
                    currentIdx = currentIdx * 2 + 1;  
                }
                left = currentIdx * 2;
                right = currentIdx * 2 + 1;

                if (this.heap[left] === undefined || this.heap[right] === undefined) {
                    break;
                }
            }
        } else {
            return null;
        }
        return smallest;    
    }

    sort() {
        var sortedArr = new Array();
        while (this.heap.length >= 2) {
            var smallest = this.remove();
            sortedArr.push(smallest);
        }    
        return sortedArr;
    }
}


module.exports = MinHeap;