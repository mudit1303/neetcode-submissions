class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a,b) => a-b)
        let res = []

        for(let i=0;i<nums.length;i++){
            //meaning all the subsequent values would be positive hence no chance of getting 0 as sum
            if(nums[i]>0) break;

            //if ith and i-1th are same then all matching arrays would be a part of i-1th iteration, hence duplicacy would be there
            if(i>0 && nums[i]===nums[i-1]) continue;

            let l = i+1, r=nums.length-1
            while(l<r){
                let sum = nums[i] + nums[l] + nums[r]
                if(sum===0) {
                    console.log("i=",i,"l=",l,"r=",r)
                    res.push([nums[i],nums[l],nums[r]]);
                    l++;
                    r--;

                    //iterating to unique lth element, to avoid duplicacy
                    while(l<r && nums[l]===nums[l-1]){l++;} 
                } else if(sum>0) {  r--;  }
                else {  l++;    }
            }
        }

        return res
    }
}