/**
 * @Question :-
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 * Example 1:
        Input: pattern = "abba", s = "dog cat cat dog"
        Output: true
 */



/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    // Convert into array
    const secondString = s.replaceAll(" ", ",").split(",")

    // If both lenght are not same
    if (pattern == null || s == null || pattern.length != secondString.length) return false;


    const a = {}, b = {};
    for (let i = 0; i < pattern.length; i++) {
        // If value is ntot exist in object or undefined
        if (a[pattern[i]] !== b[secondString[i]]) {
            return false;
        }
        a[pattern[i]] = i + 1;
        b[secondString[i]] = i + 1;

    }
    return true
};

console.log(wordPattern("abba", "aog cat cat dog"));