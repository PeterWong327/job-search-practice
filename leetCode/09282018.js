// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i += 1) {
      let curr = nums[i];
      for (let j = i + 1; j < nums.length; j += 1) {
        let next = nums[j];
        if ((curr + next) === target) {
          return [i, j];
        }
      }
    }
};




// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1;
  let q = l2;
  let curr = dummyHead;
  let carry = 0;
  while (p != null || q != null) {
    let x = (p !== null) ? p.val : 0;
    let y = (q !== null) ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
};
