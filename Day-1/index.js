//Find the Largest element in an array

// A] Using sort method
function sortArr(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

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

console.log(sortArr([1, 6, 3, 78, 113, 1003]));
console.log(largestEle([0, 2, 3, 65, 257, 1343]));
