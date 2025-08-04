/**
 * 🟩 LeetCode 209 — Minimum Size Subarray Sum
 *
 * 🔶 Problem:
 * Given an array of positive integers `nums` and an integer `target`,
 * return the *minimal length* of a contiguous subarray of which the sum ≥ `target`.
 * If no such subarray exists, return 0.
 * 
 * 🔸 Input: target = 7, nums = [2,3,1,2,4,3]
 * 🔸 Output: 2 → [4,3]
 */

// ======================================
// ❌ 1. Brute Force — O(n^2)
// ======================================

var minSubArrayLenBrute = function (target, nums) {
    let minLength = Infinity;

    for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        for (let end = start; end < nums.length; end++) {
            sum += nums[end];
            if (sum >= target) {
                minLength = Math.min(minLength, end - start + 1);
                break;
            }
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

// ======================================
// ✅ 2. Sliding Window (Two Pointers) — O(n)
// ======================================

var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // Shrink the window from the left
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

// ======================================
// ✅ 3. Prefix Sum + Binary Search — O(n log n)
// ======================================

var minSubArrayLenBinary = function (target, nums) {
    const prefix = [0];
    for (let i = 0; i < nums.length; i++) {
        prefix.push(prefix[i] + nums[i]);
    }

    let minLength = Infinity;

    for (let i = 0; i < prefix.length; i++) {
        let left = i + 1;
        let right = prefix.length - 1;
        let goal = target + prefix[i];

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (prefix[mid] >= goal) {
                minLength = Math.min(minLength, mid - i);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

// ======================================
// 🧪 Test Cases
// ======================================
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));   // 2 → [4,3]
console.log(minSubArrayLen(4, [1, 4, 4]));           // 1
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));    // 5
console.log(minSubArrayLen(100, [1, 2, 3, 4, 5]));   // 0

// ======================================
// 🧠 Sliding Window Dry Run
// ======================================
/**
 * Example: target = 7, nums = [2,3,1,2,4,3]
 * - Start expanding window with right++
 * - Once sum ≥ 7, shrink with left++ to minimize
 * - Track smallest window length
 */

// ======================================
// 📌 Interview Notes
// ======================================

/**
 * ✅ Sliding Window (Two Pointers):
 * - Expand with right pointer until sum ≥ target
 * - Shrink from the left as much as possible
 * - Track minimum window size
 *
 * ✅ Prefix + Binary:
 * - Use prefix sum to track cumulative sums
 * - Use binary search to find earliest valid window
 *
 * ❗ All numbers are POSITIVE — this allows sliding window
 * If negative numbers were allowed, we’d use HashMap + prefix sum
 */

// ======================================
// ⏱️ Time & Space Complexity
// ======================================

/**
 * | Approach             | Time       | Space | Notes                    |
 * |----------------------|------------|-------|---------------------------|
 * | Brute Force          | O(n^2)     | O(1)  | Too slow ❌               |
 * | Two Pointers (Best)  | O(n)       | O(1)  | ✅ Best choice            |
 * | Prefix + Binary      | O(n log n) | O(n)  | ✅ Alternative if needed  |
 */
