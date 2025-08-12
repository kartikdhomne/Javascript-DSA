/**
 * 🟩 Problem: Maximum Subarray Sum (Kadane's Algorithm)
 *
 * 🎯 Given an integer array `nums`, find the contiguous subarray 
 *    (containing at least one number) which has the largest sum 
 *    and return its sum.
 *
 * Example:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6   // Subarray: [4,-1,2,1]
 */

// ==========================================
// ✅ Optimal: Kadane's Algorithm
// ==========================================
function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Either start new subarray at nums[i] or extend previous
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
// ✅ Time: O(n) | ✅ Space: O(1)


// ==========================================
// ❌ Brute Force: Check all subarrays
// ==========================================
function maxSubArrayBrute(nums) {
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}
// ❌ Time: O(n^2) | Space: O(1)


// ==========================================
// 🔍 Test Cases
// ==========================================
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-1, -2, -3, -4])); // -1
console.log(maxSubArray([1, -3, 2, -7, -2, 3, -1, 4])); // 4


// ==========================================
// 📌 Interview Notes
// ==========================================
/**
 * ✅ Goal:
 *   - Find the max sum of any contiguous subarray
 *
 * ✅ Strategy:
 *   - Keep a running sum (currentSum)
 *   - Reset to nums[i] if currentSum drops below nums[i]
 *   - Track global max (maxSum)
 *
 * ✅ Why optimal?
 *   - Only one pass through the array
 *   - No need for extra space
 */


// ==========================================
// 📊 Time & Space Complexity
// ==========================================
/**
 * | Approach        | Time     | Space  | Notes                |
 * |-----------------|----------|--------|----------------------|
 * | Brute Force     | O(n^2)   | O(1)   | Try all subarrays    |
 * | Kadane's Algo   | O(n)     | O(1)   | Best for this problem|
 */


// ==========================================
// 🧑‍💻 FAANG Interview Tips
// ==========================================
/**
 * ✅ Common follow-up:
 *    - Return the actual subarray, not just the sum
 *    - Handle all-negative arrays carefully
 *
 * ✅ Kadane's Algorithm is a classic DP pattern 
 *    for maximum subarray problems.
 */
