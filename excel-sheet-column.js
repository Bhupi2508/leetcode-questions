/**
 * @Question :-
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 * For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
 * Example 1:
        Input: columnNumber = 1
        Output: "A"
...
 */



/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    // direct assign
    if (columnNumber < 26) return String.fromCharCode(65 + columnNumber - 1);

    let add = '';

    // Loop where each instace will run based on char & temp values
    while (columnNumber > 0) {
        const temp = Math.floor(columnNumber % 26) - 1;

        add = columnNumber > 26 ? String.fromCharCode(65 + (temp == -1 ? 26 - 1 : temp)) + add : String.fromCharCode(65 + columnNumber - 1) + add;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return add;

};

console.log(convertToTitle(52));