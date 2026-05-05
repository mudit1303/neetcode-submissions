class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let currSum = 0, res = 0;

        let prefixSum = new Map()
        // base condition as there would always be [] which has sum as 0, so 1 subarray
        prefixSum.set(0,1)

        for(let num of nums){
            //calculating currSum
            currSum += num
            //calculating diff
            let diff = currSum - k
            //verifying whether diff exists in prefixSum or not
            res += prefixSum.get(diff) || 0
            //setting currSum in the map
            prefixSum.set(currSum , (prefixSum.get(currSum) || 0) + 1)
        }
        return res
    }
}
