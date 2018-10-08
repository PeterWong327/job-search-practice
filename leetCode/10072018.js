// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode();
  let current = result;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    current = current.next;
  }

current.next = l1 ? l1 : l2;
return result.next;
};
















let res = new ListNode();
let cur = res;
while(l1 && l2){
    if(l1.val <= l2.val){
        cur.next = new ListNode(l1.val);
        l1 = l1.next;
        cur = cur.next;
        continue;
    }
    else {
        cur.next = new ListNode(l2.val);
        l2 = l2.next;
        cur = cur.next;
        continue;
    }
}
cur.next = l1 ? l1 : l2;
return res.next;
