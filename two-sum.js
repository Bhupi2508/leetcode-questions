/**
 * @Question :-
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Example 1:
   Input: nums = [2,7,11,15], target = 9
   Output: [0,1]
   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

   
/***************************************************************************************************************************
 * Simple Logic :-
 * 1. findValue = Target - array value (first, second, third .....)
 * 2. If findValue is present in your array then "array value" index will be your first index.
 * 2. If the findValue is present in your array then that index will be your second index.
 * 
 * Example :- Array = [8,4,3,2,5] & Target = 10
 * 1. findValue = 10 - 8 = 2
 * 2. 8 (Index = 0)
 * 3. 2 (Index = 3)
 */

var twoSum = function (nums, target) {
    let first, second, firstIndex, bool = true;
    nums.map(val => {
        const a = target - val;
        firstIndex = nums.indexOf(val);
        nums.splice(nums.indexOf(val), 1, '')
        if (nums.indexOf(a) != -1 && bool) {
            first = firstIndex;
            second = nums.indexOf(a);
            bool = false
        }
    });
    return [first, second]
};