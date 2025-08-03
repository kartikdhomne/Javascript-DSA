// 🔴🔴🔴 Remove duplicate from array

const arr = [2, 4, 5, 3, 7, 4, 1, 2];

// 🔴 Method 1
// function RemoveDuplicate(arr) {
//   return [...new Set(arr)];
// }

// console.log(RemoveDuplicate(arr), "res");

// new Set(arr) → O(N) (Converting array to a Set)
// [...new Set(arr)] → O(N) (Spreading the Set back to an array)
// Total Time Complexity: O(N)
// Space Complexity: O(N) (Set stores unique elements)

// 🔴 Method 2
// const filteredArr = arr.filter((value, index) => arr.indexOf(value) === index);
// console.log(filteredArr, "filteredArr");

// arr.indexOf(value) runs O(N) for each element.
// filter() runs O(N) iterations.
// Total Time Complexity: O(N²) (Worst case)
// Space Complexity: O(N) (Filtered array stores unique values)
// ❌ Not efficient for large arrays due to O(N²) complexity.

// 🔴 Method 3
function RemoveDuplicate(arr) {
  let unique = [];
  arr.forEach((ele) => {
    if (!unique.includes(ele)) {
      unique.push(ele);
    }
  });
  return unique;
}
console.log(RemoveDuplicate(arr), "res");
// forEach() runs O(N) iterations.
// includes() runs O(N) for each element in unique (in worst case).
// Total Time Complexity: O(N²)
// Space Complexity: O(N) (Stores unique values)
// ❌ Also not efficient due to O(N²) complexity.
