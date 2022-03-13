/**
 * @Question :-
 * Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * Example 1:
    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.
 *
 */


/***************************************************************************************************************************
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.trim('').split(" ");
    const arrLength = arr[arr.length - 1].length;
    console.log("Response ::: ", arrLength)
    return arrLength;
};


// Call the method
lengthOfLastWord("  We are        here ")