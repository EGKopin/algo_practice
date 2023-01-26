/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

const substringNonrepeating = str => {

  let maxLength = 0;

  const usedLetters = new Set ([str[0]]);

  for (let i = 1; i < str.length; i++){

      if (usedLetters.has(str[i])) {

          maxLength = Math.max(maxLength, usedLetters.size)

          usedLetters.clear()

      } else {

          usedLetters.add(str[i])

      }            

  }

  maxLength = Math.max(maxLength, usedLetters.size) //if the longest substring goes to the end

  return maxLength

};

module.exports = {substringNonrepeating};
