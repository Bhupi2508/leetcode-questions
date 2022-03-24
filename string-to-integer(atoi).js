/**
 * @Question :-
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

    The algorithm for myAtoi(string s) is as follows:

    Read in and ignore any leading whitespace.
    Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
    Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
    Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
    If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
    Return the integer as the final result.
    Note:

    Only the space character ' ' is considered a whitespace character.
    Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
    
    Example 1:
            Input: s = "42"
            Output: 42
            Explanation: The underlined characters are what is read in, the caret is the current reader position.
            Step 1: "42" (no characters read because there is no leading whitespace)
                    ^
            Step 2: "42" (no characters read because there is neither a '-' nor '+')
                    ^
            Step 3: "42" ("42" is read in)
                    ^
            The parsed integer is 42.
            Since 42 is in the range [-231, 231 - 1], the final result is 42.
...
 */



// /**
//  * @param {string} s
//  * @return {number}
//  */
// var myAtoi = function (s) {
//     let len = '';
//     // for (let i = 0; i < s.length; i++) {
//     //     let val = parseInt(s[i]);

//     //     if (!isNaN(val) && s[i - 1] == ' ' && s[i - 2] != undefined) return 0;

//     //     if (!isNaN(val) && (s[i - 2] == '-' || s[i - 2] == '+') && ((s[i - 1] == '-') || (s[i - 1] == '+') || (s[i - 1] == ' '))) return 0;

//     //     if (!isNaN(val)) {
//     //         if (s[i - 1] == '-') len += s[i - 1];
//     //         len += val;
//     //         if (isNaN(s[i + 1]) || s[i + 1] == ' ') break;
//     //     }
//     // }

//     len += (s[0] == '-' ? '-' : '');

//     for (let i = 0; i < s.length; i++) {
//         let val = parseInt(s[i]);
//         console.log("val first :: ", val)

//         if (!isNaN(val)) {
//             len += val;
//             if (isNaN(s[i + 1]) || s[i + 1] == ' ') break;
//         } else if ((s[0] == "+" || s[0] == '-') && (s[1] != "+") && (s[0] != '-') && (!isNaN(val))) {
//             console.log("If condition :: ", val)
//             len += val;
//         } else if ((!isNaN(val)) && (s[i - 1] == "+" || s[0] == '-' || s[i - 1] == " " || s[0] == isNaN(s[i - 1]))) {
//             len += val;
//             console.log("else if , len")
//         } else {
//             len = 0;
//         }
//     }

//     if (parseInt(len) <= -2147483648) return (-2147483648);
//     if (parseInt(len) >= 2147483648) return (2147483648 - 1);
//     return len;
// };
const myAtoi = (s)=> {
    let s_int = Math.min(Math.max(parseInt(s), -2147483648), 2147483647);
    console.log(parseInt(s)); 
    console.log(Math.max(parseInt(s), -2147483648), 2147483647);
    console.log(parseInt(s_int));
    return isNaN(s_int) ? 0 : s_int
  }
console.log(myAtoi("-156785678823"));