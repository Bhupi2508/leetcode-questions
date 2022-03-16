/**
 * @Question :-
 * Given two binary strings a and b, return their sum as a binary string.
 * Example 1:
        Input: a = "11", b = "1"
        Output: "100"
 */


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0, i = 0, finalValue = '';
    if (a == "0" && b == "0") {
        return "0";
    }

    let length = a.length > b.length ? a.length : b.length;
    a = a.split("").reverse();
    b = b.split("").reverse();

    while (i < length) {
        const firstVal = a[i] ? +a[i] : 0;
        const SecondVal = b[i] ? +b[i] : 0;

        const sum = firstVal + SecondVal + carry;
        carry = Math.floor(sum / 2);
        finalValue = (sum % 2) + finalValue
        i++;
    }

    if (carry > 0) {
        finalValue = carry + finalValue;
    };
    return finalValue;
};

console.log(addBinary("1010", "1011"))