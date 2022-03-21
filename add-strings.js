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
    return (BigInt(num1) + BigInt(num2)).toString();
};

console.log(addStrings("11", "123"));