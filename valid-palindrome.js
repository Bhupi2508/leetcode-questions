/**
 * @Question :-
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * Example 1:
        Input: s = "A man, a plan, a canal: Panama"
        Output: true
        Explanation: "amanaplanacanalpanama" is a palindrome.
 */



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Empty string
    if (s && !s.trim()) {
        return true;
    }

    // find the array length
    const arr = s.replaceAll(" ", "").toLowerCase().split("")

    // If array length is even
    if ((arr.length) % 2 == 0) {
        return false
    }

    // compare elements
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome("Hello r oll  eh"));