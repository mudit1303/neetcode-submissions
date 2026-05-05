class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let window = new Set()
        let L = 0

        for(let R=0;R<nums.length;R++){
            //creating a sliding window of size K, whenever R-L>k then we delete the leftmost element and increment L
            if(R-L>k){
                window.delete(nums[L])
                L++
            }

            //check for nums[R] in the current window of K
            if(window.has(nums[R])){
                return true
            }

            //if element not found in current window then add nums[R]
            window.add(nums[R])
        }

        return false;
    }
}
