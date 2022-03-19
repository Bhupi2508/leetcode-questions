/**
 * @Question :-
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * Example 1:
        Input: s = ["h","e","l","l","o"]
        Output: ["o","l","l","e","h"]
 */



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    // loop till the middle element
    for (let i = 0; i < s.length / 2; i++) {

        //  assign first value to temp
        let temp = s[i];

        // first val will change to last
        s[i] = s[s.length - 1 - i];

        // the last value will become the first
        s[s.length - 1 - i] = temp;
    }
    return s;
};

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));