var MinHeap = require("./minHeap");
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
var minMeetingRooms = function(intervals) {
    let sorted = intervals.sort(function(a, b) {
        return a.start - b.start;
    })  
    let minHeap = new MinHeap();
    minHeap.insert(sorted[0].end);
    for (let i = 1; i < sorted.length; i++) {
        let current = sorted[i];
        if (current.start >= minHeap.heap[1]) {
            minHeap.remove();
            minHeap.insert(current.end);
        } else {
            minHeap.insert(current.end);
        }
    }
    return minHeap.heap.length - 1;
};

let test = [new Interval(2, 15),new Interval(36, 45), new Interval(9, 29), new Interval(16, 23), new Interval(4, 9)];

console.log("result: ", minMeetingRooms(test));