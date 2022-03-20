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
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++) {
        console.log("s[i] :::: ", s[i]);
        if (vowel.includes(s[i])) {
            console.log("If :::: ", s[i]);
            arr.push(s[i]);
            s = s.replace(s[i], "-")
        }
        console.log("s :::  ", s, "\n");
    }

    const a= s.split("").map(req => req == "-" ? (req = arr.pop()) : req).join("");
    console.log(a);
    return a;
};

console.log(reverseVowels("hello"));