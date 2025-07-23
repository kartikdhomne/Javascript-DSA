/**
 * 🟩 LeetCode 27: Remove Element
 *
 * 🎯 Problem:
 * Given an array `nums` and a value `val`, remove all instances of `val` in-place and return the new length.
 * Elements' order can be changed, and elements beyond the returned length don't matter.
 *
 * ⚠️ Do not allocate extra space; modify in-place with O(1) extra memory.
 */

// ============================
// ✅ Best Approach: Two Pointers (Slow & Fast)
// ============================
// 🟢 `j` tracks next safe position to overwrite
// 🟢 `i` scans entire array and skips `val`
function removeElement(nums, val) {
  let j = 0; // acts as the insert position

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
}
// ✅ Time: O(n) | ✅ Space: O(1)

// ============================
// 🟡 Reverse Iteration (Avoids shifting large arrays)
// ============================
// 🟡 Used when removal order doesn’t matter (can replace current with last)
function removeElementBySwapping(nums, val) {
  let n = nums.length;

  for (let i = 0; i < n; ) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]; // overwrite with last
      n--; // shrink size
    } else {
      i++;
    }
  }

  return n;
}
// ✅ Time: O(n) | ✅ Space: O(1)
// 🔄 Mutates array and can shuffle order

// ============================
// 🟡 Brute Force (Not for Interviews)
// ============================
// ❌ Uses extra space — not accepted in interviews
function removeElementBrute(nums, val) {
  const filtered = nums.filter((x) => x !== val);
  for (let i = 0; i < filtered.length; i++) {
    nums[i] = filtered[i];
  }
  return filtered.length;
}
// ❌ Time: O(n) | ❌ Space: O(n)

/* ============================
🔍 Test Example
============================ */

const nums = [3, 2, 2, 3, 4, 2, 5];
const val = 2;

const len = removeElement(nums, val);

console.log("New Length:", len); // e.g., 4
console.log("Updated Array:", nums.slice(0, len)); // [3, 3, 4, 5] or similar (order doesn't matter)

/* ============================
📌 Interview Summary
============================ */

/**
 * ✅ When to use which approach:
 *
 * 1. Two Pointer (j-index):
 *    - Best choice when element order doesn't matter
 *    - Loop through array, skip val, move other elements to front
 *    - Time: O(n), Space: O(1)
 *
 * 2. Swap with Last:
 *    - When minimizing writes
 *    - Replaces `val` with the last element and reduces size
 *    - Time: O(n), Space: O(1)
 *
 * 3. Brute Force:
 *    - Filter + Copy (extra memory)
 *    - Easy but not allowed in interview
 *    - Time: O(n), Space: O(n)
 *
 * ✅ Interview Answer:
 * "Since we want to remove all `val` in-place, I use two pointers: one scans (`i`), the other tracks position (`j`) to write.
 * For every element not equal to `val`, we copy it forward and return the length as `j`. It's O(n) time and O(1) space.
 * If order doesn’t matter, I can swap the unwanted value with the last element and shrink the array."
 */

/* ============================
✅ Complexity Comparison Table
============================ */

/**
 * | Method              | Modifies in-place | Keeps order | Time  | Space  | Use in Interview |
 * |---------------------|-------------------|-------------|-------|--------|------------------|
 * | Two Pointer (j)     | ✅ Yes            | ✅ Yes      | O(n)  | O(1)   | ✅ Yes           |
 * | Swap with Last      | ✅ Yes            | ❌ No       | O(n)  | O(1)   | ✅ Yes           |
 * | Filter + Copy       | ❌ No             | ✅ Yes      | O(n)  | O(n)   | ❌ No            |
 */
