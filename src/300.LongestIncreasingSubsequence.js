function longestIncreasingSubsequence(list) {
    let memo = {};
    let maxLen = 0;
    const helper = function(list, prev, i) {
        if (i === list.length) {
            return 0;
        }
        var c1 = 0;
        if (prev === -1 || list[i] >= list[prev]) {
            c1 = 1 + helper(list, i, i + 1);
        }

        let c2 = helper(list, prev, i + 1);
        return Math.max(c1, c2);
    }
    return helper(list, -1, 0);
}

function longestIncreasingSubsequenceMemoize(list) {
    let memo = {};
    const helper = function(list, prev, i) {
        let key = prev + '|' + i;
        if (i === list.length) {
            return 0;
        }

        if (memo[key] !== undefined) {
            return memo[key];
        } else {
            var c1 = 0;
            if (prev === -1 || list[i] > list[prev]) {
                c1 += 1 + helper(list, i, i + 1);
            }

            let c2 = helper(list, prev, i + 1);
            memo[key] = Math.max(c1, c2);
        }
        return memo[key];
    }
    return helper(list, -1, 0);
}


function longestIncreasingSubsequenceDP(list) {
    let dp = new Array(list.length).fill(1);
    let max = 0;
    for (let i = 0; i < list.length; i++) {
        for (j = 0; j < i; j++) {
            if (list[j] < list[i] && dp[i] <= dp[j]) {
                dp[i] = dp[j] + 1;
            }
            max = Math.max(max, dp[i]);
        }
    }
    return max;
}
