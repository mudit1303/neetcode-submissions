class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {

        if(m==1 && n==1) return 1

        const dp = new Array(m)

        for(let i=0;i<m;i++){
            dp[i] = new Array(n)
            if(i==0) dp[i][0] = 0
            else dp[i][0] = 1
            for(let j=1;j<n;j++){
                dp[i][j] = i==0 ? 1 : (dp[i][j-1] + dp[i-1][j])
            }
        }
        return dp[m-1][n-1]
    }
}
