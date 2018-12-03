var maxArea = function(height) {
    let max = -1;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const x = right - left;
        const y = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, x * y);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max
}

//brute force solution O(N^2) time complexity
var maxAreaBruteForce = function(height) {
    var maxArea = -1;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            var minHeight = Math.min(height[i], height[j]);
            var newArea = minHeight * (j - i);
            maxArea = Math.max(maxArea, newArea)
        }
    }

    return maxArea
};

console.log(maxArea([1, 2, 1]));