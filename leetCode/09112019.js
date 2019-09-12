// Write a function that reverses a string. The input string is given as an array of characters char[].
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// You may assume all the characters consist of printable ascii characters.



// Example 1:
//
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
//
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let r = [];
    for (let i = s.length - 1; i >= 0; i--) {
      r.push(s[i]);
    }
    return r;
};



// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
//
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).
//
//
//
// Example 1:
//
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:
//
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.


/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 2 || N === 1) {
        return 1;
        }
    if (N === 0) {
        return 0;
    }

    return fib(N-1) + fib(N-2);
};
