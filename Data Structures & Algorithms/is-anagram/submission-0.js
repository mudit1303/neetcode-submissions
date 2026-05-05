class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;

        let hashS = {}, hashT = {}

        for(const x of s){
            if(x in hashS) {
                hashS[x]++
            } else hashS[x] = 1  
        }

        for(const x of t){
            if(x in hashT){
                hashT[x]++
            } else hashT[x] = 1
        }



        for(const x in hashS){
            if(!(hashS[x]===hashT[x])) return false
        }
        return true
    }
}
