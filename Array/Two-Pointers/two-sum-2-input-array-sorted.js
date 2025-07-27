/**
 * 🟩 LeetCode 167: Two Sum II — Input Array Is Sorted
 *
 * 🎯 Problem:
 * Given a 1-indexed **sorted array** of integers,
 * return the 1-based indices of the two numbers that add up to a specific target.
 *
 * You must use exactly one solution, and cannot use the same element twice.
 */

// ✅ Best Approach (Two Pointers)
// ============================
// ✅ Most optimal for sorted arrays
// ✅ Constant space, linear time
// ✅ Takes full advantage of sorted order
function twoSumTwoPointer(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // return 1-based indices
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
// ✅ Time: O(n) | ✅ Space: O(1)

// ============================
// 🟡 Alternate Approach — Binary Search
// ============================
// 🟡 Fix one number, binary search for its complement
// 🟡 Still leverages sorted input but slightly slower
function twoSumBinarySearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let left = i + 1;
    let right = numbers.length - 1;
    let complement = target - numbers[i];

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (numbers[mid] === complement) {
        return [i + 1, mid + 1]; // 1-based indices
      } else if (numbers[mid] < complement) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return [];
}
// ✅ Time: O(n log n) | ✅ Space: O(1)

// ============================
// 🔍 Test Example
// ============================

const sortedArr = [2, 7, 11, 15];
const target = 9;

console.log("Two Pointer:", twoSumTwoPointer(sortedArr, target)); // [1, 2]
console.log("Binary Search:", twoSumBinarySearch(sortedArr, target)); // [1, 2]

// ============================
// 📌 Interview-Ready Summary
// ============================

/**
 * ✅ When to use which approach:
 *
 * 1. Two Pointer:
 *    - Best for sorted arrays
 *    - Time: O(n), Space: O(1)
 *    - Moves inward from both ends
 *    - Quick, clean, and efficient
 *
 * 2. Binary Search:
 *    - Alternate for sorted arrays
 *    - Time: O(n log n), Space: O(1)
 *    - Fix one number, search complement
 *    - Slightly slower than two-pointer
 *
 * ✅ Interview Answer:
 * "Since the input array is sorted, I’d first go for the two-pointer approach.
 * It gives us O(n) time and O(1) space by narrowing down from both ends.
 * If two-pointer wasn’t allowed, I could fix one number and binary search for its complement.
 * But two-pointers are more optimal in both time and simplicity."
 */

// ============================
// ✅ Complexity Comparison Table
// ============================

/**
 * | Method           | Input Sorted | Time      | Space    | Use in Interview       |
 * |------------------|--------------|-----------|----------|------------------------|
 * | Two Pointers     | ✅ Yes       | O(n)      | O(1)     | ✅ Best (sorted input) |
 * | Binary Search    | ✅ Yes       | O(n log n)| O(1)     | ⚠️ Optional alternate  |
 */
