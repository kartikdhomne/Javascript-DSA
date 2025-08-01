/**
 * 🟩 LeetCode 283: Move Zeroes
 *
 * 🎯 Problem:
 * Given an integer array nums, move all 0's to the end while
 * maintaining the relative order of non-zero elements.
 * Do it in-place with minimal operations.
 *
 * Example:
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */

// ==============================
// ❌ Brute Force (Not In-place)
// ==============================
var moveZeroesBrute = function (nums) {
    const nonZeros = nums.filter(n => n !== 0);
    const zeros = new Array(nums.length - nonZeros.length).fill(0);
    return [...nonZeros, ...zeros];
};
// ❌ Violates in-place requirement
// Time: O(n), Space: O(n)

// ==============================
// ✅ Optimal 1: Two Pointer Swap
// ==============================
var moveZeroes = function (nums) {
    let lastNonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]];
            lastNonZeroIndex++;
        }
    }

    return nums;
};
// ✅ In-place
// ✅ Stable order
// ✅ Time: O(n), Space: O(1)

// ==============================
// ✅ Optimal 2: Write & Fill Zeros
// ==============================
var moveZeroesWriteFill = function (nums) {
    let write = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) nums[write++] = nums[i];
    }

    while (write < nums.length) {
        nums[write++] = 0;
    }

    return nums;
};
// ✅ Also in-place
// ✅ Fewer swaps
// ✅ Time: O(n), Space: O(1)

// ==============================
// 🔍 Dry Run: [0, 1, 0, 3, 12]
// ==============================
// Step 1 (Swap non-zeros forward): [1, 3, 12, 3, 12]
// Step 2 (Write 0s):               [1, 3, 12, 0, 0]

// ==============================
// 🔁 Test Cases
// ==============================
console.log(moveZeroes([0, 1, 0, 3, 12]));   // [1,3,12,0,0]
console.log(moveZeroes([0, 0, 1]));        // [1,0,0]
console.log(moveZeroes([1, 2, 3]));        // [1,2,3]

// ==============================
// 📌 Interview Notes
// ==============================

/**
 * ✅ Goal:
 *   - Move all 0s to the end while keeping order of non-zeros
 *
 * ✅ Constraints:
 *   - Do it in-place (O(1) space)
 *
 * ✅ Strategy:
 *   - Use a pointer to track where the next non-zero should go
 *   - Loop through array and shift non-zeros forward
 *   - After that, fill rest with 0s
 *
 * ✅ Data Structures:
 *   - Just two pointers (indexes) — no extra space needed
 *
 * ✅ This is a common FAANG in-place array pattern
 *   “I use a two-pointer approach. One pointer finds non-zeros,
 *    the other writes them forward. This maintains order and
 *    moves all 0s to the end in O(n) time and O(1) space.”
 */

// ==============================
// 📊 Time & Space Complexity
// ==============================

/**
 * | Approach          | Time     | Space  | Notes                      |
 * |-------------------|----------|--------|-----------------------------|
 * | Brute Force       | O(n)     | O(n)   | Not in-place ❌             |
 * | Two Pointer Swap  | O(n)     | O(1)   | ✅ Fast + Stable            |
 * | Write + Fill Zeros| O(n)     | O(1)   | ✅ Fewer swaps, cleaner     |
 */

// | Criteria            | Swap-Based           | Write-Fill Version     |
// | ------------------- | --------------------- | ----------------------- |
// | Time Complexity     | O(n)                  | O(n)                   |
// | Space Complexity    | O(1)                  | O(1)                   |
// | Swaps               | ✅ Moderate           | ✅ Minimal              |
// | Simplicity          | ✅ Good               | ✅ Very clean           |
// | Interview Preferred | ✅✅ Yes              | ✅✅ Yes                |
