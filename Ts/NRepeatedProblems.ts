// LeetCode Problem 961: N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5
 

// Constraints:

// 2 <= n <= 5000
// nums.length == 2 * n
// 0 <= nums[i] <= 104
// nums contains n + 1 unique elements and one of them is repeated exactly n times.

// Solution:
// Using a set to track seen elements and returning the first one that appears twice.

function repeatedNTimes(nums: number[]): number {
    let seen: number[] = []
    for (let i = 0; i <= nums.length - 1; i++ ) {
        if (seen.includes(nums[i])) return nums[i];
        
        seen.push(nums[i]);
    }
    return -1;
};

let nums = [5,1,5,2,5,3,5,4]
console.log(repeatedNTimes(nums))

nums = [1,2,3,3]
console.log(repeatedNTimes(nums))

nums = [2,1,2,5,3,2]
console.log(repeatedNTimes(nums))