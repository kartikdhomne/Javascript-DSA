// Notes:- Always use two pointer when input array is sorted

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//🟢 Best Choice - Two Pointer
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
}
// Time: O(n);
// Space: O(1);

//🟡 Binary search ( Valid but slower than two pointers)

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let left = i + 1,
      right = numbers.length - 1;
    let complement = target - numbers[i];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (numbers[mid] === complement) return [i + 1, mid + 1];
      else if (numbers[mid] < complement) left = mid + 1;
      else right = mid - 1;
    }
  }
}
// Time: O(n log n)
// Space: O(1)

//🟡 Using Hashmap (not so good because not taking advantage of sorted array/ overkill)
function twoSum(numbers, target) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement) + 1, i + 1]; // 1-indexed
    }
    map.set(numbers[i], i);
  }
}
// Time: O(n);
// Space: O(n);

console.log(twoSum(arr, 3));
