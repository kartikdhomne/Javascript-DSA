/**
 * 🟩 Problem: Maximum Sum Subarray of Size K
 *
 * 🎯 Given an array of integers `nums` and an integer `k`,
 *    return the maximum sum of any contiguous subarray of size `k`.
 *
 * Example:
 * Input: nums = [2,1,5,1,3,2], k = 3
 * Output: 9   // (5 + 1 + 3)
 */

// ==========================================
// ✅ Optimal: Sliding Window (Fixed Size)
// ==========================================
function maxSubarraySumK(nums, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < nums.length; i++) {
        windowSum += nums[i]; // add current element

        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= nums[i - k + 1]; // remove leftmost element
        }
    }

    return maxSum;
}
// ✅ Time: O(n) | ✅ Space: O(1)


// ==========================================
// ❌ Brute Force: Check all windows
// ==========================================
function maxSubarraySumKBrute(nums, k) {
    let maxSum = -Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        let currentSum = 0;
        for (let j = i; j < i + k; j++) {
            currentSum += nums[j];
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// ❌ Time: O(n*k) | Space: O(1)


// ==========================================
// 🔍 Test Cases
// ==========================================
console.log(maxSubarraySumK([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSubarraySumK([1, 9, -1, -2, 7, 3, -1, 2], 4)); // 18
console.log(maxSubarraySumK([5, 4, 3, 2, 1], 2)); // 9
console.log(maxSubarraySumK([1, 2, 3, 4, 5, 6], 6)); // 21
console.log(maxSubarraySumK([5], 1)); // 5


// ==========================================
// 📌 Interview Notes
// ==========================================
/**
 * ✅ Goal:
 *   - Find the max sum of any window of fixed size k
 *
 * ✅ Strategy:
 *   - Use a sliding window of size k
 *   - Add new element from right
 *   - Remove old element from left
 *   - Track maximum seen so far
 *
 * ✅ Why optimal?
 *   - You scan each element only once = O(n)
 *   - No nested loops = fast for large arrays
 */


// ==========================================
// 📊 Time & Space Complexity
// ==========================================
/**
 * | Approach        | Time     | Space  | Notes              |
 * |-----------------|----------|--------|--------------------|
 * | Brute Force     | O(n*k)   | O(1)   | Nested loop        |
 * | Sliding Window  | O(n)     | O(1)   | Best for fixed k   |
 */


// ==========================================
// 🧑‍💻 FAANG Interview Tips
// ==========================================
/**
 * ✅ Common follow-up:
 *    - What if k is dynamic (variable-sized window)?
 *    - Can you return the subarray, not just sum?
 *
 * ✅ Sliding window is a must-know pattern
 *    for string and array-based FAANG questions.
 */
