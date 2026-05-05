class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0,r=heights.length-1
        let maxWater = -1
        
        while(l<r){
            let curr = (r-l) * (Math.min(heights[l],heights[r]))

            console.log("curr : ", curr)

            if(heights[l] > heights[r]){ r--}

            else if(heights[l] < heights[r]) {l++}

            else {
                l++
                r--
            }

            maxWater = Math.max(curr,maxWater)
        }

        return maxWater;
    }
}
