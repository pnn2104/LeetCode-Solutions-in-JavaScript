var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2).sort((a, b) => { //O(nlogn)
        return a - b;
    })
    return findMedianOfArray(arr);
}


var findMedianOfArray = function(arr) { 
    if (arr.length % 2 !== 0) {
        var idx = Math.floor(arr.length / 2);
        return arr[idx];
    } else if (arr.length % 2 === 0) {
        var left = Math.floor((arr.length - 1) / 2);
        var right = Math.ceil((arr.length - 1) / 2);
        return (arr[left] + arr[right])/2
    }
}


var nums1 = [3];
var nums2 = [-2, -1];

