class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Array(s.length).fill(0)

        for(let i=0;i<dp.length;i++){
            for(let j=0;j<=i;j++){
                if(wordDict.indexOf(s.substring(j,i+1))!==-1){
                    if(j>0) dp[i] += dp[j-1]
                    else dp[i] += 1
                }
            }
        }

        console.log(dp)

        return dp[dp.length-1]>0
    }
}
