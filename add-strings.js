/**
 * @Question :-
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 * Example 1:
        Input: num1 = "11", num2 = "123"
        Output: "134"
...
 */



/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function (num1, num2) {
    let len = num1.length > num2.length ? num1.length : num2.length;

    let i = num1.length - 1, j = num2.length - 1, sum = '', carry = 0;

    while (len > 0) {
        const a = i < 0 ? 0 : num1.charAt(i) - '0';
        const b = j < 0 ? 0 : num2.charAt(j) - '0';

        const val = carry + a + b;
        sum = (val % 10) + sum;
        carry = Math.floor(val / 10);
        len--; i--; j--
    }

    if (carry > 0) return (carry + sum);
    return sum;
};
console.log(addStrings("110992037024834", "7403274092"));
//  var addStrings = function (num1, num2) {
//     return (BigInt(num1) + BigInt(num2)).toString();
// };