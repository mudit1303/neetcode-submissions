class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length) return false

        let hashMap1 = {}

        for(let s of s1){
            hashMap1[s] = hashMap1[s] ? hashMap1[s]+1 : 1
        }
        console.log(hashMap1)

        for(let i=0;i<s2.length;i++){
            let hashMap2={}
            for(let j=i;j<i+s1.length;j++){
                if(s2[j] in hashMap1){
                    hashMap2[s2[j]] = hashMap2[s2[j]] ? hashMap2[s2[j]]+1 : 1
                    if(hashMap1[s2[j]]<hashMap2[s2[j]]){break;}
                } else break;
            }
            console.log("hashMap2 : ",i," ", hashMap2)
            let count = 0
            for(let key in hashMap2){
                if(hashMap2[key]!==hashMap1[key]) break;
                else count++
            }
            console.log("count = ", count)
            if(Object.keys(hashMap1).length===count) return true
            hashMap2 = {}
            //return true
        }
        return false
    }
}
