class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [],top=''

        for(let str of s){
            if(str==='{' || str==='[' || str==='(') {
                stack.push(str)
                top = stack[stack.length-1]
            }
            else{
                if(str==='}' && top==='{'){
                    stack.pop()
                } else if(str===']' && top==='['){
                    stack.pop()
                } else if(str===')' && top==='(') {
                    stack.pop()
                } else {
                    return false
                }
                console.log(stack)
                top = stack[stack.length-1]
            }
        }

        

        return stack.length===0 ? true : false
    }
}
