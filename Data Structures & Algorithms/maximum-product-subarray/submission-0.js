class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let cPro = 1,
            ans = Number.NEGATIVE_INFINITY;

        for (let i = 0; i < nums.length; i++) {
            cPro = (cPro * nums[i])=== -0 ? 0 : (cPro * nums[i]);
            ans = Math.max(ans, cPro);
            if (cPro == 0) cPro = 1;
        }

        cPro = 1;

        for (let i = nums.length - 1; i > -1; i--) {
            cPro = (cPro * nums[i])=== -0 ? 0 : (cPro * nums[i]);;
            ans = Math.max(ans, cPro);
            if (cPro == 0) cPro = 1;
        }

        return ans;
    }
}
