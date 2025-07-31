/**
 * 🟩 LeetCode 1493: Longest Subarray of 1's After Deleting One Element
 *
 * 🎯 Problem:
 * Given a binary array nums, return the length of the longest subarray
 * consisting only of 1's **after deleting exactly one element**.
 *
 * Example:
 * Input:  nums = [1,1,0,1,1,1]
 * Output: 5  // delete the zero → [1,1,1,1,1]
 */

// ==============================
// ✅ Optimal: Sliding Window (Most Efficient)
// ==============================
var longestSubarray = function (nums) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;

        while (zeroCount > 1) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen;
};
// ✅ Time: O(n) | ✅ Space: O(1)


// ==============================
// ✅ Variation: Prefix Count of Zeros
// ==============================
var longestSubarrayPrefix = function (nums) {
    let maxLen = 0;
    let prev = -1, curr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            maxLen = Math.max(maxLen, curr);
            curr = prev + 1;
            prev = 0;
        } else {
            curr++;
        }
    }

    return Math.max(maxLen, curr) - 1;
};
// ✅ Time: O(n) | ✅ Space: O(1)


// ==============================
// ❌ Brute Force (Slow)
// ==============================
var longestSubarrayBrute = function (nums) {
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = [...nums];
        temp.splice(i, 1);

        let count = 0;
        let currMax = 0;

        for (let j = 0; j < temp.length; j++) {
            if (temp[j] === 1) {
                count++;
                currMax = Math.max(currMax, count);
            } else {
                count = 0;
            }
        }

        maxLen = Math.max(maxLen, currMax);
    }

    return maxLen;
};
// ❌ Time: O(n^2) | Space: O(n)


// ==============================
// 🔍 Test Cases
// ==============================
console.log(longestSubarray([1, 1, 0, 1, 1, 1]));  // 5
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));  // 5
console.log(longestSubarray([1, 1, 1]));  // 2
console.log(longestSubarray([0, 0, 0]));  // 0
console.log(longestSubarray([1, 0, 1, 0, 1]));  // 3


// ==============================
// 📌 Interview Notes
// ==============================

/**
 * ✅ Goal:
 *   - Find the longest subarray of 1s after deleting exactly one element
 *
 * ✅ Strategy:
 *   - Use a sliding window and track zero count
 *   - If zeros in window > 1, shrink from left
 *
 * ✅ Key Observations:
 *   - We are allowed to delete only **one** element
 *   - So, we track window with **at most one zero**
 *   - Subtracting (right - left) gives size excluding one zero
 *
 * ✅ Edge Case:
 *   - If the array has only 1s: answer is length - 1 (since one deletion is required)
 */


// ==============================
// 📊 Time & Space Complexity
// ==============================

/**
 * | Approach      | Time     | Space  | Notes                         |
 * |---------------|----------|--------|-------------------------------|
 * | Brute Force   | O(n^2)   | O(n)   | Delete each, check 1s         |
 * | Prefix Count  | O(n)     | O(1)   | Tracks prev/current counts    |
 * | Sliding Window| O(n)     | O(1)   | Most efficient, clean & fast  |
 */


// | Criteria                | Sliding Window | Prefix Count | Brute Force |
// |------------------------|----------------|--------------|-------------|
// | Time Complexity        | ✅ O(n)        | ✅ O(n)      | ❌ O(n^2)    |
// | Space Complexity       | ✅ O(1)        | ✅ O(1)      | ❌ O(n)      |
// | Handles all cases well | ✅ Yes         | ✅ Yes       | ✅ Yes       |
// | Recommended for FAANG  | ✅✅✅          | ✅✅         | ❌           |
