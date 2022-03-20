/**
 * @Question :-
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
 * Example 1:
        Input: s = "hello"
        Output: "holle"
 */



/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function (s) {
    let arr = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Loop to detect vowels and store in an array
    for (let i = 0; i < s.trim().length; i++) {
        if (vowels.includes(s[i])) {
            arr.push(s[i]);
            //  s = s.replace(s[i], "~")
        }
    }

    // Convert string vowels from array vowels to descending order
    return s.split("").map(req => vowels.includes(req) ? (req = arr.pop()) : req).join("");
};

console.log(reverseVowels("hello"));