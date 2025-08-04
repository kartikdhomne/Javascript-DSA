// Why do we sort the array first in the 3Sum problem?
// We sort the array to efficiently apply the two-pointer technique and to easily skip duplicate values.

// Sorting lets us move pointers based on whether the sum is too small or too large, and it ensures that duplicate triplets appear next to each other, so we can skip them with a simple comparison.

// This reduces the time complexity from O(n³) to O(n²) and ensures that the result set contains only unique triplets.


/**
 * 🟩 LeetCode 15: 3Sum
 *
 * 🎯 Problem:
 * Given an integer array `nums`, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i ≠ j ≠ k and nums[i] + nums[j] + nums[k] === 0.
 *
 * ✅ The solution set must not contain duplicate triplets.
 *
 * Example:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 */

// ============================
// ✅ Optimal Approach: Sort + Two Pointers
// ============================

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Step 1: Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates after pushing
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;

      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
// ✅ Time: O(n^2) | ✅ Space: O(1) (excluding output)

// ============================
// ❌ Brute Force Approach (TLE for big inputs)
// ============================

function threeSumBrute(nums) {
  const n = nums.length;
  const set = new Set();
  const res = [];

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          const key = triplet.join(",");
          if (!set.has(key)) {
            res.push(triplet);
            set.add(key);
          }
        }
      }
    }
  }

  return res;
}
// ❌ Time: O(n^3) | Space: O(n) for storing duplicates

// ============================
// 🔍 Test Case
// ============================
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // [[-1,-1,2],[-1,0,1]]

// ============================
// 📌 Interview Notes:
// ============================

/**
 * ✅ Core Logic:
 * - Sort the array to use two-pointer technique efficiently.
 * - Loop `i` from 0 to n-2, and for each i:
 *    - Use two pointers: left = i+1, right = n-1
 *    - If sum = 0, add to result and skip duplicates
 *
 * ✅ Why sort?
 * - Makes it easy to skip duplicates
 * - Enables two-pointer pattern (like 2Sum)
 *
 * ✅ Common edge case:
 * - More than 2 same numbers: e.g., [0,0,0,0] → should return [[0,0,0]]
 * - Handle duplicates carefully using while loops
 */

// ============================
// ✅ Complexity Table:
// ============================

/**
 * | Approach         | Time        | Space   | Duplicate Handling |
 * |------------------|-------------|---------|---------------------|
 * | Brute Force      | O(n^3)      | O(n)    | Sort triplet & Set  |
 * | Optimal (2-Pointer) | O(n^2)   | O(1)    | Skip dupes w/ while |
 */

