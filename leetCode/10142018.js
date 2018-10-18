// Given a string, find the length of the longest substring without
// repeating characters.
//
// Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a
//              subsequence and not a substring.

// "dvdf" => 3 ("vdf")
// "bwf" => 3

var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length;
  }

  let longest = "";
  let currStr = "";

  for (let i = 0; i < s.length - 1; i += 1) {
    currStr = "" + s[i];

    for (let j = i + 1; j < s.length; j += 1) {
      console.log("currStr is:" + currStr + " when i is:" + i + " and j is:" + j);
      let currentChar = s[j];
      if (!currStr.includes(currentChar)) {
        currStr += currentChar;
      } else if (currStr.includes(currentChar)) {
        if (currStr.length > longest.length) {
          longest = currStr;
          j = s.length;
          // currStr = "" + currentChar;
        }
      }
    }
  }
  if (currStr.length > longest.length) {
    longest = currStr;
  }

  return longest;
};
