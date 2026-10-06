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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        //middle of the list
        let fastPtr = head.next, slowPtr = head
        while(fastPtr !== null && fastPtr.next!==null){
            fastPtr = fastPtr.next.next
            slowPtr = slowPtr.next
        }

        //reversing the second half of the list
        let currPtr = slowPtr.next, next=null,prev=(slowPtr.next=null)
        while(currPtr!==null){
            next = currPtr.next
            currPtr.next = prev
            prev = currPtr
            currPtr = next
        }

        //merging the two list
        let first = head, second = prev
        while(second!==null){
            const temp1 = first.next
            const temp2 = second.next

            first.next = second
            second.next = temp1
            first = temp1
            second = temp2
        }
        
    }
}
