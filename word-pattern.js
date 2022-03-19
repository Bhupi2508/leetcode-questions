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
    const secondString = s.replaceAll(" ", ",").split(",")

    console.log("pattern ", pattern, pattern.length);
    console.log("secondString ", secondString, secondString.length);

    // If both values are same
    if (pattern == s) return true;

    // If both lenght are not same
    if (pattern == null || s == null || pattern.length != secondString.length) return false;


    const a = {}, b = {};

    for (let i = 0; i < pattern.length; i++) {
        console.log(pattern[i]);
        console.log(secondString[i]);

        console.log("first =========>>> ", a, " :::: ", a[pattern[i]]);
        console.log("second =========>>>  ", b, " :::: ", b[secondString[i]]);

        // If value is ntot exist in object or undefined
        if (a[pattern[i]] !== b[secondString[i]]) {
            console.log("If Condition ");
            return false;
        }
            a[pattern[i]] = i + 1;
            b[secondString[i]] = i + 1;
            console.log("First value set =======>>> ", a);
            console.log("Second value set =======>>> ", b, "\n");
        
    }
    return true
};

console.log(wordPattern("abba", "aog cat cat dog"));