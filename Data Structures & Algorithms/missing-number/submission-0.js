class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const arrSum = nums.reduce((sum,curr)=>sum+curr,0)
        const arrActualSum = (nums.length * (nums.length+1))/2
        console.log(arrActualSum)
        return arrActualSum - arrSum
    }
}
