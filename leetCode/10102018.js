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


var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

    for (let i = 0; i < haystack.length; i += 1) {
      let currentChar = haystack[i];

      if (currentChar === needle[0]) {
        let newHaystack = haystack.slice(i);

        for (let j = 0; j < needle.length; j += 1) {
          if (newHaystack[j] !== needle[j]) {
            return -1;
          }
        }

        return i;
      }
    }
    return -1;
};
