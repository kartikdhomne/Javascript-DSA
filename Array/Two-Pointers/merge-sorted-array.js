/**
 * 🟩 LeetCode 88: Merge Sorted Array
 *
 * 🎯 Problem:
 * You are given two sorted integer arrays `nums1` and `nums2`, with sizes `m` and `n` respectively.
 * Merge `nums2` into `nums1` as one sorted array in-place.
 *
 * ⚠️ `nums1` has size m + n, with the last n elements initialized as 0 (placeholders).
 * ⚠️ Merge must be done IN-PLACE with O(1) extra memory.
 */

// ============================
// ✅ Best Approach: Three Pointers from End
// ============================
// 🟢 Start from the end of nums1
// 🟢 Compare nums1[i] and nums2[j] and insert largest at nums1[k]
// 🟢 Avoids overwriting and does it in-place
function mergeThreePointers(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}
// ✅ Time: O(m + n) | ✅ Space: O(1)

// ============================
// 🟡 Brute Force: Copy + Sort (NOT for interviews)
// ============================
// ⚠️ Uses built-in `.sort()` — not acceptable in interviews
// ⚠️ Modifies array in-place but hides logic
function mergeCopyAndSort(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
}
// ❌ Time: O((m + n) log(m + n)) | ❌ Space: O(1) | ❌ Avoid in interviews

// ============================
// 🟡 Extra Array Merge (Readable, but Not In-place)
// ============================
// ⚠️ Easy to understand but not in-place (extra space used)
function mergeUsingExtraArray(nums1, m, nums2, n) {
  const merged = [];
  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  while (i < m) merged.push(nums1[i++]);
  while (j < n) merged.push(nums2[j++]);

  for (let k = 0; k < merged.length; k++) {
    nums1[k] = merged[k];
  }
}
// ❌ Time: O(m + n) | ❌ Space: O(m + n)

// ============================
// 🔍 Test Example
// ============================

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3,
  n = 3;

mergeThreePointers(nums1, m, nums2, n);

console.log("Merged:", nums1); // [1, 2, 2, 3, 5, 6]

// ============================
// 📌 Interview-Ready Summary
// ============================

/**
 * ✅ When to use which approach:
 *
 * 1. Three Pointers (from end):
 *    - Best choice: compares from end, avoids overwriting
 *    - In-place, O(1) space, O(m + n) time
 *
 * 2. Copy + Sort:
 *    - Intuitive, but not acceptable in real interviews
 *    - Hides logic in `.sort()`, and worse time complexity
 *
 * 3. Extra Array:
 *    - Clean to read, but uses O(m + n) space
 *    - Not valid where in-place modification is required
 *
 * ✅ Interview Answer:
 * "Since both arrays are sorted and nums1 has extra space at the end,
 * I use three pointers starting from the end to avoid overwriting.
 * I compare the largest values and fill nums1 from the back,
 * which keeps it in-place with O(1) space and O(m + n) time."
 */

// ============================
// ✅ Complexity Comparison Table
// ============================

/**
 * | Method               | In-Place | Time      | Space     | Use in Interview     |
 * |----------------------|----------|-----------|-----------|-----------------------|
 * | Three Pointers       | ✅ Yes   | O(m + n)  | O(1)      | ✅ Best               |
 * | Copy + Sort          | ✅ Yes   | O((m+n)log(m+n)) | O(1) | ❌ Avoid `.sort()`   |
 * | Extra Array          | ❌ No    | O(m + n)  | O(m + n)  | ❌ Not acceptable     |
 */
