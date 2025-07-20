var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.push(nums[left] ** 2);
      left++;
    } else {
      result.push(nums[right] ** 2);
      right--;
    }
  }

  result.reverse(); // Because largest squares were pushed first
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
