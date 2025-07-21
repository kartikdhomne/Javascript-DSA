/**
 * LeetCode 11: Container With Most Water
 * Problem:
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
 *
 * Area = min(height[i], height[j]) * (j - i)
 */

// -------------------------------
// 🟥 1. Brute Force Approach
// -------------------------------

function maxAreaBruteForce(heights) {
  let maximumArea = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const width = j - i;
      const height = Math.min(heights[i], heights[j]);
      const area = width * height;
      maximumArea = Math.max(maximumArea, area);
    }
  }

  return maximumArea;
}

// -------------------------------
// 🟢 2. Optimized Two-Pointer Approach
// -------------------------------

function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;
    maxArea = Math.max(maxArea, area);

    // Move the shorter bar inward
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// -------------------------------
// 🔍 Example Walkthrough
// -------------------------------

const heights = [1, 7, 2, 5, 4, 7, 3, 6];
console.log("Brute Force Result:", maxAreaBruteForce(heights)); // 36
console.log("Two Pointer Result:", maxArea(heights)); // 36

// -------------------------------
// 📌 Interview-Ready Summary
// -------------------------------

/**
 * ✅ When to use which approach:
 *
 * Brute Force:
 * - Time: O(n^2)
 * - Space: O(1)
 * - Only use for learning or if interviewer explicitly asks
 * - Not efficient for large inputs
 *
 * Two-Pointer:
 * - Time: O(n)
 * - Space: O(1)
 * - Best for interviews
 * - No need to sort the input
 * - Move the pointer with smaller height inward
 *
 * ✅ Interview Answer:
 * "We use the two-pointer approach to maximize area efficiently.
 *  At each step, we calculate area between the left and right pointer.
 *  Since the area is constrained by the shorter height, we move the shorter line inward to potentially find a taller one.
 *  This gives us an optimal O(n) time solution without sorting or extra space."
 */

// -------------------------------
// ✅ Complexity Table
// -------------------------------

/**
 * | Method        | Time Complexity | Space Complexity | Interview Use |
 * |---------------|------------------|------------------|----------------|
 * | Brute Force   | O(n^2)           | O(1)             | ❌ Avoid        |
 * | Two Pointers  | O(n)             | O(1)             | ✅ Recommended  |
 */
