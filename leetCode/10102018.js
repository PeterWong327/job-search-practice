// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2


// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "mississippi", needle = "issip"
 // Output: 4


var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i += 1) {
    let currentChar = haystack[i];

    if (currentChar === needle[0]) {
      let needleLength = needle.length;

      if (haystack.slice(i, i+needleLength) === needle) {
        return i;
      }

    }
  }
  return -1;
};
