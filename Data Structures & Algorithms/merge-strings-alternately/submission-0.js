class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let merged = '',i=0,j=0,k=0;
        
        while(i<word1.length && j<word2.length){
            merged += word1[i++]
            merged += word2[j++]
        }

        while(i<word1.length){
            merged += word1[i++]
        }

        while(j<word2.length){
            merged += word2[j++]
        }


        console.log(merged)

        return merged
    }
}
