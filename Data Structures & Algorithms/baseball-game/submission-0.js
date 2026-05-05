class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []

        for(let op of operations){
            if(op==='+'){
                const temp1 = stack.pop()
                const temp2 = stack.pop()
                stack.push(temp2,temp1,temp1+temp2)
            } else if(op==='C'){
                stack.pop()
            } else if(op==='D'){
                const temp1 = stack.pop()
                stack.push(temp1,temp1*2)
            } else {
                stack.push(+op)
            }
            console.log(stack)
        }

        
        let sum = 0
        for(let s of stack){
            sum += s
        }

        return sum
    }
}
