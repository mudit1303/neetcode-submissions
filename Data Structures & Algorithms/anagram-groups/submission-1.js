class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for(let s of strs){
            let count = new Array(26).fill(0)
            for(let c of s){
                count[c.charCodeAt(0)-'a'.charCodeAt(0)] += 1
            }
            //making the key, for tea it would be 1a1e1t
            const key = count.join(",")

            //looking for the same key in the res object
            if(!res[key]){
                res[key]=[]
            }
            res[key].push(s)//making an array of strs with same string
        }
        return Object.values(res)//returning values of hashmap
    }
}
