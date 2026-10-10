class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = new Array(nums.length).fill(0)
        if(nums.length==1) return nums[0]

        dp[1] = nums[0]
        dp[2] = nums[1]

        for(let i=3;i<=nums.length;i++){
            dp[i] = Math.max(dp[i-2],dp[i-3]) + nums[i-1]
        }

        console.log(dp)

        return Math.max(dp[nums.length],dp[nums.length-1])
    }
}
