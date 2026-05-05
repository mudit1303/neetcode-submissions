class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixPro = new Array(nums.length).fill(1)
        let suffixPro = new Array(nums.length).fill(1)

        console.log(prefixPro)
        console.log(suffixPro)

        prefixPro[1] = nums[0]

        for(let i=2;i<nums.length;i++){
            prefixPro[i] = prefixPro[i-1] * nums[i-1]
        }

        suffixPro[nums.length-2] = nums[nums.length-1]
        for(let i= nums.length-3;i>=0;i--){
            suffixPro[i] = suffixPro[i+1] * nums[i+1]
        }
        console.log(prefixPro)
        console.log(suffixPro)

        let res = []
        for(let i=0;i<nums.length;i++){
            res[i] = prefixPro[i] * suffixPro[i]
        }
        return res
    }
}
