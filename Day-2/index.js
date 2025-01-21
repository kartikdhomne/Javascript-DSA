// Check if the given array is sorted and rotated

// code :-

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) return false;
    }
  }

  return true;
}

console.log(isSorted([1, 2, 3, 4, 5, -1]));
