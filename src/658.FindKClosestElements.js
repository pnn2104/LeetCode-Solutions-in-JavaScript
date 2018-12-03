var findClosestElements = function(arr, k, x) {
    if (x <= arr[0]) {
        return arr.slice(0, k);
    } else if (x >= arr[arr.length - 1]) {
        return arr.slice(arr.length - k)
    }

    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        var mid = Math.floor((r + l) / 2);
        if (arr[mid] === x) {
            r = mid;
            break;
        } else if (arr[mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    l = r;
    r++;

    while (k > 0) {
        if (r >= arr.length || (l >= 0 && x - arr[l] <= arr[r] - x)) {
            l--;
        } else {
            r++;
        }
        k--;
    }

    var result = [];
    for (let i = l + 1; i < r; i++) {
        result.push(arr[i]);
    }
    return result;
};


let arr = [-100, - 20, 22, 40, 50];
console.log(findClosestElements(arr, 2, 10));