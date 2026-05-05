class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    binarySearch(arr,target){
        let l=0, r = arr.length-1
        while(l<=r){
            let mid = (l+r)%2==0 ? (l+r)/2 : Math.floor((l+r)/2)
            console.log("mid = ", mid)
            if(arr[mid][0]===target) return true;
            else if(arr[mid][0]<target) l = mid + 1
            else r = mid - 1
        }
        return l - 1
    }

    searchMatrix(matrix, target) {
        if(matrix[0][0]>target) return false;
        else if(matrix[matrix.length-1][matrix[0].length-1]<target) return false;

        else {
            let row = this.binarySearch(matrix,target)
            console.log(row)
            if(row===true && typeof(row)==='boolean') return true
            else {
                let l = 0, r = matrix[row].length - 1
                while(l<=r){
                    let mid = (l+r)%2==0 ? (l+r)/2 : Math.floor((l+r)/2)
                    if(matrix[row][mid]===target) return true
                    else if(matrix[row][mid] < target) l = mid + 1
                    else r = mid - 1
                }
            }
        }
        return false;
    }
}
