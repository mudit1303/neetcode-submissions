class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let num1r=nums1.length-1, num1l = m-1, num2r = n-1

        //since we know last n elements are 0 and remaining are in ascending order
        //we check whether nums1's mth element is greater than nums2 last element
        //if yes then move nums1's mth element to nums1 last place since nums1's mth element is greatest of all
        //if not then put nums2 last element at nums1 last element since nums2 last element would be greatest of all
        while(num1l>=0 && num2r>=0){
            if(nums1[num1l] > nums2[num2r]){
                nums1[num1r] = nums1[num1l]
                num1r--
                num1l--
            } else {
                nums1[num1r] = nums2[num2r]
                num1r--
                num2r--
            }
        }

        while(num2r>=0){
            nums1[num1r] = nums2[num2r]
            num1r--
            num2r--
        }
    }
}
