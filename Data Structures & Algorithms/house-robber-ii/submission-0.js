class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length===1) return nums[0]
        if(nums.length===2) return Math.max(nums[0],nums[1])

        return Math.max(
            this.findMax(nums.slice(1)),
            this.findMax(nums.slice(0,-1))
        )
    }
    findMax(arr){
        const dp = new Array(arr.length).fill(0)
        if(arr.length==1) return arr[0]
        if(arr.length==2) return Math.max(arr[0],arr[1])

        dp[1] = arr[0]
        dp[2] = arr[1]

        for(let i=3;i<=arr.length;i++){
            dp[i] = Math.max(dp[i-2],dp[i-3]) + arr[i-1]
        }

        return Math.max(dp[arr.length],dp[arr.length-1])

    }
}
