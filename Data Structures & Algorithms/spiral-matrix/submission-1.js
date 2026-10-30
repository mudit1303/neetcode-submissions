class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let left = 0, right = matrix[0].length,top=0,bottom = matrix.length
        const arr = []
        while(top<bottom && left<right){
            for(let i=left;i<right;i++){
                arr.push(matrix[top][i])
            }
            top++

            for(let i=top;i<bottom;i++){
                arr.push(matrix[i][right-1])
            }
            right--
            if(!(top<bottom && left<right)) break;

            for(let i=right-1;i>=left;i--){
                arr.push(matrix[bottom-1][i])
            }
            bottom--

            for(let i=bottom-1;i>=top;i--){
                arr.push(matrix[i][left])
            }
            left++
        }
        console.log(arr)

        return arr
    }
}
