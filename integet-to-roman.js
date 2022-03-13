/**
 * @Question :-
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

 * For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The
    number 27 is written as XXVII, which is XX + V + II.

 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the
 * number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the 
 * number nine, which is written as IX. There are six instances where subtraction is used:
  
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
    Given a roman numeral, convert it to an integer.

 * Example 1:
    Input: s = 3
    Output: "III"
    Explanation: 3 = III.
 */



/***************************************************************************************************************************
 * @param {string} s
 * @return {number}
 */
let i = 0;
let finalVal = '', final = '';
var arr = [1000, 500, 100, 50, 10, 5, 1];
var intToRoman = function (s) {
    if (s > 0) {
        while (Math.floor(s / arr[i]) > 0) {
            switch (arr[i]) {
                case 1000:
                    final = 'M';
                    break;
                case 500:
                    final = 'D';
                    break;
                case 100:
                    final = 'C';
                    break;
                case 50:
                    final = 'L';
                    break;
                case 10:
                    final = "X";
                    break;
                case 5:
                    final = 'V';
                    break;
                case 1:
                    final = "I";
                    break;
                default:
                    final = "";
            }
            let val = Math.floor(s / arr[i])
            finalVal = finalVal + (val > 1 ? final.repeat(val) : final);
            s = val > 1 ? s - val * arr[i] : s - arr[i];
        }
        ++i;
        intToRoman(s)
    }
};

intToRoman(2458)