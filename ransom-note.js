/**
 * @Question :-
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * Example 1:
        Input: ransomNote = "a", magazine = "b"
        Output: false
 */



/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.indexOf(ransomNote[i]) == -1) {
            return false;
        }

        // If char is present,then remove that from magazine
        magazine = magazine.replace(ransomNote[i], "")
    }
    return true;
};

console.log(canConstruct("abci", "abcdefghijk"));