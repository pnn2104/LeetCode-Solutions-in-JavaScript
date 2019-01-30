var findMedianOfArrayWithBinarySearch = function(nums1, nums2) {
    if (nums1.length < nums2.length) {
        var x = nums2;
        var y = nums1;
    } else {
        x = nums1;
        y = nums2;
    }

    var startX = 0;
    var endX = x.length;
    console.log(endX);
    
    while (startX <= endX) {
        var midX = Math.floor((startX + endX) / 2);
        console.log("midX: ", midX);
        var midY = Math.floor(((x.length + y.length + 1) / 2)) - midX;
        console.log("midY: ", midY);
        var x_left = x[midX - 1] ? x[midX - 1] : -Infinity;
        var y_left = y[midY - 1] ? y[midY - 1] : -Infinity;
        var x_right = x[midX] ? x[midX] : Infinity;
        var y_right = y[midY] ? y[midY] : Infinity;
        console.log("hereee: ", x_left, x_right, y_left, y_right)
        
        if (x_left <= y_right && y_left <= x_right) {
            
            if ((x.length + y.length) % 2 === 0) {
                //console.log(x_left, y_left, x_right, y_right);
                return (Math.max(x_left, y_left) + Math.min(x_right, y_right)) / 2
            } else {
                return Math.max(x_left, y_left);
            }
        } else if (x_left > y_right) {
            endX = midX - 1;
        } else {
            startX = midX + 1;
        }
    }
    
}

/*
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
}*/

//var nums1 = [1, 3];
//var nums2 = [2];
var nums1 = [1, 2, 7, 7, 8];
var nums2 = [1, 6, 10];
/*
23                26, 31, 33
3, 5, 7, 9           11, 16
*/
console.log(findMedianOfArrayWithBinarySearch(nums1, nums2));

/*
[1, 3, 7, 8]  ==> max = 8
[3, 4, 5] ==> min = 3

1, 3, 4, 5, 7, 8

Left                    Right
[1, 3, 7]               [8]
[3, 4]                  [5]

5 elements             2 elements
Max Left = 7           Min Right = 5

Left                    Right
[1, 3]                  [8]  7
[ 4]                  [5]
Max Left = 4            Min Right = 5
Median (4 + 5) /2 

*/
