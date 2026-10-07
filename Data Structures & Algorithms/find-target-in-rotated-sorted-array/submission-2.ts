class Solution {

    binarySearch(l,r,nums,target){
        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(nums[mid]==target) return mid
            if(nums[mid]>target) r = mid - 1
            else l = mid + 1
        }
        return -1
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length-1, pivot = nums[0], pivotIndex = 0

        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(nums[mid]>=nums[r]) l = mid + 1
            else r = mid - 1

            if(nums[mid]<pivot){
                pivot = nums[mid]
                pivotIndex = mid
            }
        }

        console.log(pivotIndex)

        let index = this.binarySearch(0,pivotIndex-1,nums,target)

        if(index!==-1) return index

        index = this.binarySearch(pivotIndex,nums.length-1,nums,target)

        return index
    }
}
