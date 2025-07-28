/**
 * 🟩 LeetCode 3: Longest Substring Without Repeating Characters
 *
 * 🎯 Problem:
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 *
 * Example:
 * Input: "abcabcbb"
 * Output: 3 ("abc")
 */

// ==============================
// ✅ Optimal: Sliding Window + Set
// ==============================
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLen = 0;
    const seen = new Set();

    for (let right = 0; right < s.length; right++) {
        // shrink window until no duplicate
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
// ✅ Time: O(n) | ✅ Space: O(n)

// ==============================
// ✅ Variation: Use Map (index tracking)
// ==============================
var lengthOfLongestSubstringMap = function (s) {
    let map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1; // move left past last seen duplicate
        }

        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
// ✅ Handles faster index lookup | ✅ Time: O(n) | Space: O(n)

// ==============================
// ❌ Brute Force: Check all substrings
// ==============================
var lengthOfLongestSubstringBrute = function (s) {
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let seen = new Set();

        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) break;
            seen.add(s[j]);
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }

    return maxLen;
};
// ❌ Time: O(n^2) | Space: O(n)

// ==============================
// 🔍 Test Cases
// ==============================
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")

// ==============================
// 📌 Interview Notes
// ==============================

/**
 * ✅ Goal:
 *   - Track the longest substring where no character repeats
 * ✅ Strategy:
 *   - Use sliding window [left...right]
 *   - If char is seen, shrink from left until it’s gone
 * ✅ Data structure:
 *   - Set → for constant-time lookup of characters
 *   - Map → to store index positions for faster skipping
 * ✅ This is a classic FAANG sliding window problem
 *   “I use a hash map to store the last seen index of each character.  When I find a repeating character within the window, I jump the left pointer to the right of that character’s last occurrence. This way, I skip redundant characters and always maintain a valid window with unique characters. It runs in O(n) time and O(n) space.”
 */

// ==============================
// 📊 Time & Space Complexity
// ==============================

/**
 * | Approach      | Time     | Space  | Notes                  |
 * |---------------|----------|--------|------------------------|
 * | Brute Force   | O(n^2)   | O(n)   | Nested loop            |
 * | Set + Window  | O(n)     | O(n)   | Standard method        |
 * | Map + Window  | O(n)     | O(n)   | Faster index skipping  |
 */


// | Criteria            | Set - based           | Map - based |
// | ------------------- | --------------------- | ----------------------- |
// | Time Complexity     | O(n)                  | O(n) |
// | Space Complexity    | O(n)                  | O(n) |
// | Simplicity          | ✅ Simpler            | ❌ Slightly more complex |
// | Performance(FAANG)  | ⚠️ Slightly slower    | ✅ Faster |
// | Interview Preferred | ✅ Good fr jr/mid     | ✅✅ Great for senior |
