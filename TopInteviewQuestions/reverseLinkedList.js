// Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Iterative
var reverseListIter = function(head) {
    let prevNode = null
    let currentNode = head
    let nextNode = head ? head.next : head
    
    while (currentNode != null) {
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
        nextNode = currentNode ? currentNode.next : currentNode
    }
    
    return prevNode
};
// Recursive
var reverseListRecur = function(head) {
    if (head === null || head.next === null) return head
    let p = reverseListRecur(head.next)
    head.next.next = head
    head.next = null
    return p
}