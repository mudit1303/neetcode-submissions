class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashMap = new Map()
        let res = 0

        for(let num of nums){
            if(!hashMap.has(num)){
                hashMap.set(num,(hashMap.get(num-1)||0) + (hashMap.get(num+1)||0) + 1)
                hashMap.set(num-(hashMap.get(num-1)||0), hashMap.get(num))
                hashMap.set(num+(hashMap.get(num+1)||0), hashMap.get(num))

                res = Math.max(res,hashMap.get(num))
            }
            console.log(hashMap)
        }

    return res

    }
}
