/**
 * @Question :-
 * Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
 * For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
 * Example 1:
        Input: columnTitle = "A"
        Output: 1
...
 */



/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    if (columnTitle.length == 1) return columnTitle.charCodeAt(columnTitle) % 64;

    let result = 0;
    for (let i = columnTitle.length - 1, k = 0; i >= 0; i--, k++) {
        result += (columnTitle.charCodeAt(i) - 64) * (26 ** k);
    };
    return result;
};

console.log(titleToNumber('X'));