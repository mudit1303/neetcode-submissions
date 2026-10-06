/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const dummyNode = {val:0,next:head}
        let right = head,left=dummyNode
        while(n>0){
            right = right.next
            n--
        }

        while(right!==null){
            right = right.next
            left = left.next
        }

        left.next = left.next.next

        return dummyNode.next

    }
}
