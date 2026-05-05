class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
       this.mergeSort(nums,0,nums.length-1)
       return nums 
    }

    mergeSort(arr,l,r){
        if(l>=r) return
        let mid = Math.floor((l+r)/2)
        this.mergeSort(arr,l,mid)
        this.mergeSort(arr,mid+1,r)
        this.merge(arr,l,mid,r)
    }

    merge(arr,l,mid,r){
        
        let n1 = mid-l+1
        let n2 = r-mid
        
        let left=new Array(n1),right=new Array(n2)

        for(let i=0;i<n1;i++) left[i] = arr[l+i]
        for(let j=0;j<n2;j++) right[j] = arr[mid+1+j]


        let i=0,j=0,k=l

        while(i<n1 && j<n2){
            if(left[i]<=right[j]){
                arr[k] = left[i]
                i++
            } else {
                arr[k] = right[j]
                j++
            }
            k++
        }

        while(i<n1){
            arr[k] = left[i]
            i++
            k++
        } 
        while(j<n2){
            arr[k] = right[j]
            j++
            k++
        }
    }
}
