/**
 * @Question :-
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * Example 1:
        Input: s = "leetcode"
        Output: 0
...
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const element = s.replace(s[i], "-");
    if (element.indexOf(s[i]) == -1) return i;
  }
  return -1;
};
console.log(firstUniqChar("wertyuikzswertyuio;lkjhgfdszxcvbwdfghjvbnm,aq"));
