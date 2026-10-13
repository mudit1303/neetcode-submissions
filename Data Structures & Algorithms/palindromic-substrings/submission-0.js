class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const dp = new Array(s.length).fill(false)
        for(let i=0;i<s.length;i++) dp[i] = new Array(s.length).fill(false)
        let count = 0

        for(let g = 0;g<s.length;g++){
            for(let i=0,j=g;j<s.length;i++,j++){
                if(g==0) dp[i][j] = true
                else if(g==1) dp[i][j] = s[i]==s[j]
                else {
                    dp[i][j] = s[i]==s[j] && dp[i+1][j-1]
                }
                if(dp[i][j]) count++
            }
        }

        return count
    }
}
