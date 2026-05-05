class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [],temp1,temp2


        for(let token of tokens){
            switch(token){
                case '+' :
                    stack.push(stack.pop() + stack.pop())
                    break;
                
                case '-' : 
                    stack.push(0-(stack.pop() - stack.pop()))
                    break;
                
                case '*' :
                    stack.push(stack.pop() * stack.pop())
                    break;
                
                case '/' :
                    temp1 = stack.pop()
                    temp2 = stack.pop()
                    console.log(temp1)
                    console.log(temp2)
                    stack.push(Math.trunc(temp2 / temp1))
                    break;
                
                default : stack.push(Number.parseInt(token))
            }
            console.log(stack)
        }

        return stack[stack.length-1]
    }
}
