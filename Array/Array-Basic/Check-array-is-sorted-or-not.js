// 🔴🔴🔴 Remove duplicate from sorted array
// Example : const arr = [2,5,3,4,1,7,4,6]; "false"

// 🔴 Method 1
// const arr = [2, 5, 3, 4, 1, 7, 4, 6];
const arr = [1, 2, 3, 4, 5];
function CheckSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        return false;
      }
    }
  }
  return true;
}
console.log(CheckSorted(arr));
// Time Complexity
// Outer loop runs O(N) times.
// Inner loop runs O(N) in the worst case.
// Total Complexity: O(N²) (Quadratic Time Complexity)
// Space Complexity
// Uses only a few variables → O(1) (Constant Space Complexity)
// ❌ Very inefficient for large arrays due to nested loops.

// 🔴 Method 2

function CheckSorted(arr) {
  if (arr.length === 0) return true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(CheckSorted(arr));
// Time Complexity
// Runs a single loop, iterating through N elements.
// Total Complexity: O(N) (Linear Time Complexity)
// Space Complexity
// Uses only a few variables → O(1) (Constant Space Complexity)
// ✅ Best choice: Faster and more efficient (O(N)) compared to O(N²).
