// 🟡 Note :- We can use two pointer here but only if input array is sorted,
// else we will go with hashmap based approach.
// 🟡 If interviewer give sorted array then you can use two pointer, because there is not point to shift left and right pointers if input array is not not sorted and can does not gauranteed output
// 🟡Using hashmap You store each number’s index
// You check if the complement (target - nums[i]) has already been seen

const arr = [1, 2, 3, 4, 5, 6];
target = 5;

// 🟢 Best Approach (Hashmap)
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}
// Time: O(n);
// Space: O(n);

//🟢 Two Pointers (ONLY if array is sorted) — O(n)
const TwoSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
};
// Time: O(n);
// Space: O(1);

//🟡 Binary Search (Sorted + Variation) (ONLY if array is sorted) — O(n log n)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    let complement = target - nums[i];

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === complement) return [i, mid];
      else if (nums[mid] < complement) left = mid + 1;
      else right = mid - 1;
    }
  }
}

// Time: O(n log n)
// Space: O(1)

console.log(TwoSum(arr, target));

//🟡🟢🔴 Master-Level Summary (What to Say in Interview):

// “I choose the best approach based on whether the input is sorted.
// For unsorted arrays, I use a HashMap to store complements in O(n) time.
// For sorted arrays, I prefer two pointers to keep space O(1).
// Binary search is another option, but it’s less efficient than two pointers.
// This way, I balance speed vs space depending on input type.”