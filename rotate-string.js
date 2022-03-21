/**
 * @Question :-
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 * A shift on s consists of moving the leftmost character of s to the rightmost position.
 * For example, if s = "abcde", then it will be "bcdea" after one shift.
 * Example 1:
        Input: s = "abcde", goal = "cdeab"
        Output: true
 */



/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s == goal) return true;

    // Convert into an array
    let g = goal.split("");
    for (let i = 0; i < s.length; i++) {

        // add first element into last
        g.push(goal[i]);

        // remove first element
        g = g.splice(1);
        if (g.join("") == s) return true;
    }
    return false;
};

console.log(rotateString("abcde", "cdeab"));