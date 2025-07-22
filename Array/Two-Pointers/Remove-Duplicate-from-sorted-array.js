/**
 * 🟩 LeetCode 26: Remove Duplicates from Sorted Array
 *
 * 🎯 Problem:
 * Given a sorted array `nums`, remove duplicates in-place such that each element appears only once.
 * Return the new length `k` such that the first `k` elements in `nums` are unique.
 *
 * ⚠️ DO NOT allocate extra space for another array. Modify in-place.
 */

// ============================
// ✅ Best Approach: Two Pointers (Slow & Fast)
// ============================
// 🟢 Efficiently modifies array in-place
// 🟢 Uses `slow` to track position of unique elements
// 🟢 `fast` moves ahead to find next unique
function removeDuplicatesTwoPointer(nums) {
  if (nums.length === 0) return 0;

  let j = 1;

  for (i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}
// ✅ Time: O(n) | ✅ Space: O(1)

// ============================
// 🟡 Brute Force using Set + Copy Back (Not allowed in interview)
// ============================
// ⚠️ Not in-place — violates constraints
// ⚠️ Can be mentioned for intuition, but not acceptable in real interview
function removeDuplicatesUsingSet(nums) {
  const unique = Array.from(new Set(nums)); // removes duplicates
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i]; // copy back to nums
  }
  return unique.length;
}
// ❌ Time: O(n) | ❌ Space: O(n) (not accepted in interview)

// ============================
// 🟡 In-Place Overwrite Using Manual Index (Variation of Two Pointer)
// ============================
// 🟢 Same idea, but rephrased: always write unique to `insertPos`
function removeDuplicatesManual(nums) {
  let insertPos = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  return insertPos;
}
// ✅ Time: O(n) | ✅ Space: O(1)

// ============================
// 🔍 Test Example
// ============================

const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const len = removeDuplicatesTwoPointer(nums);

console.log("New Length:", len); // 5
console.log("Updated Array:", nums.slice(0, len)); // [1, 2, 3, 4, 5]

// ============================
// 📌 Interview-Ready Summary
// ============================

/**
 * ✅ When to use which approach:
 *
 * 1. Two Pointer:
 *    - Ideal for in-place problems
 *    - Maintain a `slow` pointer to insert unique elements
 *    - Time: O(n), Space: O(1)
 *
 * 2. Set + Copy (NOT Allowed in Interview):
 *    - Can be used for intuition only
 *    - Easy but violates constraints
 *    - Time: O(n), Space: O(n)
 *
 * 3. Manual Indexing:
 *    - Slight variation of two pointers
 *    - Write unique elements to front via `insertPos`
 *    - Time: O(n), Space: O(1)
 *
 * ✅ Interview Answer:
 * "Since the array is sorted, duplicates will be adjacent.
 * I use two pointers: one to track unique values (`slow`) and another to scan the array (`fast`).
 * When I find a new value, I move it forward. This modifies the array in-place with O(1) space and O(n) time.
 * A variation would be using `insertPos` to copy unique elements forward."
 */

// ============================
// ✅ Complexity Comparison Table
// ============================

/**
 * | Method                | Input Sorted | Time  | Space  | Use in Interview      |
 * |-----------------------|--------------|-------|--------|------------------------|
 * | Two Pointer           | ✅ Yes       | O(n)  | O(1)   | ✅ Best (in-place)     |
 * | Set + Copy Back       | ✅ Yes       | O(n)  | O(n)   | ❌ Not allowed         |
 * | Manual Index Overwrite| ✅ Yes       | O(n)  | O(1)   | ✅ Acceptable variation|
 */
