/**
 * @Question :-
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
 */


/***************************************************************************************************************************
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = '';
    let i = 0;
    strs[0].split("").map(req => {
        let count = 0
        for (const iterator of strs) {
            if (req == iterator.charAt(i)) {
                ++count;
            }
        }
        if (count === strs.length) {
            result += req;
        } else {
            return result ? result : "";
        }
        ++i;
    })
    return result ? result : "";
};

// const longestCommonPrefix = (strs) => {
//     if (!strs.length) return '';

//     let prefix = strs[0];

//     for (let i = strs.length; --i;) {
//       for (;strs[i].indexOf(prefix) !== 0;) {
//         prefix = prefix.substring(0, prefix.length - 1);
//         if (!prefix.length) return '';
//       }
//     }

//     return prefix;
//   };

console.log(longestCommonPrefix(["cir", "car"]));