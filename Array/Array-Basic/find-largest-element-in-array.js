//🔴 Find the largest element in an array
// Example const arr = [1,2,3,4]    output = 4
const arr = [1, 2, 3, 4];
// 🟢 Approach first using sort
function largest(arr) {
  let newVal = arr.sort((a, b) => a - b);
  return newVal[newVal.length - 1];
}
console.log(largest(arr));
// ❌ Time Complexity: O(N log N) – Sorting is costly
// ❌ Space Complexity: O(1) (if sorting is in-place) or O(N)
// (if sorting creates a new array)

//🔹Why is it worse?
// Sorting takes extra time when we only need the max value.
// Modifies the original array, which may not be allowed in some cases.

// 🟢 Approach second using max as first index
function largest(arr) {
  let max = arr[0]; //assuming first element is max
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largest(arr)); // 4
// Time Complexity: O(N) (Linear) – Traverses the array once
// Space Complexity: O(1) – No extra space used

//🔹Why is it better?
// It does not modify the original array.
// Works efficiently for large datasets.
// It is the most commonly expected approach in interviews.

// B] Using Optimal Solution method
const largestEle = function (arr) {
  if (arr.length === 0) {
    return -1;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(largestEle([0, 2, 3, 65, 257, 1343]));
