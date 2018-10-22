var maxArea = function(height) {
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

console.log(maxArea([1,8,6,2,5,4,8,3,7]));