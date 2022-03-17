/**
 * @Question :-
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 * Example 1:
        Input: num = 38
        Output: 2
        Explanation: The process is
        38 --> 3 + 8 --> 11
        11 --> 1 + 1 --> 2 
        Since 2 has only one digit, return it.
 */


/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
    // if (num == 0) return 0;

    // let count = 0
    // num.toString().split("").map(req => count += parseInt(req))

    // if (count.toString().length !== 1) {
    //     return addDigits(count)
    // }
    // return count;

    if (num == 0) return 0;
    else if (num % 9 == 0) return 9;
    else return num % 9;
};

console.log(addDigits(678));