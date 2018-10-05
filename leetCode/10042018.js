// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""

// Explanation: There is no common prefix among the input strings.


// Note:
//
// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function(strs) {
  let result = "";
  let firstStr = strs[0];
  if (strs.length === 0) {
    return result;
  }

  for(let i = 0; i < firstStr.length; i += 1) {

    for(let j = 1; j < strs.length; j += 1) {
      if (firstStr[i] !== strs[j][i]) {
        return result;
      }
    }

    result += firstStr[i];
  }
  return result;
};
