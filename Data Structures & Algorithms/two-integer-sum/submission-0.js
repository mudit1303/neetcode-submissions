class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}

        for(let i=0;i<nums.length;i++){
            if(nums.indexOf(target-nums[i])!=-1 && i!=nums.indexOf(target-nums[i])){
                return [i,nums.indexOf(target-nums[i])]
            }
        }
    }
}
