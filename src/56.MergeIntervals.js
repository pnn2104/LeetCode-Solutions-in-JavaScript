var merge = function(intervals) {
    if (intervals.length === 0) return [];
    let sorted = intervals.sort((a, b) => a.start - b.start);
    let merged = [];
    merged.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let lastMerged = merged[merged.length - 1];
        let current = intervals[i];
        if (current.start <= lastMerged.end) {
            let newStart = lastMerged.start;
            let newEnd = Math.max(lastMerged.end, current.end);
            merged[merged.length - 1] = new Interval(newStart, newEnd);
        } else {
            merged.push(current);
        }
    }
    return merged;
};