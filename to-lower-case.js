/**
 * @Question :-
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 * Example 1:
        Input: s = "Hello"
        Output: "hello"
 */



/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let i = '';
    const arr = s.split("");
    arr.map(req => {

        // Convert ASCII and find the number
        if (req.charCodeAt(req) >= 65 && req.charCodeAt(req) <= 90) {

            // add 97 to that number so that the same number is converted to a lower ascii character
            const val = req.charCodeAt(req) - 65;
            req = String.fromCharCode(val + 97)
        }
        i += req;
    })
    return i;
};

console.log(toLowerCase("Hello"));