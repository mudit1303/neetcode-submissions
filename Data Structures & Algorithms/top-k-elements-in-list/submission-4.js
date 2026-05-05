class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj ={}
        let res = []
        let max = -1

        for(let num of nums){
            if(obj[num]) {
                obj[num]++
            } else {
                obj[num] = 1
            }
        }

        for(let i=0;i<k;i++){
            let frequent = -1001
            if(Object.keys(obj).length>0){
                for(let o in obj){
                    if(obj[o]>max){
                        max = obj[o]
                        frequent = o
                    }
                }
            res.push(frequent)

            delete obj[frequent]

            max = -1
            }
        }

        return res
    }
}
