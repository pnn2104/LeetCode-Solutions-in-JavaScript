//DP Approach O(n) time and space complexity
var climbStairs = function(n) {
    var dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for (var i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

console.log(climbStairs(4));
/*
n = 1 --> [1, 0];
n = 2 --> [2, 1, 0], [2, 0];
n = 3 --> [3, 2, 1, 0], [3, 2, 0], [3, 1, 0]
---> Notice that:
When we start at 3 and step up 1: [3 | 2, 1, 0], [3 | 2, 0], the part [2, 1, 0] & [2, 0] are the same for the case when the n = 2
And the same observation for [3 | 1, 0], [1, 0] is the same for the case when n = 1
==> numOfWays(3) = numsOfWays(2) + numOfWays(1);

n = 4 --> [4, 3, 2, 1, 0], [4, 3, 2, 0], [4, 3, 1, 0], [4, 2, 0], [4, 2, 1, 0];
Notice that [4| 3, 2, 1, 0], [4| 3, 2, 0], [4| 3, 1, 0], the parts [3, 2, 1, 0], [3, 2, 0], [3, 1, 0] are the same for when n = 3;
And [4| 2, 0], [4| 2, 1, 0], same for when n = 2
==> numOfWays(4) = numsOfWays(3) + numsOfWays(2)
*/

//Iproved Space complexity to O(1)

var climbStairsSpace = function(n) {
    var first = 1;
    var second = 1;
    for (var i = 2; i < n + 1; i++) {
        var third = first + second;
        var temp = second;
        second = third;
        first = temp;
    }
    return second;
}

console.log(climbStairsSpace(4))


//Recursion with memoization but this is O(2^n) not good for large n
var climbStairsRecursion = function(n) {
    var memo = {};
    if (n === 0 || n === 1) {
        return 1;
    } else if (memo[n] !== undefined) {
        return memo[n];
    } else {
        memo[n] = climbStairsRecursion(n - 1) + climbStairsRecursion(n - 2);
    }
    return memo[n];
}

console.log(climbStairsRecursion(4));
