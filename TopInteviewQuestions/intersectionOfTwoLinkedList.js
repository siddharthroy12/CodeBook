// Intersection of two linked list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let node1 = headA
    let node2 = headB
    let loop1 = true
    let loop2 = true
    
    while (node1 !== null && node2 !== null) {
        if (node1 == node2) {
                return node1
        }
        node1 = node1.next
        if (node1 === null && loop1) {
            node1 = headB
            loop1 = false
        }
        node2 = node2.next
        if (node2 === null && loop2) {
            node2 = headA
            loop2 = false
        }
    }
    
    return null
};