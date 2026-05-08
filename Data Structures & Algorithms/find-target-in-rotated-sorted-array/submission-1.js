class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    binarySearch(arr,target,l,r){
        
        while(l<=r){
            let m = Math.floor((l+r)/2)

            if(target == arr[m]) return m
            else if (arr[m]<target)  l = m + 1
            else r = m - 1
        }

        return -1
    }

    search(nums, target) {
        let l = 0, r = nums.length - 1

        while(l<r){
            let mid = Math.floor((l+r)/2)

            if(nums[mid]>nums[r]) l = mid + 1
            else r = mid
        }

        let pivot = l

        let res = this.binarySearch(nums,target,0,pivot-1) 

        if(res!==-1){
            return res 
        } 

        return this.binarySearch(nums,target,pivot,nums.length-1)

    }
}
