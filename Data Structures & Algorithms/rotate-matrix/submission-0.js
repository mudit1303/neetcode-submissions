class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for(let i=0;i<matrix.length;i++){
            for(let j=i;j<matrix[i].length;j++){
                [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
            }
        }
        
        for(let i=0;i<matrix.length;i++){
            let l=0,r=matrix[i].length-1
            while(l<=r){
                [matrix[i][l],matrix[i][r]] = [matrix[i][r],matrix[i][l]]
                l++
                r--
            }
        }
    }
}
