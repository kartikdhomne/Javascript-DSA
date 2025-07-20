// contains duplicate
// tips:- use hashset or set in js

const arr = [1, 2, 2, 3, 4, 5];
// Step 1: More Efficient
function isDuplicate(arr) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

console.log(isDuplicate(arr));

// Step 2: Efficient but not than Set

function isDuplicate(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}

// Step 3: Efficient quite
function CheckDuplicate(nums) {
  return new Set(nums).size < nums.length;
}

console.log(isDuplicate([1, 2, 3, 4, 5, 4, 3]));
