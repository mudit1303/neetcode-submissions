class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = 100001
        let l=0
        let sum = 0
        for(let r=0;r<nums.length;r++){
            sum += nums[r]
            console.log("r = ",r," sum=",sum)
            while(sum>=target){
                res = Math.min(r-l+1,res)
                sum -= nums[l]
                l++
            }
        }

        return res === 100001 ? 0 : res
    }
}
