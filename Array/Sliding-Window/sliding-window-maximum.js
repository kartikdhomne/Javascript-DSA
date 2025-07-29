/**
 * 🟩 LeetCode 239: Sliding Window Maximum
 *
 * 🎯 Problem:
 * You are given an integer array `nums` and an integer `k`.
 * Return the maximum value in each sliding window of size `k`.
 *
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 */

// =======================================
// ✅ Optimal: Deque (Monotonic Queue)
// =======================================
var maxSlidingWindow = function (nums, k) {
    const result = [];
    const deque = []; // stores indexes of useful elements (in decreasing order)

    for (let i = 0; i < nums.length; i++) {
        // Remove elements from back that are smaller than current
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i); // add current index

        // Remove front if it's outside the window
        if (deque[0] <= i - k) {
            deque.shift();
        }

        // Add max value to result once first window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
// ✅ Time: O(n) | ✅ Space: O(k)


// =======================================
// ❌ Brute Force (Timeout on large input)
// =======================================
var maxSlidingWindowBrute = function (nums, k) {
    const result = [];

    for (let i = 0; i <= nums.length - k; i++) {
        let max = nums[i];
        for (let j = i + 1; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        result.push(max);
    }

    return result;
};
// ❌ Time: O(n*k) | Space: O(1)


// =======================================
// 🔍 Test Cases
// =======================================
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1));                // [1]
console.log(maxSlidingWindow([1, -1], 1));            // [1, -1]
console.log(maxSlidingWindow([9, 11], 2));            // [11]
console.log(maxSlidingWindow([4, -2], 2));            // [4]


// =======================================
// 📌 Interview Notes
// =======================================
/**
 * ✅ Goal:
 *   - Return the max in each sliding window of size k
 * ✅ Strategy:
 *   - Use a Deque (Monotonic Queue) to store useful indices
 *   - Maintain a decreasing order of values in deque
 * ✅ How it works:
 *   - Before adding new index, remove all smaller elements from the back
 *   - Remove front index if it's out of window
 *   - Front of deque always has index of max element
 * ✅ Brute force is too slow (O(n*k))
 */


// =======================================
// 📊 Time & Space Complexity
// =======================================
/**
 * | Approach        | Time     | Space  | Notes                         |
 * |-----------------|----------|--------|-------------------------------|
 * | Brute Force     | O(n*k)   | O(1)   | Nested loop, too slow         |
 * | Monotonic Queue | O(n)     | O(k)   | Best for large-scale inputs   |
 */

// 🧑‍💻Interview Tips
// =======================================
/**
 * ✅ This problem tests knowledge of advanced sliding window + deque.
 * ✅ Key to optimal solution is to **maintain order inside deque**.
 * ✅ Explain the idea of “removing useless elements” when a new one arrives.
 * ✅ Common follow-up: how would you handle streaming data?
 */
