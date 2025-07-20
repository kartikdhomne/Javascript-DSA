const arr = [1, 0, 2, 3, 0, 4, 0, 1];

// function movesZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr[arr.length - 1].push();
//     }
//   }
// }

// Using two pointers

function movesZero(arr) {
  let left = 0

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] != 0) {
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp;
      left++;
    }
  }
}

movesZero(arr)

console.log(arr);
