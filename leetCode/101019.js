// You are given an array of strings words and a string chars.
//
// A string is good if it can be formed by characters from chars (each character can only be used once).
//
// Return the sum of lengths of all good strings in words.

// Example 1:
//
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:
//
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */


var countCharacters = function(words, chars) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (good(word, chars)) {
            count += word.length;
        }
    }

    return count;
};

function good(word,chars) {
     for (let i = 0; i < word.length; i++ ) {
            let char = word[i];
         if (chars.includes(char)) {
            chars = chars.replace(char, "");
         } else {
            return false;
         }
     }

     return true;
};
