var search = function(shiftArr, num) {
    // your code goes here
    //find pivot point
    var pivot = findPivot(shiftArr);
    //compare the target num to min of left half
    if (shiftArr[pivot] === num) {
      return pivot;
    } else if (pivot === 0 || num < shiftArr[0]) {
      return binarySearch(shiftArr, pivot + 1, shiftArr.length - 1, num);  
    } else  {
      return binarySearch(shiftArr, 0, pivot - 1, num);
    } 
  }
  
  
  function findPivot(arr) {
    var floor = 0;
    var ceil = arr.length - 1;
    var first = arr[0];
    while (floor <= ceil) {
      var mid = floor + Math.floor((ceil - floor)/2);
      var num = arr[mid];
      if (arr[mid - 1] > num) {
        return mid; //pivot Point
      } else if (num > first) {
        floor = mid + 1;
      } else {
        ceil = mid - 1;
      }
    }
    return 0;
  }
  
  function binarySearch(arr, start, end, num) {
    while (start <= end) {
      var mid = start + Math.floor((end - start)/2);
      if (num === arr[mid]) {
        return mid;  
      } else if (num < arr[mid]) { //deal with left half 
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }

var arr = [2, 1]; 
console.log(searchInRotatedArray(arr, 1))
/*
arr = [4,5,6,7,0,1,2]; 

*/