class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>a-b)

        let l = 0,r=people.length-1, count=0
        while(l<r){
            let sum = people[l] + people[r]

            if(sum>limit){
                console.log(people[l], " ", people[r])
                count++
                r--
            } 
            // else if(){

            // } 
            else {
                console.log(people[l], " ", people[r])
                count++
                l++
                r--
            }
        }
        if(l==r && people[l]<=limit) count++
        return count
    }
}
