/**
 * 🟩 LeetCode 977: Squares of a Sorted Array
 *
 * 🎯 Problem:
 * Given an integer array `nums` sorted in non-decreasing order,
 * return an array of the squares of each number, also sorted in non-decreasing order.
 *
 * Example:
 * Input: [-4, -1, 0, 3, 10]
 * Output: [0, 1, 9, 16, 100]
 */

// ============================
// ✅ Best Approach: Two Pointers (Right to Left Fill)
// ============================
// 🟢 Use left & right pointers to find larger square from both ends
// 🟢 Fill result array from the end towards start
function sortedSquaresTwoPointer(nums) {
  let n = nums.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;
  let pos = n - 1;

  while (left <= right) {
    let leftSquare = nums[left] ** 2;
    let rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      result[pos--] = leftSquare;
      left++;
    } else {
      result[pos--] = rightSquare;
      right--;
    }
  }

  return result;
}
// ✅ Time: O(n) | ✅ Space: O(n)

// ============================
// ✅ Your Approach (Same Idea, Push + Reverse)
// ============================
// 🟡 Pushed largest square values first, then reversed array
function sortedSquaresPushReverse(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.push(nums[left] ** 2);
      left++;
    } else {
      result.push(nums[right] ** 2);
      right--;
    }
  }

  return result.reverse(); // Largest → smallest, so reverse at end
}
// ✅ Time: O(n) | ✅ Space: O(n)

// ============================
// 🟡 Brute Force + Sort (Not Optimal)
// ============================
// ❌ Inefficient due to sorting step
function sortedSquaresBruteForce(nums) {
  const squared = nums.map((n) => n ** 2);
  return squared.sort((a, b) => a - b);
}
// ❌ Time: O(n log n) | ✅ Space: O(n)

// ============================
// 🔍 Test Example
// ============================

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquaresTwoPointer(nums)); // [0, 1, 9, 16, 100]

// ============================
// 📌 Interview-Ready Summary
// ============================

/**
 * ✅ When to use which approach:
 *
 * 1. Two Pointers Fill from Right:
 *    - Leverages sorted property
 *    - Compare abs(nums[left]) vs abs(nums[right])
 *    - Fill result[] from end
 *    - Time: O(n), Space: O(n)
 *
 * 2. Push + Reverse (Same Concept):
 *    - Push larger square first, then reverse
 *    - Time: O(n), Space: O(n)
 *
 * 3. Brute Force + Sort:
 *    - Just square and sort — simple but inefficient
 *    - Time: O(n log n), Space: O(n)
 *
 * ✅ Interview Answer:
 * "Since the input array is sorted, the largest absolute values are at either end.
 * I use two pointers (left and right) to compare abs values, square the larger,
 * and place it at the correct index from the back of the result array.
 * This allows us to solve it in linear time."
 */

// ============================
// ✅ Complexity Comparison Table
// ============================

/**
 * | Method                  | Sorted Input Used | Time       | Space   | Use in Interview      |
 * |-------------------------|-------------------|------------|---------|------------------------|
 * | Two Pointers Fill End   | ✅ Yes            | O(n)       | O(n)    | ✅ Best                |
 * | Push + Reverse          | ✅ Yes            | O(n)       | O(n)    | ✅ Acceptable          |
 * | Brute Force + Sort      | ❌ No             | O(n log n) | O(n)    | ❌ Avoid in Interview  |
 */
