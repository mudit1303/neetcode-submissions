class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount+1).fill(Infinity)

        //if(coins.length==1 && ((amount<coins[0]) || amount%coins[0]!==0)) return 0

        dp[0] = 0

        for(let i=0;i<coins.length;i++){
            for(let j=coins[i];j<dp.length;j++){
                dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]]);
            }
            console.log(dp)
            console.log('--------')
        }

        //console.log(dp)

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
