class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,r=nums.length - 1
        

        if(nums[l]>target) return -1

        while(l<=r){

            let mid = (l+r)%2==0 ? (l+r)/2 :  Math.floor((l+r)/2) 

            if(nums[mid]===target) return mid

            else if(nums[mid]<target) l = mid+1

            else r = mid - 1
        }

        return -1
    }
}
