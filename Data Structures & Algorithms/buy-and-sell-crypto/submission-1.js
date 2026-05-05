class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l=0,r=1, maxP=0

        while(l<r && r<prices.length){
            if(prices[l]>prices[r]){
                l=r
                r++
            } 
            else {
                maxP = Math.max(maxP,prices[r]-prices[l])
                r++
            }
        }

        return maxP
    }
}
