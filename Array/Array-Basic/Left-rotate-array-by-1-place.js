/**
 * 🟩 Left Rotate Array by One Place
 *
 * 🔶 Problem:
 * Rotate the array to the **left by one position**.
 * That is, shift every element left by 1, and move the first element to the end.
 *
 * 🔸 Input:  [1, 2, 3, 4, 5, 6]
 * 🔸 Output: [2, 3, 4, 5, 6, 1]
 */

// ======================================
// ❌ 1. Brute Force — O(n)
// ======================================
const leftRotateBrute = (arr) => {
  if (arr.length === 0) return arr;

  let temp = arr[0]; // store first element

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // shift elements left
  }

  arr[arr.length - 1] = temp; // place first element at the end
  return arr;
};

// ======================================
// ✅ 2. Using shift() + push() — O(n)
// ======================================
const leftRotateShiftPush = (arr) => {
  if (arr.length === 0) return arr;
  arr.push(arr.shift()); // remove first and append it to the end
  return arr;
};

// ======================================
// 🧪 Test Cases
// ======================================
console.log(leftRotateBrute([1, 2, 3, 4, 5, 6]));        // [2, 3, 4, 5, 6, 1]
console.log(leftRotateShiftPush([10, 20, 30, 40]));      // [20, 30, 40, 10]
console.log(leftRotateBrute([]));                        // []
console.log(leftRotateShiftPush([99]));                  // [99]

/**
 * 🧠 Dry Run:
 * Input: [1, 2, 3, 4, 5, 6]
 * Step 1: Save first element → temp = 1
 * Step 2: Shift all elements left
 *         i=0 → arr[0] = arr[1] → 2
 *         i=1 → arr[1] = arr[2] → 3
 *         ...
 * Step 3: arr[n-1] = temp → arr[5] = 1
 * Final Output: [2, 3, 4, 5, 6, 1]
 */

// ======================================
// 📌 Interview Notes
// ======================================
/**
 * ✅ Brute Force:
 * - Manual shifting
 * - Gives full control over logic
 * - Use when avoiding built-in functions

 * ✅ shift() + push():
 * - Elegant and simple
 * - But shift() is O(n) since it re-indexes array

 * ❗ In-place rotation, good for warm-up
 * ❗ Left rotate by more than 1 → use slicing or reverse technique
 */

// ======================================
// ⏱️ Time & Space Complexity
// ======================================
/**
 * | Approach           | Time   | Space | Notes                     |
 * |--------------------|--------|-------|----------------------------|
 * | Brute Force        | O(n)   | O(1)  | Manual shifting            |
 * | shift() + push()   | O(n)   | O(1)  | Clean, but shift is costly |
 */
