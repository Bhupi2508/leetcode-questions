/**
 * @Question :-
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * Example 1:
            Input: s = "anagram", t = "nagaram"
            Output: true
 */



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // if (s.length != t.length) return false

    // s = s.split("").sort();
    // t = t.split("").sort();
    // return JSON.stringify(s) === JSON.stringify(t);

    const first = s.toLowerCase().split('').sort().join('').trim();
    const second = t.toLowerCase().split('').sort().join('').trim();
    return first === second
};

console.log(isAnagram("anagram", "nagaram"));