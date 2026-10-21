class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = new Array(nums.length).fill(0)

        dp[0]=1

        for(let i=1;i<nums.length;i++){
            let max = 0
            for(let j=0;j<i;j++){
                if(nums[i]>nums[j]){
                    max = Math.max(max,dp[j])
                }
            }
            dp[i] = max+1
        }
        console.log(dp)
        return Math.max(...dp)
    }
}
