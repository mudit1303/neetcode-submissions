class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let pre = strs[0]

        for(let i=0;i<strs.length;i++){
            let j=0
            while(j<Math.min(strs[i].length, pre.length)){
                if(pre[j]!=strs[i][j]) break;

                j++
            }
            pre = pre.slice(0,j)
        }
        return pre
    }
}
