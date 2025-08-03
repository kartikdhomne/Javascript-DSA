/**
 * 🟨 LeetCode 1: Two Sum — All Approaches
 *
 * 🎯 Problem:
 * Given an array of integers and a target value,
 * return indices of the two numbers such that they add up to the target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 */

// 🟢 Best Approach (HashMap)
// ============================
// 🟡 Note :- We can use two pointer here but only if input array is sorted
// 🟡 Else we go with hashmap based approach.
// 🟡 Using hashmap: You store each number’s index You check if the complement (target - nums[i]) has already been seen

function twoSumHashMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}
// ✅ Time: O(n) | ✅ Space: O(n)

// ============================
// 🟡 Two Pointers (Sorted Input Only)
// ============================
// 🟡 If interviewer gives sorted array, then you can use two pointer
// 🟡 There's no point shifting left/right pointers if array is not sorted
// 🟡 Works in-place, space-efficient

function twoSumTwoPointer(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
// ✅ Time: O(n) | ✅ Space: O(1)

// ============================
// 🟡 Binary Search (Sorted Input Only)
// ============================
// 🟡 You fix one number and use binary search to find complement
// 🟡 Only if array is sorted

function twoSumBinarySearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    let complement = target - nums[i];

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === complement) return [i, mid];
      else if (nums[mid] < complement) left = mid + 1;
      else right = mid - 1;
    }
  }
}
// ✅ Time: O(n log n) | ✅ Space: O(1)

// ============================
// 🔍 Test Example
// ============================

const arr = [1, 2, 3, 4, 5, 6];
const target = 5;
console.log("Two Pointer:", twoSumTwoPointer(arr, target)); // Output: [0, 3]
console.log("HashMap:", twoSumHashMap(arr, target)); // Output: [1, 2]

// ============================
// 📌 Interview-Ready Summary
// ============================

/**
 * ✅ When to use which approach:
 *
 * 1. HashMap Approach:
 *    - Use when array is unsorted.
 *    - Fastest in terms of time.
 *    - Time: O(n), Space: O(n)
 *
 * 2. Two Pointer Approach:
 *    - Use if the array is already sorted.
 *    - More space-efficient.
 *    - Time: O(n), Space: O(1)
 *
 * 3. Binary Search Approach:
 *    - Also for sorted arrays.
 *    - Slightly slower than two pointers due to log n search.
 *    - Time: O(n log n), Space: O(1)
 *
 * ✅ Interview Answer:
 * "I choose the best approach based on whether the input is sorted.
 * For unsorted arrays, I use a HashMap to store complements in O(n) time.
 * For sorted arrays, I prefer two pointers to keep space O(1).
 * Binary search is another option, but it’s less efficient than two pointers.
 * This way, I balance speed vs space depending on input type."
 */

// "Unless the array is explicitly stated as sorted, I assume it's unsorted and use a HashMap-based solution.
// This ensures O(n) time and works for all cases.
// If the array were sorted, I could optimize further using the two-pointer pattern with O(1) space."

// ============================
// ✅ Complexity Comparison Table
// ============================

/**
 * | Method           | Input Sorted | Time     | Space    | Use in Interview |
 * |------------------|--------------|----------|----------|------------------|
 * | HashMap          | No           | O(n)     | O(n)     | ✅ Best (unsorted)|
 * | Two Pointers     | Yes          | O(n)     | O(1)     | ✅ Best (sorted)  |
 * | Binary Search    | Yes          | O(n log n)| O(1)    | ⚠️ Optional       |
 */
