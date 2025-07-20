const heights = [1, 7, 2, 5, 4, 7, 3, 6];

//Brute Force

function maxArea(heights) {
  let maximunArea = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let width = j - 1;
      let minHeight = Math.min(heights[i], heights[j]);

      let area = width * minHeight;

      maxAreaCount = Math.max(area, maximunArea);
    }
  }
  return maxAreaCount;
}

console.log(maxArea(heights));

//🟢🟢 Two pointers (You rely on geometry and width × height logic)
// Two pointers doesnt rely on sorted inputs

function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) { // dont use equal to because with dont want same height to find area
    let width = right - left;
    let minHeight = Math.min(heights[left], heights[right]);
    let area = minHeight * width;

    maxArea = Math.max(maxArea, area); // update max water

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(maxArea(heights));
