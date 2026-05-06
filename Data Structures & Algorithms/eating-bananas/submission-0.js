class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles)
        let res = r

        while(l<=r){
            let mid = Math.floor((l+r)/2), totalTime = 0

            for(let p of piles){
                totalTime += Math.ceil(p/mid)
            }

            if(totalTime<=h){
                res = mid
                r = mid -1
            } else l = mid + 1
        }
    return res
    }
}
