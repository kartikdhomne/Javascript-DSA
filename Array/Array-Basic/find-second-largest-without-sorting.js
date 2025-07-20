// Find the second largest and smallest element in an array

//example :- const arr =[1,2,3,4,5] smallest-2/ largest-4

const arr = [3, 6, 2, 1, 5, 4];
function findSmallestLargest(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let secondMin = 
  return sortedArr;
}

console.log(findSmallestLargest(arr));
