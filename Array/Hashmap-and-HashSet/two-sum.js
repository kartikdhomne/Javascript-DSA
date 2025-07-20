function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}
// Time complexity is O(N^2)

//Optimal solution(Hash Map)
// Use Hash Map for unsorted data and performance.
function twoSumOptimal(arr, target) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (store.hasOwnProperty(complement)) {
      return [store[complement], i];
    }

    store[arr[i]] = i;
  }
  return -1;
}
// 🔹 Time Complexity: O(n)
// 🔹 Space Complexity: O(n)
// ✅ Returns original indices
// ✅ Works on unsorted arrays
// 💡 Best choice in general

//  3. Best for Existence Check Only: Set Lookup
function twoSumExists(arr, target) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(target - num)) return true;
    seen.add(num);
  }
  return false;
}
// 🔹 Time Complexity: O(n)
// 🔹 Space Complexity: O(n)
// ❌ Does not return indices
// ✅ Best if you only need to know whether a pair exists

console.log(twoSumOptimal([2, 3, 4, 6, 7], 13));
