class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let longest = 0

        for(let num of set){
            //checking whether left element exist, for 100, check for 99, 99 not present that means 100 is a starting of sequence
            if(!set.has(num-1)){
                let length = 1
                //check whether 101,102,103.... exists and check for the longest sequence that can be formed
                while(set.has(num + length)) {
                    length++
                }
                //take max of longest and length
                longest = Math.max(longest,length)
            }
        }
        return longest
    }
}
