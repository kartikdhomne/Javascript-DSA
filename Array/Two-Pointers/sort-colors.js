/**
 * 🟩 LeetCode 75: Sort Colors (Dutch National Flag Problem)
 *
 * 🎯 Problem:
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red (0), white (1), and blue (2).
 *
 * Example:
 * Input: [2, 0, 2, 1, 1, 0]
 * Output: [0, 0, 1, 1, 2, 2]
 */

// ============================
// ✅ Best Approach: Dutch National Flag (Three Pointers)
// ============================
// 🟢 Maintain three regions: [0...low-1] are 0's, [low...mid-1] are 1's, [high+1...n-1] are 2's
// 🟢 Traverse with mid pointer, swap accordingly
function sortColors(nums) {
    let low = 0;         // boundary for 0's
    let mid = 0;         // current element
    let high = nums.length - 1; // boundary for 2's

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else { // nums[mid] === 2
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
}
// ✅ Time: O(n) | ✅ Space: O(1)

// ============================
// 🟡 Counting Sort Approach
// ============================
// 🔹 Count number of 0's, 1's, 2's, then overwrite array
function sortColorsCount(nums) {
    let count0 = 0, count1 = 0, count2 = 0;

    for (let num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    let i = 0;
    while (count0--) nums[i++] = 0;
    while (count1--) nums[i++] = 1;
    while (count2--) nums[i++] = 2;

    return nums;
}
// ✅ Time: O(n) | ✅ Space: O(1)

// ============================
// ❌ Brute Force Approach
// ============================
// 🔹 Just sort the array normally (no in-place optimization)
function sortColorsBrute(nums) {
    return nums.sort((a, b) => a - b);
}
// ❌ Time: O(n log n) | ✅ Space: O(1) — but not optimal for interview

// ============================
// 🔍 Test Example
// ============================
const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors([...nums]));       // [0, 0, 1, 1, 2, 2]
console.log(sortColorsCount([...nums]));  // [0, 0, 1, 1, 2, 2]
console.log(sortColorsBrute([...nums]));  // [0, 0, 1, 1, 2, 2]

// ============================
// 📌 Interview-Ready Summary
// ============================
/**
 * ✅ When to use which approach:
 *
 * 1. Dutch National Flag:
 *    - Best choice for in-place sorting without extra space
 *    - Maintains three partitions for 0's, 1's, and 2's
 *    - Time: O(n), Space: O(1)
 *
 * 2. Counting Sort:
 *    - Simpler to implement, still O(n) and O(1) space
 *    - Requires two passes
 *
 * 3. Brute Force (Built-in sort):
 *    - Works but not optimal; O(n log n)
 *
 * ✅ Interview Answer:
 * "I would use the Dutch National Flag algorithm, which partitions the array into 0's, 1's, and 2's
 * in one pass using three pointers (low, mid, high). It sorts in-place in O(n) time and O(1) space."
 */

// ============================
// ✅ Complexity Comparison Table
// ============================
/**
 * | Method                   | Time       | Space   | In-place | Use in Interview |
 * |--------------------------|------------|---------|----------|------------------|
 * | Dutch National Flag      | O(n)       | O(1)    | ✅       | ✅ Best          |
 * | Counting Sort            | O(n)       | O(1)    | ✅       | ✅ Acceptable    |
 * | Brute Force Sort         | O(n log n) | O(1)    | ✅       | ❌ Avoid         |
 */
