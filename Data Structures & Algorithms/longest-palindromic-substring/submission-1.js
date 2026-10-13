class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let dp = new Array(s.length).fill(false),maxLen=-1,res="";

        for(let i=0;i<s.length;i++) dp[i] = new Array(s.length).fill(false)

        for(let g=0;g<s.length;g++){
            for(let i=0,j=g;j<s.length;i++,j++){
                if(g==0) dp[i][j]= true
                else if(g==1) dp[i][j] = (s[i]==s[j])
                else {
                    dp[i][j] = (s[i]==s[j]) && (dp[i+1][j-1])
                }
                if (dp[i][j] && g + 1 > maxLen) {
                    maxLen = g + 1;
                    res = s.slice(i, j + 1);
                }
            }
        }
        return res
    }
}
