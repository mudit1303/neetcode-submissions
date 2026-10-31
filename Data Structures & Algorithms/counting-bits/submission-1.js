class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let dp = new Array(n).fill(0)
        dp[0] = 0

        if(n>=3) dp=[0,1,1,2]
        else if(n>=2) dp = [0,1,1]
        else if(n>=1) dp = [0,1]
        
        let k = 1
        for(let i=4;i<=n;i++){
            if(2**(k+1) == i) {k++}
            dp[i] = 1 + dp[i-(2**k)]
        }
        
        return dp
        
    }
}
