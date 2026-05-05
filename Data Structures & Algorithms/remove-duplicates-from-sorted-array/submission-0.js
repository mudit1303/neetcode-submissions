class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l=0,r=1,k=0
        for(let i=0;i<nums.length;i++){
            if(nums[l]===nums[r]) r++
            else {
                nums[l+1] = nums[r]
                l++
                r++
                k++
            }
        }
        return k
    }
}
