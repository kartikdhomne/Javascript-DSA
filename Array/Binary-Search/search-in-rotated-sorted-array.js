// Search in Rotated Sorted Array (FAANG Level)
// Problem: Find the index of a target in a rotated sorted array.
// If not found, return -1.

// Brute-force approach: Linear Search
function searchBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i; // Found target at index i
    }
  }
  return -1; // Not found
}

// Example usage:
console.log(searchBruteForce([5, 1, 3], 5)); // Output: 0
console.log(searchBruteForce([3, 4, 5, 6, 1, 2], 1)); // Output: 4
console.log(searchBruteForce([3, 5, 6, 0, 1, 2], 4)); // Output: -1



// Optimal Solution with Binary Search
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Test cases
console.log(search([5, 1, 3], 5)); // Output: 0
console.log(search([3, 4, 5, 6, 1, 2], 1)); // Output: 4
console.log(search([3, 5, 6, 0, 1, 2], 4)); // Output: -1

/*
📌 NOTES (FAANG Style)
--------------------------------
1. This is a variation of Binary Search for rotated arrays.
2. At least one half of the array is always sorted.
3. Check which half is sorted, and decide where the target lies.
4. Discard the other half and repeat.

⏳ Time Complexity:
- O(log n) → because we're halving the search space each iteration.

💾 Space Complexity:
- O(1) → no extra memory used.

🔥 FAANG Tips:
- Common in Google, Amazon, and Facebook interviews.
- Watch out for duplicates; logic changes slightly if duplicates exist.
- Draw the array index vs value on paper to visualize rotations.
- If target equals nums[mid], return immediately.
- Always test edge cases: empty array, array without target, array with 1 element.

Example Edge Cases:
- search([], 1) → -1
- search([1], 0) → -1
- search([1], 1) → 0
*/
