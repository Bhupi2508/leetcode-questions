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
    Input: s = "III"
    Output: 3
    Explanation: III = 3.
 */


/***************************************************************************************************************************
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const amount = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    }

    let final = 0;
    const val = s.split('')
    val.map((req, index) => {
        const curr = amount[req];
        const next = val[index + 1] ? amount[val[index + 1]] : 0;
        if (curr < next) {
            final -= curr;
            console.log("If ",final);
        } else {
            final += curr;
            console.log("else ",final);
        }
        return final;
    });
    return final;


    // let final = 0;
    // let val = s.split('')
    // val.map((req, index) => {
    // if (req === 'C' && val[index + 1] === 'M') {
    //     val.splice(val.indexOf(req), 2, '')
    //     req = 'CM';
    // } else if (req === 'C' && val[index + 1] === 'D') {
    //     val.splice(val.indexOf(req), 2, '')
    //     req = 'CD';
    // } else if (req === 'X' && val[index + 1] === 'C') {
    //     val.splice(val.indexOf(req), 2, '')
    //     req = 'XC';
    // } else if (req === 'X' && val[index + 1] === 'L') {
    //     val.splice(val.indexOf(req), 2, '')
    //     req = 'XL';
    // } else if (req === 'I' && val[index + 1] === 'V') {
    //     val.splice(val.indexOf(req), 2, '')
    //     req = 'IV';
    // } else if (req === 'I' && val[index + 1] === 'X') {
    //     val.splice(val.indexOf(req), 2, '')
    //     req = 'IX';
    // }
    //     switch (req) {
    //         case 'M':
    //             final += 1000;
    //             break;
    //         case 'CM':
    //             final += 900;
    //             break;
    //         case 'D':
    //             final += 500;
    //             break;
    //         case 'CD':
    //             final += 400;
    //             break;
    //         case 'C':
    //             final += 100;
    //             break;
    //         case 'XC':
    //             final += 90;
    //             break;
    //         case 'L':
    //             final += 50;
    //             break;
    //         case 'XL':
    //             final += 40;
    //             break;
    //         case 'X':
    //             final += 10;
    //             break;
    //         case 'IX':
    //             final += 9;
    //             break;
    //         case 'V':
    //             final += 5;
    //             break;
    //         case 'IV':
    //             final += 4;
    //             break;
    //         case 'I':
    //             final += 1;
    //             break;
    //         default:
    //             final += 0;
    //     }

    // })
    // console.log(final);
    //return final;
};

console.log(romanToInt("MCMXCIV"));