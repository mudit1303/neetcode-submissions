class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        
        let l=0,r=s.length-1,k=0

        while(l<=r){
            if(s[l]===s[r]){
                l++
                r--
            } else {
                if(k===1) return false
                k=1
                if(s[l]===s[r-1]){r--}
                else if(s[l+1]===s[r]){l++}
            }
        }

        return true
    }
}
