class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    validString(s){
        let temp = ''
        for(let i=0;i<s.length;i++){
            if((s[i]>='a'&&s[i]<='z') ||
                (s[i]>='A'&&s[i]<='Z') ||
                (s[i]>='0'&&s[i]<='9')){
                    temp +=s[i].toLowerCase()
                }
        }
        return temp
    }



    isPalindrome(s) {
        let tempS = this.validString(s).split("").reverse().join("")
        s = this.validString(s)

        console.log(tempS)
        console.log(s)

        return tempS===s

    }
}
