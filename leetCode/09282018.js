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
    let newl1 = "";
    let newl2 = "";
    let current1 = l1;
    let current2 = l2;

    while (current1 !== null) {
      newl1 += current1;
      current1 = current1.next;
    }

    while (current2 !== null) {
      newl2 += current2;
      current2 = current2.next;
    }

    let result = parseInt(newl1) + parseInt(newl2);
    let newResult = result.toString();
    newResult = newResult.split("").reverse().join("");

    // newResult = 708
    // need to initialize a new node
    let head = newResult[0];

    for (let i = 1; i < newResult.length; i += 1) {
      head.next = newResult[i];
    }

    return head;
};
