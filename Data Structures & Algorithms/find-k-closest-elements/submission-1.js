class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0;                    // Left pointer (start of the window)
        let r = arr.length - 1;       // Right pointer (end of the window)

        // Keep shrinking the window until its size becomes k
        while (r - l >= k) {
            // Compare which side (left or right) is farther from x
            // If left element is farther (or equally far), remove rightmost element
            if (Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
                r--;  // Remove element from the right side
            } else {
                l++;  // Remove element from the left side
            }
        }

        // The remaining window of size k is our answer
        return arr.slice(l, r + 1);
    }
}
