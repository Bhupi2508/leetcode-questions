/**
 * @Question :-
 * Given two binary strings a and b, return their sum as a binary string.
 * Example 1:
        Input: a = "11", b = "1"
        Output: "100"
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let value = 0, k = 1, sum = '', carry = 0;;
    const len = [];
    for (let i = num2.length - 1; i >= 0; i--) {
        let final = "", a = 0, b = 0;
        for (let j = num1.length - 1; j >= 0; j--) {
            const val = (num2[i] * num1[j]) + a;
            if ((val > 9) && j > 0) {
                a = Math.floor(val / 10);
                b = val % 10;
                final = b + final;
            } else {
                final = val + final;
            }
            console.log("numj[i] :::: ", num2[i], "num1[j] :::: ", num1[j], "a :::: ", a, "b :::: ", b, "val :::: ", val, "final :::: ", final);
        }
        if (i != (num2.length - 1)) {
            final = final + "0".repeat(k)
            k++;
        }
        console.log("final ", final);
        len.push(final)
        // value = value + parseInt(final);
        // console.log(value);
    }
    while (len > 0) {
        const a = i < 0 ? 0 : I=(len[i].length-1).charAt(i) - '0';
        console.log(a);
        const b = j < 0 ? 0 : num2.charAt(j) - '0';
        const c = j < 0 ? 0 : num2.charAt(j) - '0';

        const val = carry + a + b + c;
        sum = (val % 10) + sum;
        carry = Math.floor(val / 10);
        len--; i--; j--
    }

    if (carry > 0) return (carry + sum);
    return sum.toString();
};

console.log(multiply("123", "456"));
