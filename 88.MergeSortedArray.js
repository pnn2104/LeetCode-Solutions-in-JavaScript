var merge = function(nums1, m, nums2, n) {
    
    let p1 = m - 1;
    let p2 = n - 1;
    let lastMerged = m + n - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[lastMerged] = nums1[p1];
            p1--;
        } else if (nums2[p2] >= nums1[p1]) {
            nums1[lastMerged] = nums2[p2];
            p2--;
        }
        lastMerged--;
    }

    while (p2 >= 0) {
        nums1[lastMerged] = nums2[p2];
        p2--;
        lastMerged--;
    }
}

let nums1 = [1, 2, 3, 4, 5, 7, 0, 0, 0];
let nums2 = [2, 5, 6];


console.log(merge(nums1, 6, nums2, 3))

//[1, 2, 2, 3, 0, 0] --> m = 4