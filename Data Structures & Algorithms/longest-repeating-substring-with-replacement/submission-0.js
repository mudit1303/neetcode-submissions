class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0, l=0,r=0,count={}

        for(r=0;r<s.length;r++){
            //calculating count of every character 
            count[s[r]] = 1 + (count[s[r]] || 0 )
            
            console.log(count)

            console.log(Math.max(...Object.values(count)))

            while((r-l+1)-Math.max(...Object.values(count))>k){
                count[s[l]]--
                l++
            }

            res = Math.max(res,r-l+1)

        }

        return res
    }
}
