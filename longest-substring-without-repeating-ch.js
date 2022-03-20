/**
 * @Question :-
 * Given a string s, find the length of the longest substring without repeating characters.
 * Example 1:
        Input: s = "abcabcbb"
        Output: 3
Explanation: The answer is "abc", with the length of 3.
 */



/**
 * @param {string} s
 * @return {number}
 */
let count = 0, final = '';
var lengthOfLongestSubstring = function (s) {
    const arr = s.split("");
    if ([...new Set(arr)].length == 1) return 1;

    for (let i = 0; i < arr.length; i++) {
        console.log("req :  ", req);
        console.log("index :: ", index);
        req = req + arr[index + 1];
        console.log("new req", req);
    }
};

console.log(lengthOfLongestSubstring("abcabcbb"));