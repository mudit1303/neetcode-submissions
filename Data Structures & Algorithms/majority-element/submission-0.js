class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj = {} 
        let count = Math.ceil((nums.length)/2)

        for(let num of nums){
            if(!obj[num]) obj[num] = 1
            else obj[num]++
            if(obj[num]===count) return num
        }
    }
}
