/**
 * 🟩 LeetCode 18: 4Sum
 *
 * 🎯 Problem:
 * Given an array `nums` of n integers and an integer `target`,
 * return all unique quadruplets [nums[a], nums[b], nums[c], nums[d]]
 * such that:
 *   - a, b, c, and d are distinct
 *   - nums[a] + nums[b] + nums[c] + nums[d] === target
 *   - No duplicate quadruplets
 *
 * Example:
 * Input: nums = [1, 0, -1, 0, -2, 2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 */

// ============================
// ✅ Optimal: Sort + 2 Nested Loops + 2 Pointers
// ============================
function fourSum(nums, target) {
  nums.sort((a, b) => a - b); // Step 1: Sort
  const res = [];
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip duplicates

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          // skip duplicates
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return res;
}
// ✅ Time: O(n^3) | ✅ Space: O(1) (excluding output)

// ============================
// ❌ Brute Force (TLE)
// ============================
function fourSumBrute(nums, target) {
  const n = nums.length;
  const set = new Set();
  const res = [];

  for (let a = 0; a < n - 3; a++) {
    for (let b = a + 1; b < n - 2; b++) {
      for (let c = b + 1; c < n - 1; c++) {
        for (let d = c + 1; d < n; d++) {
          if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
            const quad = [nums[a], nums[b], nums[c], nums[d]].sort(
              (x, y) => x - y
            );
            const key = quad.join(",");
            if (!set.has(key)) {
              set.add(key);
              res.push(quad);
            }
          }
        }
      }
    }
  }

  return res;
}
// ❌ Time: O(n^4) | Space: O(n)

// ============================
// 🔍 Test Case
// ============================
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target)); // [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]

// ============================
// 📌 Interview Notes:
// ============================

/**
 * ✅ Strategy:
 * - Fix two elements with two loops (i, j)
 * - Use two-pointer (left, right) for the rest
 * - Sort to skip duplicates and control pointer movement
 *
 * ✅ Avoid duplicates:
 * - If current i or j is same as previous → continue
 * - After pushing result → skip same left/right values
 *
 * ✅ Handles negative, positive, and 0 values
 * ✅ Same logic extends from 2Sum → 3Sum → 4Sum
 */

// ============================
// ✅ Complexity Table:
// ============================

/**
 * | Approach         | Time        | Space   | Duplicate Handling |
 * |------------------|-------------|---------|---------------------|
 * | Brute Force      | O(n^4)      | O(n)    | Sort + Set          |
 * | Optimal (2 Loops + 2 Pointers) | O(n^3) | O(1)    | Skip dupes w/ while |
 */
