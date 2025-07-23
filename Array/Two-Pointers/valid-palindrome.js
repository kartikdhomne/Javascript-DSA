/**
 * 🟩 LeetCode 125: Valid Palindrome
 *
 * 🎯 Problem:
 * Given a string, return true if it is a palindrome after:
 *  - converting all uppercase letters to lowercase
 *  - removing all non-alphanumeric characters
 */

// ============================
// ✅ 1. Best: Clean String + Two Pointer (Your Version)
// ============================

var isPalindrome = function (s) {
  let clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }

  return true;
};
// ✅ Time: O(n), Space: O(n)

// ============================
// 🟡 2. Clean + Reverse Compare
// ============================
// ⚠️ Simpler but uses more space

var isPalindromeReverse = function (s) {
  let clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = clean.split("").reverse().join("");
  return clean === reversed;
};
// ✅ Time: O(n), Space: O(n)
// ❌ Less preferred in interviews due to extra space

// ============================
// 🟢 3. Two Pointers WITHOUT Extra String (In-Place Validation)
// ============================
// ⚡ Saves space by skipping invalid characters on the fly

var isPalindromeInPlace = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};

function isAlphaNum(char) {
  return /[a-z0-9]/i.test(char);
}
// ✅ Time: O(n), Space: O(1)
// 🏆 Best if space optimization is required

// ============================
// 🔍 Test
// ============================

console.log(isPalindrome("A man, a plan, a canal: Panama")); // ✅ true
console.log(isPalindrome("race a car")); // ❌ false
console.log(isPalindromeReverse("A man, a plan, a canal: Panama")); // ✅ true
console.log(isPalindromeInPlace("0P")); // ❌ false

// ============================
// ✅ Summary Table
// ============================

/**
 * | Method                   | Time  | Space | Interview-Use      | Notes                         |
 * |--------------------------|-------|--------|--------------------|-------------------------------|
 * | Two Pointer (cleaned)    | O(n)  | O(n)   | ✅ Recommended      | Balanced simplicity + speed   |
 * | Reverse Compare          | O(n)  | O(n)   | ❌ Not optimal      | Easy but wasteful in space    |
 * | Two Pointer In-Place     | O(n)  | O(1)   | ✅ Optimized Best   | Avoids extra string entirely  |
 */

// /[^a-zA-Z0-9]/g;

// | Part     | Meaning                                                             |
// | -------- | ------------------------------------------------------------------- |
// | `/.../`  | This is how you write a regex in JavaScript.                        |
// | `[^...]` | “^” inside square brackets means “NOT these things.”                |
// | `a-z`    | All lowercase letters (`a` to `z`)                                  |
// | `A-Z`    | All uppercase letters (`A` to `Z`)                                  |
// | `0-9`    | All digits from 0 to 9                                              |
// | `g`      | "global" — apply this to the whole string, not just the first match |
