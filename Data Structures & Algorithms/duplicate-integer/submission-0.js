class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}

        for(const num of nums){
            console.log(num)
            if(!(num in obj)){
                obj[num] = 1 
            } else {
                return true
            }
        }
        console.log(obj)
        return false
    }
}
