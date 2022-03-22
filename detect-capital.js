/**
 * @Question :-
 * We define the usage of capitals in a word to be right when one of the following cases holds:
    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".
    Given a string word, return true if the usage of capitals in it is right.
 * Example 1:
        Input: word = "USA"
        Output: true
 */



/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    // If there is only one element
    if (word.length == 1) return true;

    let a = 0; b = 0, c = 0;

    // If only the first letter is capital
    if ('A' <= word[0] && word[0] <= 'Z') c++;

    for (let i = 0; i < word.length; i++) {

        // Capital letters
        if (word[i].charCodeAt(word[i]) >= 65 && word[i].charCodeAt(word[i]) <= 90) {
            a++;
        }
        // Small letters
        else if (word[i].charCodeAt(word[i]) >= 97 && word[i].charCodeAt(word[i]) <= 122) {
            b++
        }
    }

    // If all are capital letter or all are small letter or first char is capital and others are minor
    return (a == word.length || b == word.length || (c + b) == word.length) ? true : false;
};

console.log(detectCapitalUse("SDFGsHJKGHJK"));