/**
 * @Question :-
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 * Since the result may be very large, so you need to return a string instead of an integer.
 * Example 1:
        Input: nums = [10,2]
        Output: "210"
 */




/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    const res = nums.map(String).sort((a, b) => a.concat(b) > b.concat(a) ? -1 : 1).join('');
    return res.charAt(0) === '0' ? '0' : res;
};

console.log(largestNumber([0, 0, 0, 678, 677, 6, 55, 53, 5734, 0, 0, 34, 3, 346, 34]));


//"736453436
//36346343000000"
//"6786776573455533463434300000"