// Given a sorted array and a target value, return the index if the
// target is found. If not, return the index where it would be if it
// were inserted in order.
//
// You may assume no duplicates in the array.
//
// Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2

// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1

// Example 3:

// Input: [1,3,5,6], 7
// Output: 4

// Example 4:
//
// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  }
  let higherNum = nums[nums.length - 1] > target ? nums[nums.length - 1] : target;
  let allNums = new Array(higherNum + 1);
  allNums[target] = target;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    allNums[nums[i]] = nums[i];
  }

  for (let i = 0; i < allNums.length; i++) {
    if (typeof allNums[i] === "number") {
      result.push(allNums[i]);
    }
  }

  return result.indexOf(target);
};
