// Find the second smallest and second largest element in an array
// Example: arr = [1, 2, 3, 4, 5] => second smallest = 2, second largest = 4

const arr = [3, 6, 2, 1, 5, 4];

function findSmallestLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  // Sort array in ascending order
  let sortedArr = arr.slice().sort((a, b) => a - b);

  // Second smallest (at index 1)
  let secondMin = sortedArr[1];

  // Second largest (at second last index)
  let secondMax = sortedArr[sortedArr.length - 2];

  return {
    secondSmallest: secondMin,
    secondLargest: secondMax
  };
}

console.log(findSmallestLargest(arr));
