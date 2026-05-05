class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let obj = {}
        let res = []
        let major = Math.floor(nums.length/3)

        //console.log("major : ", major)

        for(let num of nums){
            if(obj[num]){
                obj[num]++
            } else {
                obj[num] = 1
            }
            //console.log("obj : ", obj)
            if(obj[num]>major && !res.includes(num)) res.push(num)
        }

        return res
    }
}
