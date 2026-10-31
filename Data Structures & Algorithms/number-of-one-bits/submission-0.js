class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res = 0
        while(n) { 
            res += n%2
            n = Math.floor(n/2)
        }

        return res
    }
}
