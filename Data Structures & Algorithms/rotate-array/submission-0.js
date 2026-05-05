class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    rotate(nums, k) {
        k = k%nums.length

        const reverse = (l,r) => {
            while(l<r){
                [nums[l],nums[r]] = [nums[r],nums[l]]
                l++
                r--
            }
        }

        //reverse the whole array = [8,7,6,5,4,3,2,1]
        reverse(0,nums.length-1)

        //reverse the first k-1 elements = [5,6,7,8,4,3,2,1]
        reverse(0,k-1)

        //reverse the remaining elements = [5,6,7,8,1,2,3,4]
        reverse(k,nums.length-1)
    }
}
