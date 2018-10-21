// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {

  let pals = [];
  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j < s.length + 1; j += 1) {
      let substring = s.slice(i, j);
      if (isPal(substring)) {
        pals.push(substring);
      }
    }
  }

  return pals.sort()[pals.length - 1];
};


function isPal(string) {
  for (let i = 0; i < string.length; i += 1) {
    let curr = string[i];
    let last = string[string.length -1 - i];
    if (curr !== last) {
      return false;
    }
  }

  return true;
}
