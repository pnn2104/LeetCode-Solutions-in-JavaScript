var reverseWords = function(arr) {
    arr = reverse(arr, 0, arr.length - 1);
    var pointer1 = 0;
    var pointer2 = 0;
    while (pointer2 < arr.length) {
        if (arr[pointer2] === " ") {
          reverse(arr, pointer1, pointer2 - 1);
          pointer1 = pointer2 + 1;
        }
        pointer2++;
    }
    arr = reverse(arr, pointer1, pointer2 - 1);
    
    return arr;
  }
  
  
  function reverse (arr, start, end) {
    while (start < end) {
    
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    return arr;
  }