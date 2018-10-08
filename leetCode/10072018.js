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

// --------------------------------------------------------------------

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
//
// Example 1:
//
// Given nums = [3,2,2,3], val = 3,
//
// Your function should return length = 2, with the first two elements of nums being 2.
//
// It doesn't matter what you leave beyond the returned length.
// Example 2:
//
// Given nums = [0,1,2,2,3,0,4,2], val = 2,
//
// Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
//
// Note that the order of those five elements can be arbitrary.
//
// It doesn't matter what values are set beyond the returned length.
// Clarification:
//
// Confused why the returned value is an integer but your answer is an array?
//
// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
//
// Internally you can think of this:
//
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);
//
// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i += 1) {
      let current = nums[i];
      if (current === val) {
        nums.splice(i, 1);
        i -= 1;
      }
    }
};
