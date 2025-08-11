/**
 * 🟩 Problem: Find Second Smallest & Second Largest Element in Array
 *
 * Given an array of numbers, find:
 * - The second smallest element
 * - The second largest element
 *
 * Example:
 * arr = [1, 2, 3, 4, 5]
 * Output: second smallest = 2, second largest = 4
 */

// -------------------------------
// 🟥 1. Sort Method
// -------------------------------

function secondSmallestLargestSort(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const secondSmallest = sorted[1];
  const secondLargest = sorted[sorted.length - 2];
  return { secondSmallest, secondLargest };
}

// -------------------------------
// 🟦 2. One-Pass Method (No Sort)
// -------------------------------

function secondSmallestLargestOnePass(arr) {
  let smallest = Infinity, secondSmallest = Infinity;
  let largest = -Infinity, secondLargest = -Infinity;

  for (let num of arr) {
    // Smallest
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }

    // Largest
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return { secondSmallest, secondLargest };
}

// -------------------------------
// 🟢 3. Set + Sort Method (Remove Duplicates)
// -------------------------------

function secondSmallestLargestSet(arr) {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
  const secondSmallest = uniqueSorted[1];
  const secondLargest = uniqueSorted[uniqueSorted.length - 2];
  return { secondSmallest, secondLargest };
}

// -------------------------------
// 🔍 Example Walkthrough
// -------------------------------

const arrExample = [3, 6, 2, 1, 5, 4];
console.log("Sort Method:", secondSmallestLargestSort(arrExample)); // { secondSmallest: 2, secondLargest: 5 }
console.log("One Pass:", secondSmallestLargestOnePass(arrExample)); // { secondSmallest: 2, secondLargest: 5 }
console.log("Set + Sort:", secondSmallestLargestSet(arrExample));   // { secondSmallest: 2, secondLargest: 5 }

// -------------------------------
// 📌 Interview-Ready Summary
// -------------------------------

/**
 * ✅ When to use which approach:
 *
 * Sort Method:
 * - Time: O(n log n)
 * - Space: O(n) (due to copy & sort)
 * - Simple and easy to write
 *
 * One-Pass Method:
 * - Time: O(n)
 * - Space: O(1)
 * - Best for interviews
 * - Efficient, avoids sorting
 *
 * Set + Sort:
 * - Time: O(n log n) (sorting after deduplication)
 * - Space: O(n)
 * - Useful if duplicates must be ignored
 *
 * ✅ Interview Answer:
 * "I would use the one-pass approach in interviews since it runs in O(n) time and O(1) space.
 *  It works by tracking the smallest and largest values while iterating once through the array,
 *  updating second smallest/largest whenever we find a new smallest/largest."
 */

// -------------------------------
// ✅ Complexity Table
// -------------------------------

/**
 * | Method         | Time Complexity | Space Complexity | Interview Use |
 * |----------------|-----------------|------------------|---------------|
 * | Sort           | O(n log n)      | O(n)             | ❌ Simple but slower |
 * | One Pass       | O(n)            | O(1)             | ✅ Recommended |
 * | Set + Sort     | O(n log n)      | O(n)             | ❌ Use if duplicates matter |
 */
