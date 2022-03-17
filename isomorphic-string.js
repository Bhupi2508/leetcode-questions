/**
 * @Question :-
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * Example 1:
        Input: s = "egg", t = "add"
        Output: true
 *
 */



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s === null || t === null || s.length !== t.length) return false;
    if (s === t) return true;

    let a = {}, b = {};
    for (let i = 0; i < s.length; i++) {
        if (a[s[i]] !== b[t[i]]) {
            return false;
        }
        a[s[i]] = i + 1;
        b[t[i]] = i + 1;
    }
    return true;
};

console.log(isIsomorphic("paper", "title"));