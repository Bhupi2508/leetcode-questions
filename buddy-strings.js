/**
 * @Question :-
 *Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
  Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
  
  For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 
 * Example 1:
        Input: s = "ab", goal = "ba"
        Output: true
        Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
 */



/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// var buddyStrings = function (s, goal) {
//     const arr = s.split("");

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             console.log(arr[i],arr[j+1]);
//             if ((s == goal) && (arr[i] == arr[j+1])) { 
//                 console.log("ok");
//                 return true};
//             const temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             console.log(arr.join(""),goal);
//             if (arr.join("") == goal) { 
//                 console.log("why");
//                 return true};
//             const temp1 = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp1;
//         }
//     }
//     return false;
// };

var buddyStrings = function(A, B) {
    if(A.length != B.length) return false;
    const diff = [];
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] != B[i]) diff.push(i);
        if(diff.length > 2) return false;
    }
    if(!diff.length) return A.length != [...new Set(A)].length;
    const [i, j] = diff; 
    return A[i] == B[j] && B[i] == A[j];
};

console.log(buddyStrings("ertyuio", "ertyuio"));