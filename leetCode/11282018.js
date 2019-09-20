// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and
// return its sum.
//
// Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:
//
// If you have figured out the O(n) solution, try coding another solution
// using the divide and conquer approach, which is more subtle.

var maxSubArray = function(nums) {
  // iterate through each number
  // save the first element as the largest variable
  // save the largest variable's index as the 'startIdx'
  // check if the next element added to the largest var is greater
    // if greater, then save sum as new largest, then
    // if less, save 'endIdx' as current index.

    let largest = nums[0];
    let startIdx = 0;
    let endIdx = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      let next = nums[i + 1];
      let curr = nums[i];

      if (curr > largest) {
        largest = curr;
        startIdx = i;
      }

      if ((largest + next) >= largest) {
        largest += next;
        endIdx = i + 1;
      } else if ((largest + next) < largest) {
        endIdx = i;
      }
    }

    return nums.slice(startIdx, endIdx + 1);
};
