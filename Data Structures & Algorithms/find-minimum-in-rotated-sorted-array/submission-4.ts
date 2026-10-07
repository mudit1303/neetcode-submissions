class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min = nums[0], l=0, r = nums.length-1

        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(nums[mid]>=nums[r]) l = mid + 1
            else r = mid - 1

            min = Math.min(nums[mid],min)
        }

        return min
    }
}
